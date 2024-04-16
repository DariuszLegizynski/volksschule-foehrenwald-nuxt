// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },

	runtimeConfig: {
		strapi: {
			// nuxt/strapi options available server-side
			url: process.env.STRAPI_BASE_URL || "http://localhost:1337",
		},
		// public: {
		//   FRONTEND_BASE_URL: process.env.FRONTEND_BASE_URL,
		//   strapi: { // nuxt/strapi options available client-side
		//     url: process.env.STRAPI_BASE_URL || 'http://localhost:3000',
		//   },
		// },
	},
	modules: ["@nuxtjs/tailwindcss", "@nuxtjs/strapi", "@nuxt/image"],
	plugins: ["~/plugins/gsap.js"],
	image: {
		dir: "assets/images",
	},
})

