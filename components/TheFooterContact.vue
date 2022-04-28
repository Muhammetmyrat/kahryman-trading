<template>
  <div class="footer__contact contact-footer">
    <p class="contact-footer__text">{{ footerText }}</p>
    <div class="contact-footer__items">
      <div class="contact-footer__item">
        <div class="contact-footer__item_icon">
          <img src="/img/footer/icons/gps.svg" />
        </div>
        <div class="contact-footer__item-textBox">
          <a
            href="#"
            @click.prevent
            class="contact-footer__item-text"
            v-for="item in address"
            :key="item.id"
          >
            {{ item.address }}
          </a>
        </div>
      </div>
      <div class="contact-footer__item">
        <div class="contact-footer__item_icon">
          <img src="/img/footer/icons/mail.svg" />
        </div>
        <div class="contact-footer__item-textBox">
          <a
            target="_blank"
            class="contact-footer__item-text"
            v-for="mail in mails"
            :key="mail.id"
            :href="calculateContact(mail.mail, 'mail')"
          >
            {{ mail.mail }}
          </a>
        </div>
      </div>
      <div class="contact-footer__item">
        <div class="contact-footer__item_icon">
          <img src="/img/footer/icons/phone.svg" />
        </div>
        <div class="contact-footer__item-textBox">
          <a
            target="_blank"
            class="contact-footer__item-text"
            v-for="phoneNumber in phoneNumbers"
            :key="phoneNumber.id"
            :href="calculateContact(phoneNumber.number, 'tel')"
          >
            {{ phoneNumber.number }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    footerText: {
      type: String,
      default: '',
    },
    address: {
      type: Array,
      default: () => [],
    },
    phoneNumbers: {
      type: Array,
      default: () => [],
    },
    mails: {
      type: Array,
      default: () => [],
    },
  },
  methods: {
    calculateContact(data, text) {
      if (text == 'tel') {
        return `tel:${data}`
      } else if (text == 'mail') {
        return `mailto:${data}`
      }
    },
  },
}
</script>
