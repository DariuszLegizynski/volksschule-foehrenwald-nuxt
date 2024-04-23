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

	const iconEmailRef = ref<HTMLElement | null>(null)
	const iconPathEmail = ref<SVGPathElement | null>(null)
	const iconRectEmail = ref<SVGPathElement | null>(null)

	onMounted(() => {
		let iconPathEmailLength = iconPathEmail.value.getTotalLength()

		gsap.fromTo(
			iconPathEmail.value,
			{ strokeDashoffset: iconPathEmailLength },
			{
				strokeDashoffset: 0,
				duration: 2,
				scrollTrigger: {
					trigger: iconEmailRef.value,
				},
			}
		)

		let iconRectEmailLength = iconRectEmail.value.getTotalLength()

		gsap.fromTo(
			iconRectEmail.value,
			{ strokeDashoffset: iconRectEmailLength },
			{
				strokeDashoffset: 0,
				duration: 2,
				scrollTrigger: {
					trigger: iconEmailRef.value,
				},
			}
		)
	})
</script>

<template>
	<svg
		ref="iconEmailRef"
		:width="width"
		:height="height"
		:fill="fill"
		:stroke="stroke"
		stroke-linecap="round"
		viewBox="0 0 24 24"
	>
		<rect
			ref="iconRectEmail"
			stroke-dasharray="72px"
			stroke-dashoffset="72px"
			width="20"
			height="16"
			x="2"
			y="4"
			rx="0"
		/>
		<path
			ref="iconPathEmail"
			stroke-dasharray="24.413110733032227px"
			stroke-dashoffset="24.413110733032227px"
			d="m2 7 10 7 10-7"
		/>
	</svg>
</template>

