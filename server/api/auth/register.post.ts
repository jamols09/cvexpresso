import { PrismaClient } from "@prisma/client";
import { EMAIL_EXISTS, PASSWORD_LENGTH } from "~/constants/auth";
import { HTTP_STATUS } from "~/constants/http";
import { emailVerificationTemplate } from "~/utils/email/templates/email-vefication";
import { Argon2id } from "oslo/password";
import { generateSessionToken, createSession } from "~/utils/auth/session";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	// Validate password length
	if (
		typeof body.password !== "string" ||
		body.password.length < 8 ||
		body.password.length > 72
	) {
		return {
			status: HTTP_STATUS.BAD_REQUEST,
			body: { error: PASSWORD_LENGTH },
		};
	}

	// Check if email already exists
	const isExistingEmail = await prisma.users.findFirst({
		where: { email: body.email },
	});
	if (isExistingEmail) {
		return {
			status: HTTP_STATUS.BAD_REQUEST,
			body: { error: EMAIL_EXISTS },
		};
	}

	// Create a new user
	const user = await prisma.users.create({
		data: {
			email: body.email,
			password: await new Argon2id().hash(body.password),
		},
	});

	// Create a new session
	const token = generateSessionToken();
	const session = await createSession(token, user.id);

	// Set the session as a cookie
	setCookie(event, "session", session.session, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		maxAge: 60 * 60 * 24 * 14, // 14 days
		path: "/",
	});

	return {
		status: HTTP_STATUS.OK,
		body: { user },
	};
});
