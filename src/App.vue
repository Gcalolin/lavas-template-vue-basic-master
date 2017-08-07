<template>
    <div id="app">
        <router-view></router-view>
        <app-bottom-navigator
        class="app-shell-footer"
        @click-nav="handleClickBottomNav">
        </app-bottom-navigator>
    </div>
</template>

<script>
    import { mapState, mapActions } from 'vuex';
    import appBottomNavigator from '@/components/common/appBottomNavigator.vue';

    export default {
        name: 'app',
        components: {
            'app-bottom-navigator': appBottomNavigator
        },
        methods: {
            ...mapActions('appShell/appBottomNavigator', [
                'activateBottomNav'
            ]),
            handleClickBottomNav({name}) {
                // console.log(name);
                this.activateBottomNav(name);
            }
        }
    };
</script>

<style lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;

        .app-shell-footer {
            position: fixed;
            left: 0;
            bottom: 0;
            right: 0
        }
    }
</style>
