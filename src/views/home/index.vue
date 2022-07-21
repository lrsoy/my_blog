<!-- index -->

<script setup lang="ts">
import HomeBanner from './components/home-banner.vue'
import HomeNav from './components/home-nav.vue'
</script>
<template>
  <div class="home-continer">
    <HomeBanner />
    <main>
      <div v-for="item in 100">主体内容{{ item }}</div>
    </main>
  </div>
</template>

<style lang="scss">
.home-continer {
  @apply w-screen h-screen relative overflow-hidden overflow-x-hidden overflow-y-hidden;
  &:hover {
    overflow-y: overlay;
    @include scrollbar-style($w: 5px, $slider: pink);
  }
}
</style>
