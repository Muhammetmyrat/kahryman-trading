<template>
  <div class="main">
    <the-header />
    <Nuxt />
    <the-footer />
  </div>
</template>

<script>
export default {
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
