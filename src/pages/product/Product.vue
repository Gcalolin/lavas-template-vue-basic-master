<template>
    <div>我所有商品</div>
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