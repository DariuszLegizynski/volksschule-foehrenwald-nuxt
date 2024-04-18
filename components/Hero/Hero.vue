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
		<section
			ref="heroText"
			class="h-screen flex flex-col items-center justify-end pb-16 px-2"
		>
			<div class="px-2">
				<h1 class="text-style text-shadow">Volksschule</h1>
				<h1 class="text-style text-shadow">Föhrenwald</h1>
				<p class="text-style text-shadow pt-2">
					Die einzigartige Schule<br />im bezaubernden Föhrenwald
				</p>
				<p class="text-style text-shadow pt-2">
					Mit uns wird ihr Kind<br />abenteuerlich gelehrt:
				</p>
				<p class="text-style text-shadow pt-2">
					Bewegung - Soziales Lernen - Ökologie
				</p>
			</div>
			<div class="grid grid-cols-2 gap-x-4 mt-16">
				<BaseButton><p>Über Uns</p></BaseButton>
				<BaseButton variant="outline"><p>Aktuelles</p></BaseButton>
			</div>
		</section>
	</article>
</template>

<style scoped>
	.hero-image {
		background: url(@/assets/images/hero/modern_school_4.png) no-repeat center
			center/auto fixed;
	}
	.text-border {
		text-shadow: -1.4px 0 hsl(70, 70%, 46%), 0 1.4px hsl(70, 70%, 46%),
			1.4px 0 hsl(70, 70%, 46%), 0 -1.4px hsl(70, 70%, 46%);
	}
	.text-shadow {
		@apply drop-shadow-[0px_1px_1px_rgba(0,0,0,1)];
	}
	.text-style {
		@apply text-white flex items-end;
	}
</style>

