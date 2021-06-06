const postsAPI = 'https://noroffcors.herokuapp.com/https://anotherdesigncompany.bjornsendesign.tech/wp-json/wp/v2/posts';

// API Call
const getposts = async (url) => {
    try {
        // document.querySelector('.loading').innerHTML = `
        // <lottie-player src="https://assets4.lottiefiles.com/private_files/lf30_dchle8f3.json"  background="transparent"  speed="1"  style="width: 500px; height: 400px;"  loop  autoplay></lottie-player>
        // `;

        const response = await fetch(url);
        const posts = await response.json();
        console.log(posts);

        posts.forEach(element => {
            document.querySelector('.work__container--list').innerHTML += `
                <div class="work__container--item">
                    <a href="project-specific.html?id=${element.id}">
                        <div class="work__img background-img${element.id}"></div>
                    </a>
                    <h3>
                        <a class="work__link" href="project-specific.html">${element.title.rendered}</a>
                    </h3>
                    <p class="body-text">${element.excerpt.rendered}</p>
                </div>
            `;

            document.querySelector(`.background-img${element.id}`).style.backgroundImage = `url(${element.better_featured_image.media_details.sizes.medium_large.source_url})`;
        });

    } catch (error) {
        // document.querySelector('.alert').innerHTML = showAlert(
        //     'An error occured, please contact The Modern Apartment',
        //     'danger'
        // );

        console.log(error);

    } finally {
        // setTimeout(function () {
        //     document.querySelector('.alert').innerHTML = ``;
        // }, 3000);

        // document.querySelector('.loading').innerHTML = ``;
    };
};

getposts(postsAPI);

const getMoreBtn = document.querySelector('.get-more__btn');

getMoreBtn.onclick = function () {
    getposts(postsAPI + `?page=2`);
    getMoreBtn.style.display = 'none';
};
