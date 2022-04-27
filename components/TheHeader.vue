<template>
  <header class="header">
    <div class="header__container __container">
      <logo-white></logo-white>
      <logo-blue></logo-blue>
      <the-header-menu :menus="menus" :calculate="calculate"></the-header-menu>
      <div class="header__lang lang">
        <a href="#" class="lang__button icon-arrow-down">TM</a>
        <div class="lang__menu">
          <a href="#" class="lang__item">RU</a>
        </div>
      </div>
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
    ...mapGetters('client', ['imgURL', 'images', 'menus', 'languages']),
    calculate() {
      let locale = this.$i18n.locale
      return this.languages?.filter((lang) => lang.short_name !== locale)
    },
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
