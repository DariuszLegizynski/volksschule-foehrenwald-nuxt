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

		if (variant.value === "comic") {
			return `${baseClasses} bg-transparent border-primary text-white hover:text-secondary`
		}

		return `${baseClasses} bg-primary border-primary text-white hover:text-secondary`
	})
</script>

<template>
	<NuxtLink
		v-if="variant === 'comic'"
		to="/"
		class="flex flex-col items-center justify-center px-0 py-0 size-fit bg-white border-0 border-l-2 border-b-2 border-primary relative rounded-lg"
		:class="classes"
	>
		<div
			class="border-2 border-primary py-2 px-2 text-white bg-primary rounded-lg uppercase font-bold tracking-wider transform translate-x-1 -translate-y-1"
		>
			<slot></slot>
		</div>
	</NuxtLink>
	<NuxtLink
		v-else
		to="/"
		:class="classes"
	>
		<slot></slot>
	</NuxtLink>
</template>

<style scoped>
	.button-74 {
		background-color: #fbeee0;
		border: 2px solid #422800;
		border-radius: 30px;
		box-shadow: #422800 4px 4px 0 0;
		color: #422800;
		cursor: pointer;
		display: inline-block;
		font-weight: 600;
		font-size: 18px;
		padding: 0 18px;
		line-height: 50px;
		text-align: center;
		text-decoration: none;
		user-select: none;
		-webkit-user-select: none;
		touch-action: manipulation;
	}

	.button-74:hover {
		background-color: #fff;
	}

	.button-74:active {
		box-shadow: #422800 2px 2px 0 0;
		transform: translate(2px, 2px);
	}
</style>

