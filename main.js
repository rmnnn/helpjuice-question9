const dropdownBtns = document.querySelectorAll('#dropdown-btn');
dropdownBtns.forEach((dropdownBtn) => {
  const dropdownMenu = dropdownBtn.nextElementSibling;
  dropdownBtn.addEventListener('click', function() {
    dropdownMenu.classList.toggle('show');
    dropdownBtn.classList.toggle('active');
  });
});
