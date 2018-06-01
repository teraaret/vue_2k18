<template>
    <div id="app">
        <router-link to="/">
            <img :src="img_logo" width="200"/>
        </router-link>
        <nav>
            <router-link v-if="user" class="router-link" to="/">index</router-link>
            <router-link v-if="user" class="router-link" to="/posts">posts</router-link>
            <router-link v-if="user" class="router-link" to="/about">about</router-link>
            <router-link class="router-link" to="/auth">auth</router-link>
            <p v-if="user">Hello, {{user}}!</p>
        </nav>
        <hr>
        <router-view></router-view>
    </div>
</template>


<script>
    
    import img_logo from "../img/logo.png"
    import Auth from './Auth'
    import router from '../router'
    
    export default {
        data() {
            return {
                img_logo: img_logo,
                router: router,
                user: ""
            }
        },
        methods: {
            checkAuth() {
                if ( Auth.checkAuth(this) ) {
                    this.user = Auth.getUser(this);
                } else {
                    if ( this.$route.path != "/auth" ) {
                        router.push('/auth')
                    }
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
    
    #app {
        text-align: center;
    }
    
</style>
