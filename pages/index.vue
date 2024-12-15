<template>
	<div
		v-for="(section, index) in sections"
		:key="index"
		:class="{ 'bg-[#e9b479]': index % 2 === 1 }"
	>
		<component :is="section.component" v-bind="section.props" />
	</div>
</template>

<script setup lang="ts">
import {
	LandingCardsFeature,
	LandingHeadlineEmail,
	LandingReviews,
	LandingTrialNotice,
} from "#components";
import {
	headlineEmail,
	cardsFeature,
	trialNotice,
	reviews,
} from "~/seo/landingpage.json";

// Set Meta tags
useHead({
	title: "CV Expresso",
	meta: [
		{
			name: "description",
			content: "Create your cv and cover letter with our AI-powered tool.",
		},
	],
});

const sections = [
	{
		component: LandingHeadlineEmail,
		props: {
			title1: headlineEmail.title1,
			title2: headlineEmail.title2,
			subtitle: headlineEmail.subtitle,
			image: headlineEmail.image,
			button: headlineEmail.button,
			placeholder: headlineEmail.placeholder,
		},
	},
	{
		component: LandingTrialNotice,
		props: {
			title: trialNotice.title,
			subtitle: trialNotice.subtitle,
			button: trialNotice.button,
		},
	},
	{
		component: LandingCardsFeature,
		props: {
			title: cardsFeature.title,
			subtitle: cardsFeature.subtitle,
			cards: cardsFeature.cards,
		},
	},
	{
		component: LandingReviews,
		props: {
			title: reviews.title,
			subtitle1: reviews.subtitle1,
			subtitle2: reviews.subtitle2,
		},
	},
];
</script>

<style scoped></style>
