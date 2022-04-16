import en from './locales/en'
import ru from './locales/ru'

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    titleTemplate: '%s | KahrymanTrading',
    title: 'KahrymanTrading',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/client/css/style.css'],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/vue-awesome-swiper'],

  // Auto import components: https://go.nuxtjs.dev/config-component
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: ['@nuxtjs/axios'],
  env: {
    baseUrl: process.env.BASE_API,
    siteUrl: process.env.SITE_URL,
  },
  axios: { baseURL: `${process.env.BASE_API}` },
  // i18n: {
  //   baseUrl: `${process.env.SITE_URL}`,
  //   locales: [
  //     {
  //       code: 'en',
  //       lang: 'ENG',
  //       name: 'ENG',
  //       iso: 'en-EN',
  //       file: 'en',
  //       isCatchallLocale: true,
  //     },
  //     { code: 'ru', lang: 'RUS', name: 'RUS', iso: 'ru-RU', file: 'ru' },
  //   ],
  //   defaultLocale: 'en',
  //   seo: true,
  //   vueI18n: {
  //     fallbackLocale: 'en',
  //     messages: {
  //       en,
  //       ru,
  //     },
  //   },
  // },
  router: {
    linkExactActiveClass: '_active',
    linkActiveClass: '_active',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
