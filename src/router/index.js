import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from ''
Vue.use(Router)

export default new Router({
    routes: [{ //每一个链接都是一个对象
            path: '/', //链接路径
            name: 'Hello', //路由名称，
            component: Hello //对应的组件模板
        }, {
            path: '/hi',
            name: 'Hi',
            component: Hi
        }

    ]
});