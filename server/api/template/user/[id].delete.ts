import { PrismaClient } from "@prisma/client";
import { USER_NOT_FOUND } from "~/constants/auth";
import { HTTP_STATUS } from "~/constants/http";
import { validateSessionToken } from "~/utils/auth/session";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const idParam = getRouterParam(event, "id");

	// Sanitize and validate the id parameter
	const id = Number(idParam);
	if (isNaN(id)) {
		throw createError({
			status: HTTP_STATUS.BAD_REQUEST,
			statusMessage: "Invalid id provided",
		});
	}

	const cookies = parseCookies(event);
	const { user } = await validateSessionToken(cookies.session);

	if (!user) {
		throw createError({
			status: HTTP_STATUS.NOT_FOUND,
			statusMessage: USER_NOT_FOUND,
		});
	}

	// Get all templates for the user
	await prisma.templates_Users.delete({
		where: { id },
	});

	return {
		message: `Template has been deleted`,
	};
});
