<script setup lang="ts">
	interface Props {
		link: string
		alternativeText: string
		assignRef?: (ref: Element | ComponentPublicInstance | null) => void
	}

	const { link, alternativeText, assignRef } = defineProps<Props>()
</script>

<template>
	<li :ref="assignRef" class="min-w-48">
		<img class="object-top object-cover max-h-64" width="1200" height="1600" :src="link" :alt="alternativeText" />
		<section class="pt-4 pl-4 md:pl-1 lg:pl-2">
			<span class="leading-6 font-semibold text-lg">Name Nachname</span>
			<br />
			<span class="py-1 after:content-[',']">Beschreibung der Position</span>
			<br />
			<span>Weitere Beschreibung</span>
		</section>
	</li>
</template>
