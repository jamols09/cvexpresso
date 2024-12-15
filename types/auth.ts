export interface Form {
	email: string;
	password: string;
	confirm_password?: string;
	firstname?: string ;
	middlename?: string ;
	lastname?: string ;
	username?: string ;
}

export interface Input {
	name?: string | null;
	class?: string | null;
}
