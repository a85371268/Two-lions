import axios from 'axios'
const ajax = axios.create({
  baseURL: 'http://www.xiongmaoyouxuan.com'
})
// ajax.interceptors.request.use(config => {
//   return config
// })

// ajax.interceptors.response.use(resp => {
//   return resp
// })
export const getKindList = () => {
  return ajax.get('/api/tabs')
}
export const getItem = (id) => {
  return ajax.get(`/api/tab/${id}`)
}
export const getBanner = () => {
  return ajax.get(`/api/tab/1?start=0`)
}
export const getList = (id) => {
  console.log(id)
  return ajax.get(`/api/category/${id}/items?start=0`)
}
export const getDetail = (id) => {
  return ajax.get(`/api/detail?id=${id}&normal=1&sa=`)
}
