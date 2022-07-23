<!-- home-nav -->

<script setup lang="ts">
</script>
<template>
  <nav class="home-nav">
    <div class="wavy">
      <div class="text-content-blog">
        <span style="--i: 1;">L</span>
        <span style="--i: 2;">r</span>
        <span style="--i: 3;">s</span>
        <span style="--i: 4;">o</span>
        <span style="--i: 5;">y</span>
        <span style="--i: 6;">B</span>
        <span style="--i: 7;">l</span>
        <span style="--i: 8;">o</span>
        <span style="--i: 9;">g</span>
        <span style="--i: 10;">.</span>
      </div>
    </div>
    <div class="open-ben"></div>
  </nav>
</template>

<style lang="scss" scoped>
.home-nav {
  @apply w-full h-16  flex justify-between items-center px-5;
  .wavy {
    @apply cursor-pointer text-white;
    font-family: "Pompiere-Regular";
    .text-content-blog {
      @apply relative;
      -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
      span {
        @apply relative text-3xl font-semibold inline-block;
        animation: wAves 2s ease-in-out infinite;
        animation-delay: calc(0.1s * var(--i));
      }
    }
  }
  .open-ben {
    @apply w-7 h-7 bg-white rounded-full cursor-pointer;
    box-shadow: 0 0px 40px #e6e299;
    // @apply w-[100px] h-[36px] bg-[url('~/assets/images/icon-user.svg')] bg-auto bg-center bg-no-repeat;
  }
}
</style>
