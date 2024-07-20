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

	const newestNews = computed(() => {
		const newsArray = news.value

		if (Array.isArray(newsArray) && newsArray.length != 0) {
			const sortedNews = newsArray?.sort((a, b) => b.id - a.id)
			return sortedNews?.slice(0, 3)
		}

		return newsArray
	})
</script>

<template>
	<article id="news" class="px-2 py-16">
		<div class="centered-container">
			<section class="pb-8 md:pb-16">
				<h2 class="text-primary">Neugkeiten</h2>
				<p class="pt-4">Was bei uns los ist</p>
			</section>
			<div v-if="pending">Loading...</div>
			<div v-if="error">Error: {{ error.message }}</div>
			<section v-if="newestNews" class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<NewsCard
					v-for="newsItem in newestNews"
					:key="newsItem.attributes?.slug"
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
			</section>
			<section class="flex justify-center mt-16 md:mt-24 md:mb-24">
				<BaseButton link="/news" variant="comic"><p>Alle Neugkeiten &rarr;</p></BaseButton>
			</section>
		</div>
	</article>
</template>
