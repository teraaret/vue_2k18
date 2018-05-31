<template>
    <div id="app">
        <h1>About page</h1>
        <p>Test: {{test}}</p>
        <hr>
        <p>{{about}}</p>
        <textarea type="text" v-model="about" v-on:keyup.ctrl.enter="save()"></textarea>
    </div>
</template>


<script>

    import axios from "axios";
    
    export default {
        props: ["test"],
        data() {
            return {
                endpoint: "/src/data/about.txt",
                about: ""
            }
        },
        methods: {
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
