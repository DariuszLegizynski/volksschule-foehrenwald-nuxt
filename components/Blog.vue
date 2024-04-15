<script setup lang="ts">
interface Props {
  title: String
}

const {
  title
} = defineProps<Props>()

</script>

<template>
  <section>
    <h1>{{ title }}</h1>
  </section>
</template>