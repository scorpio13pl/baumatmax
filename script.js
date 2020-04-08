const hamburger = document.querySelector(".hamburger");
const navMobile = document.querySelector("nav");
const mainPage = document.querySelector(".main_page");
const $navMobile = $("nav");
hamburger.addEventListener("click", () => {
  console.log("it works");
  navMobile.classList.toggle("open");
  mainPage.classList.toggle("hamburger_open");
});

$;
