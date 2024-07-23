const dropdowns = document.querySelectorAll('.dropdown');

dropdowns.forEach(dropdown => {
  const list = dropdown.querySelector('.dropdown__list');
  const value = dropdown.querySelector('.dropdown__value');

  value.addEventListener('click', event => {
    list.classList.toggle('dropdown__list_active');

    event.preventDefault();
  });

  list.addEventListener('click', event => {
    if (event.target.closest('.dropdown__item')) {
      const newValue = event.target.closest('.dropdown__item').textContent;

      value.textContent = newValue;

      list.classList.remove('dropdown__list_active');

      event.preventDefault();
    }
  });
});
