<!-- redirect to /posts/:id -->

<script lang="ts" setup>
const route = useRoute()
const router = useRouter()

const id = route.params?.id

if (id) {
  router.replace(`/posts/${id}`)
}
</script>
