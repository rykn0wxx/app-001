export const DispatchEventMixin = {
  props: {
    event: String,
    'event-target': Object,
    'event-args': Array
  },
  methods: {
    dispatchEvent(evt) {
      evt && this.$emit(evt.type, evt)
      if (this.event) {
        const evtTarget = this.eventTarget || this.$root
        const evtArgs = this.eventArgs || []
        evtTarget.$emit(this.event, ...evtArgs)
      }
    }
  },
  computed: {
    listeners() {
      return {
        ...this.$listeners,
        click: e => this.dispatchEvent(e)
      }
    }
  }
}
