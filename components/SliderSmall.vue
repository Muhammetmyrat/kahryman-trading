<template>
  <div class="facilities__animation swiper">
    <swiper
      ref="mySwiperSmall"
      :options="swiperSmallOptions"
      class="facilities__animation-wrapper swiper-wrapper"
    >
      <swiper-slide
        class="facilities__animation-slide swiper-slide"
        v-for="slider in sliders"
        :key="slider.id"
      >
        <img :src="`${imgURL}/${slider.image_path}`" alt="" />
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  props: {
    imgURL: {
      type: String,
      default: '',
    },
    sliders: {
      type: Array,
      default: () => [],
    },
  },
  components: {
    Swiper,
    SwiperSlide,
  },
  data() {
    return {
      swiperSmallOptions: {
        slidesPerView: 3,
        slidesPerGroup: 3,
        breakpoints: {
          600: {
            slidesPerView: 4,
            slidesPerGroup: 4,
          },
          900: {
            slidesPerView: 5,
            slidesPerGroup: 5,
          },
          1200: {
            slidesPerView: 6,
            slidesPerGroup: 6,
          },
        },
        keyboard: {
          enabled: true,
          onlyInViewport: true,
          pageUpDown: true,
        },
      },
    }
  },
  computed: {
    swiperSmall() {
      return this.$refs.mySwiperSmall.$swiper
    },
  },
  async mounted() {
    await this.swiperSmall
  },
}
</script>
