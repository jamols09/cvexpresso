import { PrismaClient } from "@prisma/client";
import { USER_NOT_FOUND } from "~/constants/auth";
import { HTTP_STATUS } from "~/constants/http";
import { validateSessionToken } from "~/utils/auth/session";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const cookies = parseCookies(event);
	const { user } = await validateSessionToken(cookies.session);

	if (!user) {
		throw createError({
			status: HTTP_STATUS.NOT_FOUND,
			statusMessage: USER_NOT_FOUND,
		});
	}

	// Get all templates for the user
	const templates = await prisma.templates_Users.findMany({
		where: { userId: user.id },
	});

	return {
		templates: templates.map((template) => ({
			id: template.id,
			templateId: template.templateId,
			name: template.name,
		})),
	};
});
