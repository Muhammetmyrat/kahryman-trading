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
          style="background-image: url(/image/mainpage/01.png)"
        >
          <div class="swiper-mainpage__body __container body-mainpage">
            <div class="body-mainpage__text-box" data-swiper-parallax="-300%">
              <h1 class="body-mainpage__title">
                Feeding the world, caring the earth
              </h1>
              <p class="body-mainpage__subtitle">potassium chloride</p>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="swiper-mainpage__slide swiper-slide"
          style="background-image: url(/image/mainpage/02.png)"
        >
          <div class="swiper-mainpage__body __container body-mainpage">
            <div class="body-mainpage__text-box" data-swiper-parallax="-300%">
              <p class="body-mainpage__subtitle">potassium chloride</p>
              <h1 class="body-mainpage__title">
                Our services and our service is a solution before the customer's
                problems arise
              </h1>
            </div>
          </div>
        </swiper-slide>
        <swiper-slide
          class="swiper-mainpage__slide swiper-slide"
          style="background-image: url(/image/mainpage/03.png)"
        >
          <div class="swiper-mainpage__body __container body-mainpage">
            <div class="body-mainpage__text-box" data-swiper-parallax="-300%">
              <p class="body-mainpage__subtitle">potassium chloride</p>
              <h1 class="body-mainpage__title">
                Our services and our service is a solution before the customer's
                problems arise
              </h1>
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <div class="mainpage__swiper_wrapper">
        <div class="mainpage__swiper_container __container">
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
        scrollbar: {
          el: '.swiper-mainpage__scrollbar',
          draggable: true,
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
