import { Prisma, PrismaClient } from "@prisma/client";
import { NAME_EMAIL_REQUIRED, USER_NOT_FOUND } from "~/constants/auth";
import { HTTP_STATUS } from "~/constants/http";

const prisma = new PrismaClient();

export default defineEventHandler(async (event) => {
	const body = await readBody(event);
    console.log("BODY", body);
    console.log("NAME", body.name);

	if(!body.name || !body.email) {
		return {
			status: HTTP_STATUS.BAD_REQUEST,
			body: {
				error: NAME_EMAIL_REQUIRED,
			},
		};
	}

	// Find the user by email
	const user = await prisma.users.findUnique({
		where: {
			email: body.email,
		},
	});

	// If the user is not found, return 404
	if (!user) {
		return {
			status: HTTP_STATUS.NOT_FOUND,
			body: {
				error: USER_NOT_FOUND,
			},
		};
	}

	// Create a new template from user
	const templateUsers = await prisma.templates_Users.create({
		data: {
			userId: user.id,
			templateId: null,
			content: Prisma.JsonNull,
			createdAt: new Date(),
			name: body.name,
		},
	});

	return {
		status: HTTP_STATUS.OK,
		body: { user: templateUsers },
	};
});
