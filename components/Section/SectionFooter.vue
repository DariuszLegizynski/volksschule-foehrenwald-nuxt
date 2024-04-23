<template>
	<footer class="px-4 py-16 centered-container">
		<h1 class="pb-8 xxs:hidden text-primary">Kontakt:</h1>
		<h1 class="pb-8 hidden xxs:block text-primary text-center">
			Kontaktiere uns:
		</h1>
		<section
			class="grid grid-cols-1 gap-y-4 w-full sm:grid-cols-2 lg:pl-32 xl:grid-cols-4 xl:pl-0 xl:flex xl:justify-between"
		>
			<div class="flex gap-x-4 items-center">
				<AnimationHouse
					width="2rem"
					height="2rem"
					fill="white"
					stroke="hsl(70, 70%, 46%)"
				/>
				<p>Volksschule Föhrenwald</p>
			</div>
			<a
				href="https://maps.app.goo.gl/B8c4ogsyAt8yLZDv5"
				class="flex gap-x-4 items-center"
			>
				<AnimationMap
					width="2rem"
					height="2rem"
					fill="white"
					stroke="hsl(70, 70%, 46%)"
				/>
				<div class="flex flex-col">
					<p>Im Föhrenwald 3</p>
					<p>2700 Wiener Neustadt</p>
				</div>
			</a>
			<a
				href="tel:0262224159"
				class="flex gap-x-4 items-center"
			>
				<AnimationPhone
					width="2rem"
					height="2rem"
					fill="white"
					stroke="hsl(70, 70%, 46%)"
				/>
				<p>02622/24 159</p>
			</a>
			<a
				href="mailto:direktion@waldschule.at"
				class="flex gap-x-4 items-center"
			>
				<AnimationEmail
					width="2rem"
					height="2rem"
					fill="white"
					stroke="hsl(70, 70%, 46%)"
				/>
				<p>direktion@waldschule.at</p>
			</a>
		</section>
	</footer>
</template>

