<template>
  <span>
    <section class="title-topics">
      <div class="title-topics__container __container">
        <h2 class="title-topics__title">{{ topicTitle }}</h2>
      </div>
    </section>
    <section class="topics">
      <img src="/img/trading_topics/1.png" alt="" />
      <div class="topics__container __container">
        <iframe
          src="animation/index.html?topics=ClimateAction&lang=en&easyxdm=true&color=65ac1e&xdm_e=https%3A%2F%2Fwww.basf.com&xdm_c=default7558&xdm_p=1"
          frameborder="0"
          allowtransparency="true"
          height="800"
          width="1400"
        ></iframe>
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
                    <img
                      :src="`${imgURL}/${itemsFirstLeftImg}-700.jpg`"
                      alt=""
                    />
                  </div>
                </div>
                <div class="facilities__items-first-right">
                  <div
                    class="facilities__items-first-right_img"
                    v-for="itemsFirstRightImage in itemsFirstRightImages"
                    :key="itemsFirstRightImage && itemsFirstRightImage.id"
                  >
                    <img
                      :src="`${imgURL}/${
                        itemsFirstRightImage && itemsFirstRightImage.image_path
                      }-700.jpg`"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div class="facilities__items-last">
                <div
                  class="facilities__items-last_img"
                  v-for="itemsLastImage in itemsLastImages"
                  :key="itemsLastImage && itemsLastImage.id"
                >
                  <img
                    :src="`${imgURL}/${
                      itemsLastImage && itemsLastImage.image_path
                    }-700.jpg
										`"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <slider-small :imgURL="imgURL" :sliders="sliders"></slider-small>
      </div>
    </div>
    <agency-map
      :agenciesTitle="agenciesTitle"
      :agenciesText="agenciesText"
      :agencyStatistics="statistics"
    ></agency-map>
    <section class="image">
      <div class="image__container __container">
        <div class="image__title">Order Procedures</div>
        <div class="image__box"><img src="/img/1.png" alt="" /></div>
      </div>
    </section>
  </span>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HomePage',
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('home'),
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
          content: this.$t('home'),
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
          content: this.$t('home'),
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
  watch: {
    '$i18n.locale': async function () {
      await this.fetchHome({
        url: `${this.$i18n.locale}`,
        $nuxt: this.$nuxt,
      })
    },
  },
  async fetch() {
    await this.fetchHome({
      url: `${this.$i18n.locale}`,
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
    ...mapActions('client', ['fetchHome']),
  },
}
</script>
