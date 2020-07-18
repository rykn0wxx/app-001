<template>
  <header :class="{ 'links-active': itemsActive }" class="layout-app--toolbar-wrapper navbar relative flex-col text-lg w-full self-start bg-s3 shadow-nav z-3">
    <nav v-out-click="{ handler: onClickOutside, closeConditional: outActive }" class="toolbar-tools wrapper relative text-lg tracking-extended font-normal flex-row items-center p-0 sm:px-8 xs:px-8">
      <div class="toolbar-brand flex-row items-center text-f1 mr-12 lt-xs:w-full lt-xs:mr-0 lt-xs:justify-between">
        <div class="toolbar-brand--wrapper flex-row">
          <svg class="toolbar-svg fill-current w-16 h-16 mr-4" version="1.1" viewBox="0 0 800 800" enable-background="new 0 0 800 800" xml:space="preserve">
            <path d="M367 7.1c-81.2 7-155.9 37-217.7 87.6C74.4 155.9 25.1 240.7 9.6 335c-4.1 24.6-5 36.7-5 64.5-.1 40.3 4.2 72.4 14.5 108.5C43 591.7 95.2 666.6 165.2 717.8c82.6 60.4 185.5 86.5 287.3 72.6 72.6-9.8 139.8-39 196.1-85 63.2-51.7 108.1-119.7 130.3-197.4 6.1-21.3 10.8-46.2 13.3-70 1.6-15.7 1.6-60.7 0-76-7-65.9-28.4-126.1-63.4-178.8C665.2 87.5 565.6 24.9 452.5 9.6 426.8 6.1 390.9 5 367 7.1zM416 26c22.8 1.2 37.9 3 58.1 7.1 63.5 12.7 122 41.5 171.9 84.4 11.1 9.6 30.9 29.6 40.7 41 29.4 34.5 53.8 77.1 68.3 119.2 28.7 83.1 27.6 171.9-3.2 254.3-8.9 24-23.5 52.5-38.1 74.5-32.4 48.9-78.5 91.9-128.2 119.8-21.1 11.8-61 29.6-62.6 27.9-.5-.6-2.2-13.6-4.3-33.5-.2-2.1.1-2.6 1.2-2.2 5.6 2.1 20.7 3.7 31.2 3.2 13.2-.7 20.2-2.3 31.6-7.7 11.9-5.5 35.3-21.5 33.7-23.1-.4-.4-5.5.7-11.3 2.5-5.8 1.8-13.8 3.9-17.9 4.6-14.9 2.5-39.9-1.5-63.2-10.1l-8.7-3.2-.4-6.6c-.3-3.6-.4-6.8-.2-7 .2-.2 6.5.8 14.1 2.3 24.9 4.7 33.5 5.7 54.3 6.3 17.1.5 21.9.3 29-1.2 15.8-3.2 33.3-13.3 44.8-26 9.4-10.2 20.2-26.5 17.7-26.5-.3 0-5.4 3.3-11.3 7.3-20 13.4-32.3 18.6-49 20.7-12.1 1.4-50.2 2.4-60.5 1.5l-8.9-.7 6.9-4.5c17.5-11.7 37.2-37.8 45.3-60 3.3-9.1 2.3-9.7-5.1-2.8-8.7 8.2-19.8 17.8-29.4 25.5-11.6 9.2-11.6 9.2-4.2.9 7.8-8.8 7.5-7.5 5.1-29.4-.8-7.7-1.7-16.3-1.9-19-.3-2.8-.9-9.5-1.5-15-1.1-11.2-2.6-28.6-3.5-41.7-.4-4.8-1.5-10.8-2.4-13.4-1.4-3.7-1.6-5.3-.7-8.5.9-3.3.8-4.5-.7-6.7-.3-5.9-5.8-11.5-7.2-18.9-2.3-12.6-7.3-38.4-8.5-44-1-4.7-1.4-5.2-4.3-5.8-4.4-.9-44.9-10.3-51.9-12-10.1-2.5-22.2-9.2-30-16.7-4-3.8-7.5-6.5-7.9-6.1-.4.5-1.1 3.9-1.6 7.8-1 6.7-.9 7.2 1.8 12 4.3 7.7 5.9 14.8 5.9 25.4 0 29.9-13.1 70.2-29 88.8-3.3 4-6.5 7.3-6.9 7.3-.4 0-1.1-9.8-1.4-21.8-.4-12.3-1.7-30.7-3.1-42.5-3.4-28.2-4.4-48.2-2.5-47.5.8.4 3.1 1.3 5.1 2.2 2 .9 3.9 1.2 4.2.8.2-.4-1.3-3.4-3.5-6.7-2.2-3.3-4.8-8.4-5.9-11.3-2.5-6.6-1.6-8.9 3.8-9.7 2-.3 5.1-1.3 6.7-2.1 4.1-2.1 10.1-7.1 9.3-7.9-.3-.3-4.8-1.3-9.9-2.2-10.4-1.7-26.2-1.3-36.3.8l-6 1.3 4.9 4.2c2.7 2.4 6.1 4.6 7.7 4.9 1.5.3 4.2.8 5.8 1.1 5.9 1.1 4.7 7.7-3.7 21.2-3.1 4.9-4 7.2-2.8 7.2.3 0 2.8-1.1 5.5-2.5l4.8-2.5-.4 9.8c-.3 5.3-1.8 22.1-3.4 37.2-1.6 15.1-3.2 36.5-3.6 47.5l-.7 19.9-3.5-3.9c-6.9-8-11.1-14.2-15.5-23-8.5-17-14.9-39.8-16.8-59.9-1.5-15.6-.4-23.9 4.6-34.4l3.6-7.6-1.2-7.3c-.6-4-1.4-7.3-1.7-7.3-.2 0-3.7 3-7.6 6.8-9 8.5-22.7 15.6-34.3 17.8-.7.1-12.5 2.8-26.2 6l-24.9 5.8-5.2 26.1c-6.3 32.2-7 35.1-10.5 40.3-2.6 3.9-2.7 4.5-1.6 8.4 1 3.6.9 4.9-.4 8.3-1.1 2.6-2.3 11.6-3.6 26.5-1.8 21.1-3.7 40.7-5.9 61.5-.5 4.9-1.2 11.9-1.6 15.5l-.6 6.6 8.1 9.1c4.5 5.1 8.1 9.4 8.1 9.8 0 2.1-25.6-18.3-42.7-34.1-5-4.6-9.4-8.4-9.7-8.4-2.2 0 4.6 17.6 10.7 27.7 9.2 15.3 24.8 32.7 37 41.1l5.8 4-8.8.8c-10.6.8-48.2-.2-60.8-1.7-16.8-2-28.6-7.2-50.8-22.1-4.9-3.3-9.1-5.7-9.5-5.4-.8.9 1.3 4.4 9.7 15.7 11.3 15.2 22.3 24.4 37.5 31.4 11.7 5.5 21.8 6.8 45.1 6.2 11-.3 24.5-1.3 30-2.1 11.9-1.9 37.2-6.5 39.9-7.3 1.8-.5 1.9-.1 1.3 5.7-.3 3.4-.9 6.6-1.4 7.1-1.8 1.8-23.1 9.2-33.2 11.5-5.8 1.3-15.8 2.9-22.2 3.6-10.1 1-12.7 1-20.2-.5-7.2-1.4-20.6-5.2-26.4-7.4-.7-.3-1.3.1-1.3.8.1 2.7 22.8 18.1 34.4 23.4 13.3 6 18.5 7 35.6 6.9 12.3-.1 17.1-.5 23-2.1 4.1-1.2 7.6-2 7.8-1.8.3.3-1 13.6-3 28.8-1.3 10.4.2 10.1-16.8 3.5-33.8-13.1-69.7-33.9-99.4-57.5-23.7-18.9-52.7-49.8-71.7-76.4-59-82.5-81.4-189.1-60.9-290 23-112.8 97.2-209.1 201.6-261.2 45-22.5 97.2-36.2 147.8-38.6 8.3-.5 15.6-.9 16.1-.9.6-.1 9.8.3 20.5.8z"/>
            <path d="M189.7 169c-17.3 9.3-31.9 17.8-39.8 23.1-6.6 4.4-10.1 9.6-15.3 22.5-3.8 9.7-10.9 34.4-10.1 35.2.3.3 1.5-.4 2.8-1.5 1.2-1.1 11.4-10.1 22.7-20 11.3-10 22.6-20.3 25.1-22.9 7.6-8 32.3-42.7 31.2-43.8-1-1-1.2-.9-16.6 7.4zM591 162c0 1.5 10.6 17.1 20.6 30.5 9.1 12.3 14.5 17.6 38.4 38.5 9.1 7.9 17.7 15.5 19.2 16.8 1.5 1.4 3.1 2.3 3.4 1.9.9-.8-6.1-25.1-10-34.8-6.2-15.4-8.3-18.3-18.1-24.7-11.2-7.2-51-29.2-53-29.2-.3 0-.5.5-.5 1z"/>
            <path d="M127.4 196.6c-14.3 7.6-22.1 14.1-25.9 21.4-5.2 10.2-8.4 23.6-10.5 44.6-1.1 11.1-1.5 59.2-.5 60.2.3.3 9.5-8.2 20.3-18.9 10.9-10.7 26.1-25.5 33.8-32.9 15.4-14.9 18.7-19.8 25.9-39.2 4-10.6 4-10.8 2-10.8-.8 0-1.5.4-1.5.9 0 2.1-18.4 20.1-26.1 25.5-10.3 7.3-16.8 12.7-27.9 23.1l-8.5 8-.3-3c-.5-3.8 1.6-23.8 3.4-33.1 2.5-13.2 7.7-23.8 22.8-46.7 2.4-3.6 1.3-3.4-7 .9zM662 193.6c0 .3 3.1 5.6 6.9 11.8 8.3 13.2 13.5 23.9 15.6 32.1 2 7.9 4.7 30 4.3 35.8l-.3 4.6-11-10c-6-5.5-15.5-13.2-21-17.2-11.4-8.2-20-16-26.5-24.1-2.5-3-5.1-5.5-5.7-5.6-.7 0-1.3.1-1.3.3 0 1.6 5.6 16.2 8.8 23.1 5.3 11.2 10.8 18.2 23.4 29.6 5.6 5.1 19.4 18.4 30.5 29.4 11.1 11 20.5 19.7 20.9 19.3.4-.4.7-12.3.7-26.5-.1-28.1-1.7-45.7-5.8-61.8-4.9-19.2-10.7-26.1-31.6-37.7-6.6-3.7-7.9-4.2-7.9-3.1z"/>
            <path d="M75.3 253.3c-6.2 11.4-12.6 25.5-14.6 32.5-6.1 20.2-3.5 58.5 5.9 88.7C70.3 386.6 80.3 414 81 414c.3 0 2.5-6.2 4.8-13.8 6.1-19.3 10.4-27.8 21.7-42.7 19.9-26.4 26.3-37.6 32.9-58.2 5.6-17.6 5.1-18-5.4-5.2-4.1 4.9-14.3 15.5-22.7 23.5-16.2 15.5-20.6 20.8-26.4 31.7-4.3 8.2-4 8.7-6.9-10.8-3.3-22.9-2.3-59 2.6-89.3 1.1-6.9-1.1-5.4-6.3 4.1zM715.5 244.9c-.3.6-.4 2.4-.1 3.9.4 1.5 1.5 10.8 2.6 20.7 2.7 24.4 2.7 51.2 0 70-1.1 7.7-2.3 14.7-2.6 15.5-.4 1-1.8-.9-4-5.3-6.1-12-9.9-16.5-28.1-33.5-6.7-6.2-15.9-15.8-20.5-21.3-4.5-5.4-8.6-9.9-9-9.9-.5 0-.8.7-.8 1.5 0 2.6 8.6 27.9 11.5 33.5 3.7 7.4 14.4 23.3 25.8 38.2 11.8 15.6 17.5 27.5 23.2 49 1 3.8 2.1 6.8 2.5 6.8 1.5 0 16.3-43.6 19.4-57.1 1.4-6.2 3.5-24.3 4.1-35.4 1.4-23.2-1.8-36.9-14-61-8.2-16.1-8.9-17.3-10-15.6z"/>
            <path d="M46.7 338.2c-2.1 8.5-4 29.8-4.1 46.3-.1 15.7.2 20.3 1.8 26.5 4.3 16.5 15.4 40.5 27.3 58.9 7.6 11.7 25.1 34.9 26.4 35 .3.1.9-9.9 1.2-22.2.3-12.2 1.1-25.4 1.7-29.2.6-3.9 3.7-14.9 7-24.5 6.3-18.5 9.4-32.8 12.5-58.3 1.6-13.3 1.5-16.2-.4-14.1-2.4 2.5-29.4 53-31.6 59.2-1.8 5.1-2.9 11-3.8 21.4l-1.3 14.3-5.6-11.1c-16.1-31.7-22.6-52.2-26.2-82.4-2.6-21.3-2.7-22-3.6-22-.4 0-1 1-1.3 2.2zM748 337.3c0 4-4.3 34.8-6 43.1-3.5 17.3-12 39.5-23.5 61.6l-5.4 10.5-.1-5.8c0-10.7-2.1-25-4.6-31.6-1.4-3.6-6.7-14.3-11.8-23.6-5.2-9.4-11.5-20.9-14.1-25.7-4.5-8.5-6.1-10.6-7.1-9.5-.8.8 3.5 33 6.2 46.4 1.3 6.7 4.4 17.7 6.8 24.5 8.1 22.6 9.6 31.7 9.6 60 0 9.8.3 17.8.8 17.8 1.1-.1 18-22 25-32.6 12.2-18.5 24.2-43.7 28.8-60.9 3.3-12.1 2-54.8-2.1-73.3-.6-2.3-2.5-3.1-2.5-.9z"/>
            <path d="M118.6 433.7c-1.3 4.2-5.8 32.9-7.1 45.7-2.6 24-1.9 37.4 2.9 53.1.8 2.7 1.3 5.1 1.1 5.4-.3.2-3.3-1.8-6.7-4.4-17-13-36.8-36-55.1-63.8-6.1-9.2-11.4-16.7-11.9-16.7-1.1 0-1 1.3.7 13.9 2.3 16.6 4.9 25.2 11 37 12.2 23.4 32 45.6 53.3 59.8 12.3 8.2 39.9 23 40.9 21.9.3-.3-.8-5.4-2.5-11.3-10.9-38-14.3-58.8-14.1-86.9.1-12.7-.3-18.6-1.6-23.9-1.8-7.7-9.4-31.5-10-31.5-.2 0-.6.8-.9 1.7zM673.2 444.7c-6.6 20.2-7.2 23.8-7.2 43.4 0 28.9-3.5 49.9-14.6 88.2-1.4 4.9-2.4 9.1-2.1 9.4 1 1 28.8-13.9 40.9-21.9 23.5-15.6 44.2-39.8 56-65.3 4.3-9.3 6.1-16 8.3-30.6 1.7-12.1 1.8-14.9.7-14.9-.5 0-5.6 7.3-11.5 16.2-18.1 27.9-37.6 50.5-55 64-6.6 5-7.8 5.7-7.2 3.7 7.1-22 7.2-43.3.3-84.4-1.6-9.9-3.3-18.6-3.7-19.3-.5-.8-2.4 3.6-4.9 11.5z"/>
            <path d="M142.3 511.2c1.1 3 10.7 36.7 11.7 41.3.6 2.7 2 9.9 3.1 16 3.4 19 6.3 25.6 17.5 40.3 3.5 4.5 6.4 8.4 6.4 8.7 0 .2-5.5-2.9-12.2-6.9-6.8-4-22.9-12.9-35.8-19.7-33.3-17.6-37.3-20.4-57.7-40.3-9.8-9.5-10.2-8.9-4.4 6.1 5.4 13.8 7.9 18.6 14.8 27.8 24.2 32.6 68.3 52.6 125.6 57.1 4.8.4 8.7.4 8.7 0 0-.3-3-4.8-6.7-9.8-15.5-21.6-20.7-30.9-29.9-54.2-3.2-8.2-8.6-19.7-11.9-25.6-8.9-15.5-26.8-42-28.4-42-.7 0-1.1.6-.8 1.2zM641.8 526.3c-18.1 27.5-21 32.9-29.4 54.4-7.5 19.2-13.3 29.7-28.4 50.8-3.1 4.4-6 8.6-6.5 9.4-.7 1.2.6 1.3 8.1.7 67.2-5.2 116.6-32.2 136-74.1 4.6-10 9.4-23.2 8.7-23.9-.3-.3-5.7 4.4-11.9 10.4-17.4 16.8-21.6 19.7-55.6 37.6-17.4 9.2-35.6 19.5-44.8 25.3-3 1.9-2.7 1.5 5.6-9.4 10.5-14 13.1-20.3 17-42 2-10.9 11.3-46.8 14.1-54.3.3-.6-.1-1.2-.8-1.2-.8 0-6.2 7.3-12.1 16.3z"/>
          </svg>
          <h2 class="toolbar-title md-headline m-0 font-semibold tracking-extended">Brand</h2>
        </div>
        <button @click="showItems" class="layout-app--toolbar-btn toolbar-btn md-btn btn-icon flex-row items-center cursor-pointer px-5 py-5 rounded text-f2 bg-trans border-0">
          <svg class="md-icon" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
        </button>
      </div>
      <!-- <transition v-bind:css="false" name="baritems" @beforeEnter="itemsBeforeEnter" @enter="itemsEnter" @afterEnter="itemsAfterEnter" @beforeLeave="itemsBeforeLeave" @leave="itemsLeave" @afterLeave="itemsAfterLeave"> -->
        <div v-show="forceShow" tabindex="-1" class="toolbar-items relative h-full w-full flex-row items-stretch justify-end text-lg font-normal m-0">
          <router-link to="/home" class="toolbar-item relative md-subhead block tracking-extended text-f2 text-opacity-70 text-inherit font-inherit m-inh mx-4 px-3 hover:text-f1 hover:text-opacity-90">
            Home
          </router-link>
          <router-link to="/about" class="toolbar-item relative md-subhead block tracking-extended text-f2 text-opacity-70 text-inherit font-inherit m-inh mx-4 px-3 hover:text-f1 hover:text-opacity-90">
            About
          </router-link>
          <router-link to="/login" class="toolbar-item relative md-subhead block tracking-extended text-f2 text-opacity-70 text-inherit font-inherit m-inh mx-4 px-3 hover:text-f1 hover:text-opacity-90">
            Login
          </router-link>
          <div :style="{ transform: inkStyle }" class="toolbar-item-ink absolute bottom-0 left-0 w-full h-1"></div>
        </div>
      <!-- </transition> -->
    </nav>
  </header>
</template>

<script>
import { resizeObserver } from '../../services/utilities'
export default {
  name: 'NavBar',
  data () {
    return {
      itemsActive: false,
      forceShow: false,
      elWidth: 0,
      xTranslate: 0,
      xScale: 0,
      resizeHandler: null,
      resizeTimeout: null
    }
  },
  computed: {
    inkStyle () {
      return `translateX(${this.xTranslate}%) scaleX(${this.xScale})`
    }
  },
  watch: {
    $route: {
      deep: true,
      immediate: true,
      handler: 'updateItemInk'
    },
    '$mq.gtxs': {
      deep: true,
      immediate: true,
      handler: function (isXs) {
        if (isXs) {
          this.forceShow = true
          this.itemsActive = false
        } else {
          this.forceShow = false
        }
      }
    }
  },
  methods: {
    outActive (e) {
      return this.itemsActive
    },
    onClickOutside (e) {
      this.itemsActive = false
      this.forceShow = false
    },
    showItems () {
      this.itemsActive = !this.itemsActive
      this.forceShow = this.itemsActive
    },
    updateItemInk (arg) {
      this.$nextTick(() => {
        if (typeof this.$el === 'undefined') return
        this.resizeHandler = resizeObserver(window, this.onResize.bind(this))
        this.itemsActive = false
        this.forceShow = this.$mq.gtxs
        this.updateSize()
      })
    },
    onResize () {
      clearTimeout(this.resizeTimeout)
      this.resizeTimeout = window.setTimeout(this.updateSize.bind(this), 200)
    },
    updateSize () {
      if (this.$mq.gtxs) {
        const activeLink = this.$el.querySelector('.toolbar-item.active-router-link')
        this.elWidth = this.$el.querySelector('.toolbar-items').getBoundingClientRect().width
        this.xScale = activeLink.offsetWidth / this.elWidth
        this.xTranslate = activeLink.offsetLeft / this.elWidth * 100
      }
    }
  },
  beforeDestroy () {
    this.resizeHandler.destroy()
  }
}
</script>

<style lang="scss" scoped>
@import '../../sass/init';
.navbar {
  color: rgba($f1, 0.87);
  .toolbar {
    &-tools, &-brand {
      max-height: 64px;
      min-height: 64px;
      height: 64px;
    }
    &-items {
      transition-property: all;
      transition-duration: 0.35s;
      transition-timing-function: cubic-bezier(0.445, 0.05, 0.55, 1);
      &:hover {
        .toolbar-item {
          color: rgba($desc, 0.5);
          &:hover {
            color: rgba($desc, 0.7);
          }
        }
      }
      &.active {
        display: flex;
      }
    }
    &-item {
      line-height: 64px;
      &:last-child {
        margin-right: -0.8rem;
      }
      &::after {
        content: '';
        position: absolute;
        width: 100%;
        height: 0;
        left: 0;
        bottom: 3px;
        transition: all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1);
      }
      &.active-router-link {
        --text-opacity: 1;
      }
      &-ink {
        transform-origin: left top;
        will-change: transform;
        transition: transform .125s cubic-bezier(.35,0,.25,1);
        color: $secondary;
        background-color: $secondary;
      }
    }
    @media (min-width: $layout-breakpoint-sm) {
      &-btn {
        display: none;
      }
    }
    @media (min-width: 0) and (max-width: $layout-breakpoint-sm - 1) {
      &-tools, &-brand {
        min-height: 48px;
        height: 48px;
      }
      &-item {
        line-height: 48px;
      }
      &-item-ink {
        display: none;
      }
      &-items {
        display: flex;
        flex-direction: column;
        flex: 1;
      }
    }
    @media (min-width: $layout-breakpoint-sm) and (max-width: $layout-breakpoint-md - 1) {
      &-tools, &-brand {
        max-height: 56px;
        min-height: 56px;
        height: 56px;
      }
      &-item {
        line-height: 56px;
      }
    }
  }
}
.navbar {
  &.links-active {
    @media (min-width: 0) and (max-width: $layout-breakpoint-xs) {
      .toolbar {
        &-tools {
          flex-direction: column;
          max-height: 100%;
          height: 100%;
        }
        &-item {
          text-align: right;
          width: 100%;
          padding-right: 2rem;
        }
      }
    }
  }
}
</style>
