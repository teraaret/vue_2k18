<template>
    <div id="app">
        <nav>
            <router-link class="router-link" to="/">index</router-link>
            <router-link class="router-link" to="/posts">posts</router-link>
            <router-link class="router-link" to="/about">about</router-link>
            <router-link class="router-link" to="/auth">auth</router-link>
            <p v-if="user">Hello, {{user}}!</p>
        </nav>
        <hr>
        <router-view></router-view>
    </div>
</template>


<script>
    
    import Auth from './Auth'
    
    export default {
        data() {
            return {
                user: ""
            }
        },
        methods: {
            checkAuth() {
                if ( Auth.check(this) ) {
                    this.user = Auth.check(this).split("=")[1];
                } else {
                    this.user = false;
                }
            }
        },
        created() {
            this.checkAuth();
        },
        watch: {
            '$route' () { // Этот скрипт следит за обновлением URL
                this.checkAuth();
            }
        }
    }

</script>


<style scoped>
    #app {}

</style>
