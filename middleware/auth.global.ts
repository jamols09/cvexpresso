import { useAuth } from "~/composables/auth";

export default defineNuxtRouteMiddleware((to, from) => {
	const { isLoggedIn } = useAuth();

	const excemptedRoutes = [
		"/login",
		"/register",
		"/forgot-password",
		"/reset-password",
	];

	// When user is not logged in and the route is not excempted, redirect to login
	if (!isLoggedIn() && !excemptedRoutes.includes(to.path)) {
		return navigateTo("/login");
	}
    // When user is logged in and the route is excempted, redirect to home
	// if (isLoggedIn() && excemptedRoutes.includes(to.path)) {
	// 	return navigateTo("/");
	// }
});
