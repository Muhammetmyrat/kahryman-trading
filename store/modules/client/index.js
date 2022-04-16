import actions from './actions'
import mutations from './mutations'
import getters from './getters'

const state = () => ({
  imgURL: 'http://10.192.1.52:3000/api',
  swiperOptions: {
    direction: 'vertical',
    speed: 3000,
    parallax: true,
    autoplay: {
      reverseDirection: true,
      delay: 3000,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-mainpage__pagination',
      clickable: true,
      renderBullet: function (index, className) {
        let number
        if (index <= 9) {
          number =
            '<span class="' + className + '">' + '0' + (index + 1) + '</span>'
        } else {
          number = '<span class="' + className + '">' + (index + 1) + '</span>'
        }
        return number
      },
    },
    scrollbar: {
      el: '.swiper-mainpage__scrollbar',
      draggable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true,
      pageUpDown: true,
    },
  },
})

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters,
}
