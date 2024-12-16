<template>
	<div class="flex flex-col min-h-screen">
		<DashboardHeader :user="user" />
		<main class="flex-grow w-full mx-auto">
			<slot />
		</main>
		<Footer />
	</div>
</template>
<script setup lang="ts">
const { user, getCurrentUser } = useAuth();
getCurrentUser();
</script>
