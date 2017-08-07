<template>
    <div>我的购物车</div>
</template>

<script>
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