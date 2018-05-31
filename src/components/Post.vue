<template>
    <div id="app">
        <h1>Post page</h1>
        <p>
            <router-link 
            class="router-link" 
            v-for="post in posts" 
            v-bind:key="Math.random(999)"
            :to="{ name: 'post', params: { index: post.id } }" >{{post.title}}</router-link>
        </p>
        <h2># {{index}} {{post.title}}</h2>
        <p>{{post.text}}</p>
    </div>
</template>


<script>
    
    import axios from "axios";

    export default {
        props: ['index'], // Принимает index от ссылки на Posts и на Post, чтобы она всегда была
        data() {
            return {
                endpoint: "/src/data/posts.json",
                posts: [],
                post: {},
                title: "",
                text: ""
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
            },
            getPost(index) {
                axios.get(this.endpoint)
                    .then(response => {
                        this.post = response.data[index - 1]; // -1, потому что Айди на 1 больше реального индекса в json
                    })
                    .catch(error => {
                        console.log(error);
                    })
            }
        },
        created() {
            this.getAllPosts(); // Загружаем все посты, чтобы сформировать список ссылок
            this.getPost(this.index); // Загружаем один пост, чтобы вывести его на экране
        },
        watch: {
            '$route' () { // Этот скрипт следит за обновлением URL, чтобы вызывать функцию загрузки
                this.getPost(this.index);
            }
        }
    }

</script>


<style scoped lang="less">
    #app {
        background-color: #dff;

        input {
            display: block;
            padding: 5px;
        }
    }

</style>
