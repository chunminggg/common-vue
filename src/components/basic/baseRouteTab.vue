<template>
  <div class="route-tab">
    <Tabs type="card" closable @on-click="hanleClickTabName" v-model="activeName" @on-tab-remove="handleTabRemove" >
        <TabPane :closable="item.isCanClose" :name="item.name" :label="item.title"  v-for="item in menus" :key="item.name"></TabPane>
    </Tabs>
  </div>
</template>

<script>
export default {
    mounted(){
        this.getMenuData()
    },
    computed:{
        activeName(){
            return this.$route.name
        }
    },
    data(){
        return {
            menus:[
                
            ]
        }
    },
    methods:{
        hanleClickTabName(name){
            if (this.$route.name != name) {
                this.$router.push({
                    name:name
                })
            }
        },
        handleTabRemove(name){
            let index = this.menus.findIndex(item => item.name == name)
            this.closeRouteView(this.menus[index],index)
        },
        getMenuData(){
            this.menus = this.$store.state['navMenu']['navBreadMenus'].map((item,index) => {
                if (index == 0) {
                    return {
                        ...item,
                        isCanClose:false,
                    }
                } else {
                    return {
                        ...item,
                        isCanClose:true,
                    }
                }
            })
            this.$nextTick(()=>{
                this.checkActvieRouteName()
            })
        },
        checkActvieRouteName(){
            let activeRouteName = this.$route.name
            let currentItem = this.menus.filter(item => item.name == activeRouteName)
            if (currentItem.length) {
                this.activeName = currentItem[0].name
            }
        },
        async closeRouteView(item,index){
            let resp = this.$store.dispatch('navMenu/removeNavBreadMenu',{
                ...item,
                index:index
            })
            if (resp) {
                this.getMenuData()
            }
        },
    },
};
</script>

<style lang="less" scoped>
.route-tab {
  height: 40px;
  background: #f5f7f9;
  margin: 10px;
  .tab-bread {
    text-align: center;
    line-height: 2.5;
    display: inline-block;
    padding: 5px;
    .tab-close{
        cursor: pointer;
    }
  }
}
</style>
