<template>
  <div class="page-about overflow-auto">
    <mcw-layout-grid>
      <mcw-layout-cell span="6">
        <mcw-textfield v-model="urtext" label="textfield" />
      </mcw-layout-cell>
    </mcw-layout-grid>
    About
    <mcw-textfield v-model="urtext" label="Hint text" required />
    <div>
      <h4 class="md-display-2">
        some
      </h4>
      <button @click="logtocons">log</button>
      <table>
        <thead>
          <tr>
            <th>PARM</th>
            <th>REM</th>
            <th>PX</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(i, k) in items" :key="k">
            <td>{{k + 1}}</td>
            <td>{{i.parm}}</td>
            <td>{{i.px}}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      urtext: '',
      loopers: [2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40, 50, 60, 70, 80, 90, 100],
      newLoops: []
    }
  },
  computed: {
    items () {
      return this.loopers.map((v, ind) => {
        const pxConv = v * 0.0625
        const remConv = pxConv / 0.625
        return {
          px: v,
          rem: remConv,
          parm: `'${pxConv}rem',`
        }
      })
    }
  },
  methods: {
    logtocons () {
      console.log(JSON.stringify(this.newLoops))
    },
    convMe (multiplier) {
      return 0.625 * multiplier
    },
    mePx (remArg) {
      return remArg / 0.0625
    }
  }
}
</script>

<style lang="scss" scoped>
.page-about {
  p {
    font-size: 10px;
    line-height: 1.4;
    margin: 0;
    padding: 0;
  }
}
</style>
