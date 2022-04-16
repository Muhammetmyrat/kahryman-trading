<template>
  <span>
    <slider></slider>
    <section class="gallery">
      <div class="gallery__container __container">
        <div class="gallery__row">
          <div class="gallery__column" @click="show = true">
            <div class="gallery__video">
              <div class="gallery__play-icon">
                <img src="@/assets/client/img/gallery/play-icon.svg" alt="" />
              </div>
              <div class="gallery__img-box">
                <img src="@/assets/client/img/gallery/1.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <video-player
        :show="show"
        @closeModal="show = false"
      ></video-player></section
  ></span>
</template>

<script>
import Slider from '@/components/app/Slider.vue'
export default {
  name: 'GalleryPage',
  components: {
    Slider,
  },
  data() {
    return {
      show: false,
    }
  },
}
</script>
