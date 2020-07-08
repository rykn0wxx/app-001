<script>
import { DispatchEventMixin } from 'v~/mixins/dispatch-event'
import { RippleMixin } from 'v~/mixins/ripple'
import focused from 'v~/mixins/focused'
export default {
  name: 'MdBtns',
  mixins: [
    focused,
    DispatchEventMixin,
    RippleMixin
  ],
  props: {
    link: {
      type: Object
    },
    href: {
      type: String,
      required: false
    },
    type: {
      type: String,
      default: 'button'
    },
    disabled: {
      type: Boolean,
      default: false
    },
    to: {
      type: [String, Object]
    },
    raised: {
      type: Boolean
    },
    unelevated: Boolean,
    outlined: Boolean,
    icon: String
  },
  data () {
    return {
      mdcButton: null,
      rippleActive: false,
      classes: {
        'mdc-button--raised': this.raised,
        'mdc-button--unelevated': this.unelevated && !this.raised,
        'mdc-button--outlined': this.outlined
      },
      styles: {}
    }
  },
  computed: {
    rippleWorks () {
      return this.mdRipple && !this.disabled
    },
    isRouterLink () {
      return this.$router && this.to
    }
  },
  // mounted () {
  //   const { MDCRipple } = this.$mdc.ripple
  //   this.mdcButton = new MDCRipple(this.$el)
  //   console.log(this.$mdc.ripple.MDCRippleFoundation)
  // },
  // beforeDestroy () {
  //   if (this.mdcButton instanceof MDCRipple) {
  //     this.mdcButton.destroy()
  //   }
  // },
  watch: {
    raised() {
      this.$set(this.classes, 'mdc-button--raised', this.raised)
    },
    unelevated() {
      this.$set(this.classes, 'mdc-button--unelevated', this.unelevated)
    },
    outlined() {
      this.$set(this.classes, 'mdc-button--outlined', this.outlined)
    }
  },
  render (h) {
    const nodes = [
      h('div', { staticClass: 'mdc-button__ripple' }),
      h('span', { staticClass: 'mdc-button__label' }, this.$slots.default)
    ]
    if (this.$slots.icon || this.icon) {
      nodes.unshift(
        this.$slots.icon || h('i', { staticClass: 'mdc-button__icon material-icons', attrs: { 'aria-hidden': true } }, this.icon)
      )
    }
    return h('button', {
      staticClass: 'md-btn mdc-button',
      class: this.classes,
      style: this.styles,
      attrs: { disabled: this.disabled },
      props: {
        href: this.href,
        link: this.link
      },
      on: this.listeners,
      ref: 'rootbtn'
    }, nodes)
  }
}
</script>

<style lang="scss" scoped>
@use "@material/button";
@include button.core-styles;
</style>
