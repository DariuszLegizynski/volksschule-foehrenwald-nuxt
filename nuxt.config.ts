// https://nuxt.com/docs/api/configuration/nuxt-config

export default defineNuxtConfig({
	devtools: { enabled: true },

	runtimeConfig: {
		strapi: {
			// nuxt/strapi options available server-side
			url: process.env.STRAPI_BASE_URL,
		},
		public: {
			strapi: {
				url: process.env.STRAPI_BASE_URL,
			},
		},
	},
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/strapi", "@nuxt/image"],
	plugins: ["@/plugins/gsap.js"],
})
