<template>
	<div
		v-if="isOpen"
		class="fixed inset-0 z-50 flex items-center justify-center bg-coffee-900 bg-opacity-50"
	>
		<div ref="modal" :class="computedModalClass" :style="styleModal">
			<!-- <button
				@click="closeModal"
				class="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
				v-if="enableCloseBtn"
			>
				<img
					src="/images/Close-Circle-Streamline-Solar.svg"
					class="text-red-500"
					alt="Close"
					width="30"
					height="30"
				/>
			</button> -->
			<slot></slot>
		</div>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useDraggable, onClickOutside } from "@vueuse/core";

const props = defineProps({
	isOpen: {
		type: Boolean,
		required: true,
	},
	modalclass: {
		type: String,
		required: false,
	},
	enableCloseBtn: {
		type: Boolean,
		default: true,
		required: false,
	},
});

const modal = ref<HTMLElement | null>(null);
const styleModal = ref();
const defaultImageClass = "bg-white dark:bg-gray-800 p-4 shadow-lg";

const emits = defineEmits(["close"]);

if (modal.value) {
	const { style } = useDraggable(modal, {
		initialValue: {
			x: (window.innerWidth - modal.value.offsetWidth) / 2,
			y: (window.innerHeight - modal.value.offsetHeight) / 2,
		},
	});
	styleModal.value = style.value;
}

const computedModalClass = computed(() => {
	return props.modalclass ? props.modalclass : defaultImageClass;
});

const closeModal = () => {
	emits("close");
};

onMounted(() => {
	onClickOutside(modal, () => {
		console.log(modal.value);
		closeModal();
	});
});
</script>

<style scoped>
.modal-enter-active,
.modal-leave-active {
	transition: opacity 0.3s ease;
}
.modal-enter, .modal-leave-to /* .modal-leave-active in <2.1.8 */ {
	opacity: 0;
}
</style>
