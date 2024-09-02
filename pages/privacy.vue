<script setup lang="ts">
	const { findOne } = useStrapi()

	const { data: privacyPolicyData } = await useAsyncData("privacy-policy", async () => {
		const response = await findOne("privacy-policy", {
			populate: ["content", "link", "text"],
		})

		return response.data.attributes
	})

	console.log(privacyPolicyData)
</script>

<template>
	<article class="mt-24 px-4">
		<section v-html="privacyPolicyData?.content?.map(item => item.children.map(child => child.text).join('')).join('')"></section>
		<BaseButton :link="privacyPolicyData?.link" variant="navbar" class="!text-primary flex flex-col items-center pt-8"
			><small>{{ privacyPolicyData?.text }}</small></BaseButton
		>
	</article>
</template>
