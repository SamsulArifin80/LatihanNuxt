import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _409c76f2 = () => interopDefault(import('..\\pages\\app - Copy\\index.vue' /* webpackChunkName: "pages/app - Copy/index" */))
const _2c559058 = () => interopDefault(import('..\\pages\\form.vue' /* webpackChunkName: "pages/form" */))
const _89432f72 = () => interopDefault(import('..\\pages\\latihan.vue' /* webpackChunkName: "pages/latihan" */))
const _c02d00f4 = () => interopDefault(import('..\\pages\\lifecycle.vue' /* webpackChunkName: "pages/lifecycle" */))
const _604eb732 = () => interopDefault(import('..\\pages\\list.vue' /* webpackChunkName: "pages/list" */))
const _7606a224 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _de437204 = () => interopDefault(import('..\\pages\\app - Copy\\detail\\_id.vue' /* webpackChunkName: "pages/app - Copy/detail/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/app%20-%20Copy",
    component: _409c76f2,
    name: "app - Copy"
  }, {
    path: "/form",
    component: _2c559058,
    name: "form"
  }, {
    path: "/latihan",
    component: _89432f72,
    name: "latihan"
  }, {
    path: "/lifecycle",
    component: _c02d00f4,
    name: "lifecycle"
  }, {
    path: "/list",
    component: _604eb732,
    name: "list"
  }, {
    path: "/",
    component: _7606a224,
    name: "index"
  }, {
    path: "/app%20-%20Copy/detail/:id",
    component: _de437204,
    name: "app - Copy-detail-id"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
