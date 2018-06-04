<template>
    <div id="app">
        <h1>Settings</h1>
        <span>BG color:</span>
        <h2>Color:</h2>
        <div v-for="color in radio_color">
            <label>{{color}}: 
                <input type="radio" name="color" :value="color" @change=save(color)>
            </label>
        </div>
    </div>
</template>


<script>
    
    import router from '../router/Vue.router.js'
    import settings from '../settings/settings.js'
    
    export default {
        data() {
            return {
                radio_color: ["white","black","wheat"]
            }
        },
        methods: {
            save(color) {
                this.$store.dispatch('editColor', color);
                settings.set(this);
            }
        },
        created() {
            this.color = this.$store.getters.getColor;
        }
    }

</script>


<style scoped lang="less">
    #app {
        background-color: cornsilk;
        select {
            padding: 5px;
        }
    }

</style>
