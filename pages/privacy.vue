<script setup lang="ts">
	const { findOne } = useStrapi()

	const { data: privacyPolicyData } = await useAsyncData("privacy-policy", async () => {
		const response = await findOne("privacy-policy", {
			populate: ["content", "link", "text", "btn"],
		})

		return response.data.attributes
	})
</script>

<template>
	<article class="mt-24 px-4">
		<h1 class="text-2xl pb-4 capitalize">{{ privacyPolicyData?.title }}</h1>
		<section v-html="privacyPolicyData?.content?.map(item => item.children.map(child => child.text).join('')).join('')"></section>
		<BaseButton :link="privacyPolicyData?.link?.link" variant="navbar" class="!text-primary flex flex-col items-start pt-8">
			<small>{{ privacyPolicyData?.link?.text }}</small>
		</BaseButton>
		<div class="pt-16 flex flex-col items-center">
			<BaseButton variant="comic" :link="privacyPolicyData?.btn?.link"
				><p>&larr; {{ privacyPolicyData?.btn?.text }}</p></BaseButton
			>
		</div>
	</article>
</template>
