<template>
  <div mt-6 gap-4 p-4 grid="~ cols-2">
    <a
      v-for="item in list"
      :key="item.url"
      :href="item.url"
      target="_blank"
      important="decoration-none"
      rounded-md
      :class="item.bg || 'bg-gray-1 hover:bg-gray-2'"
    >
      <div fcc gap-4 rounded-md p-4>
        <div pointer-events-none size-16>
          <img :src="item.avatar" size-full important="rounded-full m-0">
        </div>
        <div text="gray-6 4.5" font-bold>
          {{ item.name }}
        </div>
      </div>
    </a>
  </div>
</template>

<script lang="ts" setup>
const list = [
  {
    name: '易姐的博客',
    url: 'https://shakaianee.top',
    avatar: 'https://gravatar.loli.net/avatar/0bf16c751d119f1fb5e76d2bdef47fd4'
  },
  {
    name: '言成言成啊',
    url: 'https://meethigher.top/blog',
    avatar: 'https://meethigher.top/blog/images/favicon.ico'
  },
  {
    name: '小码博客',
    url: 'https://blog.hikki.site',
    avatar: 'https://blog.hikki.site/data/img/avatar.jpg'
  },
  {
    name: 'whocarewuのblog',
    url: 'http://blog.whocarewu.cn',
    avatar: 'http://blog.whocarewu.cn/assets/logo-Db1-cTJk.svg'
  },
  {
    name: 'PeterJXL',
    url: 'https://www.peterjxl.com',
    avatar: 'https://image.peterjxl.com/blog/re0.jpg',
    bg: `bg-[#CBEAFA] hover:bg-[#BEE3F8]`
  }
]
</script>
