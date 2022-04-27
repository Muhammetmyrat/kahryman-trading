<template>
  <div class="footer__contact contact-footer">
    <p class="contact-footer__text">
      {{ footerText }}
    </p>
    <div class="contact-footer__items">
      <div class="contact-footer__item">
        <div class="contact-footer__item_icon">
          <img src="/img/footer/icons/gps.svg" />
        </div>
        <p
          class="contact-footer__item_text"
          v-for="item in address"
          :key="item.id"
        >
          {{ item.address }}
        </p>
      </div>
      <div class="contact-footer__item">
        <div class="contact-footer__item_icon">
          <img src="/img/footer/icons/mail.svg" />
        </div>
        <p
          class="contact-footer__item_text"
          v-for="mail in mails"
          :key="mail.id"
        >
          {{ mail.mail }}
        </p>
      </div>
      <div class="contact-footer__item">
        <div class="contact-footer__item_icon">
          <img src="/img/footer/icons/phone.svg" />
        </div>
        <p
          class="contact-footer__item_text"
          v-for="phoneNumber in phoneNumbers"
          :key="phoneNumber.id"
        >
          {{ phoneNumber.number }}
        </p>
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
}
</script>
