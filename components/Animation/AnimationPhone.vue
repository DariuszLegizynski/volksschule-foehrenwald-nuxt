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

	const iconPhoneRef = ref<HTMLElement | null>(null)
	const iconPathPhone = ref<SVGPathElement | null>(null)

	onMounted(() => {
		let iconPathPhonelength = iconPathPhone.value.getTotalLength()

		gsap.fromTo(
			iconPathPhone.value,
			{ strokeDashoffset: iconPathPhonelength },
			{
				strokeDashoffset: 0,
				duration: 2,
				scrollTrigger: {
					trigger: iconPhoneRef.value,
				},
			}
		)
	})
</script>

<template>
	<svg
		ref="iconPhoneRef"
		:width="width"
		:height="height"
		:fill="fill"
		:stroke="stroke"
		stroke-linecap="round"
		viewBox="0 0 24 24"
	>
		<path
			ref="iconPathPhone"
			stroke-dasharray="71.06090545654297px"
			stroke-dashoffset="71.06090545654297px"
			d="M3.8 12.2 9 9 8 2H2v3a17 17 0 0 0 17 17h3v-6l-7-1-3.2 5.2"
		/>
	</svg>
</template>

