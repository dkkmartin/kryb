const arrowLeft = document.querySelector('.fa-chevron-left')
const arrowRight = document.querySelector('.fa-chevron-right')
const slide1 = document.querySelector('.slide_1')
const slide2 = document.querySelector('.slide_2')
const slide3 = document.querySelector('.slide_3')
const slide4 = document.querySelector('.slide_4')
const slide5 = document.querySelector('.slide_5')
const slide6 = document.querySelector('.slide_6')

arrowRight.addEventListener('click', () => {
  slide1.classList.toggle('slide--hide')
  slide2.classList.toggle('slide--hide')
  slide3.classList.toggle('slide--hide')
  slide4.classList.toggle('slide--hide')
  slide5.classList.toggle('slide--hide')
  slide6.classList.toggle('slide--hide')
})

arrowLeft.addEventListener('click', () => {
  slide1.classList.toggle('slide--hide')
  slide2.classList.toggle('slide--hide')
  slide3.classList.toggle('slide--hide')
  slide4.classList.toggle('slide--hide')
  slide5.classList.toggle('slide--hide')
  slide6.classList.toggle('slide--hide')
})