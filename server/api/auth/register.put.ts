import { PrismaClient } from "@prisma/client";
import { SESSION_MISSING, USERNAME_EXISTS } from "~/constants/auth";
import { HTTP_STATUS } from "~/constants/http";
import { validateSessionToken } from "~/utils/auth/session";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const body = await readBody(event);

	// Check existing username
	const isExistingUsername = await prisma.users.findFirst({
		where: { username: body.username },
	});

	if (isExistingUsername) {
		return {
			status: HTTP_STATUS.BAD_REQUEST,
			body: { error: USERNAME_EXISTS },
		};
	}

	// Retrieve and validate the session token
	const sessionToken = getCookie(event, "session");
	if (!sessionToken) {
		return {
			status: HTTP_STATUS.UNAUTHORIZED,
			body: { error: SESSION_MISSING },
		};
	}

	const { user, session } = await validateSessionToken(sessionToken);
	if (!user || !session) {
		return {
			status: HTTP_STATUS.UNAUTHORIZED,
			body: { error: SESSION_MISSING },
		};
	}

	// Set the session as a cookie
	setCookie(event, "session", session.session, {
		httpOnly: true,
		secure: process.env.NODE_ENV === "production",
		maxAge: 60 * 60 * 24 * 14, // 14 days
		path: "/",
	});

	// Update the user
	const updatedUser = await prisma.users.update({
		where: { email: user.email },
		data: {
			username: body.username,
			firstname: body.firstname,
			lastname: body.lastname,
            middlename: body.middlename,
		},
	});

	return {
		status: HTTP_STATUS.OK,
		body: { user: updatedUser },
	};
});
