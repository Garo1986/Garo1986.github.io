let range = document.querySelector('.fader');
let rangeNum = document.querySelector('.volume');
range.oninput = function () {
    rangeNum.innerHTML = this.value
}

//test
const selected = document.querySelector(".selected");
const optionsContainer = document.querySelector(".options-container");

const optionsList = document.querySelectorAll(".option");

selected.addEventListener("click", () => {
  optionsContainer.classList.toggle("active");
});

optionsList.forEach(o => {
  o.addEventListener("click", () => {
    selected.innerHTML = o.querySelector("label").innerHTML;
    optionsContainer.classList.remove("active");
  });
});
//Burger


const burgerItem = document.querySelector('.burger');
const burgerNav = document.querySelector('.header_nav')
const burgerClose = document.querySelector('.header_nav-close')
burgerItem.addEventListener("click", () => {
    burgerNav.classList.add("header-nav_visit");
});
burgerClose.addEventListener("click", () => {
    burgerNav.classList.remove("header-nav_visit");
});
