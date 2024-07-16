const cookie = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');

cookie.addEventListener('click', () => {
  clickCounter.textContent = parseInt(clickCounter.textContent) + 1;

  cookie.classList.toggle('clicker__cookie--big');
});
