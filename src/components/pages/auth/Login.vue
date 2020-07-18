<template>
  <div class="login-wrapper bg-d0 min-h-full h-full flex flex-row justify-center items-center">
    <div class="form">
      <div class="form-header">
        <h3 class="form-header_text">Form Header</h3>
      </div>
      <div class="form-inputs">
        <div class="form-input_group">
          <label for="username" class="form-control-label">Username</label>
          <input id="username" name="username" type="text" class="form-control-input" />
        </div>
        <div class="form-input_group">
          <label for="password" class="form-control-label">Password</label>
          <input id="password" name="password" type="text" class="form-control-input" />
        </div>
      </div>
      <div class="form-footer">
        <button class="form-btn" type="submit">Submit</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>

</style>
