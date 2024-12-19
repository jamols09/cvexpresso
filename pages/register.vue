<template>
	<!-- Introduction -->
	<div class="hidden md:flex flex-col items-start justify-center p-8 max-w-md">
		<h2 class="text-4xl font-bold text-blue-600 mb-4">
			Welcome to Resume Builder
		</h2>
		<p class="text-lg text-coffeee-900 mb-2">
			Create your own professional Resume with the help of AI.
		</p>
		<p class="text-lg text-coffeee-900 mb-2">Generate with ease.</p>
		<p class="text-lg text-coffeee-900">
			Find tips and best practices for building a standout resume.
		</p>
	</div>

	<AuthRegisterForm
		v-if="isBasicDetails === false"
		:form="form"
		:title="{
			name: 'Resume Builder',
		}"
		:subtitle="{
			name: 'Sign up to create your own professional resume with the help of AI.',
		}"
		@submit="handleSubmit"
		:error="error"
		:button="{
			name: 'Submit',
		}"
	>
		<template #form-fields>
			<AuthInputForm
				:modelValue="form.email"
				@update:modelValue="form.email = $event"
				type="email"
				id="email"
				placeholder="Email address"
			/>
			<AuthInputForm
				:modelValue="form.password"
				@update:modelValue="form.password = $event"
				type="password"
				id="password"
				placeholder="Password"
			/>
			<AuthInputForm
				:modelValue="form.confirm_password"
				@update:modelValue="form.confirm_password = $event"
				type="password"
				id="confirm_password"
				placeholder="Password Confirmation"
			/>
		</template>
		<template #links>
			<div class="flex flex-col">
				<NuxtLink class="mt-6 text-blue-600 hover:underline cursor-pointer">
					Forgotten password?
				</NuxtLink>
				<NuxtLink
					to="/login"
					class="mt-2 text-blue-600 hover:underline cursor-pointer"
				>
					Already have an account?
				</NuxtLink>
			</div>
		</template>
	</AuthRegisterForm>

	<AuthRegisterForm
		v-if="isBasicDetails"
		:form="form"
		:title="{
			name: 'Resume Builder',
		}"
		:subtitle="{
			name: 'Sign up to create your own professional resume with the help of AI.',
		}"
		@submit="handleUpdate"
		:error="error"
		:button="{
			name: 'Register',
		}"
	>
		<template #form-fields>
			<AuthInputForm
				:modelValue="form.username"
				@update:modelValue="form.username = $event"
				type="text"
				id="email"
				placeholder="Username"
			/>
			<AuthInputForm
				:modelValue="form.firstname"
				@update:modelValue="form.firstname = $event"
				type="text"
				id="firstname"
				placeholder="First name"
			/>
			<AuthInputForm
				:modelValue="form.middlename"
				@update:modelValue="form.middlename = $event"
				type="text"
				id="middlename"
				placeholder="Middle name"
			/>
			<AuthInputForm
				:modelValue="form.lastname"
				@update:modelValue="form.lastname = $event"
				type="text"
				id="lastname"
				placeholder="Last name"
			/>
		</template>
	</AuthRegisterForm>
</template>

<script setup lang="ts">
import type { Form } from "@/types/auth";

// Set Meta tags
useHead({
	title: "Register",
	meta: [
		{
			name: "description",
			content: "Register to your account on Resume Builder",
		},
	],
});

const error = ref<string | null>(null);
const isBasicDetails = ref<Boolean>(false);
const form = ref<Form>({
	email: "",
	password: "",
	confirm_password: "",
	username: "",
	firstname: "",
	middlename: "",
	lastname: "",
});

const handleSubmit = async () => {
	error.value = null;

	// Check if passwords match
	if (form.value.password !== form.value.confirm_password) {
		error.value = "Passwords do not match";
		return;
	}

	const data = await useAuth().register(form.value);

	// Check if there is an error
	if (data.body.error) {
		error.value = data.body.error;
		return;
	}

	// Check if there is a user then set isBasicDetails
	if (data.body.user) {
		isBasicDetails.value = true;
	}
};

const handleUpdate = async () => {
	error.value = null;

	// Register user
	const data = await useAuth().update(form.value);

	// Check if there is an error
	if (data.body.error) {
		error.value = data.body.error;
		return;
	}

	navigateTo("/");
};
</script>
