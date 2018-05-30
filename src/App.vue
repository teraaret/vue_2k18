<template lang="pug">
    #app
        h1 app
        p App msg (emit from Input through Example): {{message_from_input}}
        p
            label(for="show_childs") Show childs?
            input(type="checkbox" v-model="show_childs" id="show_childs")
        temp-example(v-if="show_childs" @upd_app_msg="update_example_message")
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