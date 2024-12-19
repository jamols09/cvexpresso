<template>
	<!-- Login -->
	<div
		class="flex flex-col rounded-lg p-8 shadow-md w-full max-w-md bg-slate-200"
	>
		<h1
			:class="`text-3xl font-bold text-blue-600 mb-4 ${
				props.title.class || ''
			}`"
		>
			{{ props.title.name }}
		</h1>
		<p :class="`mb-6 text-gray-600 ${props.subtitle.class}`">
			{{ props.subtitle.name }}
		</p>

		<form @submit.prevent="handleSubmit" class="w-full flex flex-col">
			<slot name="form-fields" />
			<p class="text-red-500 text-center" v-if="props.error">
				{{ props.error }}
			</p>
			<button
				type="submit"
				:class="`w-full bg-blue-600 text-white p-3 mt-1 rounded hover:bg-blue-700 ${props.button.class}`"
			>
				{{ props.button.name }}
			</button>
		</form>

		<div class="flex flex-row">
			<slot name="links" />
		</div>
	</div>
</template>
<script setup lang="ts">
import type { Input } from "~/types/auth";

const props = defineProps<{
	title: Input;
	subtitle: Input;
	error: string | null;
	button: Input;
}>();
const emits = defineEmits(["submit"]);

const handleSubmit = () => {
	emits("submit");
};
</script>
