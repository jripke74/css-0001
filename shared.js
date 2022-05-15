const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const nodalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');
const toggleButton = document.querySelector('.toggle-button');
const mobileNav = document.querySelector('.mobile-nav');

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    // modal.style.display = 'block';
    // backdrop.style.display = 'block';
    modal.classList.add('open');
    backdrop.classList.add('open');
  });
}

backdrop.addEventListener('click', function() {
  // mobileNav.style.display = 'none';
  mobileNav.classList.remove('open');
  closeModal();
});

function closeModal() {
  // backdrop.style.display = 'none';
  // modal.style.display = 'none';
  modal.classList.remove('open');
  backdrop.classList.remove('open');
}

backdrop.addEventListener('click', closeModal);

nodalNoButton.addEventListener('click', closeModal);

toggleButton.addEventListener('click', function() {
  // mobileNav.style.display = 'block';
  // backdrop.style.display = 'block';
  mobileNav.classList.add('open');
  backdrop.classList.add('open');
});
