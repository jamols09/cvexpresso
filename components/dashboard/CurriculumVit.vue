<template>
	<div>
		<div class="h-20 flex items-center gap-4">
			<h2
				class="font-bold text-3xl text-coffee-900 sm:text-4xl h-full flex items-center"
			>
				{{ title }}
			</h2>
			<button
				class="bg-coffee-700 text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-coffee-600 transition duration-300"
				aria-label="Create New"
				@click="openModal"
			>
				<img
					src="/images/Add-Circle-Streamline-Solar.svg"
					alt="Create New"
					width="30"
					height="30"
				/>
			</button>
		</div>
		<div
			class="flex flex-wrap justify-center sm:justify-start gap-16 mt-4 mx-12 overflow-y-auto h-[28rem]"
		>
			<!-- <Cards /> -->
		</div>
		<Modal :isOpen="isModalOpen" @close="closeModal">
			<h2 class="text-2xl font-bold mb-4">Create New CV</h2>
			<form @submit.prevent="createTemplate">
				<div class="mb-4">
					<label
						for="templateName"
						class="block text-lg font-medium text-gray-700"
						>Template Name</label
					>
					<input
						type="text"
						id="templateName"
						v-model="templateName"
						class="tracking-wide mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-coffee-500 focus:border-coffee-500 sm:text-lg"
						required
					/>
				</div>
				<div class="flex justify-end">
					<button
						type="submit"
						class="bg-coffee-700 text-white px-4 py-2 rounded-lg hover:bg-coffee-600 transition duration-300"
					>
						Create
					</button>
				</div>
			</form>
		</Modal>
	</div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Cards from "./Cards.vue";
import Modal from "./Modal.vue";

defineProps({
	title: String,
});

const isModalOpen = ref(false);
const templateName = ref("");

const openModal = () => {
	isModalOpen.value = true;
};
const closeModal = () => {
	isModalOpen.value = false;
};

const createTemplate = () => {
	closeModal();
};
</script>

<style scoped>
::-webkit-scrollbar {
	width: 10px;
}

::-webkit-scrollbar-track-piece {
	background-color: transparent;
}

::-webkit-scrollbar-thumb {
	background-color: #cbcbcb;
	outline: 2px solid #fff;
	outline-offset: -2px;
	border: 0.1px solid #b7b7b7;
	border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
	background-color: #909090;
}
</style>
