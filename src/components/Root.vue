<template>
    <div id="app">
        <router-link to="/">
            <img :src="img_logo" width="120"/>
        </router-link>
        <nav>
            <router-link v-if="user" class="router-link" to="/">index</router-link>
            <router-link v-if="user" class="router-link" to="/settings">settings</router-link>
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
    import Auth from './Auth/auth.js'
    import router from '../router/Vue.router.js'
    
    export default {
        data() {
            return {
                img_logo: img_logo,
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
                var color = this.$store.getters.getColor;
                document.getElementsByTagName("BODY")[0].style.backgroundColor = color;
            }
        }
    }

</script>


<style scoped>
    #app {
        margin: 0;
        padding: 0;
        padding-bottom: 20px;
        text-align: center;
    }
    
</style>
