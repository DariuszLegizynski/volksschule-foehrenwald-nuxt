<script setup lang="ts">
	import type { FotoGalleryAttributes } from "@/types/Fotos"
	const { find } = useStrapi()

	const config = useRuntimeConfig()
	const strapiBaseUrl = config.public.strapi.url

	const route = useRoute()
	const slug = route.params.photos as string

	const isModalVisible = ref<boolean>(false)
	const modalImageUrl = ref<string>("")

	const { data: fotoGallery } = await useAsyncData("foto-galleries", async () => {
		const response = await find<FotoGalleryAttributes>("foto-galleries", {
			filters: {
				slug: slug,
			},
			populate: ["images"],
		})

		return response.data[0].attributes
	})

	const enlargeImage = (url: string) => {
		modalImageUrl.value = `${strapiBaseUrl}${url}`
		isModalVisible.value = true
	}
	const closeModal = () => {
		isModalVisible.value = false
		modalImageUrl.value = ""
	}

	useHead({
		title: fotoGallery?.title,
		meta: [
			{ property: "og:title", content: fotoGallery?.title },
			{ property: "og:url", content: `${strapiBaseUrl}/photos/${route.params.slug}` },
		],
	})
</script>

<template>
	<article className="pt-16 mx-auto centered-container">
		<h1 class="text-primary py-16">{{ fotoGallery?.title }}</h1>
		<section className="px-2 columns-1 xs:columns-2 md:columns-3 lg:columns-4">
			<NuxtImg
				class="py-2 cursor-pointer"
				loading="lazy"
				v-for="image in fotoGallery?.images?.data"
				:key="image.id"
				:src="`${strapiBaseUrl}${image.attributes.formats.medium.url}`"
				:alt="image.attributes.alternativeText || 'School children on adventure'"
				@click="enlargeImage(image.attributes.url)"
			/>
		</section>
		<div class="pt-16 flex flex-col items-center">
			<BaseButton variant="comic" link="/fotoGallery">&larr; Zurück</BaseButton>
		</div>

		<section v-if="isModalVisible" class="fixed top-0 left-0 w-full h-full bg-black bg-opacity-80 flex justify-center items-center z-10" @click="closeModal">
			<div class="relative max-w-[90%] max-h-[90%]" @click.stop>
				<div @click="closeModal" class="fadeIn absolute right-2 top-2 cursor-pointer">
					<BaseIcons type="close" fill="white" width="2rem" height="2rem" />
				</div>

				<NuxtImg :src="modalImageUrl" alt="Enlarged image" class="w-auto max-h-[80vh]" />
			</div>
		</section>
	</article>
</template>
