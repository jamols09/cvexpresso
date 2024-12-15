<template>
	<section
		id="reviews"
		class="relative overflow-hidden py-16 md:py-24 bg-[#e9b479]"
	>
		<div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
			<div
				class="mx-auto max-w-lg text-center"
				itemtype="https://schema.org/WebApplication"
			>
				<h2
					class="font-bold text-3xl tracking-tight text-coffee-900 sm:text-4xl"
				>
					{{ title }}
				</h2>
				<div
					itemprop="aggregateRating"
					itemtype="https://schema.org/AggregateRating"
				>
					<p
						v-html="subtitle1"
						class="mt-4 text-lg tracking-tight text-coffee-900"
					></p>

					<div class="mt-2 flex justify-center">
						<div class="flex items-center">
							<svg
								class="text-emerald-500 h-6 w-6 flex-shrink-0"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
									clip-rule="evenodd"
								></path>
							</svg>
							<svg
								class="text-emerald-500 h-6 w-6 flex-shrink-0"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
									clip-rule="evenodd"
								></path>
							</svg>
							<svg
								class="text-emerald-500 h-6 w-6 flex-shrink-0"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
									clip-rule="evenodd"
								></path>
							</svg>
							<svg
								class="text-emerald-500 h-6 w-6 flex-shrink-0"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
									clip-rule="evenodd"
								></path>
							</svg>
							<svg
								class="text-emerald-500 h-6 w-6 flex-shrink-0"
								aria-hidden="true"
								xmlns="http://www.w3.org/2000/svg"
								viewBox="0 0 24 24"
								fill="currentColor"
							>
								<path
									fill-rule="evenodd"
									d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z"
									clip-rule="evenodd"
								></path>
							</svg>
						</div>
					</div>
					<p class="mt-4 text-md text-coffee-900" v-html="subtitle2"></p>
				</div>
				<div itemprop="offers" itemtype="https://schema.org/Offer">
					<meta itemprop="price" content="0" />
				</div>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
defineProps({
	title: String,
	subtitle1: String,
	subtitle2: String,
});
</script>
