<template>
  <div id="app">
    <img src="./assets/logo.png">
    <p>导航 ：
      <router-link to="/" >首页</router-link> | 
      <router-link to="/hi">Hi页面</router-link>
       <router-link to="/hi/hi1" :to="{name:'hi1',params:{username:'jianshe'}}">Hi页面1</router-link>
      <router-link to="/hi/hi2">-Hi页面2</router-link>
      <router-link to="/params/198/jianshe website is very good">params</router-link> |
</p>
   <transition name="fade">
  <router-view ></router-view>
</transition>
  </div>
</template>
 
<script>
export default {
  name: "app"
};
</script>
 
<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
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
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>