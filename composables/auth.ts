import type { Form } from "~/types/auth";
import { ref } from "vue";

export function useAuth() {
	const user = ref<Form | null>(null);
	const sessionToken = useCookie("session");

	// Check if the user is logged in
	const isLoggedIn = () => {
		return sessionToken.value !== null;
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
		isLoggedIn,
		register,
		update,
	};
}
