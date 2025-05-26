export const usePostsStore = defineStore('posts', () => {
  const page = shallowRef(1)
  const size = shallowRef(10)

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

  const total = computed(() => posts.value.length)
  const totalPages = computed(() => Math.ceil(total.value / size.value))

  watch(page, () => {
    router.push({
      name: '/page/[...page]',
      params: {
        page: page.value.toString()
      }
    })
  })

  function setPage(newPage: number) {
    page.value = newPage

    if (newPage < 1) {
      page.value = 1
      return
    }

    if (newPage > totalPages.value) {
      page.value = totalPages.value
      return
    }

    page.value = newPage
  }

  return {
    posts,
    page,
    size,
    totalPages,

    setPage
  }
})
