//Nav//
const navtoogle = document.querySelector(".nav-toogle");
const navmenu = document.querySelector(".nav-menu");

navtoogle.addEventListener("click", () => {
    navmenu.classList.toggle("nav-menu_visible");
    if (navmenu.classList.contains("nav-menu_visible")) {
        document.querySelector('.menuicon').style.transform = 'rotate(90deg)'
        document.querySelector('body').style.overflowY = 'hidden'
    } else {
        document.querySelector('.menuicon').style.transform = 'rotate(0deg)'
        document.querySelector('body').style.overflowY = 'scroll'
    }
})

function closeMenu() {
    document.querySelector(".nav-menu").className = "nav-menu";
    document.querySelector('.menuicon').style.transform = 'rotate(0deg)'
    document.querySelector('body').style.overflowY = 'scroll'
}


//Banner Parallax//
const header = document.querySelector(".texts");
const background = document.querySelector(".parallax-img:nth-child(1)");
const text = document.querySelector(".content-body");

window.addEventListener("scroll", function() {
    const scroll = window.pageYOffset;
    background.style.top = scroll / 3.0 + "px";
    header.style.opacity = 1 - scroll / 400;
});


//Contact Form//
const $form = document.querySelector("#contacto");
const button = document.querySelector(".button");
$form.addEventListener('submit', handleSubmit)


async function handleSubmit(event) {
    event.preventDefault()
    button.classList.toggle("button_loading");
    button.style.backgroundColor = 'rgb(207, 64, 64)';
    button.style.color = 'white';
    button.style.border = 'solid white';
    button.style.boxShadow = '0px 1px 20px rgba(255, 255, 255, 0.8)';
    button.style.transition = '.2s ease-in-out';
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    })
    if (response.ok) {
        button.classList.remove("button_loading");
        this.reset();
        Swal.fire(
            'Correo enviado con éxito',
            '¡Gracias por ver mi portafolio, intentaré comunicarme contigo lo más pronto posible :)!',
            'success'
        )
        button.style.backgroundColor = '';
        button.style.color = '';
        button.style.border = '';
        button.style.boxShadow = '';
        button.style.transition = '.2s ease-in-out';
    } else {
        button.classList.remove("button_loading");
        Swal.fire(
            'Error',
            'Ingrese datos en el formulario.',
            'error'
        )
        button.style.backgroundColor = '';
        button.style.color = '';
        button.style.border = '';
        button.style.boxShadow = '';
        button.style.transition = '.2s ease-in-out';
    }
}


/* Links Functions */
const PokedexLink = document.getElementById('Pokedex-link');
const PokedexLink_GitHub = document.getElementById('Github-Pokedex-link');

PokedexLink.addEventListener('click', function(){
    event.preventDefault();
    if(confirm('¿Deseas ser redireccionado al Pokédex?'))
    {
        window.open("https://pokedex-juliodiaz.netlify.app/");
    }
})

PokedexLink_GitHub.addEventListener('click', function(){
    event.preventDefault();
    if(confirm('¿Deseas ser redireccionado al repositorio del Pokédex?'))
    {
        window.open("https://github.com/jdiazc2000/PokeDex");
    }
})
