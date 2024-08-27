<script setup lang="ts">
	const currentYear = new Date().getFullYear()
</script>

<template>
	<footer class="grid grid-rows-2 bg-primary text-white p-2 gap-y justify-items-center sm:flex sm:gap-x-8 sm:justify-center md:gap-x-16 lg:gap-x-24">
		<span class="text-[0.8rem] w-fit">Copyright&nbsp;&copy;&nbsp;{{ currentYear }} Volksschule&nbsp;Föhrenwald</span>
		<span class="text-[0.8rem] w-fit">Webdesign&nbsp;by Dariusz&nbsp;Legizynski</span>
	</footer>
</template>
