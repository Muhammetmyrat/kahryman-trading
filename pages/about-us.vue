<template>
  <span>
    <slider></slider>
    <div class="about-us">
      <div class="about-us__container __container">
        <div class="about-us__body">
          <div class="facilities__right">
            <div class="facilities__items">
              <div class="facilities__items-first">
                <div class="facilities__items-first-left">
                  <div class="facilities__items-first-left_img">
                    <img src="/img/about-us/gallery/02.png" />
                  </div>
                </div>
                <div class="facilities__items-first-right">
                  <div class="facilities__items-first-right_img">
                    <img src="/img/about-us/gallery/01.png" />
                  </div>
                  <div class="facilities__items-first-right_img">
                    <img src="/img/about-us/gallery/03.png" />
                  </div>
                </div>
              </div>
              <div class="facilities__items-last">
                <div class="facilities__items-last_img">
                  <img src="/img/about-us/gallery/04.png" />
                </div>
                <div class="facilities__items-last_img">
                  <img src="/img/about-us/gallery/05.png" />
                </div>
                <div class="facilities__items-last_img">
                  <img src="/img/about-us/gallery/06.png" />
                </div>
              </div>
            </div>
          </div>
          <div class="about-us__right">
            <div class="about-us__text-box text-box-about-us">
              <div class="text-box-about-us__subtitle">who we are</div>
              <h1 class="text-box-about-us__title">About us</h1>
              <p class="text-box-about-us__text">
                Kahryman Trading is an international commodity trading house
                with its headquarters situated in Dubai. In a short span of
                time, Kahryman Trading has expanded its network across various
                continents. We are committed to supply our clients with all
                types of fertilizers and petrochemicals with our own freight
                transportation sector.<br />
                The management at Kahryman Trading holds extensive knowledge and
                experience in the field of commodity trading. Over the years, we
                have passed on our expertise and passion for trading to all of
                the teams that work in 15 different countries and built a strong
                trading organization together. Our company has positioned itself
                to respond positively to any demand in the market based on our
                ability to call upon our network of worldwide contact to provide
                goods and services.<br />
                Kahryman Trading now stands for a progressive brand that is
                synonymous with quality dealing in SULFUR, UREA 46, POTASSIUM
                CHLORIDE, POLYMER PRODUCTS, PETROLEUM COKE, COALS and etc. Our
                procurement teams are empowered by the strong presence on the
                ground at procurement centers and are aided by a dedicated team
                specializing in providing the best quality products. On the
                other hand, our marketing team is empowered by our presence at
                distribution centers and specializes in providing the best value
                to customers.<br />
                The company’s rapid expansion stems from the efficient,
                experienced and professional members of the organization, whose
                key focus is to create sustainable value for all stakeholders.
                The culture in Kahryman Trading places strong emphasis on
                fulfilling the needs of customers, partners and suppliers, and
                at the same time fostering long-term relationships with them.<br />
                The company’s generic evolution has been an inspiration and
                encouragement for the entire organization. By upholding its core
                values strongly and capitalizing on its strengths, Kahryman
                Trading will continue to pursue its vision and mission.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="about-us__footer __container">
      <img src="/img/about-us/02.png" alt="" />
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
      'aboutSmallTitle',
      'aboutBigTitle',
      'aboutContent',
      'aboutImagePath',
    ]),
  },
  methods: {
    ...mapActions('client', ['fetchAboutUs']),
  },
}
</script>
