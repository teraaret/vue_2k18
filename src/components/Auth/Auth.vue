<template>
    <div id="app">
        <h1>Auth page</h1>
        <p>login:</p>
        <input type="text" v-model="user.login" @keyup.enter="login()">
        <p>Password:</p>
        <input type="password" v-model="user.password" @keyup.enter="login()">
        <p>{{error}}</p>
        <button class="green" @click="login()">login</button>
        <button class="blue" @click="check()">check</button>
        <button class="red" @click="logout()">logout</button>
    </div>
</template>


<script>
    
    import Auth from '../Auth'
    
    export default {
        data() {
            return {
                user: {
                    login: "",
                    pass: ""
                },
                error: " "
            }
        },
        methods: {
            login() {
                if (this.user.login == "" || this.user.password == "") {
                    this.error = "Fill the inputs!"
                } else {
                    Auth.login(this, this.user.login, this.user.password);
                }
            },
            check() {
                Auth.check(this);
            },
            logout() {
                Auth.logout(this);
            }
        },
        created() {
            console.log(this);
        }
    }

</script>


<style scoped lang="less">
    #app {
        background-color: #eee;
        p {
            margin: 0;
            padding: 0;
            margin-left: 10px;
            margin-bottom: 5px;
        }
        input {
            padding: 5px;
            width: 200px;
            margin-bottom: 10px;
        }
        button {
            width: 214px;
            display: block;
            border: none;
            color: white;
            cursor: pointer;
            padding: 10px;
            margin-bottom: 4px;
            &.green {
                background-color: forestgreen;
            }
            &.blue {
                background-color: royalblue;
            }
            &.red {
                background-color: firebrick;
            }
            &:hover {
                background-color: dodgerblue;
            }
        }
    }

</style>
