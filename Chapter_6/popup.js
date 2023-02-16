const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const close = document.querySelector('.popup-close')
button.addEventListener('click', () => {
  popup.style.top = '0'
})
close.addEventListener('click', () => {
  popup.style.top = '-300%'
})
popup.addEventListener('click', () => {
  popup.style.top = '-300%'
})