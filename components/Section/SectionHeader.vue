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
	<nav class="fixed top-0 w-full bg-primary bg-opacity-50 z-10 py-2 md:hidden">
		<section class="max-w-[80rem] mx-auto">
			<section class="flex !justify-between items-center">
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
				<BaseBurger @click="isBurgerActive = !isBurgerActive" :active="isBurgerActive" />
			</section>
		</section>
	</nav>
	<aside
		class="transform transition-transform duration-500 ease-in-out right-0 top-16 fixed bg-primary bg-opacity-50 w-full py-4 z-10 md:hidden"
		:class="{ '-translate-x-full': !isBurgerActive }"
	>
		<ul class="pl-4 flex flex-col items-center md:flex-row">
			<li class="py-2" v-for="headerLink in header?.header" :key="headerLink?.id">
				<BaseButton :link="`/${headerLink?.link}`" variant="navbar" class="text-white font-semibold" @click="hideNavbar"
					><p class="capitalize">{{ headerLink?.name }}</p></BaseButton
				>
			</li>
		</ul>
	</aside>
</template>
