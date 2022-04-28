<template>
  <span>
    <slider :imgURL="imgURL" :sliders="headerSliders"></slider>
    <div class="about-us">
      <div class="about-us__container __container">
        <div class="about-us__body">
          <div class="facilities__right">
            <div class="facilities__items">
              <div class="facilities__items-first">
                <div class="facilities__items-first-left">
                  <div class="facilities__items-first-left_img">
                    <img :src="`${imgURL}/${itemsFirstLeftImgAbout}-300.jpg`" />
                  </div>
                </div>
                <div class="facilities__items-first-right">
                  <div
                    class="facilities__items-first-right_img"
                    v-for="itemsFirstRightImageAbout in itemsFirstRightImagesAbout"
                    :key="
                      itemsFirstRightImageAbout && itemsFirstRightImageAbout.id
                    "
                  >
                    <img
                      :src="`${imgURL}/${
                        itemsFirstRightImageAbout &&
                        itemsFirstRightImageAbout.image_path
                      }-300.jpg`"
                    />
                  </div>
                </div>
              </div>
              <div class="facilities__items-last">
                <div
                  class="facilities__items-last_img"
                  v-for="itemsLastImageAbout in itemsLastImagesAbout"
                  :key="itemsLastImageAbout && itemsLastImageAbout.id"
                >
                  <img
                    :src="`${imgURL}/${
                      itemsLastImageAbout && itemsLastImageAbout.image_path
                    }-300.jpg`"
                  />
                </div>
              </div>
            </div>
          </div>
          <div class="about-us__right">
            <div class="about-us__text-box text-box-about-us">
              <div class="text-box-about-us__subtitle">
                {{ aboutSmallTitle }}
              </div>
              <h1 class="text-box-about-us__title">{{ aboutBigTitle }}</h1>
              <p class="text-box-about-us__text">
                {{ aboutContent }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-us__footer __container">
      <img :src="`${imgURL}/${aboutImagePath}-300.jpg`" alt="" />
    </div>
  </span>
</template>

<script>
import Slider from '@/components/app/Slider.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'AboutPage',
  components: {
    Slider,
  },
  watch: {
    '$i18n.locale': async function () {
      await this.fetchAboutUs({
        url: `${this.$i18n.locale}/about-us`,
        $nuxt: this.$nuxt,
      })
    },
  },
  async fetch() {
    await this.fetchAboutUs({
      url: `${this.$i18n.locale}/about-us`,
      $nuxt: this.$nuxt,
    })
  },
  computed: {
    ...mapGetters('client', [
      'imgURL',
      'headerSliders',
      'aboutSmallTitle',
      'aboutBigTitle',
      'aboutContent',
      'aboutImagePath',
      'itemsFirstLeftImgAbout',
      'itemsFirstRightImagesAbout',
      'itemsLastImagesAbout',
    ]),
  },
  methods: {
    ...mapActions('client', ['fetchAboutUs']),
  },
}
</script>
