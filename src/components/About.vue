<template>
    <div id="app">
        <h1>About page</h1>
        <p>Test: {{test}}</p>
        <hr>
        <p>{{about}}</p>
        <textarea v-model="about" v-on:keyup="editAbout()"></textarea>
    </div>
</template>


<script>

    import axios from "axios";
    
    export default {
        props: ["test"],
        data() {
            return {
                about: ""
            }
        },
        methods: {
            editAbout() {
                this.$store.dispatch('editAbout', this.about);
            }
        },
        created() {
            this.about = this.$store.getters.getAbout;
        },
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
