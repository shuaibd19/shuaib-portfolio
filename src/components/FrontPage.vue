<template>
  <div id="parent">
    <SideBar />
    <Bubble1 />
    <Bubble2 />
    <Bubble3 />
    <Bubble4 />
    <Logo />
  </div>
</template>

<script>
import Logo from '@/components/first-page/Logo.vue'
import Bubble1 from '@/components/first-page/Bubble-1.vue'
import Bubble2 from '@/components/first-page/Bubble-2.vue'
import Bubble3 from '@/components/first-page/Bubble-3.vue'
import Bubble4 from '@/components/first-page/Bubble-4.vue'
import SideBar from '@/components/first-page/SideBar.vue'
export default {
  components: {
    Logo,
    Bubble1,
    Bubble2,
    Bubble3,
    Bubble4,
    SideBar
  }
}
</script>

<style scoped>
#parent {
  height: 100vh;
  position: relative;
  /* background-color: #9c89b8; */
  /* background: rgb(156, 137, 184);
  background: linear-gradient(
    180deg,
    rgba(156, 137, 184, 1) 0%,
    rgba(239, 195, 230, 1) 100%
  ); */
}

h1 {
  font-size: 3.5rem;
  margin: auto;
  font-family: 'Abril Fatface', cursive;
  padding: 10px;
  border: solid 10px #000000;
}
</style>
