document.addEventListener('DOMContentLoaded', () => {
  const book = document.getElementById('book');

  const handleFontSizeChange = (event) => {
    event.preventDefault();
    const target = event.target;
    const size = target.dataset.size;

    document.querySelectorAll('.font-size').forEach(item => {
      item.classList.remove('font-size_active');
    });

    target.classList.add('font-size_active');

    book.classList.remove('book_fs-big', 'book_fs-small');

    if (size === 'big') {
      book.classList.add('book_fs-big');
    } else if (size === 'small') {
      book.classList.add('book_fs-small');
    }
  };

  document.querySelectorAll('.font-size').forEach(item => {
    item.addEventListener('click', handleFontSizeChange);
  });
});
