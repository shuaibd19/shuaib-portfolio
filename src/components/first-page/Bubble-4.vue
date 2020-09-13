<template>
  <kinesis-container class="bubble-section4">
    <kinesis-element :strength="45">
      <div class="circle circle-purple6"></div>
    </kinesis-element>
    <kinesis-element :strength="20">
      <div class="circle circle-purple7"></div>
    </kinesis-element>
    <kinesis-element :strength="20">
      <div class="circle circle-purple8"></div>
    </kinesis-element>
    <kinesis-element :strength="20">
      <div class="circle circle-purple9"></div>
    </kinesis-element>
  </kinesis-container>
</template>

<script>
export default {}
</script>

<style scoped>
.bubble-section4 {
  width: 40%;
  height: 30%;
  position: absolute;
  bottom: 3%;
  left: 0;
  z-index: -1;
  /* background-color: darkgoldenrod; */
}

.circle {
  position: absolute;
  /* border-radius: 100%; */
}

.circle.circle-purple6 {
  border: 20px solid #e3ceca;
  opacity: 0.7;
  width: 100px;
  height: 100px;
  left: 10%;
  /* background-color: #f2eafa; */
  position: relative;
}

.circle.circle-purple7 {
  /* opacity: 0.6; */
  width: 30px;
  height: 30px;
  left: 70%;
  background-color: none;
  position: relative;
}
.circle.circle-purple8 {
  border: 15px solid #e3ceca;
  opacity: 0.5;
  width: 50px;
  height: 50px;
  left: 30%;
  position: relative;
}
.circle.circle-purple9 {
  border: 10px solid #e3ceca;
  background-color: none;
  /* opacity: 0.5; */
  width: 70px;
  height: 70px;
  left: 70%;
  position: relative;
}

@media screen and (max-width: 480px) {
  .circle.circle-purple6 {
    width: 10px;
    height: 10px;
    border: 10px solid #e3ceca;
  }

  .circle.circle-purple7 {
    width: 20px;
    height: 20px;
  }

  .circle.circle-purple8 {
    width: 10px;
    height: 10px;
  }

  .circle.circle-purple9 {
    width: 20px;
    height: 20px;
  }
}
</style>
