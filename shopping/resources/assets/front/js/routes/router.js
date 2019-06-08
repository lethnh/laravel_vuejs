import Vue from 'vue'
import VueRouter from 'vue-router'

import BasicLayout from '../views/layouts/BasicLayout';
import HomePage from '../views/pages/HomePage.vue';

Vue.use(VueRouter)

const routes = [{
        path: '/',
        component: BasicLayout,
        children: [{
            path: '/',
            component: HomePage,
            name: 'home'
        }, ],
    },


    // //  DEFAULT ROUTE
    // {
    //     path: '*',
    //     component: NotFoundPage
    // }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

// router.beforeEach((to, from, next) => {
//   //  If the next route is requires user to be Logged IN
//   if (to.matched.some(m => m.meta.requiresAuth)) {
//     return AuthService.checkLogin().then(authenticated => {
//       if (!authenticated) {
//         return next({ path: '/login' })
//       }
//       return next()
//     })
//   }

//   //  If the next route is requires user to be Logged OUT
//   if (to.matched.some(m => m.meta.requiresNotAuth)) {
//     return AuthService.checkLogin().then(authenticated => {
//       if (authenticated) {
//         return next({ path: '/' })
//       }
//       return next()
//     })
//   }
//   return next()
// })

export default router
