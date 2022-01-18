//Nav Variables//
const navtoogle = document.querySelector(".nav-toogle");
const navmenu = document.querySelector(".nav-menu");

//Nav Function
navtoogle.addEventListener("click", () => {
    navmenu.classList.toggle("nav-menu_visible");
    if (navmenu.classList.contains("nav-menu_visible")) {
        document.querySelector('.menuicon').style.transform = 'rotate(180deg)'
    } else {
        document.querySelector('.menuicon').style.transform = 'rotate(0deg)'
    }
})

function closeMenu() {
    document.querySelector(".nav-menu").className = "nav-menu";
}

//Banner Parallax//
const header = document.querySelector(".texts");
const background = document.querySelector(".parallax-img:nth-child(1)");
const text = document.querySelector(".content-body");

window.addEventListener("scroll", function() {
    const scroll = window.pageYOffset;
    background.style.top = scroll / 3.0 + "px";
    header.style.opacity = 1 - scroll / 400;
    if (scroll > 100 && scroll < 300) {
        text.style.bottom = scroll / 2 + "px";
    }
});


//Contact Form//
const $form = document.querySelector("#contacto");

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
    event.preventDefault()
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        this.reset();
        Swal.fire(
            'Correo enviado con éxito',
            '¡Gracias por ver mi portafolio, intentaré comunicarme contigo lo más pronto posible :)!',
            'success'
        )
    } else {
        Swal.fire(
            'Error!',
            'Ingrese datos en el formulario.',
            'error'
        )
    }
}