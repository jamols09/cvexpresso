<template>
	<div class="h-20 flex items-center">
		<h2
			class="font-bold text-3xl text-coffee-900 sm:text-4xl h-full flex items-center"
		>
			Cover Letters
		</h2>
	</div>
	<!-- Content for the second div -->
	<div
		class="flex flex-wrap justify-center sm:justify-start gap-16 mt-4 mx-12 overflow-x-aut h-[28rem]"
	>
		<Cards />
		<!-- Add more cards as needed -->
	</div>
</template>
<script lang="ts" setup>
import Cards from "./Cards.vue";
</script>
