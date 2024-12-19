import { Prisma, PrismaClient } from "@prisma/client";
import { NAME_REQUIRED, USER_NOT_FOUND } from "~/constants/auth";
import { HTTP_STATUS } from "~/constants/http";
import { validateSessionToken } from "~/utils/auth/session";
import { capitalizeFirstLetter } from "~/utils/helper";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
	const { name } = body;
	const cookies = parseCookies(event); // get cookie of the user
	const { user } = await validateSessionToken(cookies.session); // decode the cookie of client to identify the user

	if (!body.name) {
		throw createError({
			status: HTTP_STATUS.BAD_REQUEST,
			statusMessage: NAME_REQUIRED,
		});
	}

	// If the user is not found, return 404
	if (!user) {
		throw createError({
			status: HTTP_STATUS.NOT_FOUND,
			statusMessage: USER_NOT_FOUND,
		});
	}

	// Create a new template from user
	const templateUsers = await prisma.templates_Users.create({
		data: {
			userId: user.id,
			templateId: null,
			content: Prisma.JsonNull,
			createdAt: new Date(),
			name: capitalizeFirstLetter(name),
		},
	});

	return {
		message: `Template ${templateUsers.name} has been created`,
	};
});
