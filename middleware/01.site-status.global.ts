export default defineNuxtRouteMiddleware((to, from) => {
	const { isDevelopment } = useSiteStatus();

	if (isDevelopment() && to.path !== "/") {
		return navigateTo("/");
	}
});
