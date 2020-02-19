// 实现定义好路由
import route from './route.js';

const router = new VueRouter({
    routes: route
});

router.beforeEach((to , from , next) => {
    // 全局导航守卫
    if (to.name == 'login') {
        if (G.s.exists('token')) {
            return next({name: 'index'});
        }
    } else {
        if (!G.s.exists('token')) {
            // 没有登录
            return next({name: 'login'});
        }
    }
    next();
});

export default router;