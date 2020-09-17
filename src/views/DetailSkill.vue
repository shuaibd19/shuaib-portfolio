<template>
  <div id="container">
    <header>
      <img :src="skillIcon.icon" :alt="skill.name" />
      <h1>{{ skill.name }}</h1>
    </header>
    <div id="main" class="col">
      <!-- <article>Article</article>
      <nav>nav</nav>
      <aside>Aside</aside>-->
      <div class="row first"></div>
    </div>
    <footer>
      <router-link class="router" :to="{ name: 'portfolio' }">
        <h1>Go Back</h1>
      </router-link>
    </footer>
  </div>
</template>

<script>
export default {
  props: ['skill'],
  methods: {
    setColour(el) {
      el.style.backgroundColor = this.skill.colour
    }
  },
  computed: {
    skillIcon() {
      return {
        ...this.skill,
        icon: this.skill.pic && require(`@/assets/skills/${this.skill.pic}`)
      }
    }
  },
  mounted() {
    let el = document.getElementById('container')
    this.setColour(el)
  }
}
</script>

<style scoped>
* {
  box-sizing: border-box;
}

#container {
  height: 100vh;
  display: flex;
  flex-direction: column;
  margin: 0;
}

#main {
  height: 50vh;
  display: flex;
  justify-content: space-around;
  /* align-items: center; */
  flex-direction: column;
}

.first {
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  /* background-color: violet; */
}

.arf {
  width: 30vh;
}

header,
footer {
  /* background: yellowgreen; */
  height: 25vh;
  flex-direction: column;
  display: flex;
  justify-content: center;
  text-align: center;
  /* font-family: 'MuseoModerno', cursive; */
  font-family: 'Kanit', sans-serif;
  /* font-size: 1vw; */
}
h1 {
  margin-top: 0;
}

header,
footer {
  padding: 1em;
}

img {
  width: 10vh;
  align-self: center;
}

.router {
  text-decoration: none;
}
</style>
