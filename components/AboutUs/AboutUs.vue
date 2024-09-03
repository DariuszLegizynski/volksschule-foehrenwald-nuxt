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
			<section class="grid md:grid-cols-2 lg:grid lg:grid-cols-3 lg:gap-x-8">
				<section class="pb-16" v-for="feature in aboutUs?.features" :key="feature.id">
					<div class="flex flex-col items-center pb-12">
						<AnimationFitness v-if="feature.animationType === 'animationfitness'" width="8rem" height="8rem" />
						<AnimationSocial v-if="feature.animationType === 'animationsocial'" width="8rem" height="8rem" />
						<BaseIcons v-if="feature.animationType === 'animationeco'" type="date" width="8rem" height="8rem" />
						<BaseIcons v-if="feature.animationType === 'animationeco'" type="eko" width="8rem" height="8rem" />
						<div class="h3 text-center pb-2">{{ feature.title }}</div>
						<AnimationUnderline height="36px" stroke="hsl(70, 70%, 46%)" fill="hsl(70, 70%, 46%)" stroke-width="8px" />
					</div>
					<p class="text-black text-center">{{ feature.description }}</p>
				</section>
			</section>
		</div>
		<BaseButton class="mt-8" :link="aboutUs?.btn?.link" variant="comic"
			><p>{{ aboutUs?.btn?.text }} &rarr;</p></BaseButton
		>
	</article>
</template>
