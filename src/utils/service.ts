import axios from 'axios'

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    config.timeout = 5000 // Wait for 5 seconds before timing out
    return config
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error)
  },
)

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response
  },
  async (error) => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    if (error.code === 'ECONNABORTED' && error.message.includes('timeout')) {
      console.log('Request timed out')
    }
    return Promise.reject(error)
  },
)
export interface AxiosError {
  response?: {
    data: {
      message: string
    }
  }
  message: string
}
export default axios
