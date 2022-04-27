<template>
  <div class="menu-header__lang lang">
    <a href="#" @click.prevent class="lang__button icon-arrow-down">{{
      $i18n.locale
    }}</a>
    <div
      class="lang__menu"
      v-for="language in languages"
      :key="language.id"
      @click.prevent.stop="$i18n.setLocale(language.short_name)"
    >
      <a href="#" @click.prevent class="lang__item">{{
        language.short_name
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    languages: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
