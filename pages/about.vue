<script setup lang="ts">
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

	import gsap from "gsap"
	let mm = gsap.matchMedia()

	const teachers = [
		{ link: "/images/about/teacher/Ulrike_Menitz_BEd_Direktorin.jpg", alternativeText: "nice looking teacher" },
		{ link: "/images/about/teacher/Barbara_Marchhart_BEd_Klassenlehrerin_A_Klasse.jpg", alternativeText: "nice looking teacher" },
		{ link: "/images/about/teacher/Thomas_Metzenbauer_BEd_Integrationslehrer.jpg", alternativeText: "nice looking teacher" },
		{ link: "/images/about/teacher/Celine_Kutschera_BEd_Klassenlehrerin_C_Klasse.jpg", alternativeText: "nice looking teacher" },
		{ link: "/images/about/teacher/SOL_Iris_Frank_BEd_Integrationslehrerin.jpg", alternativeText: "nice looking teacher" },
		{ link: "/images/about/teacher/Christine_Beisteiner_Stützkraft.jpg", alternativeText: "nice looking teacher" },
		{ link: "/images/about/teacher/Sebastian_Fleischmann_BEd_Klassenlehrer_D_Klasse.jpg", alternativeText: "nice looking teacher" },
		{ link: "/images/about/teacher/Claudia_Della_Vedova_BEd_Integrationslehrerin.jpg", alternativeText: "nice looking teacher" },
		{ link: "/images/about/teacher/Sandra_Schrefl_Gneist_BEd_Klassenlehrerin_B_Klasse.jpg", alternativeText: "nice looking teacher" },
		{ link: "/images/about/teacher/Julia_Frank_Stützkraft.jpg", alternativeText: "nice looking teacher" },
	]

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
</script>

<template>
	<article class="mt-32 overflow-hidden">
		<section class="px-4 md-centered-container">
			<div class="pb-16 text-primary">
				<div class="h3">Unsere Leidenschaft gilt dem lächeln,</div>
				<div class="h3">dass wir auf den Gesichtern unserer Kinder sehen.</div>
			</div>
			<p class="max-w-[39rem] mx-auto">
				Lehrnen durch Abenteuer, spaß und rücksicht auf andere nehmen. Und noch etwas dazuschreiben, damit es hier gut aussieht und nicht so lehr ist.
			</p>
		</section>
		<section class="grid pb-32 px-4 md:px-1 md-centered-container lg:px-4">
			<h2 class="pt-16 pb-8 text-primary">Unser Team</h2>
			<ul id="teacher" class="flex gap-x-8 overflow-x-auto overflow-y-hidden min-h-fit py-12 md:grid md:grid-cols-4 md:overflow-x-hidden">
				<AboutUsTeacher
					v-for="(teacher, index) in teachers"
					:key="index"
					:link="teacher.link"
					:alternativeText="teacher.alternativeText"
					:assignRef="assignTeacherRef"
				/>
			</ul>
		</section>
		<section class="bg-primary pb-16">
			<div class="px-4 md-centered-container">
				<h2 class="h2 pt-20 pb-16 text-white">Unsere Kinder</h2>
				<ul class="grid gap-16 md:grid-cols-2">
					<AboutUsClass link="/images/about/classes/Klassenfoto_A.jpg" alternativeText="nice looking class" />
					<AboutUsClass link="/images/about/classes/Klassenfoto_B.jpg" alternativeText="nice looking class" />
					<AboutUsClass link="/images/about/classes/Klassenfoto_C.jpg" alternativeText="nice looking class" />
					<AboutUsClass link="/images/about/classes/Klassenfoto_D.jpg" alternativeText="nice looking class" />
				</ul>
			</div>
			<div class="flex flex-col items-center pt-16 lg:mt-24 px-4">
				<BaseButton variant="comic-white">&larr; Zurück</BaseButton>
			</div>
		</section>
	</article>
</template>

<style>
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
