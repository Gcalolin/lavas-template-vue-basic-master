<template>
    <footer class="app-bottom-navigator-wrapper" v-show="show && navs.length">
        <ul class="navs">
            <router-link
                tag="li"
                class="nav-item"
                v-for="nav in navs"
                @click.native="handleNavClick(nav.route, nav.name,$event)"
                :key="nav.name"
                to=""
                :class="{'active': nav.active}"
                >
            <i :class="[nav.icon, {'active': nav.active}]"></i>
            <span>{{ nav.text }}</span>    
            </router-link>
        </ul>
    </footer>
</template>

<script>
import {mapState} from 'vuex';
import EventBus from '@/event-bus';

export default {
    name: 'app-bottom-navigator',
    computed: {
        ...mapState('appShell/appBottomNavigator', [
            'show',
            'navs'
        ])
    },
    mounted() {
        // console.log(this.navs[1].icon);
    },
    methods: {

        /**
         * 处理底部导航栏的点击行为，跳转到新页面
         *
         * @param {Object} route route
         * @param {string} name 触发的底部导航栏的 name
         */
        handleNavClick(route, name,e) {
            let eventData = {name};
            // console.log(name);
            console.log(e);
            if (route == '') {}
            // e.preventDefault();
            // 发送给父组件，内部处理
            this.$emit('click-nav', eventData);

            // 发送全局事件，便于非父子关系的路由组件监听
            EventBus.$emit('app-bottom-navigator:click-nav', eventData);
            if (route) {
                this.$router.replace(route);
            }
        }

    }
};
</script>

<style lang="scss" scoped>

.app-bottom-navigator-wrapper{
    height: 60px;
    // transition: transform 0.3s ease-out;
    border-top: 1px solid #ccc;
    box-shadow: 0 5px 50px -15px #555555;
   .navs {
        left: 0;
        right: 0;
        bottom: 0;
        height: 60px;
        position: fiex;
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        padding: 0;
        margin: 0;
       .nav-item {
            flex: 0 1 50%;
            text-align: center;
            font-size: 12px;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            &.active {
                color: #f60;
            }
            i {
                width: 20px;
                height: 22px;
                display: block;
                margin: 0 auto 2px auto;
            }
            .home {
                background: url("../../assets/images/icon/icon_main_tab_home_uncheck.png") no-repeat;
                background-size: cover;
                &.active {
                    background: url("../../assets/images/icon/icon_main_tab_home_check.png") no-repeat;
                    background-size: cover;
                }
            }
            .member {
                background: url("../../assets/images/icon/icon_main_tab_mine_uncheck.png") no-repeat;
                background-size: cover;
                &.active {
                    background: url("../../assets/images/icon/icon_main_tab_mine_check.png") no-repeat;
                    background-size: cover;
                }
            }
            .product {
                background: url("../../assets/images/icon/icon_main_tab_allgoods_uncheck.png") no-repeat;
                background-size: cover;
                &.active {
                    background: url("../../assets/images/icon/icon_main_tab_allgoods_check.png") no-repeat;
                    background-size: cover;
                }
            }
            .lottery {
                background: url("../../assets/images/icon/icon_main_tab_newest_uncheck.png") no-repeat;
                background-size: cover;
                &.active {
                     background: url("../../assets/images/icon/icon_main_tab_newest_check.png") no-repeat;
                    background-size: cover;
                }
            }
            .cart {
                background: url("../../assets/images/icon/icon_main_tab_cart_uncheck.png") no-repeat;
                background-size: cover;
                &.active {
                    background: url("../../assets/images/icon/icon_main_tab_cart_check.png") no-repeat;
                    background-size: cover;
                }
            }
        }
    }
}     
</style>
