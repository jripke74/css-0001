const backdrop = document.querySelector('.backdrop');
const modal = document.querySelector('.modal');
const nodalNoButton = document.querySelector('.modal__action--negative');
const selectPlanButtons = document.querySelectorAll('.plan button');

for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}

function closeModal() {
  backdrop.style.display = 'none';
  modal.style.display = 'none';
}

backdrop.addEventListener('click', closeModal);

nodalNoButton.addEventListener('click', closeModal);
