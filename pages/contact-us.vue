<template>
  <section class="contact">
    <div class="contact__conrainer __container">
      <div class="contact__wrapper">
        <div class="contact__title">{{ contactTitle }}</div>
        <div class="contact__box">
          <div class="contact__address">
            <div class="contact__address-title">{{ contactTitleAddress }}</div>
            <div class="contact__item">
              <div class="contact__item-img">
                <img src="/img/contact-us/loaction.svg" alt="" />
              </div>
              <div class="contact__item-address">
                Al Marar Building 196, Flat no. 110, Al Marar Dubai UAE
              </div>
            </div>
            <div class="contact__item">
              <div class="contact__item-img">
                <img src="/img/contact-us/mail.svg" alt="" />
              </div>
              <div class="contact__item-address">info@kahrymantrading.com</div>
            </div>
            <div class="contact__item">
              <div class="contact__item-img">
                <img src="/img/contact-us/phone.svg" alt="" />
              </div>
              <div class="contact__item-address">+971 58 128 2568</div>
            </div>
            <div class="contact__social">
              <a href="" class="contact__social-item"
                ><img src="/img/footer/social/facebook.svg" alt=""
              /></a>
              <a href="" class="contact__social-item"
                ><img src="/img/footer/social/instagram.svg" alt=""
              /></a>
              <a href="" class="contact__social-item"
                ><img src="/img/contact-us/linked-in.png" alt=""
              /></a>
            </div>
          </div>
          <form class="contact__form">
            <div class="contact__grid">
              <div class="contact__input">
                <input type="text" :placeholder="contactName" />
              </div>
              <div class="contact__input">
                <input type="text" :placeholder="contactCompanyName" />
              </div>
              <div class="contact__input">
                <input type="text" :placeholder="contactMail" />
              </div>
              <div class="contact__input">
                <input type="text" :placeholder="contactSubject" />
              </div>
            </div>
            <div class="contact__textarea">
              <textarea :placeholder="contactMessage"></textarea>
            </div>
            <div class="contact__btn">
              <input type="submit" :value="contactButtonText" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'ContactPage',
  watch: {
    '$i18n.locale': async function () {
      await this.fetchContact({
        url: `${this.$i18n.locale}/contact`,
        $nuxt: this.$nuxt,
      })
    },
  },
  async fetch() {
    await this.fetchContact({
      url: `${this.$i18n.locale}/contact`,
      $nuxt: this.$nuxt,
    })
  },
  computed: {
    ...mapGetters('client', [
      'imgURL',
      'contactTitle',
      'contactTitleAddress',
      'contactName',
      'contactCompanyName',
      'contactMail',
      'contactSubject',
      'contactMessage',
      'contactButtonText',
    ]),
  },
  methods: {
    ...mapActions('client', ['fetchContact']),
  },
}
</script>
