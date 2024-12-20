<template>
	<div class="flex flex-col min-h-screen">
		<Header
			:links="links"
			:redirect="redirect"
			v-if="isDevelopment() == false"
		/>
		<main class="flex-grow w-full mx-auto">
			<slot />
		</main>
		<Footer v-if="isDevelopment() == false" />
	</div>
</template>

<script setup lang="ts">
import Header from "~/components/Header.vue";
import Footer from "~/components/Footer.vue";

const links = [
	{
		text: "Home",
		href: "/",
	},
	{
		text: "About",
		href: "/about",
	},
];

const { isDevelopment } = useSiteStatus();

const redirect = ref({
	title: "Get Started",
	href: "/register",
});

const { isLoggedIn } = useAuth();

if (isLoggedIn()) {
	redirect.value.title = "Dashboard";
	redirect.value.href = "/dashboard";
} else {
	redirect.value.title = "Sign In";
	redirect.value.href = "/register";
}
</script>
<style scoped>
body {
	font-family: "Urbanist", sans-serif;
}
</style>
