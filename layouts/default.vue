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
}
</script>
