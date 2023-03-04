const nav = document.querySelector("#nav");
const openMenu = document.querySelector("#menu-open");
const closeMenu = document.querySelector("#menu-close");
const navList = document.querySelector(".menu")


openMenu.addEventListener("click", () => {
    nav.classList.add("visible")
//Verifica si ya existe el enlace "Contact Us" antes de agregar un nuevo
    const contactUsLink = document.querySelector(".contact-us-link")

// Si el enlace "contac Us" no existe, crea uno nuevo y agregalo a la lista
    if(!contactUsLink) {
        //creo un elemento nuevo li y a para "Contact Us"
        const newListItem = document.createElement("li")
        const newLink = document.createElement("a")
        newLink.textContent = "Contact Us"
        newLink.setAttribute("href", "/ContactPage/contactPage.html")
        // Agrega la clase al enlace
        newLink.classList.add("contact-us-link")

        // Agrego el nuevo elemento a la lista de navegación
        newListItem.appendChild(newLink)
        navList.appendChild(newListItem)
    }
})

closeMenu.addEventListener("click", () => {
    nav.classList.remove("visible")
})