import axios from 'axios'
const ajax = axios.create({
  baseURL: 'http://www.xiongmaoyouxuan.com'
})
export const getKindList = () => {
  return ajax.get('/api/tabs')
}
export const getItem = (id) => {
  return ajax.get(`/api/tab/${id}`)
}
