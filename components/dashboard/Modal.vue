<template>
	<div
		v-if="isOpen"
		class="fixed inset-0 z-50 flex items-center justify-center bg-coffee-900 bg-opacity-50"
	>
		<div
			ref="modal"
			class="bg-white shadow-lg w-11/12 md:w-1/2 lg:w-1/6 p-6 fixed"
			:style="styleModal"
		>
			<button
				@click="closeModal"
				class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
			>
				<img
					src="/images/Close-Circle-Streamline-Solar.svg"
                    class="text-red-500"
					alt="Close"
					width="30"
					height="30"
				/>
			</button>
			{{ styleModal }}
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useDraggable } from "@vueuse/core";

defineProps({
	isOpen: {
		type: Boolean,
		required: true,
	},
});

const emits = defineEmits(["close"]);
const closeModal = () => {
	emits("close");
};

const modal = ref<HTMLElement | null>(null);
const styleModal = ref();

if (modal.value) {
	const { style } = useDraggable(modal, {
		initialValue: {
			x: (window.innerWidth - modal.value.offsetWidth) / 2,
			y: (window.innerHeight - modal.value.offsetHeight) / 2,
		},
	});
	styleModal.value = style.value;
}
</script>

<style scoped></style>
