<script setup lang="ts">
	import { gsap } from "gsap"

	const text1 = ref("")
	const text2 = ref("")
	const text3 = ref("")
	const text4 = ref("")
	const text5 = ref("")

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

	onMounted(() => {
		if (
			text1.value &&
			text2.value &&
			text3.value &&
			text4.value &&
			text5.value
		) {
			const textElements = [text1, text2]

			textElements.forEach(textElement => {
				const textElementLetters = Array.from(textElement.value.innerText)
				textElement.value.innerHTML = textElementLetters
					.map(letter => `<span>${letter}</span>`)
					.join("")

				gsap.to(textElement.value.querySelectorAll("span"), {
					y: -700,
					stagger: 0.003,
					scrollTrigger: {
						trigger: textElement.value,
						start: "top 600px",
						end: "bottom top",
						scrub: 0.2,
						markers: true,
					},
				})

				gsap.to([text3.value, text4.value, text5.value], {
					y: -700,
					stagger: 0.002,
					delay: 10,
					scrollTrigger: {
						trigger: textElement.value,
						start: "bottom 500px",
						end: "bottom top",
						scrub: 0.2,
						markers: true,
					},
				})
			})
		}

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
			leaf10.value
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
			]

			leafElements.forEach(leaf => {
				gsap.to(leaf.value, {
					y: -100,
					scrollTrigger: {
						trigger: leaf.value,
						start: "bottom 300px",
						end: "bottom top",
						scrub: 20,
						markers: true,
					},
				})
			})
		}
	})
</script>

<template>
	<article class="hero-image w-screen min-h-screen relative">
		<section>
			<img
				ref="leaf1"
				class="top-1/3 left-8 leaf-style"
				src="@/assets/images/leaves/leave_1.png"
			/>
			<img
				ref="leaf2"
				class="top-[40%] left-24 leaf-style"
				src="@/assets/images/leaves/leave_2.png"
			/>
			<img
				ref="leaf3"
				class="top-[45%] left-16 leaf-style"
				src="@/assets/images/leaves/leave_3.png"
			/>
			<img
				ref="leaf4"
				class="top-[36%] left-36 leaf-style"
				src="@/assets/images/leaves/leave_4.png"
			/>
			<img
				ref="leaf5"
				class="top-[60%] left-40 leaf-style"
				src="@/assets/images/leaves/leave_5.png"
			/>
			<img
				ref="leaf6"
				class="top-[72%] right-8 leaf-style"
				src="@/assets/images/leaves/leave_6.png"
			/>
			<img
				ref="leaf7"
				class="top-[55%] right-16 leaf-style"
				src="@/assets/images/leaves/leave_7.png"
			/>
			<img
				ref="leaf8"
				class="top-[78%] right-24 leaf-style"
				src="@/assets/images/leaves/leave_8.png"
			/>
			<img
				ref="leaf9"
				class="top-[38%] right-36 leaf-style"
				src="@/assets/images/leaves/leave_9.png"
			/>
			<img
				ref="leaf10"
				class="top-2/3 right-40 leaf-style"
				src="@/assets/images/leaves/leave_10.png"
			/>
		</section>
		<section class="h-screen w-screen relative">
			<div class="h-screen">
				<h1
					ref="text1"
					class="text-5xl text-white flex items-end absolute z-[1] top-3/4"
				>
					Volksschule
				</h1>
				<h1
					ref="text2"
					class="text-5xl text-white flex items-end z-[2] absolute top-[80%]"
				>
					Föhrenwald
				</h1>
				<p
					ref="text3"
					class="text-xl text-white flex items-end absolute z-[3] top-[85%]"
				>
					Die einzigartige Schule im bezauberndem Föhrenwald
				</p>
				<p
					ref="text4"
					class="text-xl text-white flex items-end absolute z-[4] top-[90%]"
				>
					mit uns wird ihr Kind abenteuerlich gelehrt:
				</p>
				<p
					ref="text5"
					class="text-xl text-white flex items-end absolute z-[5] top-[95%]"
				>
					Bewegung - Soziales Lernen - Ökologie
				</p>
			</div>
		</section>
	</article>
</template>

<style scoped>
	.hero-image {
		background: url(@/assets/images/hero/modern_school_4.png) no-repeat center
			center/auto fixed;
	}
	.text-border {
		text-shadow: -1.4px 0 black, 0 1.4px black, 1.4px 0 black, 0 -1.4px black;
	}
	.text-shadow {
		@apply drop-shadow-[0px_8px_8px_rgba(0,0,0,0.9)];
	}
	.bg-opacity {
		background-color: rgba(0, 0, 0, 0.3);
		padding: 20px;
		border-radius: 15px;
	}
	.leaf-style {
		@apply size-4 absolute;
	}
</style>

