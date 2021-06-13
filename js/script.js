const projectAPI = 'https://noroffcors.herokuapp.com/https://anotherdesigncompany.bjornsendesign.tech/wp-json/wp/v2/posts';

// API Call
const getprojects = async (url) => {
    try {
        document.querySelector('.loading').innerHTML = `
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_nezwixcz.json" background="transparent" speed="1" style="width: 500px; height: 500px;" loop autoplay></lottie-player>
        `;

        const response = await fetch(url);
        const projects = await response.json();
        console.log(projects);

        for (let i = 0; i < projects.length; i++) {
            if (i === 3) {
                break;
            }

            document.querySelector('.work__container--list').innerHTML += `
                <div class="work__container--item">
                    <a href="project-specific.html?id=${projects[i].id}">
                        <div class="work__img background-img${projects[i].id}"></div>
                    </a>
                    <h3 class="work__link"><a href="project-specific.html?id=${projects[i].id}">${projects[i].title.rendered}</a></h3>
                    <p class="body-text">${projects[i].excerpt.rendered}</p>
                </div>
            `;

            document.querySelector(`.background-img${projects[i].id}`).style.backgroundImage = `url(${projects[i].better_featured_image.media_details.sizes.medium_large.source_url})`;
        }

    } catch (error) {
        document.querySelector('.alert').innerHTML = showAlert(
            'An error occured, please contact Just Another Design Company',
            'danger'
        );

    } finally {
        setTimeout(function () {
            document.querySelector('.alert').innerHTML = ``;
        }, 3000);

        document.querySelector('.loading').innerHTML = ``;
    };
};

getprojects(projectAPI);

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