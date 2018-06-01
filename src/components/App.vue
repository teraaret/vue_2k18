<template>
    <div id="app">
        <h1>App (2 уровень)</h1> 
        <p>Var_one (Vuex store): {{about}}</p> 
        <p>App msg (передано из Input): {{message_from_input}}</p> 
        <p>
            <label for="show_childs">Show childs?</label>
            <input type="checkbox" v-model="show_childs" id="show_childs">
        </p>
        <temp-example v-if="show_childs" @upd_app_msg="update_example_message"></temp-example>
    </div>
</template>

<script>
    
    import Example from './Example.vue'
    import {mapGetters} from 'vuex'

    export default {
        name: 'app',
        data() {
            return {
                show_childs: true,
                message_from_input: ""
            }
        },
        computed: {
//            about() { // Так было раньше
//                return this.$store.getters.getAbout
//            },
            ...mapGetters({        // Эта дичь из ES6 разврапливает объект в отдельные значения
                about: 'getAbout'  // Она так же требует пакета babel-preset-stage-2 (у меня 3)
            }),
            test(){
                return 'test' // Это здесь просто для наглядности
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
