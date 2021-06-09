const header = document.querySelector('.header__container');
const navList = document.querySelector('.nav__list');
const navItem = document.querySelectorAll('.nav__item');
const hamburgerMenu = document.querySelector('#hamburger-menu');

// Hamburger menu
hamburgerMenu.addEventListener('click', () => {
    navList.classList.toggle('hide');
    header.classList.toggle('background');
    header.classList.toggle('height');
});

// Making the nav item bold if clicked on
for (let i = 0; i < navItem.length; i++) {
    if (navItem[i].href === location.href) {
        navItem[i].className = 'bold';
    };
};