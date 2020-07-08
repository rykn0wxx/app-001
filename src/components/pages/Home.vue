<template>
  <div class="page-home relative">
    <div class="box box-neo">
      <div class="box-content text-left mt-10">
        <div class="box-items mt-5">
          <label for="email" class="box-item-label block mb-2 tracking-widest">
            Email
          </label>
          <input class="form-input input-neo" type="email" name="email" id="email" placeholder="abc@xyz.com" required />
        </div>
        <div class="box-items mt-5">
          <md-btn id="formbutton" class="form-submit md-btn btn-neo" type="submit" raised>Submit</md-btn>
          <button id="formbutton" class="form-submit md-btn btn-neo" type="submit" name="submit">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      dcButton: undefined,
      dcTxtFld: undefined
    }
  },
  mounted () {
    this.$nextTick()
  }
}
</script>

<style lang="scss" scoped>
@use "@material/button";
@use "@material/textfield/_index.scss" as textfield;
.page-home {
  height: 400px;
}
@include button.core-styles;
@include textfield.core-styles;
</style>
