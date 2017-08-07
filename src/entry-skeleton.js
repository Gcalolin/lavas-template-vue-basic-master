/**
 * @file 页面骨架
 * @author *__ author __*{% if: *__ email __* %}(*__ email __*){% /if %}
 */

import Vue from 'vue';
import Skeleton from '@/pages/home/Home.Skeleton.vue';

export default new Vue({
    components: {
        Skeleton
    },
    template: '<skeleton />'
});
