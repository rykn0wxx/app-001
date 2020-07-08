export const BasePlugin = (components) {
  return {
    install: vm => {
      for (const k in components) {
        if (Object.prototype.hasOwnProperty.call(components, k)) {
          const component = components[k]
          vm.component(component.name, component)
        }
      }
    },
    components
  }
}
