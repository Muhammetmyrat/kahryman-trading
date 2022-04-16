<template>
  <header class="header">
    <div class="header__container __container">
      <logo-white></logo-white>
      <logo-blue></logo-blue>
      <the-header-menu></the-header-menu>
      <the-header-lang></the-header-lang>
    </div>
  </header>
</template>

<script>
import LogoBlue from './app/logo/LogoBlue.vue'
import LogoWhite from './app/logo/LogoWhite.vue'
export default {
  components: { LogoWhite, LogoBlue },
  data() {
    return {
      className: 'active',
      scrollTrigger: 100,
    }
  },
  mounted() {
    window.addEventListener('scroll', () => {
      if (
        window.scrollY >= this.scrollTrigger ||
        window.pageYOffset >= this.scrollTrigger
      ) {
        document.querySelector('.header').classList.add(this.className)
      } else {
        document.querySelector('.header').classList.remove(this.className)
      }
    })
  },
}
</script>
