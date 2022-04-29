<template>
  <menu class="header__menu menu-header">
    <div
      class="menu-header__burger"
      :class="{ active: isActiveBurger }"
      @click="isActiveBurger = !isActiveBurger"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>
    <nav class="menu-header__nav" :class="{ active: isActiveBurger }">
      <ul class="menu-header__list">
        <li
          class="menu-header__item"
          v-for="menu in menus"
          :key="menu && menu.id"
        >
          <nuxt-link :to="menu.path" class="menu-header__link">{{
            menu && menu.name
          }}</nuxt-link>
        </li>
      </ul>
    </nav>
  </menu>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      isActiveBurger: false,
    }
  },
}
</script>
