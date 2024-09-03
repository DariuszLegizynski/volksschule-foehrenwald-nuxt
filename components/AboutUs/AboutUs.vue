<script setup lang="ts">
	import type { AboutUs } from "@/types/LandingPage"

	interface Props {
		aboutUs: AboutUs
	}

	const { aboutUs } = defineProps<Props>()
</script>

<template>
	<article id="about-us" class="relative z-1 bg-white flex flex-col items-center text-primary py-16 px-4 gap-y-8">
		<div class="centered-container">
			<h2 class="pt-4 pb-12 text-center">{{ aboutUs?.title }}</h2>
			<section class="grid lg:grid lg:grid-cols-3 lg:gap-x-8">
				<section class="pb-16" v-for="feature in aboutUs?.features" :key="feature.id">
					<div class="grid grid-rows-[auto_auto_auto] gap items-center justify-items-center pb-12">
						<AnimationPlaying v-if="feature.animationType === 'animation-playing'" width="16rem" height="16rem" />
						<AnimationEco v-if="feature.animationType === 'animation-eco'" width="16rem" height="16rem" />
						<AnimationLearning v-if="feature.animationType === 'animation-learning'" width="16rem" height="16rem" />
						<AnimationFitness v-if="feature.animationType === 'animation-fitness'" width="8rem" height="8rem" />
						<AnimationSocial v-if="feature.animationType === 'animation-social'" width="8rem" height="8rem" />
						<div class="h3 text-center pb-2">{{ feature.title }}</div>
						<AnimationUnderline height="36px" stroke="hsl(70, 70%, 46%)" fill="hsl(70, 70%, 46%)" stroke-width="8px" />
					</div>
					<p class="text-black text-center max-w-[40rem]">{{ feature.description }}</p>
				</section>
			</section>
		</div>
		<BaseButton class="mt-8" :link="aboutUs?.btn?.link" variant="comic"
			><p>{{ aboutUs?.btn?.text }} &rarr;</p></BaseButton
		>
	</article>
</template>
