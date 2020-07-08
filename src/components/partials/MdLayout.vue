<script>
export default {
  name: 'MdLayout',
  functional: true,
  render (h, context) {
    const layoutData = {
      wrapper: {
        staticClass: 'layout-app min-h-full min-w-0 w-full flex flex-col content-start items-stretch',
        ref: 'layoutWrapper'
      },
      container: {
        staticClass: 'layout-app--main-container flex-row flex items-stretch',
        ref: 'layoutContainer'
      },
      content: {
        staticClass: 'layout-app--content-wrapper flex-auto',
        ref: 'layoutContent'
      },
      drawer: 'layout-app--drawer-wrapper flex-nogrow h-full'
    }
    const { toolbar, view, drawer } = context.slots()
    const elContent = h('section', layoutData.content, [view])
    const elContainer = h('div', layoutData.container, [drawer, elContent])
    return h('div', layoutData.wrapper, [toolbar, elContainer])
  }
}
</script>

<style lang="scss" scoped></style>
