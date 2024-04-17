<script setup lang="ts">
	const props = defineProps({
		variant: {
			type: String,
			default: "",
		},
	})

	const { variant } = toRefs(props)

	const classes = computed(() => {
		const baseClasses =
			"border-2 px-4 py-2 pointer transition ease-in-out rounded-3xl"
		if (variant.value === "outline") {
			return `${baseClasses} bg-transparent border-white text-white hover:bg-primary hover:text-secondary`
		}

		if (variant.value === "navbar") {
			return "bg-transparent text-tertiary transition ease-in-out pointer hover:text-white"
		}

		return `${baseClasses} bg-primary border-primary text-white hover:text-secondary`
	})
</script>

<template>
	<button :class="classes">
		<slot></slot>
	</button>
</template>

