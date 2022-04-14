var productBtn = document.querySelectorAll('.product__btn')
var product = document.querySelector('.product')
var close = document.querySelectorAll('.product__pop-upClose')
var bodyLock = document.querySelector('body')

productBtn.forEach((element) => {
  element.addEventListener('click', function open() {
    product.classList.add('active')
    bodyLock.classList.add('_lock')
  })
})

// close.addEventListener('click', function close() {
//   product.classList.remove('active')
// })
