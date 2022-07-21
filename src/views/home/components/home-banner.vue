<!-- banner -->

<script setup lang="ts">
</script>
<template>
  <header class="home-banner">banner图</header>
</template>

<style lang="scss" scoped>
.home-banner {
  @apply relative w-full h-[720px] bg-[url('~/assets/images/bannerbg.jpg')] bg-cover bg-center bg-no-repeat; // bg-fixed
  &::after {
    @apply absolute bottom-0 left-0 h-36 w-full bg-[url('~/assets/images/h1-rev-bottom.png')]  bg-cover bg-center bg-no-repeat;
    content: "";
  }
}
</style>
