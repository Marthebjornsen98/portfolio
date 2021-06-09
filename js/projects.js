const postsAPI = 'https://noroffcors.herokuapp.com/https://anotherdesigncompany.bjornsendesign.tech/wp-json/wp/v2/posts';
// const filterList = document.querySelector('#filter__btn');
// const filter = [];

// API Call
const getposts = async (url) => {
    try {
        document.querySelector('.loading').innerHTML = `
        <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_nezwixcz.json" background="transparent" speed="1" style="width: 500px; height: 500px;" loop autoplay></lottie-player>
        `;

        const response = await fetch(url);
        const posts = await response.json();
        console.log(posts)

        const filterIcon = document.querySelector('#filter-menu');
        const filterList = document.querySelector('.project__filter');

        // Filter icon
        filterIcon.addEventListener('click', () => {
            filterList.classList.toggle('show');
        });

        posts.forEach(element => {
            document.querySelector('.work__container--list').innerHTML += `
                    <div class="work__container--item">
                        <a href="project-specific.html?id=${element.id}">
                            <div class="work__img background-img${element.id}"></div>
                        </a>
                        <h3>
                            <a class="work__link" href="project-specific.html?id=${element.id}">${element.title.rendered}</a>
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

        document.querySelector('.loading').innerHTML = ``;
    };
};

getposts(postsAPI);

const getMoreBtn = document.querySelector('.get-more__btn');

getMoreBtn.onclick = function () {
    getposts(postsAPI + `?page=2`);
    getMoreBtn.style.display = 'none';
};

// filterBtn.onkeyup = (e) => {
//     search = e.target.value.trim().toLowerCase();
//     const sResultBlogs = fullBlogs.filter((blog) => {
//         return blog.title.rendered.toLowerCase().includes(search);
//     });
//     getBlogCards(sResultBlogs);
// };

// let tag = 21;
// const filterBtn = document.querySelector('#filter__btn');

// filterBtn.onclick = () => {
//     tag = 22;
//     console.log(tag);
// }

// console.log(tag);