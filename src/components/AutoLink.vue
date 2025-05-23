<template>
  <a
    :href="props.href"
    pr fyc gap-1
    class="[&:hover_.external-icon]:(opacity-100)"
    @click.stop.prevent="navigate"
  >
    <slot />
    <span
      v-show="isExternalUrl(props.href)"
      class="external-icon"
      i-iconamoon-link-external-duotone pa right--1 top--1 size-4 bg-primary opacity-0
      transition-opacity duration-300
    />
  </a>
</template>

<script lang="ts" setup>
import { isExternalUrl } from '~/utils/url'

const props = withDefaults(
  defineProps<{
    href: string
  }>(),
  {}
)

const router = useRouter()

function navigate() {
  if (props.href.startsWith('http')) {
    window.open(props.href, '_blank')
  }
  else {
    router.push(props.href)
  }
}
</script>
