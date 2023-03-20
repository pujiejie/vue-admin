<template>
  <el-container>
    <el-aside width="auto">
      <Aside />
    </el-aside>
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import Aside from "./Aside";
import Header from "./Header";

export default {
  components: {
    Aside,
    Header
  }
};
</script>

<style scoped>
.header {
  border-bottom: 1px solid #eee;
}
</style>