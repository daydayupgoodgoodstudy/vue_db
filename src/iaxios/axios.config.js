import axios from 'axios';
import { _cookie } from '@/utils/cookie';

axios.interceptors.request.use(function (config) {
    // 访问网络时加载loading,防止用户多次操作
    config.headers = { 't': _cookie.getCookie('t') }
    return config;
}, function (error) {
    return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
    return response.data;
}, function (error) {
    let { status, data } = error.response
    //在这里判断返回的code 401跳转登录页面
    switch (status) {
        case 401:
            vm.$router.push('/login')
            break
        default:
            // vm.$message(data.error.message);
            return Promise.reject(error);
    }
});
export default axios
