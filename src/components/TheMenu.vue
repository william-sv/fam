<template>
  <div class="sider-wrap">
    <img src="../assets/logo.png" class="logo">
    <div class="side-menu">
      <el-menu
        :router="true"
        background-color="#e6e6e6">
        <el-menu-item index="/fixed-assets-management">
          <i class="el-icon-receiving"></i>
          <span slot="title">资产管理</span>
        </el-menu-item>
        <el-menu-item index="/fixed-assets-record">
          <i class="el-icon-edit"></i>
          <span slot="title">设备管理</span>
        </el-menu-item>
        <el-menu-item index="/about">
          <i class="el-icon-menu"></i>
          <span slot="title">数据设置</span>
        </el-menu-item>
        <el-menu-item index="/database-setting">
          <i class="el-icon-menu"></i>
          <span slot="title">数据库设置</span>
        </el-menu-item>
      </el-menu>
    </div>
    <div class="side-setting-bar">
      <i class="el-icon-setting"></i>
      <i class="el-icon-info"></i>
      <i class="el-icon-hot-water"></i>
    </div>
  </div>
</template>

<script>
export default {
name: "TheMenu"
}
</script>

<style lang="less" scoped>
  .sider-wrap {
    flex: 0 0 200px;
    /*position: relative;*/
    overflow-y: auto;
  }
  .logo {
    width: 80px;
    display: block;
    margin: 30px auto;
  }
  /*.el-menu-item:hover {*/
  /*  background-color: #ecf5ff !important;*/
  /*}*/
  .side-setting-bar {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    //display: flex;
    //justify-content: flex-start;
    align-items: center;
    padding-left: 10px;
    padding-bottom: 20px;

     i {
       display: inline-block;
       width: 20px;
       height: 20px;
       //margin-right: 10px;
       padding: 10px;
     }
    i:hover {
      cursor: pointer;
      background-color: rgba(0,0,0,.1) !important;
      color: #409EFF;
      border-radius: 5px;
    }
    //i:active {
    //  background-color: #409EFF;
    //}
  }
</style>
