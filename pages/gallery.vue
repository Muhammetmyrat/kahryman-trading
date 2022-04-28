<template>
  <span>
    <slider></slider>
    <section class="gallery">
      <div class="gallery__container __container">
        <div class="gallery__row">
          <div class="gallery__column">
            <div class="gallery__video">
              <div class="gallery__play-icon">
                <img src="/img/gallery/play-icon.svg" alt="" />
              </div>
              <div class="gallery__img-box">
                <img src="/img/gallery/1.png" alt="" />
              </div>
            </div>
          </div>
          <div class="gallery__column">
            <div class="gallery__video">
              <div class="gallery__play-icon">
                <img src="/img/gallery/play-icon.svg" alt="" />
              </div>
              <div class="gallery__img-box">
                <img src="/img/gallery/2.png" alt="" />
              </div>
            </div>
          </div>
          <div class="gallery__column">
            <div class="gallery__video">
              <div class="gallery__play-icon">
                <img src="/img/gallery/play-icon.svg" alt="" />
              </div>
              <div class="gallery__img-box">
                <img src="/img/gallery/3.png" alt="" />
              </div>
            </div>
          </div>
          <div class="gallery__column">
            <div class="gallery__video">
              <div class="gallery__play-icon">
                <img src="/img/gallery/play-icon.svg" alt="" />
              </div>
              <div class="gallery__img-box">
                <img src="/img/gallery/4.png" alt="" />
              </div>
            </div>
          </div>
          <div class="gallery__column">
            <div class="gallery__video">
              <div class="gallery__play-icon">
                <img src="/img/gallery/play-icon.svg" alt="" />
              </div>
              <div class="gallery__img-box">
                <img src="/img/gallery/5.png" alt="" />
              </div>
            </div>
          </div>
          <div class="gallery__column">
            <div class="gallery__video">
              <div class="gallery__play-icon">
                <img src="/img/gallery/play-icon.svg" alt="" />
              </div>
              <div class="gallery__img-box">
                <img src="/img/gallery/6.png" alt="" />
              </div>
            </div>
          </div>
          <div class="gallery__column">
            <div class="gallery__play-icon">
              <img src="/img/gallery/play-icon.svg" alt="" />
            </div>
            <div class="gallery__img-box">
              <img src="/img/gallery/7.png" alt="" />
            </div>
          </div>
          <div class="gallery__column gallery__column_picture">
            <div class="gallery__img-box">
              <img src="/img/gallery/8.png" alt="" />
            </div>
          </div>
          <div class="gallery__column gallery__column_picture">
            <div class="gallery__img-box">
              <img src="/img/gallery/9.png" alt="" />
            </div>
          </div>
        </div>
      </div>
      <video-player
        :isShow="isShow"
        @closeModal="isShow = false"
      ></video-player>
      <picture></picture>
    </section>
  </span>
</template>

<script>
import Slider from '@/components/app/Slider.vue'
import VideoPlayer from '@/components/app/popUp/VideoPlayer.vue'
import Picture from '@/components/app/popUp/Picture.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'GalleryPage',
  components: {
    Slider,
    VideoPlayer,
    Picture,
  },
  data() {
    return {
      isShow: false,
    }
  },
  watch: {
    '$i18n.locale': async function () {
      await this.fetchGallery({
        url: `${this.$i18n.locale}/gallery`,
        $nuxt: this.$nuxt,
      })
    },
  },
  async fetch() {
    await this.fetchGallery({
      url: `${this.$i18n.locale}/gallery`,
      $nuxt: this.$nuxt,
    })
  },
  computed: {
    ...mapGetters('client', [
      'imgURL',
      'headerSliders',
      'topicTitle',
      'smallTitle',
      'bigTitle',
      'facilitiesText',
      'itemsFirstLeftImg',
      'itemsFirstRightImages',
      'itemsLastImages',
      'sliders',
      'agenciesTitle',
      'agenciesText',
      'statistics',
    ]),
  },
  methods: {
    ...mapActions('client', ['fetchGallery']),
  },
}
</script>
