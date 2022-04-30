<template>
  <section class="product" :class="{ active: isActive }">
    <div class="product__pop-up">
      <div class="product__pop-upItem">
        <span @click="closeReadMore" class="product__pop-upClose"></span>
        <div class="product__pop-upImg">
          <img :src="popup.img" alt="" />
        </div>
        <div class="product__pop-upContent">
          <div class="product__pop-upTitle">{{ popup.title }}</div>
          <div class="product__content-table" v-html="popup.content"></div>
        </div>
      </div>
    </div>
    <div class="product__container __container">
      <div class="product__row">
        <div class="product__column">
          <div class="product__img">
            <img :src="lumpSulfur.img" alt="" />
          </div>
          <div class="product__content">
            <div class="product__content-title">{{ lumpSulfur.title }}</div>
            <div
              class="product__content-table"
              v-html="lumpSulfur.miniTable"
            ></div>
          </div>
          <div class="product__footer">
            <div class="product__date"></div>
            <div @click="readMore(lumpSulfur)" class="product__btn">
              Read More
            </div>
          </div>
        </div>
        <div class="product__column">
          <div class="product__img">
            <img :src="urean46.img" alt="" />
          </div>
          <div class="product__content">
            <div class="product__content-title">{{ urean46.title }}</div>
            <div
              class="product__content-table"
              v-html="urean46.miniTable"
            ></div>
          </div>
          <div class="product__footer">
            <div class="product__date"></div>
            <div @click="readMore(urean46)" class="product__btn">Read More</div>
          </div>
        </div>
        <div class="product__column">
          <div class="product__img">
            <img :src="bitumen.img" alt="" />
          </div>
          <div class="product__content">
            <div class="product__content-title">{{ bitumen.title }}</div>
            <div
              class="product__content-table"
              v-html="bitumen.miniTable"
            ></div>
          </div>
          <div class="product__footer">
            <div class="product__date"></div>
            <div @click="readMore(bitumen)" class="product__btn">Read More</div>
          </div>
        </div>
        <div class="product__column">
          <div class="product__img">
            <img :src="petroleumCoke.img" alt="" />
          </div>
          <div class="product__content">
            <div class="product__content-title">
              {{ petroleumCoke.title }}
            </div>
            <div
              class="product__content-table"
              v-html="petroleumCoke.miniTable"
            ></div>
          </div>
          <div class="product__footer">
            <div class="product__date"></div>
            <div @click="readMore(petroleumCoke)" class="product__btn">
              Read More
            </div>
          </div>
        </div>
        <div class="product__column">
          <div class="product__img">
            <img :src="potassiumChloride.img" alt="" />
          </div>
          <div class="product__content">
            <div class="product__content-title">
              {{ potassiumChloride.title }}
            </div>
            <div
              class="product__content-table"
              v-html="potassiumChloride.miniTable"
            ></div>
          </div>
          <div class="product__footer">
            <div class="product__date"></div>
            <div @click="readMore(potassiumChloride)" class="product__btn">
              Read More
            </div>
          </div>
        </div>
        <div class="product__column">
          <div class="product__img">
            <img :src="granularSulphur.img" alt="" />
          </div>
          <div class="product__content">
            <div class="product__content-title">
              {{ granularSulphur.title }}
            </div>
            <div
              class="product__content-table"
              v-html="granularSulphur.miniTable"
            ></div>
          </div>
          <div class="product__footer">
            <div class="product__date"></div>
            <div @click="readMore(granularSulphur)" class="product__btn">
              Read More
            </div>
          </div>
        </div>
        <div class="product__column">
          <div class="product__img">
            <img :src="hydrocarbonGases.img" alt="" />
          </div>
          <div class="product__content">
            <div class="product__content-title">
              {{ hydrocarbonGases.title }}
            </div>
            <div
              class="product__content-table"
              v-html="hydrocarbonGases.miniTable"
            ></div>
          </div>
          <div class="product__footer">
            <div class="product__date"></div>
            <div @click="readMore(hydrocarbonGases)" class="product__btn">
              Read More
            </div>
          </div>
        </div>
        <div class="product__column">
          <div class="product__img">
            <img :src="polypropylene.img" alt="" />
          </div>
          <div class="product__content">
            <div class="product__content-title">
              {{ polypropylene.title }}
            </div>
            <div
              class="product__content-table"
              v-html="polypropylene.miniTable"
            ></div>
          </div>
          <div class="product__footer">
            <div class="product__date"></div>
            <div @click="readMore(polypropylene)" class="product__btn">
              Read More
            </div>
          </div>
        </div>
        <div class="product__column">
          <div class="product__img">
            <img :src="bitumen6070.img" alt="" />
          </div>
          <div class="product__content">
            <div class="product__content-title">{{ bitumen6070.title }}</div>
            <div
              class="product__content-table"
              v-html="bitumen6070.miniTable"
            ></div>
          </div>
          <div class="product__footer">
            <div class="product__date"></div>
            <div @click="readMore(bitumen6070)" class="product__btn">
              Read More
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapGetters } from 'vuex'
import lumpSulfur from '@/static/product-table/lumpSulfur'
import urean46 from '@/static/product-table/urean46'
import bitumen from '@/static/product-table/bitumen'
import petroleumCoke from '@/static/product-table/petroleumCoke'
import potassiumChloride from '@/static/product-table/potassiumChloride'
import granularSulphur from '@/static/product-table/granularSulphur'
import hydrocarbonGases from '@/static/product-table/hydrocarbonGases'
import polypropylene from '@/static/product-table/polypropylene'
import bitumen6070 from '@/static/product-table/bitumen6070'

export default {
  name: 'ProductPage',
  head() {
    const i18nHead = this.$nuxtI18nHead({ addSeoAttributes: true })
    return {
      title: this.$t('product'),
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
          content: this.$t('product'),
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
          content: this.$t('product'),
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
  data() {
    return {
      isActive: false,
      lumpSulfur: lumpSulfur,
      urean46: urean46,
      bitumen: bitumen,
      petroleumCoke: petroleumCoke,
      potassiumChloride: potassiumChloride,
      granularSulphur: granularSulphur,
      hydrocarbonGases: hydrocarbonGases,
      polypropylene: polypropylene,
      bitumen6070: bitumen6070,
      popup: {},
    }
  },
  computed: {
    ...mapGetters('client', ['imgURL', 'headerSliders']),
  },
  methods: {
    readMore(popupDatas) {
      this.popup = popupDatas
      this.isActive = true
      document.body.classList.add('_lock')
    },
    closeReadMore() {
      this.isActive = false
      document.body.classList.remove('_lock')
    },
  },
}
</script>
