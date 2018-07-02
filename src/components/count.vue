<template>
    <div>
        <h2>{{msg}}</h2>
        <hr/>
        <h3>{{count}}</h3>

       <button @click="$store.commit('add',10)">+</button>
        <button @click="reduce">-</button>
        <button @click="addAction">添加</button>
        <button @click="reduceAction">减少</button>
    </div>
</template>

<script>
import store from "@/vuex/store";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  },
  store,
  methods: {
    ...mapMutations(["add", "reduce"]),
    ...mapActions(["addAction", "reduceAction"])
  },
  computed: {
    ...mapState(["count"]),
    // ...mapGetters(["count"])
  },
  watch:{
    count:function(val,oldVal){
      console.log("新值："+val+"原始值："+oldVal);
    }
  }
};
</script>

