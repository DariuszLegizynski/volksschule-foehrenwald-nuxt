<script setup lang="ts">
import type { Blog } from '@/types/Blog'

const { find } = useStrapi()

const { data: blogs } = await useAsyncData(
  'blogs',
  async () => { 
    const response = await find<Blog[]>('blogs')

    return response.data
  },
)
</script>

<template>
  <article class="mt-16">
    <div v-for="blog in blogs" :key="blog.id">
      <Blog :title="blog.attributes.title" />
    </div>
  </article>
</template>