<template>
	<article class="px-2 py-16 bg-primary">
		<section class="pb-8">
			<h1 class="text-white">Neugkeiten</h1>
			<p class="text-white">Was bei uns los ist?</p>
		</section>

		<section class="grid grid-cols-1 gap-4">
			<NewsCard
				title="Unser Schwimmbad"
				shortDescription="Im Schwimmbad können die Kinder jetzt wieder Schwimmen"
				imageSrc="diverse/swimming-pool.jpg"
				imageAlt="two siblings laying on the floor and playing"
				imageWho="Bild von Unsplash"
			/>
			<NewsCard
				title="Neues Kindereck"
				shortDescription="Ein neues Eck wo Kinder spielen können"
				imageSrc="diverse/siblings-playing-with-brain-teaser-toys.jpg"
				imageAlt="two siblings laying on the floor and playing"
				imageWho="Bild von Unsplash"
			/>
			<NewsCard
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

