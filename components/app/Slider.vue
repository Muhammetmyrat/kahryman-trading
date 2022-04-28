<template>
  <div class="mainpage">
    <div class="mainpage__swiper swiper-mainpage swiper">
      <swiper
        ref="mySwiper"
        :options="swiperOptions"
        class="swiper-mainpage__wrapper swiper-wrapper"
      >
        <swiper-slide
          class="swiper-mainpage__slide swiper-slide"
          v-for="slider in sliders"
          :key="slider.id"
        >
          <div class="swiper-mainpage__img">
            <img :src="`${imgURL}/${slider && slider.image_path}-700.jpg`" />
          </div>
          <div class="swiper-mainpage__body __container body-mainpage">
            <div class="body-mainpage__text-box" data-swiper-parallax="-300%">
              <h1 class="body-mainpage__title">
                {{ slider && slider.small_text }}
              </h1>
              <p class="body-mainpage__subtitle">
                {{ slider && slider.text }}
              </p>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="mainpage__swiper-wrapper">
        <div class="mainpage__swiper-container __container">
          <div class="swiper-mainpage__pagination swiper-pagination"></div>
          <div class="swiper-mainpage__scrollbar swiper-scrollbar"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    Swiper,
    SwiperSlide,
  },
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
  data() {
    return {
      swiperOptions: {
        direction: 'vertical',
        speed: 3000,
        parallax: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        scrollbar: {
          el: '.swiper-mainpage__scrollbar',
          draggable: true,
        },
        pagination: {
          el: '.swiper-mainpage__pagination',
          clickable: true,
          renderBullet: function (index, className) {
            let number
            if (index <= 9) {
              number =
                '<span class="' +
                className +
                '">' +
                '0' +
                (index + 1) +
                '</span>'
            } else {
              number =
                '<span class="' + className + '">' + (index + 1) + '</span>'
            }
            return number
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
    swiper() {
      return this.$refs.mySwiper.$swiper
    },
  },
  async mounted() {
    await this.swiper
  },
}
</script>

<style scoped>
.mainpage >>> .swiper-mainpage__pagination .swiper-pagination-bullet {
  background: transparent !important;
  color: #ffffff !important;
  margin-bottom: 20px !important;
  margin-top: 20px !important;
  opacity: 1 !important;
  width: 30px !important;
  height: 30px !important;
}
</style>
