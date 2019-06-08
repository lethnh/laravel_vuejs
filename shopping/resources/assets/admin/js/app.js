/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */
import router from '../js/routes/router'
import utils from './helpers/utilities'

require('./bootstrap')

Vue.prototype.$utils = utils

/**
 * Add global router function
 */
global.route = function (name, params = {}, query = {}) {
    return router.resolve({
        name: name,
        params: params,
        query: query,
    })
}
Vue.prototype.route = global.route;

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */
const app = new Vue({
    router,

    components: {

    }
}).$mount('#app')
