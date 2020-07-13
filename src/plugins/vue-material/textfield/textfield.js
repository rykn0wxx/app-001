import { applyPassive } from '@material/dom/events'
import { MDCTextFieldFoundation } from '@material/textfield/foundation'
import { DispatchFocusMixin, VMAUniqueIdMixin } from '../base'
import { mcwFloatingLabel } from '../floating-label'
import { mcwLineRipple } from '../line-ripple'
import { mcwNotchedOutline } from '../notched-outline'
import { RippleBase } from '../ripple/index.js'
import TextfieldHelperText from './textfield-helper-text'
import TextfieldIcon from './textfield-icon'
import { matches } from '@material/dom/ponyfill'

export default {
  name: 'mcw-textfield',
  mixins: [DispatchFocusMixin, VMAUniqueIdMixin],
  inheritAttrs: false,
  model: {
    prop: 'value',
    event: 'model'
  },
  props: {
    value: [String, Number],
    type: {
      type: String,
      default: 'text',
      validator: function(value) {
        return ['text', 'email', 'search', 'password', 'tel', 'url', 'number'].indexOf(value) !== -1
      }
    },
    label: String,
    outline: Boolean,
    disabled: Boolean,
    required: Boolean,
    valid: { type: Boolean, default: undefined },
    fullwidth: Boolean,
    multiline: Boolean,
    size: { type: [Number, String], default: 20 },
    minlength: { type: [Number, String], default: undefined },
    maxlength: { type: [Number, String], default: undefined },
    rows: { type: [Number, String], default: 8 },
    cols: { type: [Number, String], default: 40 },
    id: { type: String },
    helptext: String,
    helptextPersistent: Boolean,
    helptextValidation: Boolean
  },
  data() {
    return {
      text: this.value,
      classes: {
        'text-field': true,
        'mdc-text-field': true,
        'mdc-text-field--upgraded': true,
        'mdc-text-field--disabled': this.disabled,
        'mdc-text-field--fullwidth': this.fullwidth,
        'mdc-text-field--textarea': this.multiline,
        'mdc-text-field--outlined': !this.fullwidth && this.outline,
        'mdc-text-field--with-leading-icon': Boolean(this.$slots.leadingIcon),
        'mdc-text-field--with-trailing-icon': Boolean(this.$slots.trailingIcon),
        'mdc-text-field--filled': Boolean(!this.outline),
        'mdc-text-field--no-label': !this.label
      },
      styles: {},
      inputClasses: {
        'mdc-text-field__input': true
      },
      labelClasses: {
        'mdc-floating-label': true
      },
      lineRippleClasses: {
        'mdc-line-ripple': true
      },
      lineRippleStyles: {},
      outlineClasses: {},
      notchStyles: {}
    }
  },
  components: { TextfieldHelperText, TextfieldIcon },
  computed: {
    inputPlaceHolder() {
      return this.fullwidth ? this.label : undefined
    },
    inputAriaControls() {
      return this.help ? 'help-' + this.vma_uid_ : undefined
    },
    hasLabel() {
      return !this.fullwidth && !this.outline && this.label
    },

    hasOutlineLabel() {
      return this.hasOutline && this.label
    },
    hasOutline() {
      return !this.fullwidth && this.outline
    },
    hasLineRipple() {
      return !this.hasOutline && !this.multiline
    },

    hasHelptext() {
      const { $scopedSlots: scopedSlots } = this

      return (scopedSlots.helpText && scopedSlots.helpText()) || this.helptext
    }
  },
  watch: {
    disabled() {
      this.foundation && this.foundation.setDisabled(this.disabled)
    },
    required() {
      this.$refs.input && (this.$refs.input.required = this.required)
    },
    valid() {
      if (typeof this.valid !== 'undefined') {
        this.foundation && this.foundation.setValid(this.valid)
      }
    },

    value(value) {
      if (this.foundation) {
        if (value !== this.foundation.getValue()) {
          this.foundation.setValue(value)
        }
      }
    }
  },
  mounted() {
    this.foundation = new MDCTextFieldFoundation(
      Object.assign(
        {
          addClass: className => {
            this.$set(this.classes, className, true)
          },
          removeClass: className => {
            this.$delete(this.classes, className)
          },
          hasClass: className => {
            this.$refs.root.classList.contains(className)
          },
          registerTextFieldInteractionHandler: (evtType, handler) => {
            this.$refs.root.addEventListener(evtType, handler)
          },
          deregisterTextFieldInteractionHandler: (evtType, handler) => {
            this.$refs.root.removeEventListener(evtType, handler)
          },
          isFocused: () => {
            return document.activeElement === this.$refs.input
          },

          registerValidationAttributeChangeHandler: handler => {
            const getAttributesList = mutationsList => mutationsList.map(mutation => mutation.attributeName)
            const observer = new MutationObserver(mutationsList => handler(getAttributesList(mutationsList)))
            const targetNode = this.$refs.input
            const config = { attributes: true }
            observer.observe(targetNode, config)
            return observer
          },
          deregisterValidationAttributeChangeHandler: observer => {
            observer.disconnect()
          }
        },
        this.getInputAdapterMethods(),
        this.getLabelAdapterMethods(),
        this.getLineRippleAdapterMethods(),
        this.getOutlineAdapterMethods()
      ),
      {
        helperText: this.$refs.helpertextEl ? this.$refs.helpertextEl.foundation : undefined,
        leadingIcon: this.$refs.leadingIconEl ? this.$refs.leadingIconEl.foundation : undefined,
        trailingIcon: this.$refs.trailingIconEl ? this.$refs.trailingIconEl.foundation : undefined
      }
    )
    this.foundation.init()
    this.foundation.setValue(this.value)
    this.foundation.setDisabled(this.disabled)
    this.$refs.input && (this.$refs.input.required = this.required)
    if (typeof this.valid !== 'undefined') {
      this.foundation.setValid(this.valid)
    }

    const isTextArea = this.$refs.root.classList.contains('mdc-text-field--textarea')
    const isOutlined = this.$refs.root.classList.contains('mdc-text-field--outlined')

    if (!isTextArea && !isOutlined) {
      this.ripple = new RippleBase(this, {
        isSurfaceActive: () => matches(this.$refs.input, ':active'),
        registerInteractionHandler: (evtType, handler) => {
          this.$refs.input.addEventListener(evtType, handler, applyPassive())
        },
        deregisterInteractionHandler: (evtType, handler) => this.$refs.input.removeEventListener(evtType, handler, applyPassive())
      })
      this.ripple.init()
    }
  },
  beforeDestroy() {
    this.foundation && this.foundation.destroy()
    this.ripple && this.ripple.destroy()
  },
  methods: {
    getInputAdapterMethods() {
      return {
        registerInputInteractionHandler: (evtType, handler) => {
          this.$refs.input.addEventListener(evtType, handler, applyPassive())
        },
        deregisterInputInteractionHandler: (evtType, handler) => {
          this.$refs.input.removeEventListener(evtType, handler, applyPassive())
        },
        getNativeInput: () => {
          return this.$refs.input
        }
      }
    },
    getLabelAdapterMethods() {
      return {
        shakeLabel: shouldShake => {
          this.$refs.labelEl && this.$refs.labelEl.shake(shouldShake)
        },
        floatLabel: shouldFloat => {
          this.$refs.labelEl && this.$refs.labelEl.float(shouldFloat)
        },
        hasLabel: () => {
          return !!this.$refs.labelEl || !!this.$refs.notchedEl
        },
        getLabelWidth: () => {
          return this.$refs.labelEl.getWidth()
        }
      }
    },
    getLineRippleAdapterMethods() {
      return {
        deactivateLineRipple: () => {
          if (this.$refs.lineRippleEl) {
            this.$refs.lineRippleEl.deactivate()
          }
        },
        activateLineRipple: () => {
          if (this.$refs.lineRippleEl) {
            this.$refs.lineRippleEl.activate()
          }
        },
        setLineRippleTransformOrigin: normalizedX => {
          if (this.$refs.lineRippleEl) {
            this.$refs.lineRippleEl.setRippleCenter(normalizedX)
          }
        }
      }
    },
    getOutlineAdapterMethods() {
      return {
        hasOutline: () => !!this.hasOutline,
        notchOutline: (notchWidth, isRtl) => this.$refs.labelEl.notch(notchWidth, isRtl),
        closeOutline: () => this.$refs.labelEl.closeNotch()
      }
    },
    updateValue(value) {
      this.$emit('model', value)
    },
    focus() {
      this.$refs.input && this.$refs.input.focus()
    },
    blur() {
      this.$refs.input && this.$refs.input.blur()
    }
  },
  render(createElement) {
    const { $scopedSlots: scopedSlots } = this

    const rootNodes = []

    const leadingIconSlot = scopedSlots.leadingIcon && scopedSlots.leadingIcon()
    if (leadingIconSlot) {
      rootNodes.push(createElement('textfield-icon', { ref: 'leadingIconEl', props: { leading: true } }, leadingIconSlot))
    }

    if (this.multiline) {
      rootNodes.push(
        createElement('textarea', {
          class: this.inputClasses,
          attrs: {
            ...this.$attrs,
            id: this.vma_uid_,
            minlength: this.minlength,
            maxlength: this.maxlength,
            placeholder: this.inputPlaceHolder,
            'aria-label': this.inputPlaceHolder,
            'aria-controls': this.inputAriaControls,
            rows: this.rows,
            cols: this.cols
          },
          ref: 'input',
          on: {
            ...this.$listeners,
            input: evt => this.updateValue(evt.target.value)
          }
        })
      )
    } else {
      // rootNodes.push(
      //   createElement('span', {
      //     class: 'mdc-text-field__ripple',
      //     ref: 'ripple'
      //   })
      // )
      rootNodes.push(
        createElement('input', {
          class: this.inputClasses,
          attrs: {
            ...this.$attrs,
            id: this.vma_uid_,
            type: this.type,
            minlength: this.minlength,
            maxlength: this.maxlength,
            placeholder: this.inputPlaceHolder,
            'aria-label': this.inputPlaceHolder,
            'aria-controls': this.inputAriaControls,
            'aria-labelledby': `label-${this.vma_uid_}`
          },
          ref: 'input',
          on: {
            ...this.$listeners,
            input: evt => this.updateValue(evt.target.value)
          }
        })
      )
    }

    if (this.hasLineRipple) {
      rootNodes.push(
        createElement(mcwLineRipple, {
          ref: 'lineRippleEl'
        })
      )
    }

    if (this.hasLabel) {
      rootNodes.push(
        createElement(
          mcwFloatingLabel,
          {
            attrs: {
              id: `label-${this.vma_uid_}`,
              for: this.vma_uid_
            },
            ref: 'labelEl'
          },
          this.label
        )
      )
    }

    const trailingIconSlot = scopedSlots.trailingIcon && scopedSlots.trailingIcon()

    if (trailingIconSlot) {
      rootNodes.push(createElement('textfield-icon', { ref: 'trailingIconEl', props: { leading: false } }, trailingIconSlot))
    }

    if (this.hasOutline) {
      rootNodes.push(
        createElement(
          mcwNotchedOutline,
          {
            ref: 'labelEl'
          },
          this.label
        )
      )
    }

    const rootEl = createElement(
      'div',
      {
        class: this.classes,
        style: this.styles,
        ref: 'root'
      },
      rootNodes
    )

    const nodes = [rootEl]

    const helpTextSlot = scopedSlots.helpText && scopedSlots.helpText()

    if (this.hasHelptext) {
      nodes.push(
        createElement(
          'textfield-helper-text',
          {
            attrs: {
              id: `help${this.vma_uid_}`,
              helptext: this.helptext,
              persistent: this.helptextPersistent,
              validation: this.helptextValidation
            },
            ref: 'helpertextEl'
          },
          helpTextSlot
        )
      )
    }

    return createElement(
      'div',
      {
        staticClass: 'text-field-container',
        style: { width: this.fullwidth ? '100%' : undefined },
        attrs: { id: this.id }
      },
      nodes
    )
  }
}
