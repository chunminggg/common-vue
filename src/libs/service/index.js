import {
    ucApi,
    baseApi
} from '@/plugins/axios'
import config from "@/config";
import {apiCollection} from '@/libs/api'
// 登陆
export const Login_Action = (params) => ucApi.post(apiCollection.LoginAPi,params)