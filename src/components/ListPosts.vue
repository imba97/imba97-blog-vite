<template>
  <div size-full flex flex-col>
    <ul h-96>
      <li
        v-for="post in paginatedPosts"
        :key="post.path"
      >
        <RouterLink :to="post.path">
          <div fbc gap-4>
            <div>
              {{ post.title }}
            </div>
            <div text-3 text-gray font-mono>
              {{ dayjs(post.date).format('YYYY-MM-DD') }}
            </div>
          </div>
        </RouterLink>
      </li>
    </ul>

    <div flex-1>
      <Pagination
        :current-page="postsStore.page"
        :total-pages="postsStore.totalPages"
        @change="changePage"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import { usePostsStore } from '~/store/post'
import Pagination from './Pagination.vue'

const postsStore = usePostsStore()

const paginatedPosts = computed(() => {
  const start = (postsStore.page - 1) * postsStore.size
  const end = start + postsStore.size
  return postsStore.posts.slice(start, end)
})

function changePage(newPage: number) {
  postsStore.setPage(newPage)
}
</script>
