<script setup lang="ts">
	const { findOne } = useStrapi()

	const { data: impressum } = await useAsyncData("impressum", async () => {
		const response = await findOne("impressum", {
			populate: ["content", "link", "text", "btn"],
		})

		return response.data.attributes
	})
</script>

<template>
	<article class="mt-24 px-4">
		<h1 class="text-2xl pb-8 capitalize">{{ impressum?.title }}</h1>
		<section v-html="impressum?.content?.map(item => item.children.map(child => child.text).join('')).join('')"></section>
		<BaseButton :link="impressum?.link?.link" variant="navbar" class="!text-primary flex flex-col items-start pt-8">
			<small>{{ impressum?.link?.text }}</small>
		</BaseButton>
		<div class="pt-16 flex flex-col items-center">
			<BaseButton variant="comic" :link="impressum?.btn?.link"
				><p>&larr; {{ impressum?.btn?.text }}</p></BaseButton
			>
		</div>
	</article>
</template>
