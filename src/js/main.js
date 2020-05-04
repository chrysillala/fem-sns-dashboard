function toggleTheme() {
  if(!toggleInput.checked) {
    toggleInput.setAttribute('checked', 'checked')
    document.body.classList.add('dark-mode')
  } else {
    toggleInput.removeAttribute('checked')
    document.body.classList.remove('dark-mode')
  }

}

const toggleInput = document.querySelector('#js-toggle-input')
const toggleButton = document.querySelector('#js-toggle-switch')
toggleButton.addEventListener('click', toggleTheme)