<template>
  <div id="app">
    <el-container>
      <el-aside width="200px">
        <TheMenu />
      </el-aside>
      <el-main>
        <keep-alive>
          <transition>
            <router-view></router-view>
          </transition>
        </keep-alive>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import TheMenu from './components/TheMenu'


export default {
  name: 'app',
  components: {
    HelloWorld,
    TheMenu
  }
}
</script>

<style>
  .el-aside {
    height: 100vh;
    padding: 30px 0;
    background-color: #e6e6e6;
    -webkit-app-region: drag;
    -webkit-user-select: none;
  }
  .el-main {
    background-color: white;
  }
</style>
