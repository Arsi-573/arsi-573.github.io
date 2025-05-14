// Mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
  const menuButton = document.querySelector('.mobile-menu-button');
  const mobileNav = document.querySelector('.mobile-nav');
  
  menuButton.addEventListener('click', function() {
    mobileNav.classList.toggle('active');
  });
});