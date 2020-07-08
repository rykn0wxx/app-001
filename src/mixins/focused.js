import ComponentReactive from '../services/componentReactive'

let hasEvents = false
let eventTarget = null
// let supportsPassiveEvent = false
const CompFocused = new ComponentReactive({
  currentElement: null
})
// function checkPassiveEventSupport() {
//   try {
//     const opts = Object.defineProperty({}, 'passive', {
//       get () {
//         return supportsPassiveEvent = { passive: true }
//       }
//     })
//     // var opts = Object.defineProperty({}, 'passive', {
//     //   get() {
//     //     supportsPassiveEvent = { passive: true }
//     //   }
//     // })
//     window.addEventListener('ghost', null, opts)
//   } catch (e) {
//     //
//   }
// }
function setKeyboardInteraction({ keyCode, target }) {
  CompFocused.currentElement = target
}
function setMouseAndTouchInteraction(event) {
  CompFocused.currentElement = null
}
function createKeyboardEvents() {
  eventTarget.addEventListener('keyup', setKeyboardInteraction)
}
function createPointerEvents() {
  eventTarget.addEventListener('pointerup', setMouseAndTouchInteraction)
}
function createMSPointerEvents() {
  eventTarget.addEventListener('MSPointerUp', setMouseAndTouchInteraction)
}
function createMouseAndTouchEvents() {
  eventTarget.addEventListener('mouseup', setMouseAndTouchInteraction)

  if ('ontouchend' in window) {
    eventTarget.addEventListener('touchend', setMouseAndTouchInteraction, supportsPassiveEvent)
  }
}
function bindEvents() {
  if (window.PointerEvent) {
    createPointerEvents()
  } else if (window.MSPointerEvent) {
    createMSPointerEvents()
  } else {
    createMouseAndTouchEvents()
  }

  createKeyboardEvents()
}
function createEvents() {
  if (!hasEvents) {
    eventTarget = document.body
    // checkPassiveEventSupport()
    bindEvents()
    hasEvents = true
  }
}
export default {
  data: () => ({
    mdHasFocus: false
  }),
  computed: {
    focusedElement() {
      return CompFocused.currentElement
    }
  },
  watch: {
    focusedElement(el) {
      this.mdHasFocus = el === this.$el
    }
  },
  mounted() {
    createEvents()
  }
}
