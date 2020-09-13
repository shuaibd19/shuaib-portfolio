<template>
  <kinesis-container id="parent">
    <kinesis-element
      id="child"
      type="depth_inv"
      :strength="25"
    ></kinesis-element>
  </kinesis-container>
</template>

<script>
export default {}
</script>

<style scoped>
#parent {
  width: 100vw;
  height: 100vh;
  position: relative;
  background-color: cadetblue;
}

#child {
  width: 400px;
  height: 400px;
  background-color: blue;
  position: absolute;
  top: calc(50vh - 200px);
  left: calc(50vw - 200px);
}
</style>
