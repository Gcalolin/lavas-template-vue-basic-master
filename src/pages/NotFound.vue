<template>
    <div>页面未找到</div>
</template>

<script>
    import { mapActions } from 'vuex';
    export default {
        name: 'pageNotFound',
        props: {},
        methods: {
            ...mapActions('appShell/appBottomNavigator', [
                'hideBottomNav'
            ])
        },
        activated() {
           this.hideBottomNav();
        }
    }
</script>

<style lang="scss" scoped>
    
</style>