<script setup lang="ts">
	const props = defineProps({
		active: {
			type: Boolean,
			default: false,
		},
	})

	const { active } = toRefs(props)
</script>

<template>
	<div class="burger">
		<div class="burger-stick" :class="{ active }" />
	</div>
</template>

<style scoped>
	.burger {
		width: 3rem;
		height: 3rem;
		display: flex;
		position: relative;
		justify-content: center;
		align-items: center;
		cursor: pointer;
	}

	.burger-stick {
		@apply w-9 h-[0.2rem] bg-white transition-all duration-500 ease-in-out rounded;
	}

	.burger-stick::before,
	.burger-stick::after {
		@apply content-[''] w-9 h-[0.2rem] absolute bg-white transition-all duration-500 ease-in-out rounded;
	}

	.burger-stick::before {
		transform: translate(0px, -10px);
	}

	.burger-stick::after {
		transform: translate(0px, 10px);
	}

	.active {
		@apply bg-transparent;
	}

	.active::before {
		@apply rotate-[45deg];
	}

	.active::after {
		@apply rotate-[-45deg];
	}
</style>
