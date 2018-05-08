import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import Hi from '@/components/Hi'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
import Param from '@/components/Param'
import Count from '@/components/Count'

Vue.use(Router)

export default new Router({
    routes: [{ //每一个链接都是一个对象
            path: '/', //链接路径
            name: 'Hello', //路由名称，     
            component: Hello //对应的组件模板
        }, {
            path: '/hi',
            name: 'Hi',
            component: Hi,
            children: [
                { path: '/', component: Hi },
                { path: 'hi1', name: 'hi1', component: Hi1 },
                { path: 'hi2', component: Hi2 }
            ]
        },
        {
            path: '/params/:newsId(\\d+)/:newsTitle',
            component: Param
        },
        {
            path: '/count',
            name: 'count',
            component: Count
        }

    ]
});