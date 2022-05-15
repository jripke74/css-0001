const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const nodalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}

backdrop.addEventListener('click', function() {
  mobileNav.style.display = 'none';
  closeModal();
});

function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}

backdrop.addEventListener('click', closeModal);

nodalNoButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', function() {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
});
