<script setup>
import { useRoute, useRouter } from 'vue-router'
import { useForm } from '@/hooks/use-form'
import { ref } from 'vue'

const router = useRouter()

const route = useRoute()

const { phoneNumber, vanFormRef, pattern, loadingButton, validatorMessage, validateFormByConfirm } =
  useForm()

const handleLogin = () => {
  validateFormByConfirm(() => {
    loadingButton.value = true
    setTimeout(() => {
      loadingButton.value = false
      router.push('/reservation')
    }, 3000)
  })
}
</script>

<template>
  <div class="login-content">
    <h2>治疗时间预约系统</h2>
    <van-form ref="vanFormRef">
      <van-cell-group>
        <van-field
          v-model="phoneNumber"
          name="手机号"
          label="手机号"
          placeholder="请输入手机号"
          :rules="[{ pattern, message: validatorMessage, required: true }]"
        />
      </van-cell-group>
    </van-form>
    <van-button round block type="primary" @click="handleLogin" :loading="loadingButton">
      登录
    </van-button>
  </div>
</template>

<style scoped lang="less">
.login-content {
  height: 100vh;
  padding: 0 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h2 {
    margin-bottom: 15px;
    color: black;
  }
  .van-form {
    margin-bottom: 15px;
  }
}
</style>
