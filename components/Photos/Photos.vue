<script setup lang="ts">
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

	const newestAlbums = computed(() => {
		const fotoGalleriesArray = fotoGalleries.value

		if (Array.isArray(fotoGalleriesArray) && fotoGalleriesArray.length != 0) {
			const sortedNews = fotoGalleriesArray?.sort((a, b) => b.id - a.id)
			return sortedNews?.slice(0, 3)
		}

		return fotoGalleriesArray
	})
</script>

<template>
	<article id="photos" class="px-2 py-16 bg-primary">
		<div class="centered-container">
			<section class="pb-8 pl-4 md:pb-16">
				<h2 class="text-white">Unsere Abenteuer</h2>
				<p class="text-white pt-4">auf Bildern</p>
			</section>
			<div v-if="pending">Loading...</div>
			<div v-if="newestAlbums?.length === 0 && !pending">Keine Alben gefunden</div>
			<div v-if="error">Error: {{ error.message }}</div>
			<section v-if="newestAlbums" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<PhotosCard
					v-for="fotoGallery in newestAlbums"
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
			</section>
			<section class="flex justify-center pt-16 md:pt-32 md:pb-16">
				<BaseButton link="/fotoGallery" variant="comic-white"><p>Alle Fotos &rarr;</p></BaseButton>
			</section>
		</div>
	</article>
</template>
