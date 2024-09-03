const tabLink = document.querySelectorAll(".nav-option-link ");
const tabContent = document.querySelectorAll(".tabs-car__column");
tabLink.forEach((targetLink) => {
    targetLink.addEventListener("click", (e) => {
        let data = targetLink.getAttribute("data-button");
        tabLink.forEach((anotherLink) => {
            anotherLink.classList.remove("nav-option-link--active");
        });
        targetLink.classList.add("nav-option-link--active");
        tabContent.forEach((content) => {
            content.classList.remove("tabs-car__column--active");
        });
        document
            .querySelector(`#${data}`)
            .classList.add("tabs-car__column--active");
    });
});
const menuBurger = document.querySelector(".menu--btn");
const menuList = document.querySelector(".menu__list");
menuBurger.addEventListener("click", () => {
    menuList.classList.toggle('menu__list--active');
});
const swiper = new Swiper(".swiper", {
    pagination: {
        el: ".swiper-pagination",
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: true,
    },
    effect: "fade",
});

