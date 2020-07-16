import { MDCChipFoundation } from '@material/chips/chip/foundation';
import { CustomLinkMixin, emitCustomEvent } from '~/base/index.js';
import { RippleBase } from '~/ripple/index.js';
import mcwChipCheckmark from './chip-checkmark.js';

const {
  INTERACTION_EVENT,
  SELECTION_EVENT,
  REMOVAL_EVENT,
  TRAILING_ICON_INTERACTION_EVENT,
  PRIMARY_ACTION_SELECTOR,
  TRAILING_ACTION_SELECTOR,
  NAVIGATION_EVENT,
} = MDCChipFoundation.strings;

export default {
  name: 'mcw-chip',
  mixins: [CustomLinkMixin],
  props: {
    leadingIcon: [String],
    trailingIcon: [String],
    shouldRemoveOnTrailingIconClick: {
      type: Boolean,
      default() {
        return true;
      },
    },
  },
  inject: ['mcwChipSet'],
  data() {
    return {
      classes: {
        'mdc-chip': true,
      },
      leadingClasses: {
        'mdc-chip__icon': 1,
        'mdc-chip__icon--leading': 1,
        'material-icons': 1,
      },
      styles: {},
      primaryAttrs: {},
      trailingAttrs: {},
    };
  },
  watch: {
    shouldRemoveOnTrailingIconClick(shouldRemove) {
      this.foundation.setShouldRemoveOnTrailingIconClick(shouldRemove);
    },
  },
  computed: {
    id() {
      return this.$el.id;
    },
    selected: {
      get() {
        return this.foundation.isSelected();
      },
      set(nv) {
        this.foundation.setSelected(nv);
      },
    },
    isFilter() {
      return this.mcwChipSet && this.mcwChipSet.filter;
    },
    isInput() {
      return this.mcwChipSet && this.mcwChipSet.input;
    },
    haveleadingIcon() {
      const slot = this.$slots['leading-icon'];
      return (slot && slot[0]) || !!this.leadingIcon;
    },
    havetrailingIcon() {
      const slot = this.$slots['trailing-icon'];

      return this.isInput && ((slot && slot[0]) || !!this.trailingIcon);
    },
  },
  methods: {
    setSelectedFromChipSet(selected, shouldNotifyClients) {
      this.foundation.setSelectedFromChipSet(selected, shouldNotifyClients);
    },

    focusPrimaryAction() {
      this.foundation.focusPrimaryAction();
    },

    focusTrailingAction() {
      this.foundation.focusTrailingAction();
    },
    removeFocus() {
      this.foundation.removeFocus();
    },
    toggleSelected() {
      this.foundation.toggleSelected();
    },
    isSelected() {
      return this.foundation.isSelected();
    },

    remove() {
      const parent = this.$el.parentNode;
      if (parent != null) {
        parent.removeChild(this.$el);
      }
    },

    renderLeadingIcon(createElement) {
      const {
        $slots: { ['leading-icon']: slot },
      } = this;
      const v0 = slot && slot[0];

      if (v0) {
        const { staticClass = '' } = v0.data;
        const haveClasses =
          staticClass && staticClass.indexOf('mdc-chip__icon') > -1;
        if (!haveClasses) {
          v0.data.staticClass = `mdc-chip__icon mdc-chip__icon--leading ${staticClass}`;
        }
        return slot;
      }

      return createElement(
        'i',
        {
          class: this.leadingClasses,
          ref: 'leading-icon',
        },
        this.leadingIcon,
      );
    },

    renderTrailingIcon(createElement) {
      const {
        $slots: { ['trailing-icon']: slot },
      } = this;

      const v0 = slot && slot[0];
      if (v0) {
        const { staticClass = '' } = v0.data;
        const haveClasses =
          staticClass && staticClass.indexOf('mdc-chip__icon') > -1;
        if (!haveClasses) {
          v0.data.staticClass = `mdc-chip__icon mdc-chip__icon--trailing mdc-chip__trailing-action${staticClass}`;
          v0.data.on = {
            ...v0.data.on,
            click: evt => {
              this.foundation.handleTrailingIconInteraction(evt);
            },
            keydown: evt => this.foundation.handleTrailingIconInteraction(evt),
          };
        }
        return slot;
      }

      return createElement('span', { attrs: { role: 'gridcell' } }, [
        createElement(
          'i',
          {
            class: {
              'mdc-chip__icon': 1,
              'mdc-chip__icon--trailing': 1,
              'material-icons': 1,
              // 'mdc-chip__trailing-action': 1,
            },
            attrs: { ...this.trailingAttrs },
            ref: 'trailing-icon',
            on: {
              click: evt => this.foundation.handleTrailingIconInteraction(evt),
              keydown: evt =>
                this.foundation.handleTrailingIconInteraction(evt),
            },
          },
          this.trailingIcon,
        ),
      ]);
    },
  },
  mounted() {
    this.trailingAction_ = this.$el.querySelector(TRAILING_ACTION_SELECTOR);

    this.foundation = new MDCChipFoundation({
      addClass: className => this.$set(this.classes, className, true),
      addClassToLeadingIcon: className => {
        this.$set(this.leadingClasses, className, true);

        // if no ref, then using slot, so just add class directly
        if (!this.$refs['leading-icon'] && this.haveleadingIcon) {
          const item = this.$slots['leading-icon'][0];
          (item.elm || item).classList.add(className);
        }
      },
      eventTargetHasClass: (target, className) =>
        target.classList.contains(className),
      focusPrimaryAction: () => {
        const {
          $refs: {
            primaryAction = this.$el.querySelector(PRIMARY_ACTION_SELECTOR),
          },
        } = this;

        primaryAction && primaryAction.focus();
      },
      focusTrailingAction: () => {
        this.trailingAction_ && this.trailingAction_.focus();
      },
      getAttribute: attr => this.$el.getAttribute(attr),
      getCheckmarkBoundingClientRect: () => {
        return this.$refs.checkmarkEl
          ? this.$refs.checkmarkEl.$el.getBoundingClientRect()
          : null;
      },
      getComputedStyleValue: propertyName =>
        window.getComputedStyle(this.$el).getPropertyValue(propertyName),
      getRootBoundingClientRect: () => this.$el.getBoundingClientRect(),
      hasClass: className => this.$el.classList.contains(className),
      hasLeadingIcon: () => !!this.haveleadingIcon,
      hasTrailingAction: () => !!this.trailingAction_,
      isRTL: () =>
        window.getComputedStyle(this.$el).getPropertyValue('direction') ===
        'rtl',

      notifyInteraction: () => {
        emitCustomEvent(
          this.$el,
          INTERACTION_EVENT,
          {
            chipId: this.id,
          },
          true,
        );
      },
      notifyNavigation: (key, source) =>
        emitCustomEvent(
          this.$el,
          NAVIGATION_EVENT,
          {
            chipId: this.id,
            key,
            source,
          },
          true,
        ),
      notifyRemoval: removedAnnouncement => {
        emitCustomEvent(
          this.$el,
          REMOVAL_EVENT,
          { chipId: this.id, root: this.$el, removedAnnouncement },
          true,
        );
      },
      notifySelection: selected =>
        emitCustomEvent(
          this.$el,
          SELECTION_EVENT,
          { chipId: this.id, selected: selected },
          true /* shouldBubble */,
        ),
      notifyTrailingIconInteraction: () => {
        emitCustomEvent(
          this.$el,
          TRAILING_ICON_INTERACTION_EVENT,
          {
            chipId: this.id,
          },
          true,
        );
      },
      removeClass: className => this.$delete(this.classes, className),
      removeClassFromLeadingIcon: className => {
        this.$delete(this.leadingClasses, className);

        // if no ref, then using slot, so just remove class directly
        if (!this.$refs['leading-icon'] && this.haveleadingIcon) {
          const item = this.$slots['leading-icon'][0];
          (item.elm || item).classList.remove(className);
        }
      },

      setPrimaryActionAttr: (attr, value) => {
        this.$set(this.primaryAttrs, attr, value);
      },
      setStyleProperty: (property, value) =>
        this.$set(this.styles, property, value),
      setTrailingActionAttr: (attr, value) => {
        if (this.trailingAction_) {
          this.trailingAction_.setAttribute(attr, value);
        }
      },
    });

    this.foundation.init();

    this.primaryAttrs.tabindex = this.isFilter ? 0 : -1;

    if (
      this.shouldRemoveOnTrailingIconClick !==
      this.foundation.getShouldRemoveOnTrailingIconClick()
    ) {
      this.foundation.setShouldRemoveOnTrailingIconClick(
        this.shouldRemoveOnTrailingIconClick,
      );
    }

    this.ripple = new RippleBase(this, {
      computeBoundingRect: () => this.foundation.getDimensions(),
    });
    this.ripple.init();
  },
  beforeDestroy() {
    this.ripple.destroy();

    this.foundation.destroy();
  },

  render(createElement) {
    const {
      $scopedSlots: scopedSlots,
      haveleadingIcon,
      havetrailingIcon,
      isFilter,
      primaryAttrs,
    } = this;

    const role = isFilter ? 'checkbox' : 'button';

    const on = {
      click: evt => this.foundation.handleInteraction(evt),
      keydown: evt => this.foundation.handleInteraction(evt),
      transitionend: evt => this.foundation.handleTransitionEnd(evt),
      focusin: evt => this.foundation.handleFocusIn(evt),
      focusout: evt => this.foundation.handleFocusOut(evt),
    };
    if (this.trailingAction_) {
      on[INTERACTION_EVENT] = evt =>
        this.foundation.handleTrailingIconInteraction(evt);
    }

    return createElement(
      'div',
      {
        class: this.classes,
        style: this.styles,
        attrs: { role: 'row' },
        on,
      },
      [
        createElement('div', { class: { 'mdc-chip__ripple': 1 } }),
        haveleadingIcon && this.renderLeadingIcon(createElement),
        isFilter && createElement(mcwChipCheckmark, { ref: 'checkmarkEl' }),

        createElement('span', { attrs: { role: 'gridcell' } }, [
          createElement(
            'span',
            {
              attrs: { role, tabindex: 0, ...primaryAttrs },
              class: { 'mdc-chip__primary-action': 1 },
              ref: 'primaryAction',
            },
            [
              createElement(
                'span',
                {
                  class: ['mdc-chip__text'],
                },
                scopedSlots.default?.(),
              ),
            ],
          ),
        ]),
        havetrailingIcon && this.renderTrailingIcon(createElement),
      ],
    );
  },
};
