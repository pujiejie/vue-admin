<template>
  <div class="header-container">
    <i
      :class="{ 'el-icon-s-fold': !isCollapse, 'el-icon-s-unfold': isCollapse, 'icon': true }"
      @click="switchCollapse"
    ></i>
    <el-dropdown @command="play">
      <el-avatar shape="square" size="medium"></el-avatar>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="logout">退出登录</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["isCollapse"])
  },
  methods: {
    switchCollapse() {
      this.$store.commit("changeIsCollapse");
    },
    play(command) {
      if (command == 'logout') {
        // 退出登录
        localStorage.removeItem('token');
        this.$store.commit('writeToken', "");
        this.$router.push('/login');
        this.$message('退出登录成功');
      }
    }
  }
};
</script>

<style scoped>
.icon {
  font-size: 30px;
  cursor: pointer;
}
.header-container {
  height: inherit;

  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
