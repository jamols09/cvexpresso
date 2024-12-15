// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	compatibilityDate: "2024-11-01",
	devtools: { enabled: true },
	modules: [
		"@nuxtjs/tailwindcss",
		"@nuxtjs/google-fonts",
		"floating-vue/nuxt",
		"@nuxt/image",
		"@vueuse/nuxt",
	],

	// Custom TailwindCSS configuration
	tailwindcss: {
		config: {
			darkMode: "class",
			theme: {
				extend: {
					// Font Family
					fontFamily: {
						sans: ["Urbanist", "sans-serif"],
					},
					// Colors
					colors: {
						coffee: {
							50: "#f9f8f8",
							100: "#f3f1f0",
							200: "#e6e2df",
							300: "#d8d3cd",
							400: "#bcb6aa",
							500: "#a09a87",
							600: "#91877a",
							700: "#796f63",
							800: "#60564d",
							900: "#4d453c",
						},
					},
				},
			},
		},
	},

	googleFonts: {
		families: {
			Urbanist: true, // This will include all weights
		},
		download: true, // This will download the fonts to your project
	},
});
