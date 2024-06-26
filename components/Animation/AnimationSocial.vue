<script setup lang="ts">
	import gsap from "gsap"

	interface Props {
		width?: string
		height?: string
	}

	const { width = "24px", height = "24px" } = defineProps<Props>()

	const ball = ref<HTMLElement | null>(null)

	onMounted(() => {
		ball.value = document.querySelector(".ball")

		const introAnim = gsap.timeline({ paused: true })
		introAnim.from(ball.value, { y: 0, x: 0 }, 0)

		const nextAnim = gsap.timeline({ paused: true })
		nextAnim.to(
			ball.value,
			{ duration: 4, y: 140, x: 140, repeat: 1, yoyo: true },
			0.5
		)

		const fullanim = gsap.timeline({ paused: true })
		fullanim.add(introAnim.play(), 0)
		fullanim.add(nextAnim.repeat(-1).play(), 3)

		fullanim.play()
	})
</script>

<template>
	<svg
		:width="width"
		:height="height"
		xmlns="http://www.w3.org/2000/svg"
		viewBox="0 0 1278 1170"
	>
		<g
			fill="none"
			fill-rule="evenodd"
			transform="translate(1)"
		>
			<path
				fill="#FFDFD7"
				fill-rule="nonzero"
				d="m66.5 1060.1-7.2 41.4-.6 8.5 27.7 6.3 6.5-8 13.1-58.5z"
			/>
			<path
				fill="#37B37F"
				fill-rule="nonzero"
				d="M59.3 1101.5s-4.8.8-5.5 5.9c-.7 5.1-4 27.2-4 27.2s-2.2 6.5 13.5 9.6c15.7 3.1 91.6 17.7 91.6 17.7s.7-9.7-4.5-18.1c-12.4-20.1-57.5-35.5-57.5-35.5s-6.6 3.8-18.5 1.5-15.1-8.3-15.1-8.3Z"
			/>
			<path
				fill="#283444"
				fill-rule="nonzero"
				d="M80.5 695.1s-16.9 36.2-12.4 81.6c11.6 116.3-24.3 309.6-24.3 309.6l69.9 11.4s40.2-242.4 46.4-281.7c6.2-39.3 13.9-120.8 13.9-120.8H80.5v-.1Z"
			/>
			<path
				fill="#FFDFD7"
				fill-rule="nonzero"
				d="M790.4 416.9s-32-16.1-42.8-32.4c-10.8-16.3-.9-31 5.7-32.3 6.6-1.3 31.7 24.9 31.7 24.9s-4.2-13.1 1.5-15.9c5.7-2.8 18.5 37.1 18.5 37.1l-14.6 18.6Z"
			/>
			<path
				fill="#283444"
				fill-rule="nonzero"
				d="M985.3 510.8s-66.6-29.5-103.5-51.5c-35.5-21.2-76.5-62.1-76.5-62.1l-16.8 18.7s1 2.1 1.6 3.5c6.7 14.9 101.7 114 182.7 144.4l12.5-53Z"
			/>
			<path
				fill="#F1F2F7"
				fill-rule="nonzero"
				d="M109.8 536.4s13.1-74 89.6-70.4c76.6 3.5 98.1 175.1 210.4 157.9 112.3-17.2 90.7-28.5 174.6-81.8 83.9-53.3 217.7 3.4 295.9 154.2 78.2 150.8 223.4 10.6 359.4 122.1 136.1 111.5-131.5 251.5-343.7 153.4s-478.4 17-578.1-13c-99.7-30-245-243.2-208.1-422.4Z"
			/>
			<path
				fill="hsl(70, 70%, 46%)"
				fill-rule="nonzero"
				d="M614.5 1027.1s-99.1-141.4-98.9-227.4c.2-86 92.1-96.2 98.9 24.6 6.8 120.7 0 202.8 0 202.8ZM614.5 1027.1s11.9-136.4 85-175.5c73.1-39.1 94.1 14.1 87.9 29.2-6.3 15-172.9 146.3-172.9 146.3ZM614.5 1027.1s-43-56.5-98.9-59c-55.9-2.6 5.5 38.2 98.9 59Z"
			/>
			<path
				stroke="#FFF"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="3"
				d="m614.5 1027.1-60.1-231.3M719.9 886.7c-59 41.6-105.4 140.4-105.4 140.4s-51-37.2-91.5-45.5"
			/>
			<path
				stroke="#CED5E5"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="3"
				d="M878.2 1163.2h383.2"
			/>
			<path
				fill="hsl(69, 34%, 18%)"
				fill-rule="nonzero"
				d="M1005.6 1126.8s1 2.1 2.5 7.8c1.4 5.8 2.6 16.8 2.6 16.8l-32.4 10.8c-13.7 4.6-28.1 6.9-42.6 6.9h-8.2s5.9-15.3 19.5-24.4c13.6-9.1 31.7-14.9 31.7-14.9s8.8 3.4 14.2 2.7c5.3-.7 11.3-4.1 12.7-5.7ZM1125.4 1105.2s1.5 1.8 4.1 7.1c2.6 5.3 6.1 15.9 6.1 15.9s-27.4 16.8-50.1 27c-12.4 5.6-24.1 7.8-27.5 7.9 0 0 2.5-16.2 13.9-28s27.8-21.3 27.8-21.3 9.3 1.5 14.4-.4 10.3-6.4 11.3-8.2Z"
			/>
			<path
				fill="#FFDFD7"
				fill-rule="nonzero"
				d="m201.8 1090.4 9 31.7 4.2 11.3h28.1l2.1-11.3-11.6-57.4z"
			/>
			<path
				fill="#283444"
				fill-rule="nonzero"
				d="m173.3 701.7 90.1 405.3h-71.3S85.1 779.4 78.8 746.8c-6.2-32.6.1-54.6.1-54.6l94.4 9.5Z"
			/>
			<path
				stroke="#CED5E5"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="3"
				d="M192.1 1107S85.1 779.4 78.8 746.8c-6.2-32.6.1-54.6.1-54.6"
			/>
			<path
				fill="#CED5E5"
				fill-rule="nonzero"
				d="m1090.7 753 38.2 354.4s-13.3 10-37.2 11.2l-26.6-103-63.8-258.5c0-.1 61.3-27.3 89.4-4.1Z"
			/>
			<path
				fill="#FFDFD7"
				fill-rule="nonzero"
				d="m344 339 15-12.3 12-41.4s6.7-4.3 4 18.7c0 0 15.7-19 25.9-25.8 10.2-6.8 17.7 20.3 11.6 30.5-4.2 7-54.2 47.8-54.2 47.8L344 339Z"
			/>
			<circle
				class="ball"
				cx="524"
				cy="190.9"
				r="190.5"
				fill="#E6D720"
				fill-rule="nonzero"
			/>
			<path
				fill="#FFDFD7"
				fill-rule="nonzero"
				d="m372.1 350.3 15-12.3 12-41.4s6.7-4.3 4 18.7c0 0 15.7-19 25.9-25.8 10.2-6.8 17.7 20.3 11.6 30.5-4.2 7-54.2 47.8-54.2 47.8l-14.3-17.5ZM129 466.7s5.4-19.5 5.5-34.6l16.4 7.6 3.9 29.3-25.8-2.3Z"
			/>
			<path
				fill="#52CB96"
				fill-rule="nonzero"
				d="m168.2 467.4 173.3-130.8s13.7 2.2 20.9 16.5L191.5 504.7s-23.3-2.6-23.3-37.3Z"
			/>
			<path
				fill="#52CB96"
				fill-rule="nonzero"
				d="M133.4 464.1s-26.4 7.7-49.3 78.2-32.9 174-32.9 174 30.6-1.7 150.2 4.5l-1.1-176.3L387 370.7s-2.8-17.1-16.9-23.1L216.4 465.1 190 479.5c.1-.1-34.5-25-56.6-15.4Z"
			/>
			<path
				fill="#FFDFD7"
				fill-rule="nonzero"
				d="M134.4 435.8s-17-6.6-33.3-39.6c-23.5-47.4 2.3-64.2 27.9-69.3 26.8-5.3 37.7 37.9 44.4 61.4 6.6 23.5 11.3 36.4 5.5 41.8-5.9 5.5-18.1 11.6-27.4 13.6-9.4 2.1-17.1-7.9-17.1-7.9Z"
			/>
			<path
				fill="#283444"
				fill-rule="nonzero"
				d="M134.4 435.8s-25.7-7.8-38-33.2c-12.3-25.4-17.6-46.5-2.7-60.2 14.9-13.7 14.3-27.2 45.9-26.2 31.7 1 24.1 26.4 19.6 31.4S142 359.4 142 359.4l9.6 37.1-4.7 2.9s-.6-11.5-8-15.8c-7.4-4.3-15 3.5-8 17.8 6.9 14.3 5 22 3.5 34.4Z"
			/>
			<path
				fill="#CED5E5"
				fill-rule="nonzero"
				d="M974.3 768.3v359.9s14.2 10.9 30.6 1.1c16.3-9.8 94.9-393.7 94.9-393.7s-96.2 0-125.5 32.7Z"
			/>
			<path
				fill="#FFDFD7"
				fill-rule="nonzero"
				d="M760.9 492.9s-32-16.1-42.8-32.4c-10.8-16.3-.9-31 5.7-32.3 6.6-1.3 31.7 24.9 31.7 24.9s-4.2-13.1 1.5-15.9c5.7-2.8 18.5 37.1 18.5 37.1l-14.6 18.6Z"
			/>
			<path
				fill="#FFDFD7"
				fill-rule="nonzero"
				d="M946.2 394.4s-.4 43.5 8.3 66.5c8.7 23.1 21 20.4 44.5 4.2 23.5-16.3 18.6-37.4 17.5-50.6-1.1-13.2-9.4-40.1-34.6-43.1-25.2-3-33.5 13.5-35.7 23Z"
			/>
			<path
				fill="#FFDFD7"
				fill-rule="nonzero"
				d="M985.3 466.3s6.4 12.8 2.4 35l27.1-3.4s-13.1-32.4-14.3-46.8l-15.2 15.2Z"
			/>
			<path
				fill="#FFC022"
				fill-rule="nonzero"
				d="M946.2 394.4s4.4 18.1 25.6 14.9c0 0 13.1 61.9 39.1 80.9 0 0 61.4-7.3 73.6-25.2 0 0-52.4-59.8-66.9-81.4-14.5-21.5-38.1-26.1-52.8-18.7-14.7 7.4-22.6 19-18.6 29.5Z"
			/>
			<path
				fill="#283444"
				fill-rule="nonzero"
				d="M761 494.1s122 86.6 211.5 116.3l10.4-76.1s-89-16-125.6-29.6c-36.6-13.6-79.4-30.9-79.4-30.9s-18.9 2.6-16.9 20.3Z"
			/>
			<path
				fill="#283444"
				fill-rule="nonzero"
				d="M955.4 788.1s16.4-121.7 17-160.5c.6-38.7-5.1-124.2 25.5-132.8 30.6-8.6 52.8 53.8 69.7 108.8 16.1 52.2 51 132.2 51 132.2s-34 35-81.6 44.3c-47.6 9.3-81.6 8-81.6 8Z"
			/>
			<path
				fill="#37B37F"
				fill-rule="nonzero"
				d="M210.8 1122.1s-4.6 1.8-4.2 6.9c.4 5.1 1.5 27.4 1.5 27.4s-.8 6.8 15.1 6.7c16-.1 93.3-.7 93.3-.7s-1.2-9.6-7.9-16.8c-16.1-17.3-63.4-23.5-63.4-23.5s-5.7 5-17.9 5.1c-12.1.1-16.5-5.1-16.5-5.1Z"
			/>
			<path
				stroke="#CED5E5"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="3"
				d="M982.9 534.3s-89-16-125.6-29.6c-36.6-13.6-79.4-30.9-79.4-30.9"
			/>
			<path
				stroke="#CED5E5"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-width="3"
				d="M975 532.8s3.5-13.8 8.8-24.8M.5 1163.2h383.2"
			/>
			<path
				fill="#CED5E5"
				fill-rule="nonzero"
				d="M620.1 1161.9h-15.7c-42 0-76-34-76-76v-58.8h167.8v58.8c-.1 42-34.1 76-76.1 76Z"
			/>
		</g>
	</svg>
</template>

