<template>
    <div id="app">
        <h1>Auth page</h1>
        <div v-if="!authenticated">
            <p>login:</p>
            <input type="text" v-model="user.login" @keyup.enter="login()">
            <p>Password:</p>
            <input type="password" v-model="user.password" @keyup.enter="login()">
        </div>
        <div v-if="authenticated">
            <p>Вы вошли как {{a_user}}</p>
        </div>
        <p v-if="!authenticated">{{error}}</p>
        <button v-if="!authenticated" class="green" @click="login()">login</button>
        <button v-if="authenticated" class="red" @click="logout()">logout</button>
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
                error: " ",
                authenticated: false,
                a_user: "1"
            }
        },
        methods: {
            login() {
                if ((this.user.login == "") || (this.user.password == "")) {
                    this.error = "Fill the inputs!"
                } else {
                    Auth.login(this, this.user.login, this.user.password);
                }
            },
            logout() {
                if (Auth.logout(this)) {
                    this.authenticated = false;
                    this.a_user = "";
                } 
            }
        },
        created() {
            if (Auth.checkAuth(this)) {
                this.authenticated = true;
                this.a_user = Auth.getUser();
            }
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
            display: inline-block;
            border: none;
            color: white;
            cursor: pointer;
            padding: 10px;
            margin-top: 10px;
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
