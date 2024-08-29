<script setup lang="ts">
	import type { Class as ClassType } from "@/types/AboutUsPage"
	interface Props {
		classProp: ClassType
	}

	const { classProp } = defineProps<Props>()

	const config = useRuntimeConfig()
	const strapiBaseUrl = config.public.strapi.url
</script>

<template>
	<li>
		<NuxtImg
			fit="cover"
			loading="lazy"
			class="rounded-3xl object-center w-full h-auto"
			width="1600"
			height="1200"
			:src="`${strapiBaseUrl}${classProp?.foto?.data?.attributes?.url}`"
			:alt="`${strapiBaseUrl}/${classProp?.foto?.data?.attributes?.alternativeText}` || 'Kinder aus unserer Klasse'"
		/>
		<section class="pt-4 pb-12 pl-4 text-white border-b-2 border-white">
			<div class="h3">{{ classProp?.class }}</div>
			<br />
			<span v-if="classProp?.description" class="py-1">{{ classProp?.description }}</span>
		</section>
	</li>
</template>
