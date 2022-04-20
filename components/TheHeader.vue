<template>
  <header class="header">
    <div class="header__container __container">
      <logo-white></logo-white>
      <logo-blue></logo-blue>
      <the-header-menu :menus="menus"></the-header-menu>
      <the-header-lang></the-header-lang>
    </div>
  </header>
</template>

<script>
import LogoBlue from './app/logo/LogoBlue.vue'
import LogoWhite from './app/logo/LogoWhite.vue'
import { mapGetters } from 'vuex'
export default {
  components: { LogoWhite, LogoBlue },
  data() {
    return {
      className: 'active',
      scrollTrigger: 100,
    }
  },
  computed: {
    ...mapGetters('client', ['imgURL', 'images', 'menus']),
  },
  mounted() {
    console.log(this.menus)
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
