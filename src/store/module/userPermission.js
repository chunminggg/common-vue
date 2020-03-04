const state = {
    // 导航栏菜单
    navMenus:[

    ],
    // 侧边菜单
    sideMenus:[

    ],
    // 操作权限
    actionPermissions:[

    ]
}
const mutations = {
    setPermissionData(state,permissionData){
        state.navMenus = permissionData.navMenus
        state.sideMenus = permissionData.sideMenus
        state.actionPermissions = permissionData.perimissionData
    }
}
const getters = {

}
const actions = {
    setPermissionAction(state,permissionData){
        state.commit('setPermissionData',permissionData)
    }
}
export default {
    namespaced : true,
    state,
    getters,
    actions,
    mutations
}