var swiper = new Swiper(".facilities__animation", {
  slidesPerView: 3,
  speed: 1000,
  loop: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  autoplay: {
    delay: 2000,
    reverseDirection:true,
    disableOnInteraction: false,
  },
  breakpoints: {
    600: {
      slidesPerView: 4,
    },
    900: {
      slidesPerView: 5,
    },
    1200: {
      slidesPerView: 6,
    },
  },
});

var swipermainpage = new Swiper('.swiper-mainpage', {
  direction: 'vertical',
  speed: 3000,
  parallax: true,
  autoplay: {
    // reverseDirection: true,
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
//menu  burger
var BurgerBtn = document.querySelector('.menu-header__burger')
var menuBody = document.querySelector('.menu-header__nav')
var headerLogo = document.querySelector('.header__logo')
var headerLogo2 = document.querySelector('.header__logo2')
var x = window.matchMedia('(max-width: 445px)')
BurgerBtn.addEventListener('click', () => {
  BurgerBtn.classList.toggle('active')
  menuBody.classList.toggle('active')
  if (x.matches) {
    headerLogo2.classList.toggle('active')
    headerLogo.classList.toggle('active')
  }
})
//=====================================

var readMoreOpenBtn = document.querySelector('.facilities__buttonOpen')
var readMoreCloseBtn = document.querySelector('.facilities__buttonClose')
var readMore = document.querySelector('.facilities__readMore')
if (readMoreOpenBtn != null) {
  readMoreOpenBtn.addEventListener('click', () => {
    readMore.classList.add('active')
    readMoreOpenBtn.classList.add('active')
    readMoreCloseBtn.classList.add('active')
  })
}
if (readMoreCloseBtn != null) {
  readMoreCloseBtn.addEventListener('click', () => {
    readMore.classList.remove('active')
    readMoreOpenBtn.classList.remove('active')
    readMoreCloseBtn.classList.remove('active')
  })
}

//===========================================

var player = new Playerjs({ id: 'player', file: './video/Glass Animals - Heat Waves (Official Video).mp4' })
