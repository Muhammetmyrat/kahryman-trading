var swiper = new Swiper('.facilities__animation', {
  slidesPerView: 6,
  slidesPerGroup: 6,
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  }
})

var swipermainpage = new Swiper('.swiper-mainpage', {
  direction: 'vertical',
  speed: 3000,
  parallax: true,
  autoplay: {
    reverseDirection: true,
    delay: 3000,
    disableOnInteraction: false
  },
  pagination: {
    el: '.swiper-mainpage__pagination',
    clickable: true,
    renderBullet: function (index, className) {
      let number
      if (index <= 9) {
        number = '<span class="' + className + '">' + '0' + (index + 1) + '</span>'
      } else {
        number = '<span class="' + className + '">' + (index + 1) + '</span>'
      }
      return number
    }
  },
  scrollbar: {
    el: '.swiper-mainpage__scrollbar',
    draggable: true
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true
  }
})

var className = 'active'
var scrollTrigger = 100

window.onscroll = function () {
  if (window.scrollY >= scrollTrigger || window.pageYOffset >= scrollTrigger) {
    document.querySelector('.header').classList.add(className)
  } else {
    document.querySelector('.header').classList.remove(className)
  }
}
