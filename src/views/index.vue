

<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <div class="demo-nav-header">
            <div class="layout-logo">
                礼橙尚品
            </div>
            <div class="layout-nav">
              <MenuItem :name="item.title" v-for="item in navMenus" :key="item.name">
               {{item.title}}
              </MenuItem>
            </div>
          </div>
        </Menu>
      </Header>
      <Layout>
        <Sider hide-trigger :style="{background: '#fff'}">
          <Menu  @on-select="clickSideMenu" theme="light" width="auto" :active-name="sideActiveName" :open-names="sideOpenNames" >
            <Submenu :name="item.name" v-for="item in sideMenus" :key="item.name">
              <template slot="title">
                  {{item.title}}
              </template>
              <MenuItem :name="obj.name" v-for="obj in item.childMenus" :key="obj.name">{{obj.title}}</MenuItem>
            </Submenu>
          </Menu>
        </Sider>
        <Layout :style="{padding: '0 24px 24px'}">
          <Breadcrumb :style="{margin: '24px 0'}">
            <BreadcrumbItem>首页</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '80vh', background: '#fff'}">
              <router-view  />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
import {rolePermissionAction} from '@/libs/access'
import {mockPermissionData } from '@/libs/mock'
export default {
    
    mounted(){
        this.getMenuData()
        this.checkRouteName()
    },
    data(){
        return {
            sideMenus:[],
            navMenus:[],
            sideActiveName:'',
            sideOpenNames:[],
        }
    },
    methods:{
        getMenuData(){
            this.getPermissionAction()
            this.sideMenus = this.$store.state['userPermission']['sideMenus']
            this.navMenus = this.$store.state['userPermission']['navMenus']
        },
        // 重刷页面的时候 再次获取权限
        getPermissionAction(){
            rolePermissionAction(mockPermissionData,this)
        },
        checkRouteName(){
          let activeName = this.$route.name
          this.sideActiveName = activeName
          this.$nextTick(()=>{
            this.sideOpenNames = ['name1']
          })
          // let filterSideNames = this.sideMenus.filter(item =>{
          //   let findChildName = item.childMenus.find(obj => obj.name == activeName)
          //   if (findChildName) {
              
          //   }
          // })
        },
        // 点击左侧菜单
        clickSideMenu(name){
          this.$router.push({
            name:name
          })
        },
    },
    
};
</script>
<style scoped lang="less">
.layout {
  border: 1px solid #d7dde4;
  background: #f5f7f9;
  position: relative;
  border-radius: 4px;
  overflow: hidden;
}
.full-height{
    height: 100vh;
}
.demo-nav-header {
  display: flex;
  .layout-logo {
    width: 100px;
    height: 30px;
    float: left;
    position: relative;
    color: white;
  }
  .layout-nav {
    flex: 1;
    margin-left: 50px;
    margin-right: 20px;
  }
}
</style>