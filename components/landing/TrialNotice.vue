<template>
	<section id="get-started-today" class="relative overflow-hidden py-32">
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
			<div class="mx-auto max-w-lg text-center">
				<h2 class="font-bold text-3xl text-coffee-900 sm:text-4xl">
					{{ title }}
				</h2>
				<p class="mt-4 text-lg font-semibold text-coffee-900 tracking-wider">
					{{ subtitle }}
				</p>
				<a
					class="group inline-flex items-center justify-center rounded-full py-2 px-4 text-md font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-white text-coffee-900 hover:text-purple-900 active:bg-blue-200 active:text-slate-600 focus-visible:outline-white mt-10"
					color="white"
					variant="solid"
					href="https://cvmaker.cvtemplate.co.uk"
				>
					{{ button }}
				</a>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
defineProps({
	title: String,
	subtitle: String,
	button: String,
});
</script>
