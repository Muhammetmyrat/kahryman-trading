<template>
  <span>
    <slider :imgURL="imgURL" :sliders="headerSliders"></slider>
    <section class="gallery">
      <div class="gallery__container __container">
        <div class="gallery__row">
          <div
            class="gallery__column gallery__column_picture"
            v-for="galleryImageOne in galleryImagesOne"
            :key="galleryImageOne && galleryImageOne.id"
            @click="showImage(galleryImageOne)"
          >
            <div class="gallery__img-box">
              <img
                :src="`${imgURL}/${
                  galleryImageOne && galleryImageOne.gallery_path
                }-300.jpg`"
                alt=""
              />
            </div>
          </div>
          <div
            class="gallery__column"
            v-for="galleryVideo in galleryVideos"
            :key="galleryVideo && galleryVideo.id"
            @click="showVideo(galleryVideo)"
          >
            <div class="gallery__video">
              <div class="gallery__play-icon">
                <img src="/img/gallery/play-icon.svg" alt="" />
              </div>
              <div class="gallery__img-box">
                <img
                  :src="`${imgURL}/${
                    galleryVideo && galleryVideo.gallery_path
                  }`"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div
            class="gallery__column gallery__column_picture"
            v-for="galleryImageTwo in galleryImagesTwo"
            :key="galleryImageTwo && galleryImageTwo.id"
            @click="showImage(galleryImageTwo)"
          >
            <div class="gallery__img-box">
              <img
                :src="`${imgURL}/${
                  galleryImageTwo && galleryImageTwo.gallery_path
                }-300.jpg`"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <video-player
        :isShowVideo="isShowVideo"
        :imgURL="imgURL"
        :video="video"
        @closeModal="isShowVideo = false"
      ></video-player>
      <picture
        :isShowImage="isShowImage"
        :imgURL="imgURL"
        :image="image"
        @closeModal="isShowImage = false"
      ></picture>
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
      isShowVideo: false,
      video: '',
      isShowImage: false,
      image: '',
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
      'galleryImagesOne',
      'galleryImagesTwo',
      'galleryVideos',
    ]),
  },
  methods: {
    ...mapActions('client', ['fetchGallery']),
    showVideo(video) {
      this.video = video?.gallery_path
      this.isShowVideo = true
    },
    showImage(image) {
      this.image = image?.gallery_path
      this.isShowImage = true
    },
  },
}
</script>
