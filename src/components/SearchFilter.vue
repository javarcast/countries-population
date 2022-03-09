<template>
  <div class="col-4 px-5">
    <input type="text"
      class="form-control"
      v-model="q" 
      placeholder="Search Country"
      @input='$emit("update:q", $event.target.value)'
    />
  </div>
</template>

<script>
export default {
  props:['q'],
}
</script>