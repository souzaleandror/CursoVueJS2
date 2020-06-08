import Vue from 'vue'
import axios from 'axios'

axios.defaults.baseURL = 'https://curso-vue-8dcd6.firebaseio.com/'
axios.defaults.headers.common['Authorization'] = 'abc123';
axios.defaults.get['Accepts'] = 'application/json';

Vue.use({
  install(Vue) {
    Vue.prototype.$http = axios
    Vue.prototype.$http = axios.create({
      baseURL: 'https://curso-vue-8dcd6.firebaseio.com/',
      headers: {
        "Authorization": "abc123"
      }
    })

    Vue.prototype.$http.interceptors.request.use(config => {
      // eslint-disable-next-line no-console
      console.log('interceptor request 1');
      // eslint-disable-next-line no-console
      console.log(config.method);

      if(config.method == 'post') {
        config.method = 'put';
      }

      // eslint-disable-next-line no-console
      console.log('interceptor request 2');
      // eslint-disable-next-line no-console
      console.log(config.method);

      return config;

    }, error => Promise.reject(error))

    Vue.prototype.$http.interceptors.response.use(res => {
      // eslint-disable-next-line no-console
      console.log('interceptor response 1');
      // eslint-disable-next-line no-console
      console.log(res.method);
      console.log(res);
      const array = [];
      for(let chave in res.data) {
        array.push({id: chave, ...res.data[chave]})
        array.push({id: chave, nome: res.data[chave].nome, email: res.data[chave].email})
      }

      res.data = res

      return res;
    }, error => Promise.reject(error))
  }
})
