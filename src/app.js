/**
 * @file entry
 * @author *__ author __*{% if: *__ email __* %}(*__ email __*){% /if %}
 */

import Vue from 'vue';
import App from './App.vue';
import {createRouter} from './router.js';
import store from './store/index.js';

Vue.config.productionTip = false;

/* eslint-disable no-new */
export function createApp(routerParams) {
    console.log(routerParams);
    let router = createRouter(routerParams);

    let app = new Vue({
        router,
        store,
        ...App
    });
    return {app, router, store};
}
