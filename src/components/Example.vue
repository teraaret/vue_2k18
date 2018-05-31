<template>
    <div id="app">
        <h2>example</h2>
        <p>Tumbler: {{tumbler}}</p>
        <p>Example msg (emit from Input): {{message_from_input}}</p>
        <temp-input 
            :transfer="tr_message" 
            @tumbler_on="tumbler_on" 
            @upd_ex_msg="update_example_message"
            @upd_app_msg="emit_upd_app_msg"
        >
        </temp-input>
    </div>
</template>


<script>
    
import Input from './Input.vue'
    
export default {
    data() {
        return {
            message_from_input_to_app: "",
            message_from_input: "",
            tr_message: "hello from Example (via example)",
            tumbler: false
        }
    },
    methods: {
        tumbler_on() {
            this.tumbler = this.tumbler ? false : true;
        },
        update_example_message(text) {
            this.message_from_input = text;
        },
        emit_upd_app_msg(text) {
            this.message_from_input_to_app = text;
            this.$emit('upd_app_msg', text);
        }
    },
    components: {
        'temp-input': Input
    }
}
    
</script>


<style scoped>
    #app {
        background-color: #ddf;
    }
</style>