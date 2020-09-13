<template>
  <kinesis-container class="bubble-section3">
    <kinesis-element :strength="15">
      <div class="circle circle-purple4"></div>
    </kinesis-element>
    <kinesis-element :strength="20">
      <div class="circle circle-purple5"></div>
    </kinesis-element>
  </kinesis-container>
</template>

<script>
export default {}
</script>

<style scoped>
.bubble-section3 {
  width: 25%;
  height: 15%;
  position: absolute;
  top: 3%;
  right: 10%;
  z-index: -1;
  /* background-color: darkgoldenrod; */
}

.circle {
  position: absolute;
  /* border-radius: 100%; */
}

.circle.circle-purple4 {
  border: 15px solid #e3ceca;
  /* opacity: 0.3; */
  width: 50px;
  height: 50px;
  left: 60%;
  position: relative;
}

.circle.circle-purple5 {
  /* opacity: 0.2; */
  border: 10px solid #e3ceca;
  width: 90px;
  height: 90px;
  left: 40%;
  background-color: none;
  position: relative;
}

@media screen and (max-width: 480px) {
  .bubble-section3 {
    top: 20%;
    right: 30%;
  }
  .circle.circle-purple4 {
    width: 10px;
    height: 10px;
  }

  .circle.circle-purple5 {
    width: 20px;
    height: 20px;
  }
}
</style>
