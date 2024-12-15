<!-- components/AuthInputForm.vue -->
<template>
	<div class="mb-6">
		<input
			:value="modelValue"
			@input="updateValue"
			:type="type"
			:id="id"
			:class="inputClass"
			:placeholder="placeholder"
		/>
	</div>
</template>

<script setup lang="ts">
defineProps({
	modelValue: String,
	type: {
		type: String,
		default: "text",
	},
	id: String,
	inputClass: {
		type: String,
		default: "w-full p-3 border border-gray-300 rounded mt-1",
	},
	placeholder: String,
});

const emits = defineEmits(["update:modelValue"]);

const updateValue = (event: Event) => {
	emits("update:modelValue", (event.target as HTMLInputElement).value);
};
</script>

<style scoped></style>
