<script setup lang="ts">
	import type { News as newsItem } from "@/types/News"

	const config = useRuntimeConfig()
	const strapiBaseUrl = config.public.strapi.url

	const { find } = useStrapi()

	const {
		data: news,
		pending,
		error,
	} = await useAsyncData("news", async () => {
		const response = await find<newsItem[]>("news", {
			populate: ["image"],
		})

		return response.data
	})
</script>

<template>
	<article class="mt-32 px-2 centered-container">
		<h1 class="text-primary pb-16">Neugkeiten</h1>
		<section>
			<div v-if="pending">Loading...</div>
			<div v-if="error">Error: {{ error.message }}</div>
			<div v-if="news" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 3xl:grid-cols-4">
				<NewsCard
					v-for="newsItem in news"
					:key="newsItem.id"
					:slug="newsItem.attributes?.slug"
					:title="newsItem.attributes?.title || 'No Title'"
					:shortDescription="newsItem.attributes?.description || 'No Description'"
					:imageSrc="
						newsItem.attributes?.image?.data?.attributes?.formats.medium.url
							? `${strapiBaseUrl}${newsItem.attributes.image.data.attributes.formats.medium.url}`
							: '/images/diverse/classmates-friends-bag-school-education.jpg'
					"
					:imageAlt="newsItem.attributes?.image?.data?.attributes?.alternativeText || 'School children on adventure'"
				/>
			</div>
		</section>
		<div class="flex flex-col items-center pt-16 lg:mt-24 px-4">
			<BaseButton variant="comic" link="/">&larr; Zurück</BaseButton>
		</div>
	</article>
</template>
