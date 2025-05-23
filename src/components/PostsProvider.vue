<template>
  <slot />
</template>

<script setup lang="ts">
const router = useRouter()
const routes: any[] = router.getRoutes()
  .filter(i => i.path.startsWith('/posts') && i.meta.frontmatter.date && !i.meta.frontmatter.draft)
  .filter(i => !i.path.endsWith('.html'))
  .map(i => ({
    path: i.path,
    title: i.meta.frontmatter.title,
    date: i.meta.frontmatter.date,
    tags: i.meta.frontmatter.tags,
    categories: i.meta.frontmatter.categories
  }))

const posts = computed(() =>
  [...routes || []]
    .sort((a, b) => +new Date(b.date) - +new Date(a.date))
)

provide('posts', posts)
</script>
