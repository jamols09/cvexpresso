<template>
	<div class="bg-[#DAC0A3] dark:border-gray-700/30 dark:bg-gray-900/80 pt-48">
		<div class="flex flex-row items-center justify-center py-12">
			<slot />
		</div>
		<Footer />
	</div>
</template>

<script setup>
import Footer from "~/components/Footer.vue";
</script>

<style scoped></style>
