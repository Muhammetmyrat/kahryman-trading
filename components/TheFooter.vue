<template>
  <div class="footer">
    <div class="footer__container __container">
      <div class="footer__head">
        <logo-white></logo-white>
      </div>
      <the-footer-contact></the-footer-contact>
      <the-footer-social></the-footer-social>
      <hr class="footer__line" />
      <div class="footer__copyright">
        Copyright © {{ new Date().getFullYear() }}. LogoIpsum. All rights
        reserved.
      </div>
    </div>
  </div>
</template>

<script>
import LogoWhite from './app/logo/LogoWhite.vue'
export default {
  components: { LogoWhite },
}
</script>
