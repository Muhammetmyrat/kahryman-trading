<template>
  <header class="header">
    <div class="header__container __container">
      <logo-white></logo-white>
      <logo-blue></logo-blue>
      <the-header-menu :menus="menus" :calculate="calculate"></the-header-menu>
      <!-- <the-header-lang :languages="calculate"></the-header-lang> -->
    </div>
  </header>
</template>

<script>
import LogoBlue from './app/logo/LogoBlue.vue'
import LogoWhite from './app/logo/LogoWhite.vue'
import { mapActions, mapGetters } from 'vuex'
import TheHeaderLang from './TheHeaderLang.vue'
export default {
  components: { LogoWhite, LogoBlue, TheHeaderLang },
  data() {
    return {
      className: 'active',
      scrollTrigger: 100,
    }
  },
  watch: {
    '$i18n.locale': async function () {
      await this.fetchHeader({
        url: `${this.$i18n.locale}/header/${this.calculateHeaderApiPath}`,
        $nuxt: this.$nuxt,
      })
    },
  },
  async fetch() {
    await this.fetchHeader({
      url: `${this.$i18n.locale}/header/${this.calculateHeaderApiPath}`,
      $nuxt: this.$nuxt,
    })
  },
  computed: {
    ...mapGetters('client', ['imgURL', 'menus', 'languages']),
    calculate() {
      let locale = this.$i18n.locale
      return this.languages?.filter((lang) => lang.short_name !== locale)
    },
    calculateHeaderApiPath() {
      if (
        this.$route.path === '/' ||
        this.$route.path === `/${this.$i18n.locale}`
      ) {
        return `home`
      } else if (
        this.$route.path === '/about-us' ||
        this.$route.path === `/${this.$i18n.locale}/about-us`
      ) {
        return `about`
      } else if (
        this.$route.path === '/product' ||
        this.$route.path === `/${this.$i18n.locale}/product`
      ) {
        return `product`
      } else if (
        this.$route.path === '/gallery' ||
        this.$route.path === `/${this.$i18n.locale}/gallery`
      ) {
        return `gallery`
      } else if (
        this.$route.path === '/contact-us' ||
        this.$route.path === `/${this.$i18n.locale}/contact-us`
      ) {
        return `contact`
      }
    },
  },
  methods: {
    ...mapActions('client', ['fetchHeader']),
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
