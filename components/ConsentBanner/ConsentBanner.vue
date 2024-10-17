<script setup lang="ts">
	import { ref, onMounted } from "vue"
	import Cookies from "js-cookie"

	const isBannerVisible = ref(false)

	const isCookie = Cookies.get("cookieConsent")

	onMounted(() => {
		console.log({ isCookie })
		isBannerVisible.value = !isCookie
	})

	const handleConsent = () => {
		Cookies.set("cookieConsent", "true", { expires: 365 })
		isBannerVisible.value = false
	}
</script>

<template>
	<article v-if="isBannerVisible" class="fixed bottom-0 w-full bg-primary p-4 z-50">
		<div class="max-w-screen-lg mx-auto">
			<p class="text-white pb-8 text-base leading-6">
				Um ein optimales Nutzererlebnis zu ermöglichen, werden Cookies gesetzt. Durch die weitere Nutzung dieser Website wird der
				<NuxtLink to="/privacy" class="text-contrast">Datenschutzerklärung</NuxtLink> zugestimmt.
			</p>
			<div class="flex justify-center">
				<BaseButton variant="comic-white" @click="handleConsent"> Akzeptieren </BaseButton>
			</div>
		</div>
	</article>
</template>
