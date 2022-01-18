const projectAPI =
  "https://noroffcors.herokuapp.com/https://anotherdesigncompany.bjornsendesign.tech/wp-json/wp/v2/posts";

// API Call
const getprojects = async (url) => {
  try {
    // document.querySelector('.loading').innerHTML = `
    // <lottie-player src="https://assets7.lottiefiles.com/packages/lf20_nezwixcz.json" background="transparent" speed="1" style="width: 500px; height: 500px;" loop autoplay></lottie-player>
    // `;

    const response = await fetch(url);
    const projects = await response.json();
    console.log(projects);

    // Filter section
    const filterIcon = document.querySelector("#filter-menu");
    const filterList = document.querySelector(".project__filter");
    filterIcon.addEventListener("click", () => {
      filterList.classList.toggle("show");
    });

    projects.forEach((element) => {
      document.querySelector(".work__container--list").innerHTML += `
                <div class="work__container--item">
                    <a href="project-specific.html?id=${element.id}">
                        <div class="work__img background-img${element.id}"></div>
                    </a>
                    <h3 class="work__link"><a href="project-specific.html?id=${element.id}">${element.title.rendered}</a></h3>
                    <p class="body-text">${element.excerpt.rendered}</p>
                </div>
            `;

      document.querySelector(
        `.background-img${element.id}`
      ).style.backgroundImage = `url(${element.better_featured_image.media_details.sizes.medium_large.source_url})`;
    });
  } catch (error) {
    // document.querySelector(".alert").innerHTML = showAlert(
    //   "An error occured, please contact Just Another Design Company",
    //   "danger"
    // );
  } finally {
    // setTimeout(function () {
    //   document.querySelector(".alert").innerHTML = ``;
    // }, 3000);
    // document.querySelector(".loading").innerHTML = ``;
  }
};

getprojects(projectAPI);

// Get more projects btn
// const getMoreBtn = document.querySelector(".get-more__btn");
// getMoreBtn.onclick = function () {
//   getprojects(projectAPI + `?page=2`);
//   getMoreBtn.style.display = "none";
// };
