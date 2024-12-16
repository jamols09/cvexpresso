import { PrismaClient } from "@prisma/client";
import { USER_NOT_FOUND } from "~/constants/auth";
import { HTTP_STATUS } from "~/constants/http";
import { validateSessionToken } from "~/utils/auth/session";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const cookies = parseCookies(event);
	const { user } = await validateSessionToken(cookies.session);

	if (!user) {
		return {
			status: HTTP_STATUS.NOT_FOUND,
			body: { error: USER_NOT_FOUND },
		};
	}

	const {
		password,
		id,
		createdAt,
		updatedAt,
		isVerified,
		...userWithoutSensitiveInfo
	} = user;

	return {
		status: HTTP_STATUS.OK,
		body: { user: userWithoutSensitiveInfo },
	};
});
