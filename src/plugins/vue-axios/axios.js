/**
 * Vue Meta
 * @library
 */
// Lib imports
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

// Full config:  https://github.com/axios/axios#request-config
// axios.defaults.baseURL = process.env.baseURL || process.env.apiUrl || '';
// axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
// axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded';

const config = {
  baseURL: process.env.baseURL || process.env.apiUrl || 'http://localhost:3001',
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json'
  }
}

const plainAxios = axios.create(config)

const securedAxios = axios.create({
  baseURL: config.baseURL,
  headers: {
    ...config.headers,
    Authorization: 'JWT null'
  }
})

Vue.use(VueAxios, {
  secured: securedAxios,
  plain: plainAxios
})

export { securedAxios, plainAxios }

export default {
  install(Vue) {
    Vue.axios = plainAxios
    window.axios = plainAxios
    Object.defineProperties(Vue.prototype, {
      axios: {
        get() {
          return plainAxios
        }
      },
      $axios: {
        get() {
          return plainAxios
        }
      }
    })
  }
}

// Plugin.install = function(Vue, options) {
//   Vue.axios = plainAxios
//   window.axios = plainAxios
//   Object.defineProperties(Vue.prototype, {
//     axios: {
//       get() {
//         return plainAxios
//       }
//     },
//     $axios: {
//       get() {
//         return plainAxios
//       }
//     }
//   })
// }

// Vue.use(Plugin)

// export default Plugin

// plainAxios.interceptors.request.use(
//   function(config) {
//     // Do something before request is sent
//     return config
//   },
//   function(error) {
//     // Do something with request error
//     return Promise.reject(error)
//   }
// )

// // Add a response interceptor
// plainAxios.interceptors.response.use(
//   function(response) {
//     // Do something with response data
//     return response
//   },
//   function(error) {
//     // Do something with response error
//     return Promise.reject(error)
//   }
// )
