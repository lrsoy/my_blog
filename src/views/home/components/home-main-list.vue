<!-- home-main-list -->

<script setup lang="ts">
</script>
<template>
  <section class="home-main-list-recommend">
    <div class="continer">
      <template v-for="item in 10">
        <div class="item">
          <div class="img"></div>
          <div class="content">
            <div>头像</div>
            <div class="classification">标签分类</div>
            <h2>标题文字</h2>
            <div>
              <p>段落内容</p>
            </div>
            <div class="operate">操作</div>
          </div>
        </div>
      </template>
    </div>
  </section>
</template>

<style lang="scss">
.home-main-list-recommend {
  @apply w-full h-auto flex justify-center;
  .continer {
    @apply w-[1200px] h-auto  mt-20 columns-4 gap-[20px];
    .item {
      @apply w-full h-auto bg-slate-600;
      break-inside: avoid;
      .img {
        @apply w-full h-auto;
      }
    }
  }
}
</style>
