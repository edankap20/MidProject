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
    console.log('ONLOAD')

    function _handleBottomSubmit () {
        const fullName = document.querySelector('#fullName').value;
        const email = document.querySelector('#email').value;
        const phone = document.querySelector('#phone').value;
        const message = document.querySelector('#message').value;
    
        // Validar que los campos requeridos no estén vacíos
        if (fullName === '' || email === '' || phone === '' || 'message' === '') {
            alert('Please fill in all required fields.');
            return;
        }
    
        // Validar que el correo electrónico tenga el formato correcto
        const emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/; // Expresión regular para validar correo electrónico
        if (!emailRegex.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
    
        // Validar que el número de teléfono tenga 9 dígitos
        const phoneRegex = /^\d{9}$/; // Expresión regular para validar número de teléfono con 9 dígitos
        if (!phoneRegex.test(phone)) {
            alert('Please enter a valid phone number with 9 digits.');
            return;
        }

        

        const newContact = {
            fullName,
            email,
            phone,
            message
        }
        console.log(newContact);


        _saveContactData(newContact)
    }

    function _saveContactData (contact) {
        return fetch(SERVER_URL, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
            body: JSON.stringify(contact)
        })
           .then(response => response.json())
           .then(response => {
                console.log(JSON.stringify(response));
                alert('Form submitted successfully');
             })
           .catch(err => console.error(err))
    }

    function _bindEvents () {
        const bottomSubmit = document.querySelector('.bottomSubmit')

        bottomSubmit.addEventListener('click', _handleBottomSubmit)
    }

    _bindEvents ()
}

