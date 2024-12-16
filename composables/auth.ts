import type { Form, ApiResponse } from "~/types/auth";
import { ref } from "vue";
import { validateSessionToken } from "~/utils/auth/session";

export function useAuth() {
	const user = ref<Form | null>(null);
	const sessionToken = useCookie("session");
	const sessionHeader = useRequestHeaders(["session"]);

	const isLoggedIn = () => {
		return sessionToken.value !== null;
	};

	/**
	 * Fetches the current authenticated user's information.
	 *
	 * @returns {Promise<void>} The response from the user API.
	 */
	const getCurrentUser = async (): Promise<void> => {
		try {
			const data = await $fetch("/api/auth/user", {
				method: "GET",
				headers: sessionHeader,
			});

			if (data.body && "user" in data.body) {
				user.value = data.body.user;
			}
		} catch (err) {
			console.log(err);
		}
	};

	/**
	 * Registers a new user.
	 *
	 * @param {Form} form - The registration form data.
	 * @returns {Promise<any>} The response from the registration API.
	 */
	const register = async (form: Form): Promise<any> => {
		try {
			// We use $fetch here to prevent an API call on every keystroke
			const data = await $fetch("/api/auth/register", {
				method: "POST",
				body: form,
			});

			if (data.body && "user" in data.body) {
				user.value = data.body.user;
			} else {
				user.value = null;
			}

			return data;
		} catch (err) {
			console.log(err);
		}
	};

	/**
	 * Updates user information.
	 *
	 * @param {Form} form - The update form data.
	 * @returns {Promise<any>} The response from the update API.
	 */
	const update = async (form: Form): Promise<any> => {
		try {
			// We use $fetch here to prevent an API call on every keystroke
			const data = await $fetch("/api/auth/register", {
				method: "PUT",
				body: form,
			});

			if (data.body && "user" in data.body) {
				user.value = data.body.user;
			} else {
				user.value = null;
			}

			return data;
		} catch (err) {
			console.log(err);
		}
	};

	return {
		user,
		getCurrentUser,
		isLoggedIn,
		register,
		update,
	};
}
