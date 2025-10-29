const menuButtom = document.getElementById('mobile-menu-button');
const mobileMenu = document.getElementById('mobile-menu');

menuButtom.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
});