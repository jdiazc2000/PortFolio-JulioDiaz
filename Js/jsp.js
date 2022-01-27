function closeMenu() { document.querySelector(".nav-menu").className = "nav-menu", document.querySelector(".menuicon").style.transform = "rotate(0deg)", document.querySelector("body").style.overflowY = "scroll" }

async function handleSubmit(t) {
    t.preventDefault(), button.classList.toggle("button_loading"), button.style.backgroundColor = "rgb(207, 64, 64)", button.style.color = "white", button.style.border = "solid white", button.style.boxShadow = "0px 1px 20px rgba(255, 255, 255, 0.8)", button.style.transition = ".2s ease-in-out";
    const e = new FormData(this),
        o = await fetch(this.action, { method: this.method, body: e, headers: { Accept: "application/json" } });
    o.ok ? (button.classList.remove("button_loading"), this.reset(), Swal.fire("Correo enviado con éxito", "¡Gracias por ver mi portafolio, intentaré comunicarme contigo lo más pronto posible :)!", "success"), button.style.backgroundColor = "", button.style.color = "", button.style.border = "", button.style.boxShadow = "", button.style.transition = ".2s ease-in-out") : (button.classList.remove("button_loading"), Swal.fire("Error", "Ingrese datos en el formulario.", "error"), button.style.backgroundColor = "", button.style.color = "", button.style.border = "", button.style.boxShadow = "", button.style.transition = ".2s ease-in-out")
}
const navtoogle = document.querySelector(".nav-toogle"),
    navmenu = document.querySelector(".nav-menu");
navtoogle.addEventListener("click", () => { navmenu.classList.toggle("nav-menu_visible"), navmenu.classList.contains("nav-menu_visible") ? (document.querySelector(".menuicon").style.transform = "rotate(90deg)", document.querySelector("body").style.overflowY = "hidden") : (document.querySelector(".menuicon").style.transform = "rotate(0deg)", document.querySelector("body").style.overflowY = "scroll") });
const header = document.querySelector(".texts"),
    background = document.querySelector(".parallax-img:nth-child(1)"),
    text = document.querySelector(".content-body");
window.addEventListener("scroll", function() {
    const t = window.pageYOffset;
    background.style.top = t / 3 + "px", header.style.opacity = 1 - t / 400
});
const $form = document.querySelector("#contacto"),
    button = document.querySelector(".button");
$form.addEventListener("submit", handleSubmit);