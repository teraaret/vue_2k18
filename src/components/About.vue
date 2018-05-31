<template>
    <div id="app">
        <h1>About page</h1>
        <p><strong>Auth: {{auth}}</strong></p>
        <div v-if="auth">
            <p>Test: {{test}}</p>
            <hr>
            <p>{{about}}</p>
            <textarea type="text" v-model="about" v-on:keyup.ctrl.enter="save()"></textarea>
        </div>
        <div v-if="!auth">
            <p>You are not allowed to show this secret information, go away!</p>
        </div>
    </div>
</template>


<script>

    import axios from "axios";
    import Auth from "./Auth";
    
    export default {
        props: ["test"],
        data() {
            return {
                auth: false,
                endpoint: "/src/data/about.txt",
                about: ""
            }
        },
        methods: {
            testAuth() {
                if ( Auth.check(this) ) {
                    this.auth = true;
                }                
            },
            getAbout() {
                axios.get(this.endpoint)
                .then(response => {
                    this.about = response.data;
                })
                .catch(error => {
                    console.log(error);
                })
            },
            save() {
            }
        },
        created() {
            this.testAuth();
            this.getAbout();
        }
    }

</script>


<style scoped lang="less">
    #app {
        background-color: lightyellow;
        
        textarea {
            width: 400px;
            height: 80px;
            margin-left: 10px;
        }
    }

</style>
