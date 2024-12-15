<template>
	<section class="relative py-32">
		<div class="relative mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
			<div class="text-center">
				<h2
					class="text-5xl font-bold text-coffee-900 dark:text-white md:text-4xl xl:text-5xl"
				>
					{{ title }}
				</h2>
				<p
					class="mx-auto mt-6 text-coffee-900 text-lg font-semibold dark:text-gray-300 md:w-3/4 lg:w-3/5 tracking-wide"
				>
					{{ subtitle }}
				</p>
			</div>
			<div
				class="mt-16 grid gap-8 sm:mx-auto sm:w-2/3 md:w-full md:grid-cols-2 lg:grid-cols-3"
			>
				<!-- First Feature -->
				<div
					class="rounded-3xl border border-coffee-900 bg-white p-8 py-12 shadow-2xl shadow-gray-600/10 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none sm:p-12"
					v-for="card in cards"
				>
					<div class="space-y-12 text-center">
						<img
							:src="card.image"
							class="mx-auto h-14 w-auto"
							width="512"
							height="512"
							alt="template illustration"
						/>
						<div class="space-y-6">
							<h3
								class="text-2xl font-semibold text-coffee-900 transition dark:text-white tracking-wide"
							>
								{{ card.title }}
							</h3>
							<p class="text-coffee-900 dark:text-gray-300 tracking-wider">
								{{ card.description }}
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup>
defineProps({
	title: String,
	subtitle: String,
	cards: Array,
});
</script>

<style scoped></style>
