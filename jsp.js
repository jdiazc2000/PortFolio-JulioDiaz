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