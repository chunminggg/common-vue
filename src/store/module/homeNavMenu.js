import bus from '@/config/bus'
const state = {
    // 导航栏菜单
    navBreadMenus:[
        {
            title:'首页',
            name:'home'
        }
    ],
}
const mutations = {
    setNavBreadMenus(store,item){
        store.navBreadMenus.push(item)
    },
    removeBreadMenusByIndex(store,index){
        let routeName = store.navBreadMenus[index-1].name
        store.navBreadMenus.splice(index,1)
        bus.$emit('goToLastRouteView',routeName)
    }
}
const getters = {

}
const actions = {
   addNavBreadMenu(store,menuItem){
       let filterMenu = store.state.navBreadMenus.filter(item => item.name == menuItem.name)
        if (!filterMenu.length) {
            store.commit('setNavBreadMenus',menuItem)
        }
   },
   removeNavBreadMenu(store,item){
    store.commit('removeBreadMenusByIndex',item.index)
   },   
}
export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}