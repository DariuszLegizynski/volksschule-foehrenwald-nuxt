<script setup lang="ts">
	interface Props {
		link: string
		alternativeText: string
	}

	const { link, alternativeText } = defineProps<Props>()
</script>

<template>
	<li>
		<NuxtImg fit="cover" loading="lazy" class="rounded-3xl object-center w-full h-auto" width="1600" height="1200" :src="link" :alt="alternativeText" />
		<section class="pt-4 pb-12 pl-4 text-white border-b-2 border-white">
			<div class="h3">Klasse Z</div>
			<br />
			<span class="py-1 after:content-[',']">Irgendeine Beschreibung</span>
			<br />
			<span>die vielleicht notwendig ist</span>
		</section>
	</li>
</template>
