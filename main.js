const navbarMobile = document.querySelector('.mobile');
const navbarItems = document.querySelector('.nav-items');
const navContact = document.querySelector('.nav-contact');

navbarMobile.addEventListener('click', () => {
    navbarItems.classList.toggle('active');
    navContact.classList.toggle('active');
});
