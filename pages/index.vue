<script setup lang="ts">
	useHead({
		title: "Startseite - Volksschule Föhrenwald",
		meta: [
			{
				name: "description",
				content:
					"Erfahren Sie mehr über die Volksschule Föhrenwald in Wiener Neustadt. Hier finden Sie aktuelle Informationen über unsere Schule, unsere Mission und unsere Werte.",
			},
			{ name: "keywords", content: "Startseite, Volksschule, Föhrenwald, Wiener Neustadt" },
		],
		link: [{ rel: "canonical", href: "https://www.xn--volksschule-fohrenwald-tec.at/" }],
	})
</script>

<template>
	<Hero />
	<AboutUs />
	<News />
	<Photos />
</template>
