<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()

const route = useRoute()

const phoneNumber = ref()

const handleLogin=()=>{
router.push('/reservation')
}

</script>

<template>
   <div class="login-content">
    <h2>看诊预约系统</h2>
  <van-form >
    <van-cell-group inset>
      <van-field
        v-model="phoneNumber"
        name="手机号"
        label="手机号"
        placeholder="请输入手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
    </van-cell-group>
  </van-form>
  <van-button round block type="primary" @click="handleLogin"> 登录 </van-button>

   </div>
</template>

<style scoped lang="less">
.login-content{
  height: 100vh;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

</style>
