import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'
import {stateRoute} from '../router/index'
Vue.use(Vuex)
const store = new Vuex.Store({
  modules: {
    user
  },
  state: {
    routers: stateRoute
  },
  getters: {
    token: state => state.user.token,
    name: state => state.user.name,
    avatar: state => state.user.avatar,
    roles: state => state.user.roles,
    id: state => state.user.id,
    routers: state => state.routers
  }
})
export default store
