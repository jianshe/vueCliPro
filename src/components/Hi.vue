<template>
  <div class="main">
    <h1>{{ msg }}</h1>
  </div>
</template>
 
<script>
export default {
  name: "hi",
  data() {
    return {
      msg: "Hi, I am Jianshe"
    };
  }
};
</script>
 
 
<style scoped>

    .main{
        position: relative;
        top:200px;
        margin: 0 auto;
        height:45px;
        width: 300px;
        background-color:dimgray;
        transition:transform .6s ease 0s;
        transform: rotate(0deg);
    }
    .main:hover{
        transform: rotate(180deg);
    }

</style>