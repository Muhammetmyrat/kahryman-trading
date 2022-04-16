<template>
  <div class="facilities__animation swiper">
    <swiper
      ref="mySwiperSmall"
      :options="swiperSmallOptions"
      class="facilities__animation-wrapper swiper-wrapper"
    >
      <swiper-slide class="facilities__animation-slide swiper-slide">
        <img
          src="@/assets/client/img/facilities/animation-gallery/01.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="facilities__animation-slide swiper-slide">
        <img
          src="@/assets/client/img/facilities/animation-gallery/02.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="facilities__animation-slide swiper-slide">
        <img
          src="@/assets/client/img/facilities/animation-gallery/03.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="facilities__animation-slide swiper-slide">
        <img
          src="@/assets/client/img/facilities/animation-gallery/04.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="facilities__animation-slide swiper-slide">
        <img
          src="@/assets/client/img/facilities/animation-gallery/05.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="facilities__animation-slide swiper-slide">
        <img
          src="@/assets/client/img/facilities/animation-gallery/06.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="facilities__animation-slide swiper-slide">
        <img
          src="@/assets/client/img/facilities/animation-gallery/01.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="facilities__animation-slide swiper-slide">
        <img
          src="@/assets/client/img/facilities/animation-gallery/02.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="facilities__animation-slide swiper-slide">
        <img
          src="@/assets/client/img/facilities/animation-gallery/03.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="facilities__animation-slide swiper-slide">
        <img
          src="@/assets/client/img/facilities/animation-gallery/04.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="facilities__animation-slide swiper-slide">
        <img
          src="@/assets/client/img/facilities/animation-gallery/05.png"
          alt=""
        />
      </swiper-slide>
      <swiper-slide class="facilities__animation-slide swiper-slide">
        <img
          src="@/assets/client/img/facilities/animation-gallery/06.png"
          alt=""
        />
      </swiper-slide>
    </swiper>
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
      swiperSmallOptions: {
        slidesPerView: 6,
        slidesPerGroup: 6,
        loop: true,
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
