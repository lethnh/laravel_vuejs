import Vue from 'vue'
import VueRouter from 'vue-router'

import LayoutIconSidebar from '../views/layouts/LayoutIconSidebar'
import PageDashboard from '../views/pages/Dashboard.vue'
// User
import Users from '../views/pages/Users/Users.vue'
// Product
import Products from '../views/pages/Products/Products.vue'

Vue.use(VueRouter)
// Vue.use(VModal)

const routes = [{
        path: '/dashboard',
        component: LayoutIconSidebar,
        // meta: {
        //     requiresAuth: true
        // },
        children: [
            // Dashboard
            {
                path: '/',
                component: PageDashboard,
                name: 'dashboard'
            },
            {
                path: 'users',
                component: Users,
                name: 'users'
            },
            {
                path: 'products',
                component: Products,
                name: 'products'
            },

        ]
    },

    /*
     |--------------------------------------------------------------------------
     | Auth & Registration Routes
     |--------------------------------------------------------------------------|
     */

    // {
    //   path: '/dashboard',
    //   component: LayoutLogin,
    //   children: [
    //     {
    //       path: 'login',
    //       component: PageLogin,
    //       name: 'login'
    //     },
    //   ]
    // },

    //  DEFAULT ROUTE
    // {
    //     path: '*',
    //     component: PageNotFound
    // }
]

const router = new VueRouter({
    routes,
    mode: 'history',
    linkActiveClass: 'active'
})

// router.beforeEach((to, from, next) => {
//     //  If the next route is requires user to be Logged IN
//     if (to.matched.some(m => m.meta.requiresAuth)) {
//         return AuthService.check().then(authenticated => {
//             if (!authenticated) {
//                 return next({
//                     path: '/dashboard/login'
//                 })
//             }
//             return next()
//         })
//     }
//     return next()
// })

export default router
