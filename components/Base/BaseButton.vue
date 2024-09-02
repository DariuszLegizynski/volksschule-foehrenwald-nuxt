<script setup lang="ts">
	const props = defineProps({
		variant: {
			type: String,
			default: "",
		},
		link: {
			type: String,
			default: "/",
		},
	})

	const { variant, link } = toRefs(props)

	const classes = computed(() => {
		const baseClasses = "border-2 px-4 py-2 pointer transition ease-in-out rounded-3xl"
		if (variant.value === "outline") {
			return `${baseClasses} bg-tertiary bg-opacity-30 border-white text-white hover:bg-primary hover:text-secondary`
		}

		if (variant.value === "navbar") {
			return "bg-transparent text-tertiary transition ease-in-out pointer text-white capitalize"
		}

		if (variant.value === "comic") {
			return `${baseClasses} bg-transparent border-primary text-white hover:text-secondary`
		}

		return `${baseClasses} bg-primary border-white text-white hover:text-secondary`
	})
</script>

<template>
	<NuxtLink
		v-if="variant === 'comic'"
		:to="link"
		class="flex flex-col items-center justify-center px-0 py-0 size-fit bg-white border-0 border-l-2 border-b-2 border-primary relative rounded-lg"
	>
		<div
			class="border-2 border-primary py-2 px-2 text-white bg-primary rounded-lg uppercase font-bold tracking-wider transform translate-x-1 -translate-y-1 2xl:px-6 2xl:py-4 2xl:border-4"
		>
			<slot></slot>
		</div>
	</NuxtLink>
	<NuxtLink
		v-else-if="variant === 'comic-white'"
		:to="link"
		class="flex flex-col items-center justify-center px-0 py-0 size-fit bg-primary border-0 border-l-2 border-b-2 border-white relative rounded-lg"
	>
		<div
			class="border-2 border-white py-2 px-2 text-primary bg-white rounded-lg uppercase font-bold tracking-wider transform translate-x-1 -translate-y-1 2xl:px-6 2xl:py-4 2xl:border-4"
		>
			<slot></slot>
		</div>
	</NuxtLink>
	<NuxtLink v-else :to="link" :class="classes">
		<slot></slot>
	</NuxtLink>
</template>
