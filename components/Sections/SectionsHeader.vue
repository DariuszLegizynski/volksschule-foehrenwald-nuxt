<script setup lang="ts">
	const isBurgerActive = ref<boolean>(false)
</script>

<template>
	<nav class="fixed top-0 left-0 right-0 bg-primary bg-opacity-50 z-10">
		<ul class="flex justify-between items-center pl-2">
			<img
				src="@/assets/images/hero/logo.png"
				alt="logo"
				width="6rem"
				height="2rem"
				class="w-auto h-8"
			/>
			<BaseBurger
				@click="isBurgerActive = !isBurgerActive"
				:active="isBurgerActive"
			/>

			<!-- <li>
				<BaseButton variant="transparent"><p>Über Uns</p></BaseButton>
			</li>
			<li>
				<BaseButton variant="transparent"><p>Aktuelles</p></BaseButton>
			</li>
			<li>
				<BaseButton variant="transparent"><p>Photos</p></BaseButton>
			</li>
			<li>
				<BaseButton variant="transparent"><p>Header4</p></BaseButton>
			</li>
			<li>
				<BaseButton variant="transparent"><p>Header5</p></BaseButton>
			</li> -->
		</ul>
	</nav>
</template>

