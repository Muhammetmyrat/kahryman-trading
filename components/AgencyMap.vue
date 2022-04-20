<template>
  <div class="agency__map">
    <div class="agency__map-img">
      <img src="@/assets/client/img/global_agencies/map.svg" alt="" />
    </div>
    <div class="agency__map-hoverRectangle">
      <div class="agency__map-hover">
        <div class="agency__map-hoverImg">
          <img
            src="@/assets/client/img/global_agencies/map_hover_logo.svg"
            alt=""
          />
        </div>
        <div class="agency__map-hoverCountry">Melbourne, AUS</div>
        <div class="agency__map-hoverAdress">
          100 Smith Street Collingwood VIC 3066 AU
        </div>
      </div>
      <img
        src="@/assets/client/img/global_agencies/map_hover_rectangle.svg"
        alt=""
      />
    </div>
    <agency-statistics :statistics="agencyStatistics"></agency-statistics>
  </div>
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
