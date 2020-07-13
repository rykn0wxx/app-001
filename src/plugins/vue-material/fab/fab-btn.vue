<template>
  <custom-btn :class="classes" :style="styles" :href="href" :link="link" v-on="listeners">
    <div class="mdc-fab__ripple"></div>
    <slot name="icon">
      <span class="mdc-fab__icon material-icons">{{ icon }}</span>
    </slot>
    <span class="mdc-fab__label">
      <slot>{{ label }}</slot>
    </span>
  </custom-btn>
</template>

<script>
import { CustomBtnMixin, DispatchEventMixin } from '../base'
import { RippleMixin } from '../ripple'
export default {
  name: 'mcw-fab',
  mixins: [DispatchEventMixin, CustomBtnMixin, RippleMixin],
  props: {
    icon: String,
    mini: Boolean,
    exited: Boolean,
    label: String
  },
  data() {
    return {
      classes: {
        'mdc-fab': 1,
        'mdc-fab--mini': this.mini,
        'mdc-fab--extended': this.label || this.$slots.default,
        'mdc-fab--exited': this.exited
      }
    }
  },
  watch: {
    icon() {
      this.$set(this.classes, 'material-icons', this.icon)
    },
    mini() {
      this.$set(this.classes, 'mdc-fab--mini', this.mini)
    },
    exited() {
      this.$set(this.classes, 'mdc-fab--exited', this.exited)
    }
  }
}
</script>
