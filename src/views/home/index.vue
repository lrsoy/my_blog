<!-- index -->

<script setup lang="ts">
import HomeBanner from './components/home-banner.vue'
import HomeMainList from './components/home-main-list.vue'
</script>
<template>
<!-- <img src="https://ghchart.rshah.org/lrsoy" /> -->
  <div class="home-continer">
    <HomeBanner />
    <main>
      <HomeMainList />
    </main>
  </div>
</template>

<style lang="scss">
.home-continer {
  @apply w-screen h-screen relative overflow-hidden overflow-x-hidden overflow-y-hidden;
  &:hover {
    overflow-y: overlay;
    @include scrollbar-style($w: 5px, $slider: #787878);
  }
}
</style>
