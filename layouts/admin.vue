<template>
  <div>
    <nuxt />
  </div>
</template>

<script>
// import "@/assets/index.css";
export default {
  middleware: ['checkLogin'],
  // head() {
  //   return {
  //     link: [{ rel: "stylesheet", href: "/styles.css" }],
  //   };
  // },
}
</script>

<style>
@import url('@/assets/admin/');
</style>
