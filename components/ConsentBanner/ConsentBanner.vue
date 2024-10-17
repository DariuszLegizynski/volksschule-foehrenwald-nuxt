<script setup lang="ts">
	import { ref, onMounted } from "vue"
	import { useRouter } from "vue-router"
	import Cookies from "js-cookie"

	// State management with ref
	const isBannerVisible = ref(false)

	// Get router for navigation
	const router = useRouter()

	// Check if the cookie is set
	const isCookie = Cookies.get("cookieConsent")

	// Lifecycle hook to initialize the banner visibility
	onMounted(() => {
		console.log({ isCookie })
		isBannerVisible.value = !isCookie // Show banner if cookie is not set
	})

	// Handle user consent
	const handleConsent = () => {
		Cookies.set("cookieConsent", "true", { expires: 30 }) // Set cookie with 30-day expiry
		isBannerVisible.value = false // Hide banner
	}
</script>

<template>
	<!-- Render the banner only if it is visible -->
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
