<template>
    <div id="app">
        <h1>About page</h1>
        <p>Test: {{test}}</p>
        <button @click="change_lorem">Change lorem to ipsum</button>
    </div>
</template>


<script>
export default {
    props: ["test", "foo_change_lorem"],
    data () {
        return {
        }
    },
    methods: {
        change_lorem() {
            this.foo_change_lorem();
        }
    }
}
</script>


<style scoped>
#app {
    
}
</style>