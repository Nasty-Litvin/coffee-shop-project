let burgerButton = document.querySelector(".burger__button");
let burgerMenu = document.querySelector(".burger__menu-burger");

burgerButton.addEventListener("click", function () {
  burgerButton.classList.toggle("_active");
  burgerMenu.classList.toggle("_active");
  search.classList.toggle("_active");
  searchHeader.classList.toggle("_active");
});

let search = document.querySelector(".search-btn");
let searchHeader = document.querySelector(".header__search");

search.addEventListener("click", function () {
  search.classList.toggle("_active");
  searchHeader.classList.toggle("_active");
});

let subscriptionButton = document.querySelector(".subscription__button");
let subscriptionThanks = document.querySelector(".subscription__thanks");

subscriptionButton.addEventListener("click", function () {
  search.classList.toggle("_active");
  subscriptionThanks.classList.toggle("_active");
});
