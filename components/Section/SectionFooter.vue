<script setup lang="ts">
	import type { Contact as ContactType } from "@/types/Contact"
	const { findOne } = useStrapi()

	const { data: contact } = await useAsyncData("contact", async () => {
		const response = await findOne<ContactType>("contact", {
			populate: ["contact"],
		})

		return response.data.attributes
	})
</script>

<template>
	<footer class="px-4 py-16 centered-container">
		<h2 class="pb-8 xxs:hidden text-primary after:content-[':']">{{ contact?.title_small_screen }}</h2>
		<h2 class="pb-8 hidden xxs:block text-primary text-center lg:pb-16 xl:pb-24 xl:pt-24 after:content-[':']">{{ contact?.title_larger_screen }}</h2>
		<section class="grid grid-cols-1 gap-y-4 w-full sm:grid-cols-2 lg:pl-32 2xl:grid-cols-4 2xl:pl-0">
			<div class="flex gap-x-4 items-center">
				<AnimationHouse width="2rem" height="2rem" fill="white" stroke="hsl(70, 70%, 46%)" />
				<p>{{ contact?.name }}</p>
			</div>
			<a href="https://maps.app.goo.gl/B8c4ogsyAt8yLZDv5" class="flex gap-x-4 items-center">
				<AnimationMap width="2rem" height="2rem" fill="white" stroke="hsl(70, 70%, 46%)" />
				<div class="flex flex-col">
					<p>{{ contact?.street }}</p>
					<p>{{ contact?.city }}</p>
				</div>
			</a>
			<a :href="`tel:${contact?.phone}`" class="flex gap-x-4 items-center">
				<AnimationPhone width="2rem" height="2rem" fill="white" stroke="hsl(70, 70%, 46%)" />
				<p>{{ contact?.phone }}</p>
			</a>
			<a :href="`mailto:${contact?.email}`" class="flex gap-x-4 items-center">
				<AnimationEmail width="2rem" height="2rem" fill="white" stroke="hsl(70, 70%, 46%)" />
				<p>{{ contact?.email }}</p>
			</a>
		</section>
	</footer>
</template>
