import router from '../../router'
import axios from 'axios'
import $ from 'jquery'

var cookie_name = 'vue_2k16';

export default {
    login(context, login, password) { // context - это переданный экземпляр Vue для доступа к нему
        axios.get('/src/data/users.json')
            .then(response => {
                var users = response.data;
                var found = false;
                $.each(users, function (index, value) {
                    if ( login == value.login ) { // Находим логин
                        if ( password == value.password ) { // Если нашли логин, сравниваем пароль
                            found = true;
                            context.$cookie.set(cookie_name, login, 1);
                            context.authenticated = true;
                            context.a_user = document.cookie.split("=")[1];
//                            router.push('/');
                        }
                    }
                });
                if ( !found ) { 
                    context.error = "Not found";
                } // Это выводится в шаблоне
            })
            .catch(error => {
                console.log(error);
            })
    },
    checkAuth(context) {
        if (document.cookie) {
            return true;
        }
    },
    getUser() {
        if (document.cookie) {
            return document.cookie.split("=")[1];
        }
    },
    logout(context) {
        if ( document.cookie ) {
            context.$cookie.delete(cookie_name);
            context.authenticated = false;
//            router.push('/');
        }
    }
}
