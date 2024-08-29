<script setup lang="ts">
	import type { Teacher } from "@/types/AboutUsPage"
	interface Props {
		teacher: Teacher
		assignRef?: (ref: Element | ComponentPublicInstance | null) => void
	}

	const { teacher, assignRef } = defineProps<Props>()

	const config = useRuntimeConfig()
	const strapiBaseUrl = config.public.strapi.url
</script>

<template>
	<li :ref="assignRef" class="min-w-48">
		<NuxtImg
			loading="lazy"
			class="object-top object-cover max-h-64 lg:max-h-72 xl:max-h-96"
			width="1200"
			height="1600"
			:src="`${strapiBaseUrl}${teacher?.profile?.data?.attributes?.url}`"
			:alt="teacher?.profile?.data?.attributes?.alternativeText || 'Profilbild von einen coolen Lehrer'"
		/>
		<section class="pt-4 pl-4 md:pl-1 lg:pl-2">
			<span class="font-semibold text-lg">{{ teacher?.name }}</span>
			<br />
			<span class="py-1 after:content-[',']">{{ teacher?.position }}</span>
			<br v-if="teacher?.other" />
			<span v-if="teacher?.other">{{ teacher?.other }}</span>
		</section>
	</li>
</template>
