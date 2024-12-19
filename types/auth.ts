export interface Form {
	email: string;
	password: string;
	confirm_password?: string;
	firstname?: string;
	middlename?: string;
	lastname?: string;
	username?: string;
}

export interface Input {
	name?: string | null;
	class?: string | null;
}

// API CALLS
export interface User {
	email: string;
	firstname: string | null;
	middlename: string | null;
	lastname: string | null;
	username: string | null;
}

export interface ErrorResponse {
	error: string;
}

export interface UserResponse {
	user: User;
}

export type ApiResponse = ErrorResponse | UserResponse;
