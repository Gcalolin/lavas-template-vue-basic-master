<template>
    <div class="hello">
        <h1 class="gray--text">LAVAS</h1>
        <h4 class="gray--text">[ˈlɑ:vəz]</h4>

    </div>
</template>

<script>
    // import appBottomNavigator from '../../components/common/appBottomNavigator.vue'
    export default {
        name: 'home',
        data() {
            return {
                msg: 'Welcome to Your Vue.js App home'
            };
        }
    };
</script>

<style scoped>
h1 {
    margin-top: 100px;
    font-size: 46px;
    font-weight: 500;
}

h4 {
    margin-bottom: 50px;
}

ul {
    padding: 0;
}

li {
    list-style: none;
    display: inline-block;
}

a {
    display: inline-block;
    line-height: 45px;
    width: 150px;
    height: 45px;
    font-weight: bold;
    background: #2874f0;
    text-decoration: none;
    color: #fff;
}


</style>

