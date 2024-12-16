// server/utils/session.ts
import {
	encodeBase32LowerCaseNoPadding,
	encodeHexLowerCase,
} from "@oslojs/encoding";
import { sha256 } from "@oslojs/crypto/sha2";
import { PrismaClient, type Users, type Sessions } from "@prisma/client";

const prisma = new PrismaClient();

/**
 * Generates a random session token.
 * @returns {string} A Base32 encoded session token.
 */
export function generateSessionToken(): string {
	const bytes = new Uint8Array(20);
	crypto.getRandomValues(bytes);
	const token = encodeBase32LowerCaseNoPadding(bytes);
	return token;
}

/**
 * Creates a new session for a user that expires within 7 days.
 * @param {string} token - The session token.
 * @param {number} userId - The ID of the user.
 * @returns {Promise<Sessions>} The created session.
 */
export async function createSession(
	token: string,
	userId: number
): Promise<Sessions> {
	const sessionId = encodeHexLowerCase(sha256(new TextEncoder().encode(token)));

	const session = await prisma.sessions.create({
		data: {
			session: sessionId,
			userId,
			expiresAt: new Date(Date.now() + 1000 * 60 * 60 * 24 * 14), //expires in 14 days
			createdAt: new Date(Date.now()),
		},
	});
	return session;
}

/**
 * Validates a session token.
 * @param {string} token - The session token.
 * @returns {Promise<SessionValidationResult>} The session and user if valid, otherwise null.
 */
export async function validateSessionToken(
	token: string
): Promise<SessionValidationResult> {
	if (!token) {
		return { session: null, user: null };
	}

	const result = await prisma.sessions.findUnique({
		where: {
			session: token,
		},
		include: {
			Users: true,
		},
	});

	// If the session is null, return null
	if (result === null) {
		return { session: null, user: null };
	}
	// Destructure the user from the result
	const { Users: user, ...session } = result;

	// Check if the session has expired
	if (Date.now() >= session.expiresAt.getTime()) {
		await prisma.sessions.delete({ where: { session: token } });
		return { session: null, user: null };
	}

	// Renew the session if it expires within the next 5 days
	if (Date.now() >= session.expiresAt.getTime() - 1000 * 60 * 60 * 24 * 5) {
		session.expiresAt = new Date(Date.now() + 1000 * 60 * 60 * 24 * 14);
		await prisma.sessions.update({
			where: {
				id: session.id,
			},
			data: {
				expiresAt: session.expiresAt,
			},
		});
	}
	return { session, user };
}

/**
 * Invalidates a session by deleting it.
 * @param {string} sessionId - The ID of the session to invalidate.
 * @returns {Promise<void>}
 */
export async function invalidateSession(sessionId: string): Promise<void> {
	await prisma.sessions.delete({ where: { session: sessionId } });
}

export type SessionValidationResult =
	| { session: Sessions; user: Users }
	| { session: null; user: null };
