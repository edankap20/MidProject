const nav = document.querySelector("#nav");
const openMenu = document.querySelector("#menu-open");
const closeMenu = document.querySelector("#menu-close");
const navList = document.querySelector(".menu");
const closeHamburguer = document.querySelector("#closeHamburguer")

//creo un elemento nuevo li y a para "Contact Us"
const newListItem = document.createElement("li");
const newLink = document.createElement("a");
newLink.textContent = "Contact Us";
newLink.setAttribute("href", "/ContactPage/contactPage.html");
// Agrega la clase al enlace
newLink.classList.add("contact-us-link");


openMenu.addEventListener("click", () => {
    nav.classList.add("visible");
    // Agrego el nuevo elemento a la lista de navegación
    newListItem.appendChild(newLink);
    navList.appendChild(newListItem);
});

closeMenu.addEventListener("click", () => {
    nav.classList.remove("visible");

    //Verifica si existe el enlace "Contact Us" en la lista y elimínalo
    const contactUsLink = document.querySelector(".contact-us-link");
    if (contactUsLink) {
        const contactUsListItem = contactUsLink.closest("li");
        navList.removeChild(contactUsListItem);
    }
});

closeHamburguer.addEventListener("click", () => {
    nav.classList.remove("visible");

});

const SERVER_URL = 'https://raw.githubusercontent.com/ironhack-jc/mid-term-api/main/projects';

window.onload = () => {
    console.log('ONLOAD')
    console.log(document.URL)
    
    //Para que me devuelva la query param que he agragado a la homepage en el enlace de Simplify ?leon=simplify
    function _getProjectTitleOnURL() {
        const params = new Proxy(new URLSearchParams(window.location.search), {
            get: (searchParams, prop) => searchParams.get(prop),
          });
          return params.leon.toLowerCase();
    }

    //Para obtener los datos del servidor
   async function _getProjectData () {
      const response = await  fetch(SERVER_URL)
      const projects = await response.json()
      const [projectToShow] = projects.filter(project => project.name.toLowerCase() == _getProjectTitleOnURL())
      console.log(projectToShow)

      _updateProjectData(projectToShow)
    }
    // Actualiza los datos y los imprime en pantalla
   function _updateProjectData(projectToShow) {
        const projectTitleHeader = document.querySelector(".titleSimplify")
        const proojectSubtitle = document.querySelector(".subtitle")
        const projectData = document.querySelector(".simplifyDateSpam")
        const paragraph = document.querySelector(".paragraphs")
        const logoBlur = document.querySelector(".projectLogoBlur")
        const logo = document.querySelector(".projectLogo")

        projectTitleHeader.textContent = `${projectToShow.name} Johan`
    };
    _getProjectData;
};