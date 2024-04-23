<script setup lang="ts">
	import gsap from "gsap"

	interface Props {
		width?: string
		height?: string
		fill?: string
		stroke?: string
	}

	const {
		width = "24px",
		height = "24px",
		fill = "white",
		stroke = "black",
	} = defineProps<Props>()

	const iconMapRef = ref<HTMLElement | null>(null)
	const iconPathMap = ref<SVGPathElement | null>(null)
	const iconRectEmail = ref<SVGPathElement | null>(null)

	onMounted(() => {
		let iconPathMapLength = iconPathMap.value.getTotalLength()

		gsap.fromTo(
			iconPathMap.value,
			{ strokeDashoffset: iconPathMapLength },
			{
				strokeDashoffset: 0,
				duration: 3,
				scrollTrigger: {
					trigger: iconMapRef.value,
				},
			}
		)
	})
</script>

<template>
	<svg
		ref="iconMapRef"
		:width="width"
		:height="height"
		:fill="fill"
		:stroke="stroke"
		stroke-linecap="round"
		viewBox="0 0 24 24"
	>
		<path
			ref="iconPathMap"
			stroke-dasharray="111.92082214355469px"
			stroke-dashoffset="111.92082214355469px"
			d="m22 19-6 3-8-3-6 3V5l6-3 8 3 6-3v17zM8 2v17M16 5v17"
		/>
	</svg>
</template>

