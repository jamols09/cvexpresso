export function useTemplate() {
	/**
	 * Creates a new template user.
	 *
	 * @param {any} form - The form data for the new template user.
	 * @returns {Promise<void>} A promise that resolves when the template user is created.
	 */
	const createTemplateUser = async (form: any): Promise<void> => {
		try {
			await $fetch("/api/template/user", {
				method: "POST",
				body: JSON.stringify({
					name: form.name,
					email: form.email,
				}),
			});
		} catch (err) {
			console.log(err);
		}
	};

	return {
		createTemplateUser,
	};
}
