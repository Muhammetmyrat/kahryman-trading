<template>
  <section class="agency">
    <div class="agency__container __container">
      <div class="agency__wrapper">
        <h1 class="agency__title">{{ agenciesTitle }}</h1>
        <div class="agency__text">
          <p>
            {{ agenciesText }}
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
    agenciesTitle: {
      type: String,
      default: '',
    },
    agenciesText: {
      type: String,
      default: '',
    },
    agencyStatistics: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
