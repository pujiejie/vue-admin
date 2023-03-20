<template>
  <div class="menu">
    <el-menu
      default-active="/"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      text-color="#FFF"
      router
    >
      <el-menu-item index="/">
        <i class="el-icon-menu"></i>
        <span slot="title">首页</span>
      </el-menu-item>
      <el-menu-item index="/device">
        <i class="el-icon-document"></i>
        <span slot="title">设备管理</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["isCollapse"])
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.menu .el-menu {
  height: 100%;
  background-color: rgb(48, 65, 86);
}
html,
body,
#app,
.el-container,
.el-aside,
.menu {
  height: 100%;
}
.menu .el-menu-item:hover {
  background-color: rgba(0, 0, 0, 0.1);
}
.menu .el-menu-item:focus {
  background-color: transparent;
}
</style>