<template>
	<div
		class="relative h-96 w-72 bg-white/90 p-4 shadow-lg hover:scale-105 transition-transform duration-300 ease-in-out m-3"
	>
		<div
			class="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 ease-in-out"
		>
			<div
				class="relative group"
				v-for="(button, index) in buttonConfig"
				:key="index"
			>
				<!-- Edit button -->
				<CircleButton
					:tooltiptext="button.tooltiptext"
					:image="button.image"
					:buttontext="button.buttontext"
					@click="handleButtonClick"
				/>
			</div>
		</div>

		<div
			class="absolute bottom-0 left-0 right-0 bg-gray-800 text-white text-center py-2"
		>
			{{ truncatedName }}
		</div>
	</div>
</template>

<script lang="ts" setup>
import CircleButton from "./CircleButton.vue";

const props = defineProps({
	name: String,
});

const emit = defineEmits(["delete", "edit", "statistics", "preview"]);

const truncatedName = computed(() => {
	if (props.name)
		return props?.name.length > 20
			? props?.name.slice(0, 20) + "..."
			: props.name;
});

const buttonConfig = [
	{
		tooltiptext: "Edit Template",
		image: "/images/Pen-Streamline-Solar.png",
		buttontext: "Edit",
	},
	{
		tooltiptext: "Preview Template",
		image: "/images/Eye-Streamline-Solar.png",
		buttontext: "Preview",
	},
	{
		tooltiptext: "Statistics",
		image: "/images/Chart-Streamline-Solar.png",
		buttontext: "Statistics",
	},
	{
		tooltiptext: "Delete",
		image: "/images/Trash-Bin-Trash-Streamline-Solar.png",
		buttontext: "Delete",
	},
];

const handleButtonClick = (buttontext: string) => {
	if (buttontext === "Delete") {
		emit("delete");
	}
	if (buttontext === "Edit") {
		emit("edit");
	}
	if (buttontext === "Statistics") {
		emit("statistics");
	}
	if (buttontext === "Preview") {
		emit("preview");
	}
};
</script>

<style scoped></style>
