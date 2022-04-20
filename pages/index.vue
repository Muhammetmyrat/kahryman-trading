<template>
  <span>
    <slider></slider>
    <section class="topics">
      <div class="topics__container __container">
        <div class="topics__wrapper">
          <h3 class="topics__title">{{ topicTitle }}</h3>
          <div class="topics__cards">
            <iframe src="" frameborder="0"></iframe>
          </div>
        </div>
      </div>
    </section>
    <div class="facilities">
      <div class="facilities__container __container">
        <div class="facilities__body">
          <div class="facilities__left">
            <div class="facilities__subtitle">{{ smallTitle }}</div>
            <h1 class="facilities__title">{{ bigTitle }}</h1>
            <p class="facilities__text">
              {{ facilitiesText }}
            </p>
          </div>
          <div class="facilities__right">
            <div class="facilities__items">
              <div class="facilities__items-first">
                <div class="facilities__items-first-left">
                  <div class="facilities__items-first-left_img">
                    <img :src="`${imgURL}/${itemsFirstLeftImg}`" alt="" />
                  </div>
                </div>
                <div class="facilities__items-first-right">
                  <div
                    class="facilities__items-first-right_img"
                    v-for="itemsFirstRightImage in itemsFirstRightImages"
                    :key="itemsFirstRightImage.id"
                  >
                    <img
                      :src="`${imgURL}/${itemsFirstRightImage.image_path}`"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="facilities__items-last">
                <div
                  class="facilities__items-last_img"
                  v-for="itemsLastImage in itemsLastImages"
                  :key="itemsLastImage.id"
                >
                  <img :src="`${imgURL}/${itemsLastImage.image_path}`" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <slider-small :imgURL="imgURL" :sliders="sliders"></slider-small>
      </div>
    </div>
    <section class="agency">
      <div class="agency__container __container">
        <div class="agency__wrapper">
          <h1 class="agency__title">{{ agenciesTitle }}</h1>
          <div class="agency__text">
            <p>
              {{ agenciesText }}
            </p>
          </div>
          <agency-map :agencyStatistics="statistics"></agency-map>
        </div>
      </div>
    </section>
  </span>
</template>

<script>
import Slider from '@/components/app/Slider.vue'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HomePage',
  components: {
    Slider,
  },
  watch: {
    '$i18n.locale': async function () {
      await this.fetchHome({
        url: `en`,
        $nuxt: this.$nuxt,
      })
    },
  },
  async fetch() {
    await this.fetchHome({
      url: `en`,
      $nuxt: this.$nuxt,
    })
  },
  computed: {
    ...mapGetters('client', [
      'imgURL',
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
    ...mapActions('client', ['fetchHome']),
  },
  mounted() {
    console.log(this.itemsLastImages)
  },
}
</script>
