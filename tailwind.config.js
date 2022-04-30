module.exports = {
  // content: [
  //   // "./components/**/*.{js,vue,ts}",

  //   // "./pages/**/*.vue",
  //   "./pages/some.vue",
  //   // "./plugins/**/*.{js,ts}",
  //   // "./nuxt.config.{js,ts}",
  // ],
  content: [
    // "./components/**/*.{vue,js}",
    // "./layouts/**/*.vue",
    './pages/admin/**/*.vue',
    './pages/login/**/*.vue',
    './assets/**/*.svg',
    // "./pages/**/*.vue",
    // "./plugins/**/*.{js,ts}",
    // "./nuxt.config.{js,ts}",
  ],
  theme: {
    extend: {
      height: {},
    },
  },
  // variants: {
  //   fill: ["hover", "focus"], // this line does the trick
  // },
  plugins: [],
}
