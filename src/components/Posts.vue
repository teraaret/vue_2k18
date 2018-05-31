<template>
    <div id="app">
        <h1>Posts page</h1>
        <p>
            <router-link 
            class="router-link" 
            v-for="post in posts" 
            v-bind:key="Math.random(999)"
            :to="{ name: 'post', params: { index: post.id } }">{{post.title}}</router-link>
        </p>
    </div>
</template>


<script>
    
    import axios from 'axios';

    export default {
        data() {
            return {
                endpoint: "/src/data/posts.json",
                posts: []
            }
        },
        methods: {
            getAllPosts() {
                axios.get(this.endpoint)
                    .then(response => {
                        this.posts = response.data;
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },
        created() {
            this.getAllPosts();
        }
    }

</script>


<style scoped>
    #app {
        background-color: pink;
    }

</style>
