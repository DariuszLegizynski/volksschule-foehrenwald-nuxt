<template>
	<article class="mt-32 px-4 mdcentered-container overflow-hidden">
		<section>
			<div class="pb-16">
				<div class="h4">Unsere Leidenschaft gilt dem lächeln,</div>
				<div class="h4">dass wir auf den Gesichtern unserer Kinder sehen.</div>
			</div>

			<p class="leading-8">
				Lehrnen durch Abenteuer, spaß und rücksicht auf andere nehmen. Und noch etwas dazuschreiben, damit es hier gut aussieht und nicht so lehr ist.
			</p>
		</section>
		<section class="grid">
			<h2 class="h2 py-8">Unser Team</h2>
			<ul class="flex gap-x-8 overflow-x-auto overflow-y-hidden min-h-fit py-4">
				<AboutUsTeacher link="/images/about/teacher/Ulrike_Menitz_BEd_Direktorin.jpg" alternativeText="nice looking teacher" />
				<AboutUsTeacher link="/images/about/teacher/Barbara_Marchhart_BEd_Klassenlehrerin_A_Klasse.jpg" alternativeText="nice looking teacher" />
				<AboutUsTeacher link="/images/about/teacher/Thomas_Metzenbauer_BEd_Integrationslehrer.jpg" alternativeText="nice looking teacher" />
				<AboutUsTeacher link="/images/about/teacher/Celine_Kutschera_BEd_Klassenlehrerin_C_Klasse.jpg" alternativeText="nice looking teacher" />
				<AboutUsTeacher link="/images/about/teacher/SOL_Iris_Frank_BEd_Integrationslehrerin.jpg" alternativeText="nice looking teacher" />
				<AboutUsTeacher link="/images/about/teacher/Christine_Beisteiner_Stützkraft.jpg" alternativeText="nice looking teacher" />
				<AboutUsTeacher link="/images/about/teacher/Sebastian_Fleischmann_BEd_Klassenlehrer_D_Klasse.jpg" alternativeText="nice looking teacher" />
				<AboutUsTeacher link="/images/about/teacher/Claudia_Della_Vedova_BEd_Integrationslehrerin.jpg" alternativeText="nice looking teacher" />
				<AboutUsTeacher link="/images/about/teacher/Sandra_Schrefl_Gneist_BEd_Klassenlehrerin_B_Klasse.jpg" alternativeText="nice looking teacher" />
				<AboutUsTeacher link="/images/about/teacher/Julia_Frank_Stützkraft.jpg" alternativeText="nice looking teacher" />
			</ul>
		</section>
		<section>
			<h2 class="h2 py-8">Unsere Kinder</h2>
			<ul class="grid gap-16">
				<AboutUsClass link="/images/about/classes/Klassenfoto_A.jpg" alternativeText="nice looking class" />
				<AboutUsClass link="/images/about/classes/Klassenfoto_B.jpg" alternativeText="nice looking class" />
				<AboutUsClass link="/images/about/classes/Klassenfoto_C.jpg" alternativeText="nice looking class" />
				<AboutUsClass link="/images/about/classes/Klassenfoto_D.jpg" alternativeText="nice looking class" />
			</ul>
		</section>
		<div class="flex flex-col items-center py-16">
			<BaseButton>&larr;Zurück</BaseButton>
		</div>
	</article>
</template>

<style scoped>
	ul > :nth-child(even) {
		/* @apply translate-y-10; */
		@apply mt-10;
	}
</style>
