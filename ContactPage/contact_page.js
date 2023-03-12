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

// Para el servidor SERVER
const SERVER_URL = 'http://localhost:8000/contacts';

window.onload = () => {
    console.log('ONLOAD');

    function _handleBottomSubmit () {
        console.log('_handleBottomSubmit')
        const fullName = document.querySelector('#fullName').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const message = document.querySelector('#message').value;

        //Creamos un objeto nuevo para poder enviarlo al JSON server con los valores que se escriban en el formulario
        const newContact = {
            fullName,
            email,
            phone,
            message
        };
        console.log(newContact);

        //Lamamos a la función privada _saveContactData
        _saveContactData(newContact)

    }

    //Función que envia los datos anteriores al servidor mediante el método Fetch()
    function _saveContactData (contact) {
        fetch(SERVER_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(contact)
        })
           .then(response => response.json())
           .then(response => console.log(JSON.stringify(response)))
           .catch(err => console.error(err));
    }

    function _bindEvents () {
        const bottomSubmit = document.querySelector('.bottomSubmit');

        bottomSubmit.addEventListener('click', _handleBottomSubmit)
    }

    _bindEvents ();
}
