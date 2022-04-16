<template>
  <span>
    <slider></slider>
    <div class="about-us">
      <div class="about-us__container __container">
        <div class="about-us__body">
          <div class="about-us__left_mini">
            <div class="about-us__img">
              <img src="@/assets/client/img/about-us/01.png" />
            </div>
          </div>
          <div class="about-us__right_mini">
            <div class="about-us__text-box text-box-about-us">
              <div class="text-box-about-us__subtitle">who we are</div>
              <h1 class="text-box-about-us__title">About us</h1>
              <p class="text-box-about-us__text">
                Kahraman trading is one of the leading global organization
                engaged in source and supply of all types of fertilizers and
                chemicals with our own freight transportation sector. Our
                company has positioned itself to respond positively to any
                demand in the market based on our ability to call upon our
                network of worldwide contact to provide goods and services.
                Kahraman Trading now stands for a progressive brand that is
                synonymous with quality dealing in sulfur, urea 46, petroleum
                coke, potassium chloride, coals and etc. Our strategy is to
                fulfill the requirements of our various clients and
                Organizations by discussing all opportunities transparently.
                Therefore, our team strives for perfection is an on-going and
                high priority target. To achieve this target, our company
                adheres to the international code of conduct & follows them to
                the last detail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </span>
</template>

<script>
import Slider from '@/components/app/Slider.vue'
export default {
  name: 'AboutPage',
  components: {
    Slider,
  },
}
</script>
