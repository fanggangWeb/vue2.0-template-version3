import Vue from 'vue'
import Router from 'vue-router'
import home from '@/view/home'
Vue.use(Router)
// 如果是在开发模式下关闭懒加载，在生产版本中实现懒加载
const _import = require('./_import_' + process.env.NODE_ENV)
// if hidden is true not show the sidebar
// if noDropdown is ture show the submen
// if code === 300 就不显示
export const stateRoute = [
  {
    path: '/',
    name: 'login',
    hidden: true,
    component: _import('login')
  }
]
export const mainRoute = {
  path: '/home',
  name: '主页',
  component: home,
  children: [{
    path: 'index',
    name: '主页',
    component: _import('dashboard/index')
  },
  {
    path: 'test',
    name: '测试',
    component: _import('test/test')
  }]
}
stateRoute.push(mainRoute)
console.log(stateRoute)
export default new Router({
  routes: stateRoute
})
