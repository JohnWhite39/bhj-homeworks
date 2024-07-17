const cookie = document.getElementById('cookie');
const clickCounter = document.getElementById('clicker__counter');

let width = 200;
let height = 200;

cookie.addEventListener('click', () => {
  clickCounter.textContent = parseInt(clickCounter.textContent) + 1;

  if (width === 200 && height === 200) {
    width = 250;
    height = 250;
  } else {
    width = 200;
    height = 200;
  }

  cookie.width = width;
  cookie.height = height;
});

