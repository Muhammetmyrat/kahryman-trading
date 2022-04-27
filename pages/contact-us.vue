<template>
  <span>
    <slider></slider>
    <section class="contact">
      <div class="contact__conrainer __container">
        <div class="contact__wrapper">
          <div class="contact__title">Contact us</div>
          <div class="contact__box">
            <div class="contact__address">
              <div class="contact__address-title">Our contact address</div>
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
                <div class="contact__item-address">
                  info@kahrymantrading.com
                </div>
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
                  <input type="text" placeholder="Name" />
                </div>
                <div class="contact__input">
                  <input type="text" placeholder="Company name" />
                </div>
                <div class="contact__input">
                  <input type="text" placeholder="E-mail" />
                </div>
                <div class="contact__input">
                  <input type="text" placeholder="Subject" />
                </div>
              </div>
              <div class="contact__textarea">
                <textarea placeholder="Message"></textarea>
              </div>
              <div class="contact__btn">
                <input type="submit" value="SEND" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </span>
</template>

<script>
import Slider from '@/components/app/Slider.vue'
export default {
  name: 'ContactUsPage',
  components: {
    Slider,
  },
}
</script>
