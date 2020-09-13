<template>
  <div class="gerbej">
    <kinesis-container class="contains2">
      <kinesis-element type="depth_inv" axis="x" class="child first">
        <h1>About Me</h1>
        <p>
          Hi there! I'm Shuaib and I'm a software engineer. I'm currently
          completing studies in programming for games and will be graduating
          soon.
          <br />
          <br />I've been fortunate enough to have experience in a variety of
          programming areas ranging from:
        </p>
        <ul>
          <li>Front-end web development</li>
          <li>C++ / C# games development</li>
          <li>3D graphics progamming</li>
          <li>Networking and UDP programming</li>
          <li>Multi-threaded GPU programming</li>
        </ul>
      </kinesis-element>
      <kinesis-element type="depth_inv" axis="x" class="child second">
        <h1>Areas of Interest</h1>
        <div class="moscow_b">
          <p>Full Stack Development</p>
        </div>
        <div class="moscow_b">
          <p>Single Page Applications</p>
        </div>
        <div class="moscow_b">
          <p>Game Engines and Tools</p>
        </div>
        <div class="moscow_b">
          <p>AI and Physics for Games</p>
        </div>
        <div class="moscow_b">
          <p>Object Oriented Programming</p>
        </div>
        <div class="moscow_b">
          <p>User Interaction/Experience Design</p>
        </div>
      </kinesis-element>
    </kinesis-container>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.gerbej {
  z-index: 99;
  height: 40vh;
  background-color: #efc3e6;
  opacity: 80%;
  display: flex;
  justify-content: center;
}
.contains2 {
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
}

.child {
  /* max-height: 650px; */
  width: 35vw;
  text-align: center;
  margin: auto;
}

* {
  font-family: 'Russo One', sans-serif;
}

p {
  font-family: 'Roboto Mono', monospace;
  padding: 10px;
}

ul,
li {
  font-family: 'Roboto Mono', monospace;
}

.moscow_b {
  list-style-type: none;
  width: 80%;
  margin: auto;
}

.moscow_b :hover {
  border-left: 1vw solid red;
}

/* Portrait and Landscape */
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  .gerbej {
    height: 100vh;
  }

  .contains2 {
    flex-direction: column;
    min-height: 100vh;
  }

  .child {
    margin: auto;
    height: 45vh;
    width: 80vw;
  }

  h1 {
    font-size: 3vh;
  }

  p,
  li {
    font-size: 1.6vh;
  }

  .moscow_b {
    /* background-color: tomato; */
    height: 25px;
  }

  .moscow_b :hover {
    border-left: 2vw solid red;
  }
}

@media only screen and (min-device-height: 600px) and (max-device-height: 1030px) and (-webkit-min-device-pixel-ratio: 2) {
  .gerbej {
    height: 90vh;
  }
}
</style>
