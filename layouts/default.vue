<template>
	<div class="flex flex-col min-h-screen">
		<Header :links="links" :register="register" />
		<main class="flex-grow w-full mx-auto">
			<slot />
		</main>
		<Footer />
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

const register = ref("Get Started");

const { isLoggedIn } = useAuth();

if (isLoggedIn()) {
	register.value = "Get Started";
} else {
	register.value = "Sign In";
}
</script>
<style scoped>
body {
	font-family: "Urbanist", sans-serif;
}
</style>
