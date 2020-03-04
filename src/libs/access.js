// 权限相关方法

// 根据接口回调 存储用户权限
export const  rolePermissionAction = (resp,that) => {
    that.$store.dispatch('userPermission/setPermissionAction',resp)
}