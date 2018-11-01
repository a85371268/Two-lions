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
  if (resp.data.code === 200) {
    Indicator.close('loading……')
    return resp.data.data
  } else {
    return '请求错误！'
  }
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
export const getList = (id, pageIndex, sort) => {
  return ajax.get(`/api/category/${id}/items?start=${pageIndex}&sort=${sort}`)
}
export const getDetail = (id) => {
  return ajax.get(`/api/detail?id=${id}&normal=1&sa=`)
}
export const getSearch = (text, pageIndex, sort) => {
  return ajax.get(`/api/search?word=${text}&start=${pageIndex}&sort=${sort}`)
}
export const getHot = () => {
  return ajax.get('/api/hotWords')
}
