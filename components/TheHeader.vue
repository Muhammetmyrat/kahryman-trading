<template>
  <header class="header">
    <div class="header__container __container">
      <the-header-logo></the-header-logo>
      <the-header-menu></the-header-menu>
      <the-header-lang></the-header-lang>
    </div>
  </header>
</template>

<script>
export default {
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
