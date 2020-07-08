<template>
  <div class="mdc-layout-app min-h-full min-w-0 w-full flex flex-col content-start items-stretch">
    <nav v-if="withToolbar" class="mdc-layout-app--toolbar-wrapper navbar relative flex-col text-lg w-full self-start bg-darker shadow-nav z-3">
      <slot name="toolbar" />
    </nav>
    <div class="mdc-layout-app--main-container flex-row flex items-stretch">
      <div v-if="withDrawer" class="mdc-layout-app--drawer-wrapper flex-nogrow">
        <slot name="drawer" class="h-full" />
      </div>
      <div class="mdc-layout-app--content-wrapper flex-auto">
        <slot name="view" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MdLayoutApp',
  data () {
    return {
      withDrawer: false,
      withToolbar: false
    }
  },
  mounted () {
    this.$nextTick(() => {
      this.withDrawer = !!this.$scopedSlots.drawer
      this.withToolbar = !!this.$scopedSlots.toolbar
    })
  }
}
</script>

<style lang="scss" scoped>
.mdc-layout-app {
  &--toolbar-wrapper {
    min-height: 64px;
    transition: all 0.5s cubic-bezier(.35,0,.25,1);
  }
  &--drawer-wrapper, &--toolbar-wrapper {
    order: -1;
  }
  &--main-container {
    align-content: stretch;
  }
}
</style>
