<template>
  <kinesis-container class="section shuaib">
    <kinesis-element type="depth_inv" :strength="strengt">
      <img src="@/assets/portrait.svg" alt="logo"
    /></kinesis-element>
  </kinesis-container>
</template>

<script>
import gsap from 'gsap'
let masterTL = gsap.timeline()
export default {
  data() {
    return {
      strengt: 20
    }
  },
  methods: {
    shuaibTL() {
      let tl = gsap.timeline()
      tl.to('.shuaib', {
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'back.out'
      })
      return tl
    },
    slowSpeed() {
      let x = window.matchMedia('(max-width: 480px)')
      if (x.matches) {
        this.strengt = 10
      }
    }
  },
  mounted() {
    masterTL.add(this.shuaibTL())
    masterTL.play()
  }
}
</script>

<style scoped>
.section {
  width: 35%;
  height: 50%;
  /* background-color: crimson; */
  position: absolute;
  top: 20%;
  left: 25%;
  transform: scale(0);
  opacity: 0;
  display: flex;
  justify-content: space-between;
}

img {
  width: 90%;
  min-width: 230px;
  max-height: 500px;
}

@media screen and (max-width: 480px) {
  .section {
    top: 30%;
    left: 0%;
    width: 60%;
    height: 40%;
    /* background-color: crimson; */
  }
}
</style>
