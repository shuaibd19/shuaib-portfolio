<template>
  <kinesis-container class="bubble-section2">
    <kinesis-element :strength="45">
      <div class="circle circle-purple2"></div>
    </kinesis-element>
    <kinesis-element :strength="20">
      <div class="circle circle-purple3"></div>
    </kinesis-element>
  </kinesis-container>
</template>

<script>
export default {}
</script>

<style scoped>
.bubble-section2 {
  width: 25%;
  height: 15%;
  position: absolute;
  bottom: 3%;
  right: 5%;
  z-index: -1;
  /* background-color: darkgoldenrod; */
}

.circle {
  position: absolute;
  /* border-radius: 100%; */
}

.circle.circle-purple2 {
  border: 20px solid #d5aae0;
  /* opacity: 0.3; */
  width: 40px;
  height: 40px;
  right: 15%;
  position: relative;
}

.circle.circle-purple3 {
  border: 10px solid #d5aae0;
  /* opacity: 0.5; */
  width: 70px;
  height: 70px;
  left: 20%;
  top: 17%;
  position: relative;
}

@media screen and (max-width: 480px) {
  .circle.circle-purple2 {
    width: 10px;
    height: 10px;
  }

  .circle.circle-purple3 {
    width: 20px;
    height: 20px;
    border: 10px solid #d5aae0;
  }
}
</style>
