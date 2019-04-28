<template>
  <div class="dashboard-container">
    <div class="dashboard-text">name:{{ name }}</div>
    <div class="dashboard-text">roles:<span v-for="role in roles" :key="role">{{ role }}</span></div>
    <el-button @click="test">Test</el-button>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import UserApi from  '@/api/UserApi';
export default {
  name: 'Dashboard',
  computed: {
    ...mapGetters([
      'name',
      'roles'
    ])
  },
  methods: {
    test(){
        let userApi = UserApi;
        window.testapi = userApi;
        debugger;
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
