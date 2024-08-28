<script setup lang="ts">
	import type { Hero } from "@/types/LandingPage"
	import gsap from "gsap"
	interface Props {
		hero: Hero
	}

	const { hero } = defineProps<Props>()
	const heroText = ref("")

	const config = useRuntimeConfig()
	const strapiBaseUrl = config.public.strapi.url

	onMounted(() => {
		if (heroText.value) {
			gsap.to(heroText.value, {
				y: 500,
				scale: 0.7,
				scrollTrigger: {
					trigger: heroText.value,
					start: "55% 425px",
					end: "bottom top",
					scrub: 0.05,
				},
			})
		}
	})
</script>

<template>
	<article
		class="hero-image w-screen min-h-screen"
		:style="{
			backgroundImage: `url(${strapiBaseUrl}${hero?.background_media?.data?.attributes?.url})`,
		}"
	>
		<HeroLeaves />
		<section ref="heroText" class="h-screen flex flex-col items-center justify-center py-16">
			<div class="px-2 pb-2 bg-tertiary bg-opacity-50 xs:p-4 sm:p-16 2xl:p-12">
				<h1 class="text-style text-shadow">{{ hero?.title_up }}</h1>
				<h1 class="text-style text-shadow">{{ hero?.title_down }}</h1>
				<section class="hero-content" v-html="hero?.content?.map(item => item.children.map(child => child.text).join('')).join('')"></section>
			</div>
			<div class="grid grid-cols-2 gap-x-4 md:gap-x-12 mt-16 lg:gap-x-16">
				<BaseButton link="#about-us"
					><p>{{ hero?.btn_left?.text }}</p></BaseButton
				>
				<BaseButton link="#news" variant="outline"
					><p>{{ hero?.btn_right?.text }}</p></BaseButton
				>
			</div>
		</section>
	</article>
</template>

<style scoped>
	.hero-image {
		background-size: cover;
		background-position: 55% 0;
	}
	.text-border {
		text-shadow: -1.4px 0 hsl(70, 70%, 46%), 0 1.4px hsl(70, 70%, 46%), 1.4px 0 hsl(70, 70%, 46%), 0 -1.4px hsl(70, 70%, 46%);
	}
	.text-shadow,
	.text-shadow > p {
		@apply drop-shadow-[0px_1px_1px_rgba(0,0,0,1)];
	}
	.text-style,
	.text-style > p {
		@apply text-white flex items-end;
	}
	.hero-content > p {
		@apply pt-2 md:pt-6;
	}
</style>

<style>
	.text-shadow {
		@apply drop-shadow-[0px_1px_1px_rgba(0,0,0,1)];
	}
	.text-style {
		@apply text-white flex items-end;
	}
	.hero-content > p {
		@apply pt-2 md:pt-6;
	}
</style>
