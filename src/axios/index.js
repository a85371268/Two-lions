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
export const getList = (id) => {
  return ajax.get(`/api/category/${id}/items`)
}
