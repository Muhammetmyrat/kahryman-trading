<template>
  <div class="agency__statistic" ref="observe">
    <div class="agency__item">
      <div class="agency__item-img">
        <img src="/img/global_agencies/statistic-1.svg" alt="" />
      </div>
      <div class="agency__number">
        <h5
          class="counter"
          :data-target="statistics && statistics[0] && statistics[0].number"
        >
          +0
        </h5>
        <p>{{ statistics && statistics[0] && statistics[0].title }}</p>
      </div>
    </div>
    <div class="agency__item">
      <div class="agency__item-img">
        <img src="/img/global_agencies/statistic-2.svg" alt="" />
      </div>
      <div class="agency__number">
        <h5
          class="counter"
          :data-target="statistics && statistics[1] && statistics[1].number"
        >
          +0
        </h5>
        <p>{{ statistics && statistics[1] && statistics[1].title }}</p>
      </div>
    </div>
    <div class="agency__item">
      <div class="agency__item-img">
        <img src="/img/global_agencies/statistic-3.svg" alt="" />
      </div>
      <div class="agency__number">
        <h5
          class="counter"
          :data-target="statistics && statistics[2] && statistics[2].number"
        >
          +0
        </h5>
        <p>{{ statistics && statistics[2] && statistics[2].title }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    statistics: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      observer: null,
      timeout: null,
    }
  },
  mounted() {
    const options =
      {
        rootMargin: '0px',
        threshold: 1.0,
      } || {}
    this.observer = new IntersectionObserver(([entry]) => {
      if (entry && entry.isIntersecting) {
        this.updateCount()
      }
    }, options)

    this.observer.observe(this.$refs.observe)
  },
  destroyed() {
    this.observer.disconnect()
  },
  methods: {
    updateCount() {
      const counters = document.querySelectorAll('.counter')
      const speed = 200
      counters.forEach((counter) => {
        const update = () => {
          let target = +counter.getAttribute('data-target')
          let count = +counter.innerText
          let inc = target / speed
          if (count < target) {
            counter.innerText = '+' + Math.ceil(count + inc)
            setTimeout(update, 5)
          } else {
            counter.innerText = '+' + target
          }
        }
        counter.innerText = Number(0)
        update()
      })
    },
  },
}
</script>
