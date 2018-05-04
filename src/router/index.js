import Vue from 'vue'
import Router from 'vue-router'
import Hi from '@/components/Hi'
Vue.use(Router)

export default new Router({
    routes: [{ //每一个链接都是一个对象
            path: '/', //链接路径
            name: 'Hi', //路由名称，
            component: Hi //对应的组件模板
        },
        {
            path: '/hi',
            component: Hi
        }
    ]
});