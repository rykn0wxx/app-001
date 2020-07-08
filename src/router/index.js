/**
 * Vue Router
 * @library
 */
// Lib imports
import Vue from 'vue'
import VueRouter from 'vue-router'

// Helpers
import { scrollBehavior, routeGenerator } from 'v~/services/utilities'
import paths from 'v~/router/paths'

const APP_ROUTES = paths.map(path => routeGenerator(path)).concat([{ path: '*', redirect: '/' }])

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: APP_ROUTES,
  scrollBehavior,
  linkActiveClass: 'active-router-link'
})

router.beforeEach((to, from, next) => {
  const isPublic = to.matched.some(record => record.meta.isPublic)
  const isProd = process.env.NODE_ENV === 'production'
  if (!isPublic && !isProd) {
    const isAuthenticated = router.app.$store.getters['users/isAuthenticated']
    if (!isAuthenticated) {
      next({
        path: '/signin'
      })
    } else {
      next()
    }
  } else {
    next()
  }
})

export default router
