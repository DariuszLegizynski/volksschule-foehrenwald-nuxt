<script setup lang="ts">
	useHead({
		title: "Volksschule Föhrenwald in Wiener Neustadt - Offizielle Website",
		meta: [
			{
				name: "description",
				content:
					"Willkommen auf der offiziellen Website der Volksschule Föhrenwald in Wiener Neustadt. Erfahren Sie mehr über unser Bildungsangebot, unsere Projekte und Veranstaltungen.",
			},
			{ name: "keywords", content: "Volksschule, Föhrenwald, Wiener Neustadt, Bildung, Schule, Projekte, Veranstaltungen" },
			{ property: "og:title", content: "Volksschule Föhrenwald in Wiener Neustadt - Offizielle Website" },
			{
				property: "og:description",
				content:
					"Willkommen auf der offiziellen Website der Volksschule Föhrenwald in Wiener Neustadt. Erfahren Sie mehr über unser Bildungsangebot, unsere Projekte und Veranstaltungen.",
			},
			{ property: "og:image", content: "/images/hero/hero-1-subtle.png" },
			{ property: "og:url", content: "https://www.xn--volksschule-fohrenwald-tec.at/" },
		],
		link: [{ rel: "canonical", href: "https://www.xn--volksschule-fohrenwald-tec.at/" }],
	})
</script>

<template>
	<NuxtLayout>
		<NuxtPage />
	</NuxtLayout>
</template>
