export default defineNuxtPlugin(async (nuxtApp) => {
	const { getCurrentUser } = useAuth();

    // This will initialize the user object on the client side
	await getCurrentUser();
});
