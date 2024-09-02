<script setup>
	import gsap from "gsap"

	const leaf1 = ref("")
	const leaf2 = ref("")
	const leaf3 = ref("")
	const leaf4 = ref("")
	const leaf5 = ref("")
	const leaf6 = ref("")
	const leaf7 = ref("")
	const leaf8 = ref("")
	const leaf9 = ref("")
	const leaf10 = ref("")
	const leaf11 = ref("")
	const leaf12 = ref("")
	const leaf13 = ref("")
	const leaf14 = ref("")
	const leaf15 = ref("")
	const leaf16 = ref("")
	const leaf17 = ref("")
	const leaf18 = ref("")
	const leaf19 = ref("")
	const leaf20 = ref("")
	const leaf21 = ref("")
	const leaf22 = ref("")
	const leaf23 = ref("")
	const leaf24 = ref("")
	const leaf25 = ref("")
	const leaf26 = ref("")
	const leaf27 = ref("")
	const leaf28 = ref("")
	const leaf29 = ref("")
	const leaf30 = ref("")

	onMounted(() => {
		if (
			leaf1.value &&
			leaf2.value &&
			leaf3.value &&
			leaf4.value &&
			leaf5.value &&
			leaf6.value &&
			leaf7.value &&
			leaf8.value &&
			leaf9.value &&
			leaf10.value &&
			leaf11.value &&
			leaf12.value &&
			leaf13.value &&
			leaf14.value &&
			leaf15.value &&
			leaf16.value &&
			leaf17.value &&
			leaf18.value &&
			leaf19.value &&
			leaf20.value &&
			leaf21.value &&
			leaf22.value &&
			leaf23.value &&
			leaf24.value &&
			leaf25.value &&
			leaf26.value &&
			leaf27.value &&
			leaf28.value &&
			leaf29.value &&
			leaf30.value
		) {
			const leafElements = [
				leaf1,
				leaf2,
				leaf3,
				leaf4,
				leaf5,
				leaf6,
				leaf7,
				leaf8,
				leaf9,
				leaf10,
				leaf11,
				leaf12,
				leaf13,
				leaf14,
				leaf15,
				leaf16,
				leaf17,
				leaf18,
				leaf19,
				leaf20,
				leaf21,
				leaf22,
				leaf23,
				leaf24,
				leaf25,
				leaf26,
				leaf27,
				leaf28,
				leaf29,
				leaf30,
			]

			leafElements.forEach(leaf => {
				gsap.to(leaf.value, {
					y: -100,
					scrollTrigger: {
						trigger: leaf.value,
						start: "top 600px",
						end: "top top",
						scrub: 2,
						markers: true,
					},
				})
			})
		}
	})
</script>

<template>
	<section class="centered-container">
		<img ref="leaf1" class="top-[16%] left-[16%] leaf-style" src="/images/leaves/leave_1.png" />
		<img ref="leaf2" class="top-[18%] right-[24%] leaf-style" src="/images/leaves/leave_2.png" />
		<img ref="leaf3" class="top-[20%] left-[8%] leaf-style" src="/images/leaves/leave_3.png" />
		<img ref="leaf4" class="top-[22%] right-[44%] leaf-style" src="/images/leaves/leave_4.png" />
		<img ref="leaf5" class="top-[24%] left-[38%] leaf-style" src="/images/leaves/leave_5.png" />
		<img ref="leaf6" class="top-[26%] right-[14%] leaf-style" src="/images/leaves/leave_6.png" />
		<img ref="leaf7" class="top-[28%] left-[28%] leaf-style" src="/images/leaves/leave_7.png" />
		<img ref="leaf8" class="top-[30%] right-[30%] leaf-style" src="/images/leaves/leave_8.png" />
		<img ref="leaf9" class="top-[32%] left-[18%] leaf-style" src="/images/leaves/leave_9.png" />
		<img ref="leaf10" class="top-[34%] right-[22%] leaf-style" src="/images/leaves/leave_10.png" />
		<img ref="leaf11" class="top-[36%] left-[20%] leaf-style" src="/images/leaves/leave_11.png" />
		<img ref="leaf12" class="top-[38%] right-[44%] leaf-style" src="/images/leaves/leave_12.png" />
		<img ref="leaf13" class="top-[40%] left-[36%] leaf-style" src="/images/leaves/leave_3.png" />
		<img ref="leaf14" class="top-[42%] right-[36%] leaf-style" src="/images/leaves/leave_4.png" />
		<img ref="leaf15" class="top-[44%] left-[10%] leaf-style" src="/images/leaves/leave_5.png" />
		<img ref="leaf16" class="top-[46%] right-[18%] leaf-style" src="/images/leaves/leave_6.png" />
		<img ref="leaf17" class="top-[58%] right-[42%] leaf-style" src="/images/leaves/leave_7.png" />
		<img ref="leaf18" class="top-[60%] left-[22%] leaf-style" src="/images/leaves/leave_8.png" />
		<img ref="leaf19" class="top-[62%] right-[14%] leaf-style" src="/images/leaves/leave_9.png" />
		<img ref="leaf20" class="top-[64%] left-[12%] leaf-style" src="/images/leaves/leave_10.png" />
		<img ref="leaf21" class="top-[66%] right-[8%] leaf-style" src="/images/leaves/leave_11.png" />
		<img ref="leaf22" class="top-[68%] left-[12%] leaf-style" src="/images/leaves/leave_12.png" />
		<img ref="leaf23" class="top-[70%] right-[20%] leaf-style" src="/images/leaves/leave_3.png" />
		<img ref="leaf24" class="top-[72%] left-[36%] leaf-style" src="/images/leaves/leave_4.png" />
		<img ref="leaf25" class="top-[74%] right-[10%] leaf-style" src="/images/leaves/leave_5.png" />
		<img ref="leaf26" class="top-[76%] left-[18%] leaf-style" src="/images/leaves/leave_6.png" />
		<img ref="leaf27" class="top-[78%] right-[34%] leaf-style" src="/images/leaves/leave_7.png" />
		<img ref="leaf28" class="top-[80%] left-[14%] leaf-style" src="/images/leaves/leave_8.png" />
		<img ref="leaf29" class="top-[82%] right-[6%] leaf-style" src="/images/leaves/leave_9.png" />
		<img ref="leaf30" class="top-[84%] left-[12%] leaf-style" src="/images/leaves/leave_10.png" />
	</section>
</template>

<style scoped>
	.leaf-style {
		@apply size-4 absolute;
	}
</style>
