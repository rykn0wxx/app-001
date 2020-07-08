import raf from 'raf'
// waitForReadyState
async function waitForReadyState() {
  if (typeof document !== 'undefined' && document.readyState !== 'complete') {
    await new Promise(resolve => {
      const cb = () => {
        window.requestAnimationFrame(resolve)
        window.removeEventListener('load', cb)
      }
      window.addEventListener('load', cb)
    })
  }
}
// scrollBehavior
async function scrollBehavior(to, from, savedPosition) {
  await waitForReadyState()
  if (savedPosition) {
    return savedPosition
  }
  if (to.hash) {
    return { selector: to.hash }
  }
  return { x: 0, y: 0 }
}
// mdUuid
function mdUuid() {
  return Math.random()
    .toString(36)
    .slice(4)
}
// routeGenerator
let routeIndex = 0
function routeGenerator(pathObj) {
  const { name, path, icon } = pathObj
  const routes = {
    name,
    path,
    icon,
    meta: pathObj.meta ? pathObj.meta : { isPublic: false },
    component: resolve => import('v~/components/' + pathObj.view + '.vue').then(resolve)
  }
  routes.meta.pathIndex = routeIndex++
  if (pathObj.redirect) routes.redirect = pathObj.redirect
  if (pathObj.children) routes.children = pathObj.children.map(path => routeGenerator(path))
  return routes
}
// observeEvent
function observeEvent(el, eventName, observerFn, options) {
  function killObserver() {
    el.removeEventListener(eventName, observerFn)
  }
  eventName && eventName.indexOf('click') >= 0 && /iP/i.test(navigator.userAgent) && (el.style.cursor = 'pointer')
  el.addEventListener(eventName, observerFn, options || false)
  return {
    destroy: killObserver
  }
}
// resizeObserver
function resizeObserver(el = window, observerFn) {
  const observer = observeEvent(
    el,
    'resize',
    () => {
      raf(observerFn)
    },
    { passive: true }
  )
  return {
    destroy: observer.destroy
  }
}

export { waitForReadyState, scrollBehavior, mdUuid, routeGenerator, observeEvent, resizeObserver }
