

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
          <Menu  theme="light" width="auto" >
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
            <BreadcrumbItem>Home</BreadcrumbItem>
            <BreadcrumbItem>Components</BreadcrumbItem>
            <BreadcrumbItem>Layout</BreadcrumbItem>
          </Breadcrumb>
          <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">Content</Content>
        </Layout>
      </Layout>
    </Layout>
  </div>
</template>
<script>
export default {
    mounted(){
        this.getMenuData()
    },
    data(){
        return {
            sideMenus:[],
            navMenus:[],
        }
    },
    methods:{
        getMenuData(){
            this.sideMenus = this.$store.state['userPermission']['sideMenus']
            this.navMenus = this.$store.state['userPermission']['navMenus']
        }
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