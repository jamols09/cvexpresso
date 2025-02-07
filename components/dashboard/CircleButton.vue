<template>
	<button
		:class="computedButtonClass"
		v-tooltip.right="tooltiptext"
		type="button"
		@click="handleClick"
	>
		<NuxtImg :src="image" :alt="tooltiptext" :class="computedImageClass" />
	</button>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps({
	tooltiptext: String,
	image: String,
	buttontext: String,
	buttonclass: {
		type: String,
		required: false,
	},
	imageclass: {
		type: String,
		required: false,
	},
});

const defaultButtonClass =
	"mb-2 bg-coffee-500 text-white px-3.5 py-3.5 rounded-full hover:bg-coffee-400 transition duration-300 border border-coffee-900/20";
const defaultImageClass = "h-3.5 w-3.5";

const computedButtonClass = computed(() => {
	return props.buttonclass ? props.buttonclass : defaultButtonClass;
});

const computedImageClass = computed(() => {
	return props.imageclass ? props.imageclass : defaultImageClass;
});

const emit = defineEmits(["click"]);

const handleClick = () => {
	emit("click", props.buttontext);
};
</script>

<style scoped></style>
