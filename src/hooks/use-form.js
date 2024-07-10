import { ref } from 'vue'

export const useForm = () => {
  const username = ref()

  const phoneNumber = ref()

  const vanFormRef = ref()

  const loadingButton = ref(false)

  //验证手机号正则
  const pattern = /^\d{11}$/

  const validatorMessage = (value, rule) => {
    if (!value) {
      return '请输入手机号'
    } else {
      const { pattern } = rule
      if (!pattern.test(value)) {
        return '请输入正确的手机号'
      }
    }
  }

  const validateFormByConfirm = (successCallBack, failCallBack) => {
    vanFormRef.value
      .validate()
      .then(() => {
        successCallBack()
      })
      .catch(() => {
        failCallBack && failCallBack()
      })
  }

  return {
    username,
    phoneNumber,
    vanFormRef,
    loadingButton,
    pattern,
    validatorMessage,
    validateFormByConfirm
  }
}
