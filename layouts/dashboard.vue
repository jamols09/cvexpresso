<template>
	<div class="flex flex-col min-h-screen">
		<DashboardHeader />
		<main class="flex-grow w-full mx-auto">
			<slot />
		</main>
		<Footer />
	</div>
</template>
<script setup lang="ts"></script>
