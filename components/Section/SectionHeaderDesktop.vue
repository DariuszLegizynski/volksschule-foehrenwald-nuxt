<script setup lang="ts">
	const isBurgerActive = ref<boolean>(false)

	const hideNavbar = () => {
		isBurgerActive.value = false
	}
</script>

<template>
	<nav class="fixed top-0 w-full bg-primary bg-opacity-50 z-10 py-2">
		<section class="max-w-[80rem] mx-auto">
			<section class="flex !justify-between items-center px-4">
				<NuxtLink to="/">
					<NuxtImg src="/images/hero/logo-1.png" alt="logo Volksschule Föhrenwald" width="6rem" height="2rem" class="w-auto h-10 pl-1" @click="hideNavbar" />
				</NuxtLink>
				<ul class="pl-4 flex items-center gap-x-4">
					<li class="py-2">
						<BaseButton link="/about" variant="navbar" class="text-white font-semibold" @click="hideNavbar"><p>Über Uns</p></BaseButton>
					</li>
					<li class="py-2">
						<BaseButton variant="navbar" class="text-white font-semibold" @click="hideNavbar"><p>Aktuelles</p></BaseButton>
					</li>
					<li class="py-2">
						<BaseButton variant="navbar" class="text-white font-semibold" @click="hideNavbar"><p>Photos</p></BaseButton>
					</li>
					<li class="py-2">
						<BaseButton variant="navbar" class="text-white font-semibold" @click="hideNavbar"><p>Sidebar4</p></BaseButton>
					</li>
					<li class="py-2">
						<BaseButton variant="navbar" class="text-white font-semibold" @click="hideNavbar"><p>Sidebar5</p></BaseButton>
					</li>
				</ul>
			</section>
		</section>
	</nav>
</template>
