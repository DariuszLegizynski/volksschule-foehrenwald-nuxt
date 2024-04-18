<script setup lang="ts">
	const isBurgerActive = ref<boolean>(false)
</script>

<template>
	<nav class="fixed top-0 w-full bg-primary bg-opacity-50 z-10 py-2">
		<section class="flex justify-between items-center">
			<nuxt-img
				src="hero/logo-1.png"
				alt="logo Volksschule Föhrenwald"
				width="6rem"
				height="2rem"
				class="w-auto h-10"
			/>
			<BaseBurger
				@click="isBurgerActive = !isBurgerActive"
				:active="isBurgerActive"
			/>
		</section>
	</nav>
	<aside
		class="transform transition-transform duration-500 ease-in-out right-0 top-16 fixed bg-primary bg-opacity-50 w-full py-4 z-10"
		:class="{ '-translate-x-full': !isBurgerActive }"
	>
		<ul class="pl-4 flex flex-col items-center">
			<li class="py-2">
				<BaseButton
					variant="navbar"
					class="text-white font-semibold"
					><p>Über Uns</p></BaseButton
				>
			</li>
			<li class="py-2">
				<BaseButton
					variant="navbar"
					class="text-white font-semibold"
					><p>Aktuelles</p></BaseButton
				>
			</li>
			<li class="py-2">
				<BaseButton
					variant="navbar"
					class="text-white font-semibold"
					><p>Photos</p></BaseButton
				>
			</li>
			<li class="py-2">
				<BaseButton
					variant="navbar"
					class="text-white font-semibold"
					><p>Sidebar4</p></BaseButton
				>
			</li>
			<li class="py-2">
				<BaseButton
					variant="navbar"
					class="text-white font-semibold"
					><p>Sidebar5</p></BaseButton
				>
			</li>
		</ul>
	</aside>
</template>

