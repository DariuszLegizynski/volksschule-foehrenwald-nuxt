// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: { enabled: true },

	runtimeConfig: {
		strapi: {
			// nuxt/strapi options available server-side
			url: process.env.STRAPI_BASE_URL || "http://localhost:1112",
		},
		public: {
			strapi: {
				url: process.env.STRAPI_BASE_URL || "http://localhost:1112",
			},
		},
	},
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/strapi", "@nuxt/image"],
	plugins: ["@/plugins/gsap.js"],
})
