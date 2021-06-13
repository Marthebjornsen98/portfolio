const postsAPI = 'https://noroffcors.herokuapp.com/https://anotherdesigncompany.bjornsendesign.tech/wp-json/wp/v2/posts';

// API Call
const getposts = async (url) => {
    try {
        document.querySelector('.loading').innerHTML = `
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_nezwixcz.json" background="transparent" speed="1" style="width: 500px; height: 500px;" loop autoplay></lottie-player>
        `;

        const response = await fetch(url);
        const posts = await response.json();
        console.log(posts)

        for (let i = 0; i < posts.length; i++) {
            document.querySelector('.work__container--list').innerHTML += `
                <div class="work__container--item">
                    <a href="project-specific.html?id=${posts[i].id}">
                        <div class="work__img background-img${posts[i].id}"></div>
                    </a>
                    <a href="project-specific.html?id=${posts[i].id}">
                        <h3 class="work__link">${posts[i].title.rendered}</h3>
                    </a>
                    <p class="body-text">${posts[i].excerpt.rendered}</p>
                </div>
            `;

            document.querySelector(`.background-img${posts[i].id}`).style.backgroundImage = `url(${posts[i].better_featured_image.media_details.sizes.medium_large.source_url})`;

            if (i === 2) {
                break;
            }
        }

    } catch (error) {
        document.querySelector('.alert').innerHTML = showAlert(
            'An error occured, please contact The Modern Apartment',
            'danger'
        );

        console.log(error);

    } finally {
        setTimeout(function () {
            document.querySelector('.alert').innerHTML = ``;
        }, 3000);

        document.querySelector('.loading').innerHTML = ``;
    };
};

getposts(postsAPI);

function slider() {
    $('.responsive').slick({
        infinite: true,
        dots: true,
        arrows: false,
        speed: 300,
        slidesToShow: 7,
        slidesToScroll: 7,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            },
            {
                breakpoint: 501,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 321,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    });
};

slider()