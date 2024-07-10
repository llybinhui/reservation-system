import Axios from 'axios'

export default class Ajax {
  constructor(config) {
    this.$axios = Axios.create(config)
  }
  async request(config) {
    let result = {
      code: -1,
      data: undefined,
      msg: '服务异常，请稍后重试',
      error: true
    }

    const responseData = await this.$axios.request(config)

    result = typeof responseData?.data === 'object' ? response.data : result
    try {
      // todo
      if (result.code === '0') {
        result.error = false
      } else {
        result.error = responseData || true
      }
    } catch (error) {
      if (typeof error?.responseData?.data === 'object') {
        result = error.responseData.data
      }

      //请求失败(如404)、后端服务异常（如500 服务器/接口崩溃）
      result.error = error || true
    }

    return result
  }

  register(config) {
    const requestAction = (params) => {
      const { method } = config
      const _requestConfig = {
        ...config
      }
      // 匹配占位字符并替换
      _requestConfig.url = _requestConfig.url?.replace(/#{.*?}/, (_, name) =>
        `${params?.[name] ?? ''}`.trim()
      )
      if (['DELETE', 'POST', 'PUT'].includes(method)) _requestConfig.data = params
      else _requestConfig.params = params

      return this.request(_requestConfig)
    }

    return requestAction
  }

  get(url, config = {}) {
    return this.register({ url, method: 'GET', ...config })
  }

  post(url, config = {}) {
    return this.register({ url, method: 'POST', ...config })
  }

  delete(url, config = {}) {
    return this.register({ url, method: 'DELETE', ...config })
  }

  put(url, config = {}) {
    return this.register({ url, method: 'PUT', ...config })
  }
}
