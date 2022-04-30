<template>
  <section class="gallery">
    <div class="gallery__container __container">
      <div class="gallery__row">
        <div
          class="gallery__column"
          v-for="gallery in gallerys"
          :key="gallery && gallery.id"
          :class="{
            gallery__column_picture: gallery && gallery.type === 'image',
          }"
          @click="showModal(gallery)"
        >
          <div class="gallery__video">
            <div class="gallery__play-icon" v-if="gallery.type === 'video'">
              <img src="/img/gallery/play-icon.svg" alt="" />
            </div>
            <div class="gallery__img-box">
              <img
                v-if="gallery.type === 'image'"
                :src="`${imgURL}/${gallery && gallery.gallery_path}-700.jpg`"
                alt=""
              />
              <img
                v-else
                :src="`${imgURL}/${gallery && gallery.image_path}-700.jpg`"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <video-player
      :isShowVideo="isShowVideo"
      :imgURL="imgURL"
      :video="video"
      @closeModal="closeVideoPlayer"
    ></video-player>
    <big-picture
      :isShowImage="isShowImage"
      :imgURL="imgURL"
      :image="image"
      @closeModal="closeBigPicture"
    ></big-picture>
  </section>
</template>

<script>
import VideoPlayer from '@/components/app/popUp/VideoPlayer.vue'
import BigPicture from '@/components/app/popUp/BigPicture.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'GalleryPage',
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('gallery'),
      meta: [
        {
          property: 'og:local',
          content: this.$i18n.locale,
        },
        {
          property: 'og:type',
          content: 'article',
        },
        {
          property: 'og:title',
          content: this.$t('gallery'),
        },
        {
          property: 'og:url',
          content: `${process.env.siteUrl}${this.localePath(this.$route.path)}`,
        },
        {
          property: 'og:site_name',
          content: 'KahrymanTrading',
        },
        {
          name: 'twitter:title',
          content: this.$t('gallery'),
        },
        {
          name: 'twitter:card',
          content: 'summary',
        },
        {
          name: 'twitter:site',
          content: 'KahrymanTrading',
        },
        ...i18nHead.link,
      ],
    }
  },
  components: {
    VideoPlayer,
    BigPicture,
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
    ...mapGetters('client', ['imgURL', 'headerSliders', 'gallerys']),
  },
  methods: {
    ...mapActions('client', ['fetchGallery']),
    async showModal(item) {
      if (item.type === 'image') {
        this.image = item?.gallery_path
        setTimeout(() => {
          this.isShowImage = true
          document.body.classList.add('_lock')
        }, 500)
      } else if (item.type === 'video') {
        this.video = item?.gallery_path
        setTimeout(() => {
          this.isShowVideo = true
          document.body.classList.add('_lock')
        }, 500)
      }
    },
    closeBigPicture() {
      this.isShowImage = false
      document.body.classList.remove('_lock')
    },
    closeVideoPlayer() {
      this.isShowVideo = false
      document.body.classList.remove('_lock')
    },
  },
}
</script>
