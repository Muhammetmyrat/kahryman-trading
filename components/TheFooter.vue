<template>
  <div class="footer">
    <div class="footer__container __container">
      <div class="footer__head">
        <logo-white></logo-white>
      </div>
      <the-footer-contact
        :footerText="footerText"
        :address="address"
        :phoneNumbers="phoneNumbers"
        :mails="mails"
      ></the-footer-contact>
      <the-footer-social></the-footer-social>
      <hr class="footer__line" />
      <div class="footer__copyright">
        {{ copyRight }}
      </div>
    </div>
  </div>
</template>

<script>
import LogoWhite from './app/logo/LogoWhite.vue'
import { mapGetters } from 'vuex'
export default {
  components: { LogoWhite },
  computed: {
    ...mapGetters('client', [
      'footerText',
      'copyRight',
      'address',
      'phoneNumbers',
      'mails',
    ]),
  },
}
</script>
