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
                            router.push('/');
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
    check(context) {
        if (document.cookie) {
            context.error = 'cookie exist: ' + document.cookie;
            return document.cookie;
        } else {
            context.error = 'cookie NOT exist';
            return false;
        }
    },
    logout(context) {
        if ( document.cookie ) {
            context.$cookie.delete(cookie_name);
            router.push('/');
        }
    }
}
