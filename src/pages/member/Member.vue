<template>
    <div>我的云购</div>
</template>

<script>
    import { mapActions } from 'vuex';
    
    export default {
        name: 'home',
        props: {},
        methods: {
            ...mapActions('appShell/appBottomNavigator', [
                'showBottomNav',
                'activeBottomNav'
            ])
        },
        activated() {
            this.activeBottomNav('home');
            this.showBottomNav();
        }
    }
</script>

<style lang="scss" scoped>
    
</style>