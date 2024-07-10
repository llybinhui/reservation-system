<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const list = ref([])

const loading = ref(false)

const finished = ref(false)

const onLoad = () => {
  // 异步更新数据
  // setTimeout 仅做示例，真实场景中一般为 ajax 请求
  setTimeout(() => {
    for (let i = 0; i < 10; i++) {
      list.value.push(list.value.length + 1)
    }

    // 加载状态结束
    loading.value = false

    // 数据全部加载完成
    if (list.value.length >= 40) {
      finished.value = true
    }
  }, 1000)
}
</script>

<template>
  <div class="my-reservation-content">
    <header>
      <van-icon name="arrow-left" @click="router.go(-1)" /> <span>我的预约</span>
      <span class="empty-box"></span>
    </header>
    <div class="placeholder-box"></div>
    <main>
      <van-list
        v-model:loading="loading"
        :finished="finished"
        finished-text="没有更多了"
        @load="onLoad"
      >
        <van-cell v-for="item in list" :key="item" :title="item" />
      </van-list>
    </main>
  </div>
</template>

<style lang="less" scoped>
.my-reservation-content {
  position: relative;
  .placeholder-box {
    height: 50px;
  }
  .empty-box {
    width: 20px;
  }
  main {
    padding: 0 12px;
  }
}
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 18px;
  border-bottom: 1px solid #eee;
  height: 50px;
  padding: 12px 12px;
  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 1;
  background-color: #fff;
  box-shadow: -5px -2px 5px rgba(0, 0, 0, 0.5);
}
</style>
