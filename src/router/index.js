import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/about/Index.vue')
  },
  {
    path: '/fixed-assets-management',
    name: 'FixedAssetsManagement',
    component: () => import(/* webpackChunkName: "fixed-assets-management" */ '../views/management/Index.vue')
  },
  {
    path: '/fixed-assets-record',
    name: 'FixedAssetsRecord',
    component: () => import(/* webpackChunkName: "fixed-assets-record" */ '../views/record/Index.vue')
  },
  {
    path: '/database-setting',
    name: 'DatabaseSetting',
    component: () => import(/* webpackChunkName: "fixed-assets-record" */ '../views/database/Index.vue')
  },
  {
    path: '/field',
    name: 'Field',
    component: () => import(/* webpackChunkName: "field" */ '../views/field/Index.vue'),
  }
]

const router = new VueRouter({
  history: true,
  routes
})

export default router
