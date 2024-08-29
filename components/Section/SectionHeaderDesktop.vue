<script setup lang="ts">
	import type { Header } from "@/types/Header"
	const { findOne } = useStrapi()

	const { data: header } = await useAsyncData("header", async () => {
		const response = await findOne<Header>("header", {
			populate: ["header", "header.logo", "header.header"],
		})

		return response.data.attributes.header
	})

	const config = useRuntimeConfig()
	const strapiBaseUrl = config.public.strapi.url

	const isBurgerActive = ref<boolean>(false)

	const hideNavbar = () => {
		isBurgerActive.value = false
	}
</script>

<template>
	<nav class="hidden fixed top-0 w-full bg-primary bg-opacity-50 z-10 py-2 md:block">
		<section class="mx-auto max-w-[80rem] 2xl:max-w-[96rem]">
			<section class="flex !justify-between items-center px-4">
				<NuxtLink to="/">
					<NuxtImg
						:src="`${strapiBaseUrl}${header?.logo?.data?.attributes?.url}`"
						:alt="`${strapiBaseUrl}/${header?.logo?.data?.attributes?.alternativeText}` || 'logo Volksschule Föhrenwald'"
						width="6rem"
						height="2rem"
						class="w-auto h-10 pl-1"
						@click="hideNavbar"
					/>
				</NuxtLink>
				<ul class="pl-4 flex items-center gap-x-4 xl:gap-x-8">
					<li class="py-2" v-for="headerLink in header?.header" :key="headerLink?.id">
						<BaseButton :link="`/${headerLink?.link}`" variant="navbar" class="text-white font-semibold" @click="hideNavbar"
							><p class="capitalize">{{ headerLink?.name }}</p></BaseButton
						>
					</li>
				</ul>
			</section>
		</section>
	</nav>
</template>
