<script>
import { Director } from './Director'
import { Builder } from './Builder'
export default {
  name: 'Form',
  props: ['formMethod'],
  render (h) {
    const director = new Director()
    const builder = new Builder(h)
    director[this.formMethod](builder)
    return builder.getForm()
  }
}
</script>

<style lang="scss" scoped></style>
