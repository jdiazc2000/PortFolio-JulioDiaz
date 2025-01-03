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
    button.style.backgroundColor = 'white';
    button.style.color = 'black';
    button.style.boxShadow = '0 1px 20px rgba(255, 255, 255, .8)';
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
        button.style.boxShadow = '';
        button.style.transition = '.2s ease-in-out';
    }
}


/* Poke Links Functions */
function PokeLink(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado al Pokédex?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://pokedex-juliodiaz.netlify.app/");
        } 
      })
}

function PokeLinkGit(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado al repositorio del Pokédex?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://github.com/jdiazc2000/PokeDex");
        } 
      })
}


/* Woola Functions */
function WoolaLink(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado a Woola Commerce?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://woola-commerce-juliodiaz.netlify.app/");
        } 
      })
}

function WoolaLinkGit(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado al repositorio de Woola Commerce?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://github.com/jdiazc2000/Woola-Commerce");
            
        } 
      })
}

/* ControlClientes Functions */
function ControlClientesLink(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado a Control de clientes?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://control-de-clientes-juliodiaz.netlify.app/");
        } 
      })
}

function ControlClientesGit(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado al repositorio de Control de clientes?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://github.com/jdiazc2000/ControlDeClientes");
            
        } 
      })
}


/* SistemaDePresupuestos Functions */
function SistemaDePresupuestosLink(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado a Sistema de presupuestos?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://sistemadepresupuestojuliodiaz.netlify.app/");
        } 
      })
}

function SistemaDePresupuestosGit(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado al repositorio de Sistema de presupuestos?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://github.com/jdiazc2000/SistemaDePresupuesto-Angular");
            
        } 
      })
}

/* Rick&Morty Functions */
function RickMortyLink(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado a Buscador de personajes de Rick & Morty?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://rickandmortyapi-juliodiaz.netlify.app/");
        } 
      })
}

function RickMortyGit(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado al repositorio de Buscador de personajes de Rick & Morty?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://rickandmortyapi-juliodiaz.netlify.app/");
            
        } 
      })
}

/* RelojDigital Functions */
function RelojDigitalLink(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado a Reloj digital?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://relojdigital-juliodiaz.netlify.app/");
        } 
      })
}

function RelojDigitalGit(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado al repositorio de Reloj digital?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://github.com/jdiazc2000/Reloj-Digital");
            
        } 
      })
}

/* To'Do Functions */
function ToDoLink(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado a ToDo list?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://todolist-juliodiaz.netlify.app/");
        } 
      })
}

function ToDoGit(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado al repositorio de ToDo list?',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://github.com/jdiazc2000/To-Do-List");
            
        } 
      })
}

/* Firebase Crud Functions */
function FirebaseCrudLink(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado a Crud con Firebase?',
        showDenyButton: true,
        confirmButtonText: 'Si',
        denyButtonText: `No`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://crud-firebase-juliodiaz.netlify.app");
        } 
      })
}

function FirebaseCrudGit(){
    event.preventDefault();
    Swal.fire({
        title: '¿Deseas ser redireccionado al repositorio de Crud con Firebase',
        showDenyButton: true,
        confirmButtonText: 'SI',
        denyButtonText: `NO`,
      }).then((result) => {
        if (result.isConfirmed) {
            window.open("https://crud-firebase-juliodiaz.netlify.app");
            
        } 
      })
}