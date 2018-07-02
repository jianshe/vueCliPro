import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


const state = {
    count: 1
}

const mutations = {
    add(state, n) {
        state.count += n;
    },
    reduce(state) {
        state.count--;
    }
}
const getters = { //getters是store的计算属性，
    count: function(state) {
        return state.count += 100;
    }
}

const actions = {
    addAction(context) { //context：上下文对象，这里你可以理解称store本身。
        context.commit('add', 10);
    },
    reduceAction({ commit }) { //{commit}：直接把commit对象传递过来，可以让方法体逻辑和代码更清晰明了。
        commit('reduce');
    }
}

export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions
})