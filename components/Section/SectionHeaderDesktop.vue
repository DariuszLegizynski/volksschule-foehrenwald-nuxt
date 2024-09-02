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

	const showNavbar = ref<boolean>(false)
</script>

<template>
	<nav class="hidden fixed top-0 w-full bg-primary bg-opacity-60 z-10 py-1 pr-4 md:block">
		<section class="mx-auto max-w-[80rem] 2xl:max-w-[96rem]">
			<section class="flex !justify-between items-center px-4">
				<NuxtLink @click="showNavbar = false" to="/">
					<NuxtImg
						:src="`${strapiBaseUrl}${header?.logo?.data?.attributes?.url}`"
						:alt="`${strapiBaseUrl}/${header?.logo?.data?.attributes?.alternativeText}` || 'logo Volksschule Föhrenwald'"
						width="6rem"
						height="2rem"
						class="w-auto h-10 pl-1"
					/>
				</NuxtLink>
				<ul class="relative pl-4 flex items-center gap-x-4 xl:gap-x-8">
					<li class="flex gap-x-4 py-2" v-for="headerLink in header?.headers" :key="headerLink?.id">
						<template v-if="headerLink.subHeader">
							<div @click="showNavbar = !showNavbar" class="a flex items-center text-white cursor-pointer">
								{{ headerLink.name }}
								<BaseIcons type="rarr" fill="white" width="1.4rem" height="1.4rem" :rotation="showNavbar ? true : false" />
							</div>
							<div v-if="showNavbar" class="absolute top-[51.5px] left-1 flex flex-col bg-white bg-opacity-90 px-3">
								<BaseButton
									v-for="subLink in headerLink.subHeader"
									:key="subLink.id"
									:link="`/${subLink.link}`"
									@click="showNavbar = false"
									variant="navbar"
									class="py-1.5 capitalize !text-primary flex items-center justify-between gap-x-2"
									>{{ subLink.name }}
									<BaseIcons type="rlink" fill="hsl(70, 70%, 46%)" stroke="hsl(70, 70%, 46%)" width="1.4rem" height="1.4rem" />
								</BaseButton>
							</div>
						</template>
						<template v-else>
							<BaseButton
								v-for="headerItem in headerLink.header"
								:key="headerItem.id"
								:link="`/${headerItem?.link}`"
								variant="navbar"
								class="text-white capitalize"
								>{{ headerItem?.name }}</BaseButton
							>
						</template>
					</li>
				</ul>
			</section>
		</section>
	</nav>
</template>
