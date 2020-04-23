const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector("nav");
const mainPage = document.querySelector(".main_page");
const navLi = document.querySelector(".nav__list");
const header = document.querySelector("header");
const $navMobile = $("nav");
hamburger.addEventListener("click", () => {
  console.log("it works");
  hamburger.classList.toggle("is-active");
  header.classList.toggle("hamburger_open");
  navLi.classList.toggle("open");
  navMobile.classList.toggle("open");
  mainPage.classList.toggle("hamburger_open");
});
