<script setup lang="ts">
	import type { AboutUsTeacher } from "@/types/AboutTeacher"
	import gsap from "gsap"
	let mm = gsap.matchMedia()

	const { findOne } = useStrapi()

	const { data: teacherData } = await useAsyncData("about-teacher", async () => {
		const response = await findOne<AboutUsTeacher>("about-teacher", {
			populate: ["content", "team", "team.title", "team.teachers", "team.teachers.profile", "btn"],
		})

		return response.data.attributes
	})

	const teacherRefs = ref<HTMLElement[]>([])

	const assignTeacherRef = (ref: Element | ComponentPublicInstance | null) => {
		if (ref instanceof HTMLElement) {
			teacherRefs.value.push(ref)
		}
	}

	onMounted(() => {
		mm.add("(min-width: 768px)", () => {
			teacherRefs.value.forEach((teacher, index) => {
				const direction = index % 2 === 0 ? 1 : -1

				gsap.fromTo(
					teacher,
					{
						y: 0,
					},
					{
						y: () => `${direction * 50}px`,
						ease: "none",
						scrollTrigger: {
							trigger: teacher,
							start: "top center",
							end: "bottom top",
							scrub: true,
						},
					}
				)
			})
		})
	})

	useHead({
		title: "Über uns - Volksschule Föhrenwald in Wiener Neustadt",
		meta: [
			{
				name: "description",
				content:
					"Erfahren Sie mehr über das engagierte Team der Volksschule Föhrenwald in Wiener Neustadt und unsere Leidenschaft für das Lernen und die Entwicklung unserer Kinder.",
			},
			{ name: "keywords", content: "Über uns, Team, Lehrer, Volksschule, Föhrenwald, Wiener Neustadt, Bildung" },
			{ property: "og:title", content: "Über uns - Volksschule Föhrenwald in Wiener Neustadt" },
			{
				property: "og:description",
				content:
					"Erfahren Sie mehr über das engagierte Team der Volksschule Föhrenwald in Wiener Neustadt und unsere Leidenschaft für das Lernen und die Entwicklung unserer Kinder.",
			},
			{ property: "og:image", content: "/images/about/hero-image.jpg" },
			{ property: "og:url", content: "https://www.xn--volksschule-fohrenwald-tec.at/about" },
		],
		link: [{ rel: "canonical", href: "https://www.xn--volksschule-fohrenwald-tec.at/about" }],
	})
</script>

<template>
	<article class="mt-32 overflow-hidden">
		<section class="px-4 md-centered-container">
			<div class="pb-16 text-primary text-center">
				<div class="h3">{{ teacherData?.content?.title }}</div>
			</div>
			<p class="max-w-[39rem] mx-auto">
				{{ teacherData?.content?.description }}
			</p>
		</section>
		<section id="team" class="grid pb-32 px-4 md:px-1 md-centered-container lg:px-4">
			<h2 class="pt-16 pb-8 text-primary text-center">{{ teacherData?.team?.title }}</h2>
			<ul id="teacher" class="flex gap-x-8 overflow-x-auto overflow-y-hidden min-h-fit py-12 md:grid md:grid-cols-4 md:overflow-x-hidden">
				<AboutUsTeacher v-for="teacher in teacherData?.team?.teachers" :key="teacher?.id" :teacher="teacher" :assignRef="assignTeacherRef" />
			</ul>
		</section>
		<div class="flex flex-col items-center pt-16 lg:mt-24 px-4">
			<BaseButton link="/#about-us" variant="comic-white"
				><p>&larr; {{ teacherData?.btn?.text }}</p></BaseButton
			>
		</div>
	</article>
</template>

<style scoped>
	.md-centered-container {
		@apply md:flex md:flex-col md:items-center md:max-w-[80rem] md:mx-auto;
	}
	#teacher > :nth-child(even) {
		@apply mt-10;
	}
	ul > * {
		scrollbar-width: thin;
		scrollbar-color: hsl(70, 50%, 31%) #dfe9eb;
	}
	ul::-webkit-scrollbar {
		width: 10px;
	}
	ul::-webkit-scrollbar-track {
		border-radius: 5px;
		background-color: hsl(70, 70%, 46%);
	}

	ul::-webkit-scrollbar-track:hover {
		background-color: hsl(70, 70%, 46%);
	}

	ul::-webkit-scrollbar-track:active {
		background-color: hsl(70, 70%, 46%);
	}

	ul::-webkit-scrollbar-thumb {
		border-radius: 5px;
		background-color: hsl(70, 50%, 31%);
	}

	ul::-webkit-scrollbar-thumb:hover {
		background-color: hsl(70, 50%, 31%);
	}

	ul::-webkit-scrollbar-thumb:active {
		background-color: hsl(70, 50%, 31%);
	}
</style>
