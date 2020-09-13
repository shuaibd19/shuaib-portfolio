<template>
  <div>
    <router-link id="nights" to="/learningGsap">FAILED GSAP</router-link> |
    <router-link id="nights" to="/learning-kinesis">KINESIS</router-link> |
    <router-link id="nights" to="/kinesis">KINESIS V2</router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
* {
  text-align: center;
  color: rgb(189, 69, 13);
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  font-size: 1.3em;
  text-decoration: none;
}

#nights:hover {
  color: orchid;
}
</style>
