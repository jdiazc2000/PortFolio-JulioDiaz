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

//Portada Parallax//
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