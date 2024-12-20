<template>
	<section class="relative py-8 min-h-screen flex flex-col">
		<div
			class="relative mx-6 flex-grow bg-[#c4ac92] border border-coffee-500 shadow-lg shadow-coffee-500/50"
		>
			<Index />
		</div>
	</section>
</template>

<script lang="ts" setup>
import Index from "~/components/template/index.vue";

// import { useSortable } from "@vueuse/integrations";
const route = useRoute();
const userId = route.params.id;

// const el = ref<HTMLElement | null>(null);
// const list = ref([
// 	{ id: 1, name: "a" },
// 	{ id: 2, name: "b" },
// 	{ id: 3, name: "c" },
// ]);
// useSortable(el, list);
</script>
