<script setup lang="ts">
import { ref } from "vue";
import Sortable from "sortablejs";

const itemsRef = useTemplateRef<HTMLElement | null>("items");
const list = ref(["Item 1", "Item 2", "Item 3", "Item 4", "Item 5"]);
const values = ref();
const isModalOpen = ref(false);

const handleClick = () => {
	isModalOpen.value = true;
};

const handleClose = () => {
	isModalOpen.value = false;
};

const buttonOpt = {
	tooltiptext: "Add Section",
	image: "/images/Add-Circle-Streamline-Solar.svg",
	buttontext: "",
	buttonclass:
		"bg-coffee-500 hover:bg-coffee-400 rounded-full transition duration-300 text-white mx-auto",
	imageclass: "h-12 w-12",
};

onMounted(() => {
	if (itemsRef.value) {
		Sortable.create(itemsRef.value, {
			swap: true,
			swapClass: "highlight",
			animation: 150,
			onEnd: (evt) => {
				// This will be called after a drag operation ends
				if (itemsRef.value) {
					console.log(
						"New order:",
						Array.from(itemsRef.value.children).map((el) => el.textContent)
					);
					values.value = Array.from(itemsRef.value.children).map(
						(el) => el.textContent
					);
				}
			},
		});
	}
});
</script>
<template>
	<div class="flex h-screen">
		<div>
			<nav
				class="m-12 w-28 h-auto bg-gray-800 text-white p-4 text-center shadow-lg"
			>
				<h2 class="text-2xl font-bold mb-4 text-center">Home icon</h2>
				<ul>
					<li class="my-2">
						<DashboardCircleButton
							:tooltiptext="buttonOpt.tooltiptext"
							:image="buttonOpt.image"
							buttontext="Add"
							@click="handleClick"
							:buttonclass="buttonOpt.buttonclass"
							:imageclass="buttonOpt.imageclass"
						/>
					</li>
				</ul>
				<ul ref="items">
					<li class="my-2 transition-all" v-for="item in list" :key="item">
						<button
							class="block py-2 px-4 rounded hover:bg-coffee-700 text-center mx-auto"
						>
							{{ item }}
						</button>
					</li>
				</ul>
			</nav>
		</div>
		<div class="flex-grow p-4 overflow-auto">
			<TransitionGroup name="list" tag="ul">
				<li v-for="item in values" :key="item">
					{{ item }}
				</li>
			</TransitionGroup>
		</div>

		<DashboardModal
			:isOpen="isModalOpen"
			@close="handleClose"
			:enableCloseBtn="true"
		>
			<div
				class="rounded-large shadow-card relative bg-white px-5 md:px-7 lg:px-9 py-5 pb-5 md:py-7 md:pb-9 lg:py-9 lg:pb-10 flex w-[95vw] max-w-[1500px] flex-col"
			>
				<div class="flex justify-between">
					<h2 class="text-4xl font-bold">Add Section</h2>
				</div>
				<div class="mt-8">
					<div
						class="grid-rows-auto grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
					>
						<div
							class="cursor-pointer rounded-lg bg-gray-100 px-4 py-5 transition-all hover:scale-[1.02] hover:opacity-90 border border-dashed border-black"
						>
							<div
								class="grid grid-cols-[min-content_auto] items-center gap-2 text-black"
							>
								<div class="w-5">
									<span
										style="
											display: flex;
											height: 1.1em;
											width: 1.1em;
											justify-content: center;
											align-items: center;
										"
									>
									</span>
								</div>
								<h4 class="truncate text-lg font-bold">Custom</h4>
							</div>
							<p class="text-textMedium mt-1 text-[15px]">
								You didn't find what you are looking for? Or you want to combine
								two sections to save space?
							</p>
						</div>
                        
					</div>
				</div>
			</div>
		</DashboardModal>
	</div>
</template>
<style scoped>
.list-move, /* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}
</style>
