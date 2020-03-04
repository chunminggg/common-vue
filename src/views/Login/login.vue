<template>
  <div>
    <Row type="flex" justify="center" align="middle" style="height:500px;">
      <Col span="6">
        <Card :title="$t('login')">
            <base-form ref="loginForm">
            </base-form>
            <div>
                <Button :loading="isLogin" @click="loginAction" type="primary">
                    <span v-if="!isLogin">{{$t('login')}}</span>
                    <span v-if="isLogin">登录中</span>
                </Button>
            </div>
        </Card>
      </Col>
    </Row>
  </div>
</template>

<script>
import baseForm from '@/components/basic/baseForm'
import {rolePermissionAction} from '@/libs/access'
import {mockPermissionData } from '@/libs/mock'
export default {
    components:{
        baseForm
    },
    data(){
        return {
            isLogin:false,  
        }
    },
    mounted(){
        this.setLoginForm()
    },
    methods:{
        setLoginForm(){
            let loginItems = [
                {
                    label:'用户名',
                    required:true,
                    value:'',
                    type:'text',
                },
                {
                    label:'密码',
                    required:true,
                    value:'',
                    type:'password'
                }
            ]
            this.$refs['loginForm'].setFormDataModel(loginItems)
        },
        async loginAction(){
            let valid = await this.$refs.loginForm.validate()
            if (!valid) return false
            this.isLogin = true
            // 模拟接口回调
            setTimeout(() => {
            let resp = mockPermissionData
            this.isLogin = false
            rolePermissionAction(resp,this)
            this.$router.push({
                name:'home'
            })  
            }, 2000);
            
            
        },
    }
};
</script>

<style scoped lang="less">
</style>
