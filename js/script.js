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

$(function () {
    $('.responsive').slick({
        infinite: true,
        dots: true,
        arrows: true,
        speed: 300,
        slidesToShow: 4,
        slidesToScroll: 4,
        responsive: [
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
});

slider()

// Changing background-color when you scroll past the hero banner
// window.onscroll = function () {
//     if (window.scrollY > 800) {
//         navList.style.backgroundColor = 'var(--white)';

//     } else {
//         navList.style.backgroundColor = 'var(--transparant)';
//     };
// };