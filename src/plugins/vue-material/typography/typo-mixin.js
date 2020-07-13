export function mcwTypoMixin(defaultTag, defaultClassModifier, name = `mdc-${defaultTag}`) {
  return {
    functional: true,
    props: {
      tag: {
        type: String,
        default: defaultTag
      },
      classModifier: {
        type: String,
        default: defaultClassModifier
      }
    },
    render(h, { props: { tag, classModifier }, scopedSlots, listeners, data: { attrs } }) {
      return h(
        tag,
        {
          class: {
            [name]: true,
            'mdc-typography': true,
            [`mdc-typography--${classModifier}`]: true
          },
          attrs,
          on: listeners
        },
        scopedSlots.default && scopedSlots.default()
      )
    }
  }
}
