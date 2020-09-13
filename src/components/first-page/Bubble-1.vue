<template>
  <kinesis-container class="bubble-section">
    <kinesis-element :strength="30">
      <div class="circle circle-purple"></div>
    </kinesis-element>
    <kinesis-element :strength="45">
      <div class="circle circle-purple1"></div>
    </kinesis-element>
  </kinesis-container>
</template>

<script>
export default {}
</script>

<style scoped>
.bubble-section {
  width: 25%;
  height: 15%;
  position: absolute;
  top: 5%;
  left: 15%;
  z-index: -1;
  /* background-color: darkgoldenrod; */
}

.circle {
  position: absolute;
  /* border-radius: 100%; */
}

.circle.circle-purple {
  border: 10px solid #d5aae0;
  /* opacity: 0.3; */
  width: 2rem;
  height: 2rem;
  bottom: 10%;
  position: relative;
}

.circle.circle-purple1 {
  border: 15px solid #d5aae0;
  /* opacity: 0.1; */
  width: 80px;
  height: 80px;
  left: 50%;
  bottom: 17%;
  position: relative;
}

@media screen and (max-width: 480px) {
  .circle.circle-purple {
    width: 0.5rem;
    height: 0.5rem;
  }

  .circle.circle-purple1 {
    width: 20px;
    height: 20px;
    border: 10px solid #d5aae0;
  }
}
</style>
