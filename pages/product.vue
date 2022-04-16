<template>
  <span>
    <slider></slider>
    <section class="product" :class="{ active: isActive }">
      <div class="product__pop-up">
        <div class="product__pop-upItem">
          <span class="product__pop-upClose" @click="closeReadMore"></span>
          <div class="product__pop-upImg">
            <img src="@/assets/client/img/product/1.png" alt="" />
          </div>
          <div class="product__pop-upContent">
            <div class="product__pop-upTitle">LUMP SULPHUR</div>
            <div class="product__pop-upText">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that It is a long established
                fact that a reader will be distracted by the readable content of
                a page when looking at its layout. The point of using Lorem
                Ipsum is that It is a long established fact that a reader will
                be distracted by the readable content of a page when looking at
                its layout. The point of using Lorem Ipsum is that It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that It is a long established fact that
                a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is
                that It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that It is a long established fact that
                a reader will be distracted by the readable content of a page
                when looking at its layout. The point of using Lorem Ipsum is
                that It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that The point of using Lorem Ipsum is
                that It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is that The point of
                using Lorem Ipsum is that It is a long established fact that a
                reader will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is that
                The point of using Lorem Ipsum is that It is a long established
                fact that a reader will be distracted by the readable content of
                a page when looking at its layout. The point of using Lorem
                Ipsum is that The point of using Lorem Ipsum is that It is a
                long established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is thatThe point of using Lorem Ipsum is
                that It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is thatThe point of using
                Lorem Ipsum is that It is a long established fact that a reader
                will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is thatThe
                point of using Lorem Ipsum is that It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is thatThe point of using Lorem Ipsum is that It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is thatThe point of using Lorem Ipsum is
                that It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is thatThe point of using
                Lorem Ipsum is that It is a long established fact that a reader
                will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is thatThe
                point of using Lorem Ipsum is that It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is thatThe point of using Lorem Ipsum is that It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is thatThe point of using Lorem Ipsum is
                that It is a long established fact that a reader will be
                distracted by the readable content of a page when looking at its
                layout. The point of using Lorem Ipsum is thatThe point of using
                Lorem Ipsum is that It is a long established fact that a reader
                will be distracted by the readable content of a page when
                looking at its layout. The point of using Lorem Ipsum is thatThe
                point of using Lorem Ipsum is that It is a long established fact
                that a reader will be distracted by the readable content of a
                page when looking at its layout. The point of using Lorem Ipsum
                is thatThe point of using Lorem Ipsum is that It is a long
                established fact that a reader will be distracted by the
                readable content of a page when looking at its layout. The point
                of using Lorem Ipsum is that
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="product__container __container">
        <div class="product__row">
          <div class="product__column">
            <div class="product__img">
              <img src="@/assets/client/img/product/1.png" alt="" />
            </div>
            <div class="product__content">
              <div class="product__content-title">LUMP SULPHUR</div>
              <div class="product__content-text">
                <p>
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                  The point of using Lorem Ipsum is that It is a long
                  established fact that a reader will be distracted by the
                  readable content of a page when be distracted by the readable
                  content of a page when looking at its layout. The point of
                  using Lorem Ipsum is that It is a long established fact that a
                  reader will be distracted by the readable content of a page
                  when looking at its layout. The point of using Lorem Ipsum is
                  that
                </p>
              </div>
            </div>
            <div class="product__btn" @click="readMore">Read More</div>
          </div>
        </div>
      </div>
    </section>
  </span>
</template>

<script>
import Slider from '@/components/app/Slider.vue'
export default {
  name: 'ProductPage',
  components: {
    Slider,
  },
  data() {
    return {
      isActive: false,
    }
  },
  methods: {
    readMore() {
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
