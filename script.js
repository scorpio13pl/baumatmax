const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector("nav");
const mainPage = document.querySelector(".main_page");
const navLi = document.querySelector(".nav__list");

const $navMobile = $("nav");
hamburger.addEventListener("click", () => {
  console.log("it works");
  hamburger.classList.toggle("is-active");
  navLi.classList.toggle("open");
  navMobile.classList.toggle("open");
  mainPage.classList.toggle("hamburger_open");
});

$;
