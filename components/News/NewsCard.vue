<script setup lang="ts">
	interface Props {
		title?: string
		shortDescription?: string
		date?: string
		imageSrc?: string
		imageAlt?: string
		imageWho?: string
	}

	const { title, shortDescription, date, imageSrc, imageAlt, imageWho } =
		defineProps<Props>()
</script>

<template>
	<NuxtLink class="w-full py-4">
		<nuxt-img
			:src="imageSrc"
			:alt="imageAlt"
			width="6rem"
			height="8rem"
			class="w-full h-auto sm:object-cover sm:h-[16rem]"
		/>
		<div class="w-full px-2 min-h-44">
			<div class="flex justify-between py-2 text-tertiary">
				<span>{{ date }}</span>
				<span>{{ imageWho }}</span>
			</div>
			<div class="h4 text-primary">{{ title }}</div>
			<p class="py-4 text-tertiary leading-6">{{ shortDescription }}</p>
		</div>
		<div
			class="flex justify-between items-end pt-3 mt-4 border-t-[1px] border-tertiary px-2"
		>
			<p class="text-black">Zum Beitrag</p>
			<p>&rarr;</p>
		</div>
	</NuxtLink>
</template>

