<template>
	<!-- Introduction -->
	<section class="pt-32 sm:pt-40 md:pt-48">
		<div class="mx-auto px-4 sm:px-12 xl:max-w-6xl xl:px-0">
			<div class="relative">
				<h1
					class="text-center text-5xl font-bold text-coffee-900 dark:text-white sm:text-6xl lg:text-left lg:text-7xl"
				>
					{{ title1 }}
					<span class="relative">
						<span
							class="relative bg-gradient-to-r from-coffee-600 to-purple-700 bg-clip-text text-transparent dark:from-coffee-400 dark:to-gray-600 md:px-2"
						>
							{{ title2 }}
						</span>
					</span>
				</h1>
			</div>
			<div class="relative items-center gap-12 lg:flex">
				<div
					class="text-center sm:mx-auto sm:w-11/12 md:mt-12 md:w-4/5 lg:mt-0 lg:mr-auto lg:w-6/12 lg:text-left"
				>
					<p
						class="mt-12 text-lg text-coffee-900 font-semibold dark:text-gray-300 sm:text-xl"
					>
						{{ subtitle }}
					</p>
					<form action="" class="mt-12">
						<div
							class="relative flex items-center rounded-full border border-coffee-900/20 bg-white p-1 px-2 shadow-md focus-within:ring-2 dark:border-white/10 dark:bg-dark dark:text-white md:p-2 lg:pr-3"
						>
							<div class="py-3 pl-4 lg:pl-5">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									class="m-auto h-6 w-6 fill-coffee-900 dark:fill-gray-400"
									viewBox="0 0 20 20"
									fill="currentColor"
								>
									<path
										d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"
									></path>
									<path
										d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"
									></path>
								</svg>
							</div>
							<input
								aria-label="your email"
								autocomplete="email"
								:placeholder="placeholder"
								class="w-full rounded-full tracking-wider bg-transparent p-4 placeholder-coffee-900 outline-none dark:placeholder-white"
								type="email"
							/>
							<div class="md:pr-1.5 lg:pr-0">
								<button
									type="submit"
									title="Start buying"
									class="group relative ml-auto h-12 w-16 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 active:duration-75 active:before:scale-95 dark:before:bg-primaryLight sm:w-auto sm:px-6"
								>
									<span
										class="relative hidden w-max font-semibold text-coffee-900 transition transform hover:scale-105 hover:text-purple-900 dark:text-gray-900 md:block"
									>
										{{ button }}
									</span>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										viewBox="0 0 24 24"
										fill="currentColor"
										class="relative mx-auto h-6 w-6 text-white dark:text-gray-900 md:hidden"
									>
										<path
											d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z"
										></path>
									</svg>
								</button>
							</div>
						</div>
					</form>
				</div>
				<div class="mt-12 w-full overflow-hidden sm:mt-20 lg:-mt-8 lg:w-6/12">
					<img
						class="w-full"
						:src="image"
						alt="team illustration"
						height="600"
						width="800"
					/>
				</div>
			</div>
		</div>
	</section>
</template>
<script setup lang="ts">
defineProps({
	title1: String,
	title2: String,
	subtitle: String,
	image: String,
	button: String,
	placeholder: String,
});
</script>
