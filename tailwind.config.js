/** @type {import('tailwindcss').Config} */

export default {
	mode: "jit",
	content: [
		"./assets/**/*.css",
		"./components/**/*.{js,vue,ts}",
		"./pages/**/*.{vue,js,ts}",
	],
	theme: {
		extend: {
			colors: {
				primary: "hsl(70, 70%, 46%)",
				secondary: "hsl(70, 50%, 31%)",
				tertiary: "hsl(69, 34%, 18%)",
				black: "hsl(5, 0%, 0%)",
				white: "hsl(5, 0%, 100%)",
			},
		},
	},
	plugins: [],
}

