import axios from 'axios'
//异步请求跨域与配置
export const axiosInstance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Access-Control-Allow-Origin': '*'
    },
    // withCredentials: true,
    timeout: 30000
})


