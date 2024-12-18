export function useTemplate() {
    // We initialize this variable since we retrieve the data during server-side rendering
	const requestFetch = useRequestFetch();

	/**
	 * Creates a new template user.
	 *
	 * @param {any} form - The form data for the new template user.
	 * @returns {Promise<void>} A promise that resolves when the template user is created.
	 */
	const createUserTemplate = async (form: any): Promise<void> => {
		try {
			await $fetch("/api/template/user", {
				method: "POST",
				body: JSON.stringify({
					name: form.name,
				}),
			});
		} catch (err) {
			console.log(err);
		}
	};

	/**
	 * Fetches the user's templates.
	 *
	 * @returns {Promise<any>} A promise that resolves with the user's templates.
	 */
	const getUserTemplate = async (): Promise<any> => {
		try {
			const { data } = await useAsyncData(() =>
				requestFetch("/api/template/user", { method: "GET" })
			);

			return data.value?.body?.templates;
		} catch (err) {
			console.log(err);
		}
	};

	/**
	 * Deletes a user's template.
	 *
	 * @param {string} id - The ID of the template to delete.
	 * @returns {Promise<void>} A promise that resolves when the template is deleted.
	 */
	const delUserTemplate = async (id: number): Promise<void> => {
		try {
			await $fetch(`api/template/user/${id}`, {
				method: "DELETE",
			});
		} catch (err) {
			console.log(err);
		}
	};

	return {
		delUserTemplate,
		createUserTemplate,
		getUserTemplate,
	};
}
