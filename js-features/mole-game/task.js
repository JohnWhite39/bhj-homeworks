const holes = document.querySelectorAll('.hole');
const deadCounter = document.getElementById('dead');
const lostCounter = document.getElementById('lost');
const status = document.getElementById('status');

let deadCount = 0;
let lostCount = 0;

function randomHole(holes) {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];

  if (hole.classList.contains('hole_has-mole')) {
    return randomHole(holes);
  }

  hole.classList.add('hole_has-mole');

  setTimeout(() => {
    hole.classList.remove('hole_has-mole');

    if (lostCount < 5) {
      randomHole(holes);
    }
  }, 1000);
}

holes.forEach((hole) => {
  hole.addEventListener('click', (e) => {
    if (e.target.classList.contains('hole_has-mole')) {
      deadCount++;
      deadCounter.textContent = deadCount;

      if (deadCount === 10) {
        status.textContent = 'Вы победили!';
        deadCount = 0;
        lostCount = 0;
        deadCounter.textContent = deadCount;
        lostCounter.textContent = lostCount;
      }
    } else {
      lostCount++;
      lostCounter.textContent = lostCount;

      if (lostCount === 5) {
        status.textContent = 'Вы проиграли!';
        deadCount = 0;
        lostCount = 0;
        deadCounter.textContent = deadCount;
        lostCounter.textContent = lostCount;
      }
    }
  });
});

randomHole(holes);
