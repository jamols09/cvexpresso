<template>
	<!-- Introduction -->
	<div class="hidden md:flex flex-col items-start justify-center p-8 max-w-md">
		<h2 class="text-4xl font-bold text-blue-600 mb-4">
			Welcome to Resume Builder
		</h2>
		<p class="text-lg text-gray-700 mb-2">
			Join our community of professionals.
		</p>
		<p class="text-lg text-gray-700 mb-2">
			Create and share your resume with ease.
		</p>
		<p class="text-lg text-gray-700">
			Find tips and best practices for building a standout resume.
		</p>
	</div>

	<!-- Login -->
	<div
		class="flex flex-col rounded-lg p-8 shadow-md w-full max-w-md bg-slate-200"
	>
		<h1 class="text-3xl font-bold text-blue-600 mb-4">Resume Builder</h1>
		<p class="mb-6 text-gray-600">
			Connect with pet lovers and breeders around the world.
		</p>
		<form class="w-full">
			<div class="mb-4">
				<input
					type="email"
					id="email"
					class="w-full p-3 border border-gray-300 rounded mt-1"
					placeholder="Email address"
				/>
			</div>
			<div class="mb-6">
				<input
					type="password"
					id="password"
					class="w-full p-3 border border-gray-300 rounded mt-1"
					placeholder="Password"
				/>
			</div>
			<button
				type="submit"
				class="w-full bg-blue-600 text-white p-3 rounded hover:bg-blue-700"
			>
				Log In
			</button>
		</form>
		<p class="mt-6 text-blue-600 hover:underline cursor-pointer">
			Forgotten password?
		</p>
		<hr class="w-full my-6 border-gray-300" />
		<button
			@click="handleRedirect()"
			class="w-full bg-green-500 text-white p-3 rounded hover:bg-green-600"
		>
			Create New Account
		</button>
	</div>
</template>

<script setup lang="ts">
// Set Meta tags
useHead({
	title: "Login",
	meta: [
		{
			name: "description",
			content: "Login to your account on Resume Builder",
		},
	],
});

const handleRedirect = async () => {
	await navigateTo({ path: "/register" });
};
</script>

<style scoped></style>
