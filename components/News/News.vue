<template>
	<article id="news" class="px-2 py-16">
		<div class="centered-container">
			<section class="pb-8">
				<h1 class="text-primary">Neugkeiten</h1>
				<p class="pt-4">Was bei uns los ist</p>
			</section>
			<section class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<NewsCard
					title="Unser Schwimmbad"
					shortDescription="Im Schwimmbad gibt es jetzt Meerwasser"
					date="21.03.2024"
					imageSrc="/images/diverse/swimming-pool.jpg"
					imageAlt="two siblings laying on the floor and playing"
					imageWho="Bild von Unsplash"
				/>
				<NewsCard
					title="Neues Kindereck"
					shortDescription="Neues Eck zum Austoben (und noch mehr Aufräumen)"
					date="12.2.2024"
					imageSrc="/images/diverse/siblings-playing-with-brain-teaser-toys.jpg"
					imageAlt="two siblings laying on the floor and playing"
					imageWho="Bild von Unsplash"
				/>
				<NewsCard
					title="Schulstart"
					shortDescription="Wir freuen uns auf das neue Schuljahr!"
					date="11.1.2024"
					imageSrc="/images/diverse/classmates-friends-bag-school-education.jpg"
					imageAlt="children with schoolbags standing at a table"
					imageWho="Bild von Unsplash"
				/>
			</section>
			<section class="flex justify-center mt-16">
				<BaseButton variant="comic">Alle Neugkeiten &rarr;</BaseButton>
			</section>
		</div>
	</article>
</template>
