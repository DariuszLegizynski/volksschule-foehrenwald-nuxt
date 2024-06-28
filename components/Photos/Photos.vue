<template>
	<article class="px-2 py-16 bg-primary">
		<div class="centered-container">
			<section class="pb-8 pl-4 md:pb-16">
				<h2 class="text-white">Unsere Abenteuer</h2>
				<p class="text-white pt-4">auf Bildern</p>
			</section>
			<section class="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
				<PhotosCard
					title="Schwimmen"
					shortDescription=""
					imageSrc="/images/diverse/swimming-pool.jpg"
					imageAlt="two siblings laying on the floor and playing"
					imageWho="Bild von Unsplash"
				/>
				<PhotosCard
					title="Kindereck"
					shortDescription="Spaß im Kindereck"
					imageSrc="/images/diverse/siblings-playing-with-brain-teaser-toys.jpg"
					imageAlt="two siblings laying on the floor and playing"
					imageWho="Bild von Unsplash"
				/>
				<PhotosCard
					title="Schulstart"
					shortDescription="Wir freuen uns auf das neue Schuljahr!"
					imageSrc="/images/diverse/classmates-friends-bag-school-education.jpg"
					imageAlt="children with schoolbags standing at a table"
					imageWho="Bild von Unsplash"
				/>
			</section>
			<section class="flex justify-center pt-16 md:pt-32 md:pb-16">
				<BaseButton variant="comic-white"><p>Alle Fotos &rarr;</p></BaseButton>
			</section>
		</div>
	</article>
</template>
