<script setup lang="ts">
	import gsap from "gsap"

	const heroText = ref("")

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
	<article class="hero-image w-screen min-h-screen">
		<HeroLeaves />
		<section ref="heroText" class="h-screen flex flex-col items-center justify-end pb-16">
			<div class="px-2 pb-2 bg-tertiary bg-opacity-50 xs:p-4 sm:p-16 2xl:p-12">
				<h1 class="text-style text-shadow">Volksschule</h1>
				<h1 class="text-style text-shadow">Föhrenwald</h1>
				<div class="p text-style text-shadow pt-2 md:pt-6">Die einzigartige Schule<br />im bezaubernden Föhrenwald</div>
				<div class="p text-style text-shadow pt-2 md:pt-6">Mit uns wird ihr Kind<br />abenteuerlich gelehrt:</div>
				<div class="p text-style text-shadow pt-2 md:pt-6">Bewegung - Soziales Lernen - Ökologie</div>
			</div>
			<div class="grid grid-cols-2 gap-x-4 md:gap-x-12 mt-16 lg:gap-x-16">
				<BaseButton link="#about-us"><p>Über Uns</p></BaseButton>
				<BaseButton link="#news" variant="outline"><p>Aktuelles</p></BaseButton>
			</div>
		</section>
	</article>
</template>

<style scoped>
	.hero-image {
		background-image: url(/images/hero/hero-1-subtle.png);
		background-size: cover;
		background-position: 55% 0;
	}
	.text-border {
		text-shadow: -1.4px 0 hsl(70, 70%, 46%), 0 1.4px hsl(70, 70%, 46%), 1.4px 0 hsl(70, 70%, 46%), 0 -1.4px hsl(70, 70%, 46%);
	}
	.text-shadow {
		@apply drop-shadow-[0px_1px_1px_rgba(0,0,0,1)];
	}
	.text-style {
		@apply text-white flex items-end;
	}
</style>
