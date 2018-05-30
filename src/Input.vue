<template>
    <div id="app">
        <h3>Input</h3>
        <p>Prop from Example: {{transfer}}</p>
        <hr>
        <p>Input msg: {{message}}</p>
        <hr>
        
        <p>
            <label>App msg:
                <input type="text" v-model="app_message" @input="emit_upd_app_msg">
            </label>
        </p>
        <p>
            <label>Example msg:
                <input type="text" v-model="ex_message" @input="emit_upd_ex_msg">
            </label>
        </p>
        <p>
            <label>Input msg:
                <input type="text" v-model="message">
            </label>
        </p>
        <button @click="$emit('tumbler_on')">Tumble</button>
    </div>
</template>

<script>
    export default {
        props: ["transfer"],
        data() {
            return {
                app_message: "",
                ex_message: "",
                message: "",
            }
        },
        methods: {
            emit_upd_ex_msg() {
                this.$emit('upd_ex_msg', this.ex_message);
            },
            emit_upd_app_msg() {
                this.$emit('upd_app_msg', this.app_message);
            }
        }
    }

</script>

<style scoped lang="less">
    // LESS
    #app {
        background-color: #dfd;
        input {
            padding: 5px;
            background-color: #eee;
            border: 1px solid grey;
            border-radius: 5px;
        }
        button {
            border: none;
            padding: 5px 20px;
            background-color: royalblue;
            color: white;
            transition: 0.25s ease;
            cursor: pointer;
            &:hover {
                background-color: limegreen;
            }
        }
    }

</style>
