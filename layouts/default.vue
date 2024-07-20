<script setup lang="ts">
	useHead({
		meta: [{ name: "google-site-verification", content: "vYITq60uc3y_MKUDRwiX7Hp8inW7G3pI6vfDcAz4S78" }],
	})
</script>

<template>
	<article>
		<SectionHeader />
		<SectionHeaderDesktop />
		<slot></slot>
		<SectionFooter />
	</article>
</template>
