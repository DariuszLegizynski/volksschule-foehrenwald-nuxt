<template>
	<article class="px-2 py-8 bg-primary">
		<section class="pb-8">
			<h1 class="text-white">Unsere Abenteuer</h1>
			<p class="text-white">auf Bildern</p>
		</section>

		<section class="grid grid-cols-1 gap-4">
			<PhotosCard
				title="Schwimmen"
				shortDescription=""
				imageSrc="diverse/swimming-pool.jpg"
				imageAlt="two siblings laying on the floor and playing"
				imageWho="Bild von Unsplash"
			/>
			<PhotosCard
				title="Kindereck"
				shortDescription="Spaß im Kindereck"
				imageSrc="diverse/siblings-playing-with-brain-teaser-toys.jpg"
				imageAlt="two siblings laying on the floor and playing"
				imageWho="Bild von Unsplash"
			/>
			<PhotosCard
				title="Schulstart"
				shortDescription="Wir freuen uns auf das neue Schuljahr!"
				imageSrc="diverse/classmates-friends-bag-school-education.jpg"
				imageAlt="children with schoolbags standing at a table"
				imageWho="Bild von Unsplash"
			/>
		</section>
		<section class="flex justify-center py-16">
			<BaseButton variant="comic-white">Alle Fotos &rarr;</BaseButton>
		</section>
	</article>
</template>

