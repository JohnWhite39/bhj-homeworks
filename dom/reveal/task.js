document.addEventListener('DOMContentLoaded', function() {
  function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }

  function revealElements() {
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(element => {
      if (isElementInViewport(element)) {
        element.classList.add('reveal_active');
      }
    });
  }

  window.addEventListener('scroll', revealElements);
  window.addEventListener('resize', revealElements);
  revealElements();
});
