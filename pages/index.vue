<script setup lang="ts">
	// import type { LandingPageAttributes } from "@/types/LandingPage"
	const { findOne } = useStrapi()

	const { data: landingPage } = await useAsyncData("landing-page", async () => {
		const response = await findOne("landing-page", {
			populate: ["hero", "hero.background_media", "hero.btn_left", "hero.btn_right", "about_us", "news", "foto_gallery", "contact"],
		})

		return response.data.attributes
	})

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
	<Hero :hero="landingPage?.hero" />
	<AboutUs :aboutUs="landingPage?.about_us" />
	<News :news="landingPage?.news" />
	<Photos :fotos="landingPage?.foto_gallery" />
</template>
