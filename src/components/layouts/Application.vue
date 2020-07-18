<template>
  <layout-app>
    <NavBar slot="toolbar" />
    <main slot="view" class="content app-view h-full flex-col flex relative overflow-y-auto overflow-x-hidden">
      <RouterView class="wrapper py-8 px-0 block flex-noshrink sm:px-8 xs:px-8" />
    </main>
  </layout-app>
</template>

<script>
import LayoutApp from 'v~/components/partials/LayoutApp'
import NavBar from 'v~/components/partials/NavBar'
export default {
  name: 'Application',
  bodyClass: 'layouts-application',
  components: {
    LayoutApp,
    NavBar
  }
}
</script>

<style lang="scss" scoped></style>
