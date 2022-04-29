<template>
  <div class="main">
    <the-header />
    <slider></slider>
    <Nuxt />
    <the-footer />
  </div>
</template>

<script>
import Slider from '@/components/app/Slider.vue'
export default {
  components: {
    Slider,
  },
  // head() {
  //   const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
  //   return {
  //     htmlAttrs: {
  //       ...i18nHead.htmlAttrs
  //     },
  //     meta: [
  //       {
  //         name: 'robots',
  //         content: 'index, follow, max-image-preview:large'
  //       },
  //       {
  //         name: 'copyright',
  //         content: this.$t('footer')
  //       }
  //     ],
  //     ...i18nHead.link
  //   }
  // }
}
</script>
