import { CustomBtnMixin, DispatchEventMixin } from '../base'
import { RippleMixin } from '../ripple'

export default {
  name: 'mcw-button-base',
  mixins: [DispatchEventMixin, CustomBtnMixin, RippleMixin],
  render(h) {
    const nodes = [h('div', { class: { 'mdc-button__ripple': 1 } }), h('span', { class: { 'mdc-button__label': 1 } }, this.$slots.default)]
    if (this.$slots.icon || this.icon) {
      nodes.unshift(
        this.$slots.icon ||
          h(
            'i',
            {
              class: {
                'material-icons': 1,
                'mdc-button__icon': 1
              },
              attrs: { 'aria-hidden': true }
            },
            this.icon
          )
      )
    }

    if (this.$slots.trailingIcon || this.trailingIcon) {
      nodes.push(
        this.$slots.trailingIcon ||
          h(
            'i',
            {
              class: {
                'material-icons': 1,
                'mdc-button__icon': 1
              },
              attrs: { 'aria-hidden': true }
            },
            this.trailingIcon
          )
      )
    }

    return h(
      'custom-btn',
      {
        class: this.classes,
        style: this.styles,
        attrs: { disabled: this.disabled },
        props: {
          href: this.href,
          link: this.link
        },
        on: this.listeners,
        ref: 'root'
      },
      nodes
    )
  }
}
