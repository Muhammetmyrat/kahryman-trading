<template>
  <section class="agency">
    <div class="agency__container __container">
      <div class="agency__wrapper">
        <h1 class="agency__title">OUR GLOBAL bUSINESS COORDINATES</h1>
        <div class="agency__text">
          <p>
            Kahryman Trading has established long-standing partnerships with a
            number of global fertilizer and petrochemical companies in Middle
            East, China, India, Turkey, Africa and CIS countries which have
            resulted in a series of mutually beneficial investments and
            initiatives.
          </p>
        </div>
        <div class="agency__map">
          <div class="agency__map-img">
            <img src="/img/global_agencies/map.svg" alt="" />
            <div class="agency__hover-rect">
              <img src="/img/global_agencies/map_hover_rectangle.svg" alt="" />
            </div>
            <div class="agency__hover-rect">
              <img src="/img/global_agencies/map_hover_rectangle.svg" alt="" />
            </div>
            <div class="agency__hover-rect">
              <img src="/img/global_agencies/map_hover_rectangle.svg" alt="" />
            </div>
            <div class="agency__hover-rect">
              <img src="/img/global_agencies/map_hover_rectangle.svg" alt="" />
            </div>
            <div class="agency__hover-rect">
              <img src="/img/global_agencies/map_hover_rectangle.svg" alt="" />
            </div>
            <div class="agency__hover-rect">
              <img src="/img/global_agencies/map_hover_rectangle.svg" alt="" />
            </div>
            <div class="agency__hover-rect">
              <img src="/img/global_agencies/map_hover_rectangle.svg" alt="" />
            </div>
            <div class="agency__hover-rect">
              <img src="/img/global_agencies/map_hover_rectangle.svg" alt="" />
            </div>
            <div class="agency__hover-rect">
              <img src="/img/global_agencies/map_hover_rectangle.svg" alt="" />
            </div>
          </div>
        </div>
        <agency-statistics :statistics="agencyStatistics"></agency-statistics>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    agencyStatistics: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
