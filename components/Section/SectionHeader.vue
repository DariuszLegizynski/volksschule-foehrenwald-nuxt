<script setup lang="ts">
	import type { Header } from "@/types/Header"
	const { findOne } = useStrapi()

	const { data: header } = await useAsyncData("header", async () => {
		const response = await findOne<Header>("header", {
			populate: ["headers.header", "logo", "headers.subHeader"],
		})

		return response.data.attributes
	})

	const config = useRuntimeConfig()
	const strapiBaseUrl = config.public.strapi.url

	const isBurgerActive = ref<boolean>(false)
	const showNavbar = ref<boolean>(false)

	const hideNavbar = () => {
		isBurgerActive.value = false
		showNavbar.value = false
	}

	const target = ref(null)
	onClickOutside(target, () => {
		showNavbar.value = false
		isBurgerActive.value = false
	})
</script>

<template>
	<nav class="fixed top-0 w-full bg-primary bg-opacity-60 z-10 py-2 md:hidden">
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
		ref="target"
		class="transform transition-transform duration-500 ease-in-out right-0 top-16 fixed bg-primary bg-opacity-60 w-full z-10 md:hidden"
		:class="{ '-translate-x-full': !isBurgerActive }"
	>
		<ul class="relative pl-4 flex flex-col items-start gap-x-4 xl:gap-x-8">
			<li class="flex flex-col gap-x-4" v-for="headerLink in header?.headers" :key="headerLink?.id">
				<template v-if="headerLink.subHeader">
					<div @click="showNavbar = !showNavbar" class="a flex items-center text-white pb-2">
						{{ headerLink.name }}
						<BaseIcons type="rarr" fill="white" width="1.4rem" height="1.4rem" :rotation="showNavbar ? true : false" />
					</div>
					<div v-if="showNavbar" class="flex flex-col pl-8">
						<BaseButton
							v-for="subLink in headerLink.subHeader"
							:key="subLink.id"
							:link="`/${subLink.link}`"
							@click="hideNavbar"
							variant="navbar"
							class="py-1.5 capitalize flex items-center justify-between gap-x-4 pb-2"
							>{{ subLink.name }}
							<BaseIcons type="rlink" fill="white" stroke="white" width="1.4rem" height="1.4rem" />
						</BaseButton>
					</div>
				</template>
				<template v-else>
					<BaseButton
						v-for="headerItem in headerLink.header"
						:key="headerItem.id"
						:link="`/${headerItem?.link}`"
						@click="hideNavbar"
						variant="navbar"
						class="text-white capitalize pb-2"
						>{{ headerItem?.name }}</BaseButton
					>
				</template>
			</li>
		</ul>
	</aside>
</template>
