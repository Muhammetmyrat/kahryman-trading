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
              <div
                class="contact__item-address"
                v-for="item in contactAddress"
                :key="item && item.id"
              >
                {{ item && item.address }}
              </div>
            </div>
            <div class="contact__item">
              <div class="contact__item-img">
                <img src="/img/contact-us/mail.svg" alt="" />
              </div>
              <div
                class="contact__item-address"
                v-for="contactMail in contactMails"
                :key="contactMail && contactMail.id"
              >
                {{ contactMail && contactMail.mail }}
              </div>
            </div>
            <div class="contact__item">
              <div class="contact__item-img">
                <img src="/img/contact-us/phone.svg" alt="" />
              </div>
              <div
                class="contact__item-address"
                v-for="contactPhoneNumber in contactPhoneNumbers"
                :key="contactPhoneNumber && contactPhoneNumber.id"
              >
                {{ contactPhoneNumber && contactPhoneNumber.number }}
              </div>
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
                <input
                  type="text"
                  v-model="contact.name"
                  :placeholder="contactName"
                />
              </div>
              <div class="contact__input">
                <input
                  type="text"
                  required
                  v-model="contact.companyName"
                  :placeholder="contactCompanyName"
                />
              </div>
              <div class="contact__input">
                <input
                  type="text"
                  v-model="contact.mail"
                  :placeholder="contactMail"
                />
              </div>
              <div class="contact__input">
                <input
                  type="text"
                  v-model="contact.subject"
                  :placeholder="contactSubject"
                />
              </div>
            </div>
            <div class="contact__textarea">
              <textarea
                v-model="contact.message"
                :placeholder="contactMessage"
              ></textarea>
            </div>
            <div class="contact__btn" @click="sendContact">
              <input
                type="submit"
                @click.prevent
                :value="loading ? loadingText : buttonText"
              />
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
  data() {
    return {
      contact: {
        name: null,
        companyName: null,
        mail: null,
        subject: null,
        message: null,
      },
      loadingText: 'Loading...',
      loading: false,
      buttonText: 'SEND',
    }
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
      'contactAddress',
      'contactPhoneNumbers',
      'contactMails',
    ]),
  },
  methods: {
    ...mapActions('client', ['fetchContact']),
    async sendContact() {
      if (
        this.contact.name !== null &&
        this.contact.contactName !== null &&
        this.contact.mail !== null &&
        this.contact.subject !== null &&
        this.contact.message !== null
      ) {
        this.loading = true
        try {
          const res = await this.$axios.$post(`/contact-send`, {
            name: this.contact.name,
            companyName: this.contact.companyName,
            email: this.contact.mail,
            subject: this.contact.subject,
            message: this.contact.message,
          })
          const { status } = res
          if (status) {
            this.clearInput()
            this.loading = false
            this.buttonText = 'SENDED SUCCESSFULLY !'
            setTimeout(() => {
              this.buttonText = 'SEND'
            }, 3000)
          }
        } catch (e) {
          console.log(e)
          if (e) {
            this.clearInput()
            this.loading = false
            this.buttonText = 'THERE WAS ERROR OR INTERNET ERROR !'
            setTimeout(() => {
              this.buttonText = 'SEND'
            }, 3000)
          }
        }
      }
    },
    clearInput() {
      this.contact.name = null
      this.contact.companyName = null
      this.contact.mail = null
      this.contact.subject = null
      this.contact.message = null
    },
  },
}
</script>
