<script setup lang="ts">
	useHead({
		title: "Unsere Abenteuer - Volksschule Föhrenwald in Wiener Neustadt",
		meta: [
			{
				name: "description",
				content: "Entdecken Sie unsere Foto-Galerie mit spannenden Bildern unserer Abenteuer und Veranstaltungen.",
			},
			{ name: "keywords", content: "Foto-Galerie, Abenteuer, Volksschule, Föhrenwald, Wiener Neustadt, Schule, Veranstaltungen" },
			{ property: "og:title", content: "Unsere Abenteuer - Volksschule Föhrenwald in Wiener Neustadt" },
			{ property: "og:description", content: "Entdecken Sie unsere Foto-Galerie mit spannenden Bildern unserer Abenteuer und Veranstaltungen." },
			{ property: "og:image", content: "/images/galleries/og-image.jpg" },
			{ property: "og:url", content: "https://www.xn--volksschule-fohrenwald-tec.at/gallery" },
		],
		link: [{ rel: "canonical", href: "https://www.xn--volksschule-fohrenwald-tec.at/gallery" }],
	})

	import type { FotoGallery } from "@/types/Fotos"

	const config = useRuntimeConfig()
	const strapiBaseUrl = config.public.strapi.url

	const { find } = useStrapi()

	const {
		data: fotoGalleries,
		pending,
		error,
	} = await useAsyncData("foto-galleries", async () => {
		const response = await find<FotoGallery[]>("foto-galleries", {
			populate: ["coverImage"],
		})

		return response.data
	})
</script>

<template>
	<article class="mt-32 px-2 centered-container">
		<h1 class="text-primary pb-16">Unsere Abenteuer</h1>
		<section>
			<div v-if="pending">Loading...</div>
			<div v-if="error">Error: {{ error.message }}</div>
			<div v-if="fotoGalleries" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
				<PhotosCard
					v-for="fotoGallery in fotoGalleries"
					:key="fotoGallery.id"
					:slug="fotoGallery.attributes?.slug"
					:title="fotoGallery.attributes?.title || 'No Title'"
					:shortDescription="fotoGallery.attributes?.description || 'No Description'"
					:imageSrc="
						fotoGallery.attributes?.coverImage?.data?.attributes?.url
							? `${strapiBaseUrl}${fotoGallery.attributes.coverImage.data.attributes.url}`
							: '/images/diverse/classmates-friends-bag-school-education.jpg'
					"
					:imageAlt="fotoGallery.attributes?.coverImage?.data?.attributes?.alternativeText || 'School children on adventure'"
				/>
			</div>
		</section>
		<div class="flex flex-col items-center pt-16 lg:mt-24 px-4">
			<BaseButton variant="comic" link="/">&larr; Zurück</BaseButton>
		</div>
	</article>
</template>
