import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _6cfa5506 = () => interopDefault(import('..\\pages\\app\\index.vue' /* webpackChunkName: "pages/app/index" */))
const _6b3803b0 = () => interopDefault(import('..\\pages\\form.vue' /* webpackChunkName: "pages/form" */))
const _a4a9d422 = () => interopDefault(import('..\\pages\\latihan.vue' /* webpackChunkName: "pages/latihan" */))
const _31c1632e = () => interopDefault(import('..\\pages\\lifecycle.vue' /* webpackChunkName: "pages/lifecycle" */))
const _c19daaec = () => interopDefault(import('..\\pages\\list.vue' /* webpackChunkName: "pages/list" */))
const _3a6668bf = () => interopDefault(import('..\\pages\\storage.vue' /* webpackChunkName: "pages/storage" */))
const _6268a696 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))
const _52e04774 = () => interopDefault(import('..\\pages\\app\\detail\\_id.vue' /* webpackChunkName: "pages/app/detail/_id" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/app",
    component: _6cfa5506,
    name: "app"
  }, {
    path: "/form",
    component: _6b3803b0,
    name: "form"
  }, {
    path: "/latihan",
    component: _a4a9d422,
    name: "latihan"
  }, {
    path: "/lifecycle",
    component: _31c1632e,
    name: "lifecycle"
  }, {
    path: "/list",
    component: _c19daaec,
    name: "list"
  }, {
    path: "/storage",
    component: _3a6668bf,
    name: "storage"
  }, {
    path: "/",
    component: _6268a696,
    name: "index"
  }, {
    path: "/app/detail/:id?",
    component: _52e04774,
    name: "app-detail-id"
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
