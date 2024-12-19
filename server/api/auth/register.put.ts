import { PrismaClient } from "@prisma/client";
import { SESSION_MISSING, USERNAME_EXISTS } from "~/constants/auth";
import { HTTP_STATUS } from "~/constants/http";
import { validateSessionToken } from "~/utils/auth/session";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { username, firstname, lastname, middlename } = body;

	// Check existing username
	const isExistingUsername = await prisma.users.findFirst({
		where: { username },
	});

	if (isExistingUsername) {
		throw createError({
			status: HTTP_STATUS.BAD_REQUEST,
			statusMessage: USERNAME_EXISTS,
		});
	}

	// Retrieve and validate the session token
	const sessionToken = getCookie(event, "session");

	if (!sessionToken) {
		throw createError({
			status: HTTP_STATUS.UNAUTHORIZED,
			statusMessage: SESSION_MISSING,
		});
	}
    
    // validate the session token
	const { user, session } = await validateSessionToken(sessionToken);

	if (!user || !session) {
		throw createError({
			status: HTTP_STATUS.UNAUTHORIZED,
			statusMessage: SESSION_MISSING,
		});
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
			username,
			firstname,
			lastname,
			middlename,
		},
	});

	return {
		status: HTTP_STATUS.OK,
		body: { user: updatedUser },
	};
});
