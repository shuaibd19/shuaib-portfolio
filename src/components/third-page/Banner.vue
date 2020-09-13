<template>
  <!-- <kinesis-container event="scroll" class="banner"> -->
  <kinesis-container class="banner">
    <kinesis-element type="depth" :strength="10">
      <div class="row">
        <h1>Technologies</h1>
      </div>
    </kinesis-element>
  </kinesis-container>
  <!-- <div class="banner"><h1>Technologies</h1></div> -->
</template>

<script>
export default {}
</script>

<style scoped>
.banner {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  width: 90%;
  height: 20%;
  background-color: wheat;
  text-align: center;
}

h1 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  margin-top: 40%;
  font-size: 3.5rem;
  font-family: 'Lobster', cursive;
  padding: 10px;
  border: solid 10px #000000;
}

@media screen and (max-width: 480px) {
  .banner {
    /* background-color: wheat; */
    width: 75%;
    height: 15%;
    position: fixed;
    top: 0%;
  }

  h1 {
    font-size: 20px;
  }
}

@media screen and (max-width: 1200px) {
  .banner {
    /* background-color: wheat; */
    width: 75%;
    height: 15%;
    right: 12.5%;
  }

  h1 {
    font-size: 20px;
  }
}

@media screen and (max-width: 1600px) and (min-height: 700px) {
  .banner {
    /* background-color: wheat; */
    position: fixed;
    top: 0%;
  }

  h1 {
    font-size: 30px;
  }
}
</style>
