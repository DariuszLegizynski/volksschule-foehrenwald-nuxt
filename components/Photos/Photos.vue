<template>
	<article class="px-2 py-16 bg-primary">
		<section class="pb-8">
			<h1 class="text-white">Alben</h1>
			<p class="text-white">Unsere Abenteuer</p>
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
		<p class="flex flex-col items-center text-white pt-8">Alle Fotos &rarr;</p>
	</article>
</template>

