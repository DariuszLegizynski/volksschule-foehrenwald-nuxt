<script setup lang="ts">
	interface Props {
		link: string
		alternativeText: string
	}

	const { link, alternativeText } = defineProps<Props>()
</script>

<template>
	<li>
		<NuxtImg fit="cover" loading="lazy" class="object-center w-full h-auto" width="800" height="600" :src="link" :alt="alternativeText" />
		<section class="py-4 pl-4">
			<span class="leading-6 font-semibold text-lg">Klasse Z</span>
			<br />
			<span class="py-1 after:content-[',']">Irgendeine Beschreibung</span>
			<br />
			<span>die vielleicht notwendig ist</span>
		</section>
	</li>
</template>
