const button = document.querySelector('button')
const popup = document.querySelector('.popup-wrapper')
const popupclose = document.querySelector('.popup-close')
button.addEventListener('click', () => {
  popup.style.top = '0'
})
popupclose.addEventListener('click', () => {
  popup.style.top = '-300%'
})