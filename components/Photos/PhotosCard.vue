<script setup lang="ts">
	interface Props {
		slug?: string
		title?: string
		shortDescription?: string
		imageSrc?: string
		imageAlt?: string
		imageWho?: string
	}

	const { slug, title, shortDescription, imageSrc, imageAlt, imageWho } = defineProps<Props>()
</script>

<template>
	<NuxtLink :to="`/photos/${slug}`" class="relative w-full">
		<NuxtImg loading="lazy" :src="imageSrc" :alt="imageAlt" width="6rem" height="8rem" class="w-full rounded-3xl h-[16rem] object-cover" />
		<div class="absolute inset-0 bg-black opacity-20 rounded-3xl"></div>
		<div class="absolute bottom-4 text-white w-full px-2 sm:flex sm:flex-col sm:justify-between sm:h-32 xl:h-40">
			<div class="h3">{{ title }}</div>
			<p class="pb-1">{{ shortDescription }}</p>
			<span v-if="imageWho" class="flex justify-end">{{ imageWho }}</span>
		</div>
	</NuxtLink>
</template>
