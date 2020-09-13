<template>
  <div class="contains1">
    <div class="row goog mb-5">
      <h1>Technologies</h1>
    </div>
    <SkillsList />
  </div>
</template>

<script>
import SkillsList from '@/components/third-page/SkillsList.vue'
// import Banner from '@/components/third-page/Banner.vue'
export default {
  components: {
    SkillsList
    // Banner
  }
}
</script>

<style scoped>
.contains1 {
  /* background-color: #efc3e6; */
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

h1 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family: 'Lobster', cursive;
  padding: 10px;
  border: solid 10px #000000;
}

@media only screen and (min-device-width: 320px) and (max-device-width: 480px) and (-webkit-min-device-pixel-ratio: 2) {
  .contains1 {
    height: 115vh;
  }
}
</style>
