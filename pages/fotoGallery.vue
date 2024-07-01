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
	<article class="mt-32 px-2 centered-container">
		<h1 class="text-primary pb-16">Unsere Abenteuer</h1>
		<section>
			<div v-if="pending">Loading...</div>
			<div v-if="error">Error: {{ error.message }}</div>
			<div v-if="fotoGalleries" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
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
		<div class="flex flex-col items-center pt-16 lg:mt-24 px-4">
			<BaseButton variant="comic" link="/">&larr; Zurück</BaseButton>
		</div>
	</article>
</template>
