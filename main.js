const navbarMobile = document.querySelector('.mobile');
const navbarItems = document.querySelector('.nav-items');

navbarMobile.addEventListener('click', () => {
    navbarItems.classList.toggle('active');
});
