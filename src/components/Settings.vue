<template>
    <div id="app">
        <h1>Settings</h1>
        <span>BG color:</span>
        <select v-model="color">
            <option value="white">White</option>
            <option value="black">Black</option>
        </select>
        {{color}}
        <button @click="save()">Save</button>
    </div>
</template>


<script>
    
    import router from '../router/Vue.router.js'
    
    export default {
        data() {
            return {
                color: 'na'
            }
        },
        methods: {
            save() {
//                this.$cookie.set('bg_color', this.color, 1);
                this.$store.dispatch('editColor', this.color);
                router.push('/');
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
