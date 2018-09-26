<template>
  <div class="aside">
    <el-menu
      :default-active="$route.path"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      background-color="#282C2F"
      text-color="#fff"
      :router="true"
      style="border:none"
      active-text-color="#ffd04b">
      <template v-for="item in router.children">
        <el-menu-item :key="item.path" :index="'/home'+'/'+item.path">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>{{item.name}}</span>
          </template>
        </el-menu-item>
      </template>
    </el-menu>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { mainRoute } from '../../router/index'
export default {
  data () {
    return {
      router: mainRoute
    }
  },
  created () {
    console.log(this.router)
  },
  mounted () {
    console.log('挂载')
  },
  updated () {
    console.log('更新')
  },
  computed: {
    ...mapGetters([
      'routers'
    ])
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>

<style lang="stylus" scoped>
.aside
  background #224B95
  text-align left
</style>
