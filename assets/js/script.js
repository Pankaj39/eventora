const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".navbar ul");

menu.addEventListener("click", () => {
    nav.classList.toggle("active");
});

document.querySelectorAll(".navbar ul li a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("active");
    });
});
