<template>
  <div class="contains3">
    <router-link :to="{ name: 'email' }" class="row mb-5">
      <div>
        <h2>Send me a message</h2>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.contains3 {
  /* background-color: #e3ceca; */
  /* opacity: 80%; */
  height: 20vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 50px;
}

h2 {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-family: 'Lobster', cursive;
  padding: 10px;
  border: solid 10px #000000;
  text-align: center;
}
</style>
