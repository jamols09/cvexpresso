<template>
	<div
		class="rounded-large shadow-card relative bg-white px-5 md:px-7 lg:px-9 py-5 pb-5 md:py-7 md:pb-9 lg:py-9 lg:pb-10 flex w-[95vw] max-w-[1500px] flex-col"
		style="z-index: 90; margin-top: 241.2px"
	>
		<div class="flex justify-between">
			<h2 class="text-4xl font-bold">Add Content</h2>
			<button
				type="button"
				class="border-none cursor-pointer appearance-none touch-manipulation flex items-center justify-center focus-visible:outline-blue-600 hover:opacity-80 px-7 py-2 rounded-full font-extrabold text-white bg-primaryBlack"
			>
				<svg
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 13 12"
					class="w-4"
				>
					<path
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M11.565 1.22l-9.992 9.54M11.567 10.766l-10-9.55"
					></path>
				</svg>
			</button>
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
							></span>
						</div>
						<h4 class="truncate text-lg font-bold">Custom</h4>
					</div>
					<p class="text-textMedium mt-1 text-[15px]">
						You didn't find what you are looking for? Or you want to combine two
						sections to save space?
					</p>
				</div>
			</div>
		</div>
	</div>
</template>
