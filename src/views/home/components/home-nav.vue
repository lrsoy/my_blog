<!-- home-nav -->

<script setup lang="ts">
</script>
<template>
  <nav class="home-nav">
    <div class="wavy">Lrsoy</div>
    <div class="open-ben">按钮</div>
  </nav>
</template>

<style lang="scss" scoped>
.home-nav {
  @apply w-full h-16  flex justify-between items-center px-5;
  .wavy {
    @apply text-2xl cursor-pointer text-white;
    font-family: 'Pompiere-Regular';
  }
}
</style>
