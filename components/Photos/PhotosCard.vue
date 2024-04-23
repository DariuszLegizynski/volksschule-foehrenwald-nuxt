<script setup lang="ts">
	interface Props {
		title?: string
		shortDescription?: string
		imageSrc?: string
		imageAlt?: string
		imageWho?: string
	}

	const { title, shortDescription, imageSrc, imageAlt, imageWho } =
		defineProps<Props>()
</script>

<template>
	<NuxtLink class="relative w-full">
		<nuxt-img
			:src="imageSrc"
			:alt="imageAlt"
			width="6rem"
			height="8rem"
			class="w-full h-auto rounded-3xl sm:h-[16rem] sm:object-cover"
		/>
		<div class="absolute inset-0 bg-black opacity-20 rounded-3xl"></div>
		<div
			class="absolute bottom-4 text-white w-full px-2 sm:flex sm:flex-col sm:justify-between sm:h-32"
		>
			<div class="h4">{{ title }}</div>
			<p class="pb-1">{{ shortDescription }}</p>
			<span class="flex justify-end">{{ imageWho }}</span>
		</div>
	</NuxtLink>
</template>

