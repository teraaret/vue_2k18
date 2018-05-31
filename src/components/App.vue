<template>
    <div id="app">
        <h1>app</h1> 
        <p>App msg (emit from Input through Example): {{message_from_input}}</p> 
        <p>
            <label for="show_childs">Show childs?</label>
            <input type="checkbox" v-model="show_childs" id="show_childs">
        </p>
        <temp-example v-if="show_childs" @upd_app_msg="update_example_message"></temp-example>
    </div>
</template>

<script>
    
import Example from './Example.vue'
    
export default {
    name: 'app',
    data () {
        return {
            show_childs: true,
            message_from_input: ""
        }
    },
    methods: {
        update_example_message(text) {
            this.message_from_input = text;
        },
    },
    components: {
        'temp-example': Example
    }
}
    
</script>

<style scoped>
    #app {
        background-color: #fdd;
    }
</style>