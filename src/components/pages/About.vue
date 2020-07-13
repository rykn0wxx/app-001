<template>
  <div class="page-about">
    About
    <mcw-button class="md-btn" raised>button</mcw-button>
    <mcw-button raised event="blur" v-on:click="youClick('aaa', $event)" v-on:blur="checkMe">button</mcw-button>
    <button class="md-btn btn-raised">button</button>
    <div class="mb-5">
      <mcw-fab icon="favorite"></mcw-fab>
    </div>
    <div class="mb-5">
        <mcw-textfield v-model="opn" label="Hint text" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {
      opn: ''
    }
  },
  methods: {
    youClick (somearg, event) {
      console.log(event, this)
    },
    checkMe () {
      console.log(this)
    }
  }
}
</script>

<style lang="scss" scoped></style>
