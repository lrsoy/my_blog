<!-- banner -->

<script setup lang="ts">
import HomeNav from './home-nav.vue'
</script>
<template>
  <header class="home-banner">
    <HomeNav />
    <!-- <div class="enter-blog">
      <span class="enter">
        <a href="#">Enter Blog</a>
      </span>
    </div>-->
  </header>
</template>

<style lang="scss" scoped>
.home-banner {
  @apply relative w-full h-[500px] bg-[url('~/assets/images/pexels-photo-220116.jpeg')] bg-cover bg-center bg-no-repeat; // bg-fixed
  &::after {
    @apply absolute -bottom-20 left-0  h-36 w-full bg-[url('~/assets/images/h1-rev-bottom.png')]  bg-cover bg-center bg-no-repeat;
    content: "";
  }
  .enter-blog {
    @apply absolute top-2/4 left-2/4 -translate-x-2/4 -translate-y-2/4;
    .enter {
      a {
        @apply px-[15px] py-[10px] text-[15px] bg-[#650a8a] text-white;
        transition: 0.5s;
        border-radius: 5px;
        &:hover {
          text-decoration: none;
          background-color: #e7db59;
          box-shadow: 0 0px 35px rgb(255, 217, 9);
        }
      }
    }
  }
}
</style>
