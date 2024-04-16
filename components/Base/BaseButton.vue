<script setup lang="ts">
	const props = defineProps({
		variant: {
			type: String,
			default: "",
		},
	})

	const { variant } = toRefs(props)

	const classes = computed(() => {
		const baseClasses = "border-4 px-4 py-2 pointer transition ease-in-out"
		if (variant.value === "outline") {
			return `${baseClasses} bg-white border-white text-primary hover:bg-primary hover:text-secondary`
		}

		if (variant.value === "transparent") {
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

