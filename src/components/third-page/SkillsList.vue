<template>
  <kinesis-container class="skills">
    <kinesis-element
      type="depth"
      :strength="15"
      class="skill"
      v-for="skill in skills"
      :key="skill.id"
    >
      <router-link :to="{ name: 'detail-skill', params: { skill: skill } }">
        <img :src="getImgUrl(skill.pic)" :alt="skill.name" />
      </router-link>
    </kinesis-element>
  </kinesis-container>
</template>

<script>
export default {
  data() {
    return {
      skills: [
        { id: 1, name: 'HTML5', pic: 'html5.svg', colour: '#cc620669' },
        { id: 2, name: 'CSS', pic: 'css3.svg', colour: '#136ed669' },
        { id: 3, name: 'Bootstrap', pic: 'bootstrap.svg', colour: '#64099169' },
        {
          id: 4,
          name: 'Javascript',
          pic: 'javascript.svg',
          colour: '#fce11469'
        },
        { id: 5, name: 'Vue', pic: 'vue.svg', colour: '#65a86869' },
        { id: 6, name: 'Nuxt', pic: 'nuxt.svg', colour: '#406e4269' },
        { id: 7, name: 'SQL', pic: 'sql.svg', colour: '#3e559469' },
        { id: 8, name: 'C++', pic: 'c++.svg', colour: '#7390de69' },
        { id: 9, name: 'C#', pic: 'csharp.svg', colour: '#c94ed469' },
        { id: 10, name: 'Unity', pic: 'unity.svg', colour: '#70707069' },
        {
          id: 11,
          name: 'Cuda by Nvidia',
          pic: 'cuda.svg',
          colour: '#53e64369'
        },
        { id: 12, name: 'OpenGL', pic: 'opengl.svg', colour: '#70a2b869' }
      ]
    }
  },
  methods: {
    getImgUrl(pic) {
      return require('@/assets/skills/' + pic)
    }
  },
  getSkill(skill) {
    return skill
  }
}
</script>

<style scoped>
.skills {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 75vw;
  max-width: 1500px;
  height: 70vh;
  min-height: 400px;
  /* background-color: wheat; */
  padding: 2%;
}

.skill {
  max-width: 300px;
  display: flex;
  min-width: 60px;
  flex-direction: column;
  justify-content: center;
  height: 30%;
  width: 20%;
  /* background-color: hsla(174, 79%, 42%, 0.267); */
  text-align: center;
  align-self: center;
}

.skill :hover {
  transform: scale(1.1);
  cursor: pointer;
  border: none;
}

img {
  width: 70%;
  margin: auto;
  max-height: 200px;
}
@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  .skills {
    height: 60vh;
    padding: 0%;
    justify-content: center;
  }

  .skill {
    /* height: 40%;
    width: 25%; */
    min-width: 30%;
  }

  img {
    height: 100%;
  }
}

@media screen and (min-device-height: 820px) and (max-device-height: 1100px) and (-webkit-min-device-pixel-ratio: 1) {
  img {
    width: 40%;
  }
}
</style>
