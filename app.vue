<script setup lang="ts">
const route = useRoute();
const layout = computed(() => {
	// Determine the layout based on the current route
	if (route.path.startsWith("/login") || route.path.startsWith("/register")) {
		return "login";
	}

	if (route.path.startsWith("/dashboard")) {
		return "dashboard";
	}

	return "default";
});
</script>
<template>
	<NuxtLayout :name="layout">
		<NuxtPage />
	</NuxtLayout>
</template>
<style>
body {
	background-color: #dac0a3;
}
</style>
