<template>
  <ListPosts />
</template>

<script lang="ts" setup>
import { usePostsStore } from '~/store/post'

const route = useRoute()
const postsStore = usePostsStore()

const currentPage = computed(() => {
  const pageParam = (route.params as any).page as string | undefined
  return pageParam ? Number.parseInt(pageParam, 10) : 1
})

onMounted(() => {
  postsStore.setPage(currentPage.value)
})
</script>
