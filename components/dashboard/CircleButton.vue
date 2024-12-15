<template>
	<button
		class="mb-2 bg-coffee-500 text-white px-3.5 py-3.5 rounded-full hover:bg-coffee-400 transition duration-300 border border-coffee-900/20"
		v-tooltip.right="tooltiptext"
	>
		<NuxtImg :src="`${image}`" :alt="tooltiptext" class="h-3.5 w-3.5" />
	</button>
</template>
<script lang="ts" setup>
defineProps({
	tooltiptext: String,
	image: String,
	buttontext: String,
});
</script>
