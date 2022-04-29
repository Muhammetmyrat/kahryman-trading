import en from './locales/en'
// import ru from './locales/ru'
import metaHome from './SEO/main'
require('dotenv').config()

export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: metaHome,
  server: {
    port: 3000,
    host: '0.0.0.0',
  },
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['@/assets/client/css/style.css'],
  /*
   ** Plugins to load before mounting the App
   */
  loading: {
    color: '#252c54',
    height: '2px',
  },

  plugins: [
    { src: '@/plugins/vue-awesome-swiper', mode: 'client' },
    { src: '@/plugins/vue-plyr', mode: 'client' },
  ],

  // Auto import components: https://go.nuxtjs.dev/config-component
  components: true,
  buildModules: ['@nuxt/postcss8', '@nuxtjs/axios'],
  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/axios',
    // "vue2-editor/nuxt",
    '@nuxtjs/i18n',
    '@nuxtjs/auth-next',
  ],

  build: {
    transpile: ['lodash'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },

  auth: {
    redirect: {
      login: '/',
      logout: '/',
      callback: '/home',
      home: '/home',
    },
    strategies: {
      local: {
        name: 'local',

        token: {
          property: 'token',
          type: 'Bearer',
          global: true,
          //
          // required: false,
          // type: false,
          // required: true,
          // type: 'Bearer'
        },
        // user: {
        //   // property: false,
        //   autoFetch: false,
        //   propertyName: false,
        // },
        // user: false,

        endpoints: {
          login: { url: '/login/admin', method: 'post', propertyName: 'token' },
          logout: { url: '/logout', method: 'post' },
          token: undefined,
          user: false,
          // user: {
          //   // url: "/api/auth/user",
          //   // propertyName: false,
          //   // autoFetch: false,
          //   // method: "get",
          // },
        },
        // tokenRequired: true,
      },
      // tokenRequired: true,
      // tokenType: false,
    },
    cookie: true,
    localStorage: false,
    token: {
      prefix: 'token.',
    },
  },

  env: {
    baseUrl: process.env.BASE_API,
    siteUrl: process.env.SITE_URL,
  },
  axios: { baseURL: `${process.env.BASE_API}` },
  i18n: {
    baseUrl: `${process.env.SITE_URL}`,
    locales: [
      {
        code: 'en',
        lang: 'EN',
        name: 'EN',
        iso: 'en-US',
        file: 'en',
        isCatchallLocale: true,
      },
      // { code: 'ru', lang: 'RU', name: 'RU', iso: 'ru-RU', file: 'ru' },
    ],
    defaultLocale: 'en',
    seo: true,
    vueI18n: {
      fallbackLocale: 'en',
      messages: {
        en,
        // ru,
      },
    },
  },

  router: {
    linkExactActiveClass: '_active',
    linkActiveClass: '_active',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
}
