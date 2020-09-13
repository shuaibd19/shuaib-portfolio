<template>
  <div>
    <div class="spacer">
      <h1>This Section is just a spacer</h1>
    </div>
    <div id="stage">
      <div class="box box1" v-animate.repeat.fade="'slide-up'">1</div>
      <div class="box box2" v-animate.repeat.fade="'slide-up'">2</div>
      <div class="box box3" v-animate.repeat.fade="'slide-up'">3</div>
      <div class="box box4" v-animate.repeat.fade="'slide-up'">4</div>
      <div class="box box5" v-animate.repeat.fade="'slide-up'">5</div>
      <div class="box box6" v-animate.repeat.fade="'slide-up'">6</div>
    </div>

    <div class="spacer"><h1>This section is just a spacer</h1></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
body {
  color: #ccc;
  padding: 0;
  margin: 0;
  font-family: 'Roboto', sans-serif;
}

h1 {
  color: white;
  margin: 0;
}

.spacer {
  width: 100%;
  height: 100vh;
  background: #5386b2;
  display: flex;
  justify-content: center;
  align-items: center;
}

#stage {
  width: 100%;
  height: 100vh;
  background: #262626;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box {
  opacity: 0;
  height: 60px;
  width: 60px;
  align-items: center;
  margin: 4px;
  font-size: 1.2em;
  font-weight: 700;
  color: white;
  border-radius: 4px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.box1 {
  background-color: #84c186;
}

.box2 {
  background-color: #8b6c4c;
}

.box3 {
  background-color: #39a3ee;
}

.box4 {
  background-color: #ef9144;
}

.box5 {
  background-color: #cd58eb;
}

.box6 {
  background-color: #b84b4b;
}

.animate {
  transition-delay: 0.5s;
  transition-duration: 1s;
  transition-timing-function: ease-out;
}

.slide-up {
  transform: translateY(0);
}

.slide-up.animate-active {
  transform: translateY(0);
  opacity: 1;
}
</style>
