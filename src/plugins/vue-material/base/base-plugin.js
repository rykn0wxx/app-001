import _ from 'lodash'

export const BasePlugin = components => {
  return {
    install: vm => {
      _.forEach(components, (component, k) => {
        const compName = _.kebabCase(
          k
            .replace(/^\.\//, '')
            .replace(/\.\w+$/, '')
            .replace(/([a-z0-9])([A-Z])/g, '$1-$2')
        )
        const definition = vm.extend(component)
        vm.component(compName, definition)
      })
    },
    components
  }
}
