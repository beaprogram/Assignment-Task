document.addEventListener('DOMContentLoaded', function () {
    const mobileMenuButton = document.querySelector('.mobile-menu-button');
    const navMenu = document.querySelector('nav ul');

    mobileMenuButton.addEventListener('click', function () {
        navMenu.classList.toggle('visible');
    });
});
