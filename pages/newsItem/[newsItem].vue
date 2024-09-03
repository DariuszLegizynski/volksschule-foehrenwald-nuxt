<script setup lang="ts">
	import type { News as newsItem } from "@/types/News"
	const { find } = useStrapi()

	const config = useRuntimeConfig()
	const strapiBaseUrl = config.public.strapi.url

	const route = useRoute()
	const slug = route.params.newsItem as string

	const {
		data: news,
		pending,
		error,
	} = await useAsyncData("news", async () => {
		const response = await find<newsItem>("news", {
			filters: {
				slug: slug,
			},
			populate: ["image"],
		})

		return response.data[0].attributes
	})

	const date = computed(() => news?.value?.createdAt?.split("T")[0])

	useHead({
		title: news?.title,
		meta: [
			{ property: "og:title", content: news?.title },
			{ property: "og:image", content: `${strapiBaseUrl}${news.image?.data.attributes.url}` },
			{ property: "og:url", content: `${strapiBaseUrl}/newsItem/${route.params.slug}` },
		],
	})
</script>

<template>
	<article className="pt-16 px-2 mx-auto centered-container">
		<div v-if="pending">Loading...</div>
		<div v-if="error">Error: {{ error.message }}</div>
		<section v-if="news">
			<h1 class="text-primary py-16">{{ news?.title }}</h1>
			<div class="flex justify-end py-2 text-tertiary">
				<span>{{ date }}</span>
			</div>
			<NuxtImg
				class="py-2 cursor-pointer mx-auto sm:w-3/4 lg:w-2/3"
				:key="news.image?.data.id"
				loading="lazy"
				:src="`${strapiBaseUrl}${news.image?.data.attributes?.url}`"
				:alt="news.image?.data.attributes.alternativeText || 'School children on adventure'"
			/>
			<p class="z-10 text-center pt-4" v-html="news?.content?.map(item => item.children.map(child => child.text).join('')).join('')"></p>
			<div class="pt-16 flex flex-col items-center">
				<BaseButton variant="comic" link="/news"><p>&larr; Zurück</p></BaseButton>
			</div>
		</section>
	</article>
</template>
