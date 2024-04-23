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

	const iconHouseRef = ref<HTMLElement | null>(null)
	const iconPathUpper = ref<SVGPathElement | null>(null)
	const iconPathLower = ref<SVGPathElement | null>(null)

	onMounted(() => {
		let iconPathUpperlength = iconPathUpper.value.getTotalLength()

		gsap.fromTo(
			iconPathUpper.value,
			{ strokeDashoffset: iconPathUpperlength },
			{
				strokeDashoffset: 0,
				duration: 2,
				scrollTrigger: {
					trigger: iconHouseRef.value,
				},
			}
		)

		let iconPathLowerlength = iconPathLower.value.getTotalLength()

		gsap.fromTo(
			iconPathLower.value,
			{ strokeDashoffset: iconPathLowerlength },
			{
				strokeDashoffset: 0,
				duration: 2,
				scrollTrigger: {
					trigger: iconHouseRef.value,
				},
			}
		)
	})
</script>

<template>
	<svg
		ref="iconHouseRef"
		:width="width"
		:height="height"
		:fill="fill"
		stroke-linecap="round"
		viewBox="0 0 24 24"
	>
		<path
			ref="iconPathUpper"
			:stroke="stroke"
			stroke-dasharray="25.612497329711914px"
			stroke-dashoffset="25.612497329711914px"
			d="m2 10 10-8 10 8"
		/>
		<path
			ref="iconPathLower"
			:stroke="stroke"
			stroke-dasharray="43px"
			stroke-dashoffset="43px"
			d="M4 8.5V22h16V8.5"
		/>
	</svg>
</template>

