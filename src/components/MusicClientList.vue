<template>
  <div flex="~ wrap" items-center justify-center gap-6>
    <div v-for="item in list" :key="item.name" p-2 text-center>
      <div text="6 primary">
        {{ item.name }}
      </div>
      <div b="6 primary solid" of-hidden rounded-6>
        <img :src="item.image" m-0="!" size-50="!" object-cover>
      </div>
      <div>
        <a :href="item.url" target="_blank" text-4 text-black font-bold>
          <span icon i-material-symbols-download-rounded />
          Github
        </a>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const list = [
  {
    name: 'Windows Feishin',
    image: 'https://imba97.cn/uploads/2024/06/navidrome-1.png',
    url: 'https://github.com/jeffvli/feishin'
  },
  {
    name: 'Android Tempo',
    image: 'https://imba97.cn/uploads/2024/06/navidrome-2.png',
    url: 'https://github.com/CappielloAntonio/tempo'
  }
]
</script>
