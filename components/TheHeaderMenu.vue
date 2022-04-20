<template>
  <menu class="header__menu menu-header">
    <div class="menu-header__burger">
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="menu-header__nav">
      <ul class="menu-header__list">
        <li class="menu-header__item">
          <nuxt-link :to="'/'" class="menu-header__link active">Home</nuxt-link>
        </li>
        <li class="menu-header__item">
          <nuxt-link :to="'/about-us'" class="menu-header__link"
            >About us</nuxt-link
          >
        </li>
        <li class="menu-header__item">
          <nuxt-link :to="'/product'" class="menu-header__link"
            >Product</nuxt-link
          >
        </li>
        <li class="menu-header__item">
          <nuxt-link :to="'/gallery'" class="menu-header__link"
            >Gallery</nuxt-link
          >
        </li>
        <li class="menu-header__item">
          <nuxt-link :to="'/contact-us'" class="menu-header__link"
            >Contacts</nuxt-link
          >
        </li>
      </ul>
    </nav>
  </menu>
</template>

<script>
export default {
  props: {
    type: {
      menus: Array,
      default: () => [],
    },
  },
  data() {
    return {
      paths: [
        { id: 0, path: '/' },
        { id: 1, path: '/about-us' },
        { id: 2, path: '/product' },
        { id: 3, path: '/gallery' },
        { id: 4, path: '/contact-us' },
      ],
    }
  },
}
</script>
