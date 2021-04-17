import { createRouter, createWebHistory } from 'vue-router';

/* Layout */
import Layout from '@/layout'

/* Router Modules */
// import componentsRouter from './modules/components'
// import chartsRouter from './modules/charts'
// import tableRouter from './modules/table'
// import nestedRouter from './modules/nested'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    noCache: true                if set true, the page will no be cached(default is false)
    affix: true                  if set true, the tag will affix in the tags-view
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path(.*)',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    redirect: '/home'
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/home',
    component: Layout,
    redirect: '/home/detail',
    alwaysShow: true, // will always show the root menu
    name: 'Home',
    meta: {
      title: 'Home首页',
      icon: 'el-icon-s-home',
      roles: ['admin', 'editor'] // you can set roles in root nav
    },
    children: [
      {
        path: 'detail',
        component: () => import('@/views/Home/Home'),
        name: 'Home',
        meta: {
          title: 'Home详情',
          roles: ['admin'] // or you can only set roles in sub nav
        }
      }
    ]
  },
  {
    path: '/about',
    component: Layout,
    alwaysShow: true, // will always show the root menu
    redirect: '/about/detail',
    name: 'About',
    meta: {
      title: 'about页面',
      icon: 'el-icon-question'
    },
    children: [
      {
        path: 'detail',
        component: () => import('@/views/About/About'),
        name: 'About',
        meta: { 
          title: 'About页面'
        }
      },
    ]
  },

  // 404 page must be placed at the end !!!
  // 区别于vue2的path: '*' vue3使用 path: '/:pathMatch(.*)*'
  { path: '/:pathMatch(.*)*', redirect: '/404', hidden: true },
]

const createRouters = () => createRouter({
  history: createWebHistory(), // require service support
  // scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouters()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouters()
  router.matcher = newRouter.matcher // reset router
}

export default router
