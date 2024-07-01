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
</script>

<template>
	<article class="mt-32 px-2">
		<h1 class="text-primary pb-16">Unsere Abenteuer</h1>
		<section>
			<div v-if="pending">Loading...</div>
			<div v-if="error">Error: {{ error.message }}</div>
			<div v-if="fotoGalleries" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<PhotosCard
					v-for="fotoGallery in fotoGalleries"
					:key="fotoGallery.id"
					:title="fotoGallery.attributes?.title || 'No Title'"
					:shortDescription="fotoGallery.attributes?.description || 'No Description'"
					:imageSrc="
						fotoGallery.attributes?.coverImage?.data?.attributes?.url
							? `${strapiBaseUrl}${fotoGallery.attributes.coverImage.data.attributes.url}`
							: '/images/diverse/classmates-friends-bag-school-education.jpg'
					"
					:imageAlt="fotoGallery.attributes?.coverImage?.data?.attributes?.alternativeText || 'No Alt Text'"
				/>
			</div>
		</section>
	</article>
</template>
