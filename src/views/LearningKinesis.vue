<template>
  <div class="header">
    <kinesis-container class="container">
      <kinesis-element :strength="150">
        <!-- logo goes here -->
        <img
          src="../assets/electrical_services-black-18dp.svg"
          alt="electrical"
        />
      </kinesis-element>
      <!-- background circle props go here -->
      <kinesis-element axis="y" :strength="80">
        <div class="circle circle-purple"></div>
      </kinesis-element>
      <kinesis-element axis="y" :strength="70">
        <div class="circle circle-purple1"></div>
      </kinesis-element>
      <kinesis-element axis="y" :strength="90">
        <div class="circle circle-purple2"></div>
      </kinesis-element>
      <kinesis-element axis="y" :strength="85">
        <div class="circle circle-purple3"></div>
      </kinesis-element>
      <kinesis-element axis="y" :strength="100">
        <div class="circle circle-purple4"></div>
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.header {
  text-align: center;
  height: 90vh;
}

img {
  width: 4rem;
}

.container {
  padding: 15rem 0;
  background-color: #7749bd;
}

.circle {
  position: absolute;
  border-radius: 100%;
}

.circle.circle-purple {
  border: 10px solid #f2eafa;
  opacity: 0.1;
  width: 4vw;
  height: 4vw;
  left: 10%;
  top: 25%;
}

.circle.circle-purple1 {
  border: 15px solid #f2eafa;
  opacity: 0.1;
  width: 8vw;
  height: 8vw;
  right: -2%;
  bottom: 17%;
}
.circle.circle-purple2 {
  background-color: #f2eafa;
  opacity: 0.1;
  width: 5vw;
  height: 5vw;
  left: 20%;
  bottom: 17%;
}

.circle.circle-purple3 {
  border: 15px solid #f2eafa;
  opacity: 0.3;
  width: 3vw;
  height: 3vw;
  top: 80%;
  left: 60%;
}
.circle.circle-purple4 {
  border: 15px solid #f2eafa;
  opacity: 0.25;
  width: 6vw;
  height: 6vw;
  bottom: 63%;
  left: 39%;
}
</style>
