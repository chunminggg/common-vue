import axios from 'axios'
import config from "@/config";
import Vue from 'vue'
const baseUrl = process.env.NODE_ENV === 'production' ?
    config.baseUrl.pro : '/'
const ucApi = axios.create({
    baseURL: baseUrl,
})
// 登陆接口不需要拼header
ucApi.interceptors.response.use(function (resp) {
    return resp.data;
}, (error) => {
    if (error.response && error.response.data) {
        Vue.prototype.$Message.error(error.response.data.error_description);
    }
})

// 拦截 拼接http header
baseApi.interceptors.request.use(function (config) {
    config.headers.post["Content-Type"] = 'application/json'
    Object.assign(config.headers, getHeader());
    if (config.method === "post") {
        if (config.data && typeof config.data === 'object') {
            Object.keys(config.data).forEach(v => {
                if (typeof config.data[v] === 'string') {
                    config.data[v] = config.data[v].trim();
                }
            });
        }
    }
    return config;
})
// baseApi.headers.post['Content-Type'] = 'application/json';
baseApi.interceptors.response.use(function (resp) {
    return resp.data;
}, (error) => {
    return analizeCode(error)
})

function analizeCode(error) {
    Vue.prototype.$Message.warning("请求出错");
    return Promise.reject(error);;
}

function getHeader() {
    try {
        //放token
        return headers;
    } catch (e) {
        return {};
    }
}

export {
    ucApi,
    baseApi,
    baseUrl
}