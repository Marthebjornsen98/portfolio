const header = document.querySelector('header');
const navList = document.querySelector('.nav__list');
const navItem = document.querySelectorAll('.nav__item');
const hamburgerMenu = document.querySelector('#hamburger-menu');

// Hamburger menu
hamburgerMenu.addEventListener('click', () => {
    navList.classList.toggle('show');
    // header.classList.toggle('background');
});

// Making the nav item bold if clicked on
for (let i = 0; i < navItem.length; i++) {
    if (navItem[i].href === location.href) {
        navItem[i].className = 'bold';
    };
};

// Changing background-color when you scroll past the hero banner
window.onscroll = function () {
    if (window.scrollY > 800) {
        header.style.backgroundColor = 'var(--white)';

    } else {
        header.style.backgroundColor = 'var(--transparant)';
    };
};