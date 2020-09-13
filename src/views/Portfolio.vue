<template>
  <div class="col">
    <FrontPage class="skengdo row" />
    <About class="skengdo row" />
    <SkillsPage class="row" />
    <Contact class="row" />
    <div class="credit">
      I customized the wicked cool background on my homepage at
      <a href="https://www.SVGBackgrounds.com">SVGBackgrounds</a>
    </div>
  </div>
</template>

<script>
import FrontPage from '@/components/FrontPage.vue'
import SkillsPage from '@/components/SkillsPage.vue'
import About from '@/components/About.vue'
import Contact from '@/components/Contact.vue'
export default {
  components: {
    FrontPage,
    SkillsPage,
    About,
    Contact
  }
}
</script>

<style scoped>
.skengdo {
  opacity: 1;
  transform: translateY(0);
}

.credit {
  bottom: 0;
  right: 0;
}
</style>
