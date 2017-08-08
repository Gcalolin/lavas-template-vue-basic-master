/**
 * @file router
 * @author *__ author __*{% if: *__ email __* %}(*__ email __*){% /if %}
 */

import Vue from 'vue';
import Router from 'vue-router';
// import Home from '@/pages/home/Home.vue';
import NotFound from '@/pages/NotFound.vue';

Vue.use(Router);

const allRoutes = [];
/**
 * 根据allRoutes判断当前路由路径是否有效，包括动态路由
 *
 * @param {string} path 路由路径
 * @return {boolean} 是否是有效路由
 */
function validateRoute(path) {
    return allRoutes.includes(path)
        || allRoutes.some(route => {
            // 生成路由路径对应的正则表达式 /detail/:id => /^\/detail\/[^\/]+\/?$/
            let routeRegex = new RegExp(`^${route.replace(/\/:[^\/]*/g, '/[^\/]+')}\/?$`);
            return routeRegex.test(path);
        });
}
console.log('allRoutes:'+allRoutes);
export function createRouter({routes = []}) {
    console.log(routes);
    let router = new Router({

        // history 模式，需要服务器后端配合做路由代理，将所有的前端路由同步代理到 /
        mode: 'history',
        base: '/',
        scrollBehavior(to, from, savedPosition) {
            if (savedPosition) {
                return savedPosition;
            }
            return {
                x: 0,
                y: 0
            };
        },
        routes: [
            ...routes,
            {
                path: '*',
                component: NotFound,
                beforeEnter(to, from, next) {
                    if (validateRoute(to.fullPath)) {
                        window.location.href = to.fullPath;
                        return;
                    }
                    next();
                }
            }
            // {
            //     path: '/',
            //     name: 'home',
            //     component: Home
            // },
            // {
            //     path: '/home',
            //     name: 'home',
            //     component: Home
            // }
        ]
    });
    return router;
}
