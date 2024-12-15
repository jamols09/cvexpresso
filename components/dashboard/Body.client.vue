<template>
	<section class="relative py-32 min-h-screen flex flex-col">
		<div
			class="relative sm:mx-14 md:mx-32 flex-grow bg-[#c4ac92] border border-coffee-500 shadow-lg shadow-coffee-500/50"
		>
			<div class="flex flex-col flex-grow border-blue-900 h-full my-4">
				<!-- First Div -->
				<div class="flex-1 p-4 md:p-12">
					<CurriculumVit title="Curriculum Vitae"/>
				</div>
				<!-- Second Div -->
				<div class="flex-1 p-4 md:p-12 h-full">
					<CoverLetter />
				</div>
			</div>
		</div>
	</section>
</template>

<script lang="ts" setup>
import CurriculumVit from './CurriculumVit.vue';
import CoverLetter from './CoverLetter.vue';

</script>

<style scoped>
.card {
	width: 200px; /* Set fixed width */
	height: 300px; /* Set fixed height */
}
</style>
