import Vue from 'vue'
import Router from 'vue-router'
import {Message} from "element-ui";

Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '/',
            redirect: 'login'
        },
        {
            path: '/login',
            name: 'login',
            component: () => import('@/view/Login')
        },
        {
            path: '/home',
            meta: {
                title: '主页',
            },
            component: () => import('@/view/home/Home'),
            children: [
                {
                    path: '/home/to',
                    name: '首页',
                    component: () => import('@/view/home/To.vue')
                },
                {
                    path: '/home/test',
                    name: '测试',
                    component: () => import('@/view/test/index.vue')
                }, {
                    path: '/home/info',
                    name: '用户信息',
                    component: () => import('@/view/userinfo/index.vue')
                }
            ]
        }
    ]
})

// 挂载路由导航守卫：to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作
router.beforeEach((to, from, next) => {
    // 放行登录页面

    if (to.path === '/login') {
        return next()
    }
    //next(to.path)

    // 获取token
    const tokenStr = localStorage.getItem('token')

    if (!tokenStr) {

        Message.error('登陆失效，请重新登录')

        return router.push('/login')

    } else {

        return next()

    }

})
export default router

