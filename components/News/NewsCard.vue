<script setup lang="ts">
	interface Props {
		title?: string
		shortDescription?: string
		date?: string
		imageSrc?: string
		imageAlt?: string
		slug?: string
	}

	const { title, shortDescription, date, imageSrc, imageAlt, slug } = defineProps<Props>()
</script>

<template>
	<NuxtLink :to="`/newsItem/${slug}`" class="w-full py-4">
		<NuxtImg loading="lazy" :src="imageSrc" :alt="imageAlt" width="6rem" height="8rem" class="w-full h-auto sm:object-cover sm:h-[16rem]" />
		<div class="w-full px-2 min-h-44 md:min-h-64 2xl:min-h-80">
			<div class="flex justify-between py-2 text-tertiary">
				<span>{{ date }}</span>
			</div>
			<div class="h3 text-primary xl:py-2 2xl:py-4">{{ title }}</div>
			<p class="py-4 text-tertiary">{{ shortDescription }}</p>
		</div>
		<div class="flex justify-between items-end pt-3 mt-4 border-t-[1px] border-tertiary px-2">
			<p class="text-black">Zum Beitrag</p>
			<p>&rarr;</p>
		</div>
	</NuxtLink>
</template>
