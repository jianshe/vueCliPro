<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>导航 ：
      <router-link to="/">首页</router-link>
      <router-link to="/hi">Hi页面</router-link>
    </p>
    <transition name="fade">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
  export default {
    name: 'app',
    methods: {
      goback() {
        this.$router.go(-1);
      },
      goHome() {
        this.$router.push('/');
      }
    }
  }
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  .fade-enter {
    opacity: 0;
  }
  .fade-leave {
    opacity: 1;
  }
  .fade-enter-active {
    transition: opacity .5s;
  }
  .fade-leave-active {
    opacity: 0;
    transition: opacity .5s;
  }
</style>
