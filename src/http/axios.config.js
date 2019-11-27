import axios from 'axios'
import { _cookie } from '@/utils/cookie'


axios.interceptors.request.use(function (config) {
    config.headers.authorization = `Bearer ${_cookie.getCookie('token')}`
    return config
}, function (error) {
    return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
    switch (response.data.code) {
        case 416:
            vm.$router.push('/login')
            break
        default:
            break;
    }
    return response.data
}, function (error) {
    let { status } = error.response
    // 在这里判断返回的code 416跳转登录页面
    switch (status) {
        case 416:
            vm.$router.push('/login')
            break
        default:
            // vm.$message(data.error.message);
            return Promise.reject(error)
    }
})
export default axios
