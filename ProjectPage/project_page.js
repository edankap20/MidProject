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

