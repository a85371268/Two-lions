import axios from 'axios'
import { Indicator } from 'mint-ui'
const ajax = axios.create({
  baseURL: 'http://www.xiongmaoyouxuan.com'
})
ajax.interceptors.request.use((config) => {
  Indicator.open('loading……')
  return config
})
ajax.interceptors.response.use((resp) => {
  Indicator.close('loading……')
  return resp
})

export default { axios }

export const getKindList = () => {
  return ajax.get('/api/tabs')
}
export const getItem = (id) => {
  return ajax.get(`/api/tab/${id}`)
}
export const getHomeData = (id) => {
  return ajax.get(`/api/tab/${id}?start=0`)
}
export const getHomeTabbar = () => {
  return ajax.get(`/api/tabs?sa=`)
}
export const getHomeMore = (id) => {
  return ajax.get(`/api/tab/1/feeds?start=${id}`)
}
export const getList = (id) => {
  return ajax.get(`/api/category/${id}/items?start=0`)
}
export const getDetail = (id) => {
  return ajax.get(`/api/detail?id=${id}&normal=1&sa=`)
}
