const button = document.getElementById('toggle-mode-button')
const body = document.querySelector('body')

button.addEventListener('click', () => {
  body.classList.toggle('light')
})