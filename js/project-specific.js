const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

// API Call
async function getProject(id) {
    try {
        document.querySelector('.loading').innerHTML = `
            <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_nezwixcz.json" background="transparent" speed="1" style="width: 500px; height: 500px;" loop autoplay></lottie-player>
        `;

        const response = await fetch('https://noroffcors.herokuapp.com/https://anotherdesigncompany.bjornsendesign.tech/wp-json/wp/v2/posts/' + id);
        const projectSpecific = await response.json();

        // Calling the function
        getProjectSpecific(projectSpecific);

        document.title = projectSpecific.title.rendered;
        document.querySelector('meta[name="description"]').setAttribute(
            'content',
            `${projectSpecific.title.rendered} is one of my projects in my portfolio. I hope you like it, contact me for more information.`
        );

    } catch (error) {
        document.querySelector('.alert').innerHTML = showAlert(
            'An error occured, please contact The Modern Apartment',
            'danger'
        );
        console.log(error);

    } finally {
        setTimeout(() => {
            document.querySelector('.alert').innerHTML.innerHTML = '';
        }, 3000);

        document.querySelector('.loading').innerHTML = ``;
    }
}

getProject(id)

// Content from Wordpress
const getProjectSpecific = ((element) => {
    document.querySelector('.content__project-specific').innerHTML += `
        <div class="hero__container--plain">    
            <div class="hero__heading">
                <h1>${element.title.rendered}</h1>
            </div>
        </div>
        <div class="content">${element.content.rendered}</div>
    `;
});
