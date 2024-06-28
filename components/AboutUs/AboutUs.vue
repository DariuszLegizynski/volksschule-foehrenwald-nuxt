<template>
	<article id="about-us" class="relative z-1 bg-white flex flex-col items-center text-primary py-16 px-4 gap-y-8">
		<div class="centered-container">
			<h2 class="pt-4 pb-12">Über uns</h2>
			<section class="lg:grid lg:grid-cols-3 lg:gap-x-8">
				<section class="pb-16">
					<div class="flex flex-col items-center pb-12">
						<AnimationFitness width="8rem" height="8rem" />
						<div class="h3 text-center pb-2">Bewegung</div>
						<AnimationUnderline height="36px" stroke="hsl(70, 70%, 46%)" fill="hsl(70, 70%, 46%)" stroke-width="8px" />
					</div>
					<span class="text-black"
						>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum magnam laboriosam sint maxime aliquid veritatis repudiandae accusantium nihil vitae
						veniam, dignissimos labore ut repellendus animi minima ipsum eos cum. Illum?</span
					>
				</section>
				<section class="pb-16">
					<div class="flex flex-col items-center pb-12">
						<AnimationSocial width="8rem" height="8rem" />
						<div class="h3 text-center pb-2">Soziales lernen</div>
						<AnimationUnderline height="36px" stroke="hsl(70, 70%, 46%)" fill="hsl(70, 70%, 46%)" stroke-width="8px" />
					</div>
					<span class="text-black"
						>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Porro, quidem quo earum sit repellat, eius distinctio qui quaerat nihil nisi nam neque
						error, facere dolor laborum veniam aut voluptatum sed.</span
					>
				</section>
				<section>
					<div class="flex flex-col items-center pb-12">
						<BaseIcons type="date" width="8rem" height="8rem" />
						<BaseIcons type="eko" width="8rem" height="8rem" />
						<div class="h3 text-center pb-2">Ökologie</div>

						<AnimationUnderline height="36px" stroke="hsl(70, 70%, 46%)" fill="hsl(70, 70%, 46%)" stroke-width="8px" />
					</div>
					<span class="text-black"
						>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati iste, rem distinctio, dolorem velit praesentium magni accusamus est blanditiis
						eaque temporibus, sapiente error optio officia nisi eveniet? Minima, dolores natus.</span
					>
				</section>
			</section>
		</div>
		<BaseButton class="mt-8" link="/about" variant="comic"><p>über uns &rarr;</p></BaseButton>
	</article>
</template>
