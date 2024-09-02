<script setup lang="ts">
	import type { AboutUsClasses } from "@/types/AboutClasses"
	const { findOne } = useStrapi()

	const { data: classesData } = await useAsyncData("about-class", async () => {
		const response = await findOne<AboutUsClasses>("about-class", {
			populate: ["content", "kids", "kids.classes", "kids.classes.foto", "btn"],
		})

		return response.data.attributes
	})

	useHead({
		title: "Über uns - Volksschule Föhrenwald in Wiener Neustadt",
		meta: [
			{
				name: "description",
				content:
					"Erfahren Sie mehr über das engagierte Team der Volksschule Föhrenwald in Wiener Neustadt und unsere Leidenschaft für das Lernen und die Entwicklung unserer Kinder.",
			},
			{ name: "keywords", content: "Über uns, Team, Lehrer, Volksschule, Föhrenwald, Wiener Neustadt, Bildung" },
			{ property: "og:title", content: "Über uns - Volksschule Föhrenwald in Wiener Neustadt" },
			{
				property: "og:description",
				content:
					"Erfahren Sie mehr über das engagierte Team der Volksschule Föhrenwald in Wiener Neustadt und unsere Leidenschaft für das Lernen und die Entwicklung unserer Kinder.",
			},
			{ property: "og:image", content: "/images/about/hero-image.jpg" },
			{ property: "og:url", content: "https://www.xn--volksschule-fohrenwald-tec.at/about" },
		],
		link: [{ rel: "canonical", href: "https://www.xn--volksschule-fohrenwald-tec.at/about" }],
	})
</script>

<template>
	<article class="mt-32 overflow-hidden">
		<section class="px-4 md-centered-container">
			<div class="pb-16 text-primary text-center">
				<div class="h3">{{ classesData?.content?.title }}</div>
			</div>
			<p class="text-center">
				{{ classesData?.content?.description }}
			</p>
		</section>
		<section id="class" class="bg-primary pb-16">
			<div class="px-4 md-centered-container">
				<h2 class="h2 pt-20 pb-16 text-white text-center">{{ classesData?.kids?.title }}</h2>
				<ul class="grid gap-16 md:grid-cols-2">
					<AboutUsClass v-for="classItem in classesData?.kids?.classes" :key="classItem.id" :classProp="classItem" />
				</ul>
			</div>
		</section>
		<div class="flex flex-col items-center pt-16 lg:mt-24 px-4">
			<BaseButton link="/#about-us" variant="comic-white">&larr; {{ classesData?.btn?.text }}</BaseButton>
		</div>
	</article>
</template>
