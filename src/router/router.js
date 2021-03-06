export default [
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'Login - 登录',
    },
    component: () => import('@/views/Login/login')
  },
  {
    path: '/',
    component:() => import('@/views/index.vue'),
    children: [
      {
        path:'',
        name: 'home',
        component:()=> import('@/views/Basic/chart')
      },
      {
      path: 'table',
      name: 'basicTable',
      component: () => import ('@/views/Basic/table')
    }, 
    {
      path: 'upload',
      name: 'basicUpload',
      component: () => import ('@/views/Basic/upload')
    }
  ]
  },
  {
    path: '/error_401',
    name: 'error_401',
    component:() => import('@/views/index.vue')
  },
  {
    path: '/error_404',
    name: 'error_404',
    component:() => import('@/views/index.vue')
  },
]
