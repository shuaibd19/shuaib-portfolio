<template>
  <div class="side-bar links zero">
    <a :href="github"
      ><img class="links first" src="@/assets/github.svg" alt="github"
    /></a>
    <a :href="linkedin"
      ><img class="links second" src="@/assets/linkedin.svg" alt="linkedin"
    /></a>
    <a :href="insta"
      ><img class="links third" src="@/assets/instagram.svg" alt="instagram"
    /></a>
    <!-- <a href="@/assets/resume.png">
      <img class="links fourth" src="@/assets/instagram.svg" alt="instagram" />
    </a> -->
  </div>
</template>

<script>
import gsap from 'gsap'
let masterTL = gsap.timeline()
export default {
  data() {
    return {
      github: 'https://github.com/shuaibd19',
      linkedin: 'https://www.linkedin.com/in/ahmad-shuaib-dorani-146799140/',
      insta: 'https://www.instagram.com/shu3ybd/',
      resume: '@/assets/shuaibCV.pdf'
    }
  },
  methods: {
    linksTL() {
      let tl = gsap.timeline()
      tl.to('.zero', {
        delay: 0.5,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: 'bounce.out'
      })
      tl.to(
        '.first',
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'bounce.out'
        },
        '<.6'
      )
      tl.to(
        '.second',
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'bounce.out'
        },
        '<.6'
      )
      tl.to(
        '.third',
        {
          opacity: 1,
          scale: 1,
          duration: 0.3,
          ease: 'bounce.out'
        },
        '<.6'
      )
      // tl.to(
      //   '.fourth',
      //   {
      //     opacity: 1,
      //     scale: 1,
      //     duration: 0.3,
      //     ease: 'bounce.out'
      //   },
      //   '<.6'
      // )
      return tl
    }
  },
  mounted() {
    masterTL.add(this.linksTL())
    masterTL.play()
  }
}
</script>

<style scoped>
.side-bar {
  width: 280px;
  height: 50px;
  position: absolute;
  top: 0;
  right: 0;
  /* left: 42%; */
  /* background-color: #59acad; */
  /* border-top: 10px solid white;
  border-left: 10px solid white;
  border-right: 10px solid white; */
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
}

.links {
  transform: scale(0);
  opacity: 0;
}

img {
  width: 40px;
  position: relative;
}

@media screen and (max-width: 480px) {
  .side-bar {
    flex-direction: column;
    top: 35%;
    right: 0%;
    width: 60px;
    height: 200px;
  }
}
</style>
