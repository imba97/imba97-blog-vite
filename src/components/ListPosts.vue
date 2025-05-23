<template>
  <PostsProvider>
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
          :current-page="currentPage"
          :total-pages="totalPages"
          @change="changePage"
        />
      </div>
    </div>
  </PostsProvider>
</template>

<script setup lang="ts">
import dayjs from 'dayjs'
import Pagination from './Pagination.vue'

const props = withDefaults(
  defineProps<{
    page?: number
  }>(),
  {
    page: 1
  }
)

const posts = inject('posts') as Ref<any[]>
const pageSize = 10
const currentPage = ref(props.page)

const total = computed(() => posts.value.length)
const totalPages = computed(() => Math.ceil(total.value / pageSize))

const paginatedPosts = computed(() => {
  const start = (currentPage.value - 1) * pageSize
  const end = start + pageSize
  return posts.value.slice(start, end)
})

function changePage(newPage: number) {
  currentPage.value = newPage
}
</script>
