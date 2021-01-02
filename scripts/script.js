const buttonShare = document.querySelector('.share');
const popoverMenuShare = document.querySelector('.popover-menu-share');

buttonShare.addEventListener('click', function() {
  console.log('Click button share');
  popoverMenuShare.classList.toggle('active-share');
});