"use strict";

const menuMobile = document.getElementById("menu"),
  overlay = document.querySelector(".overlay"),
  listItems = document.querySelectorAll(".list-items"),
  btnArrows = document.querySelectorAll(".btn-arrow"),
  btns = document.querySelectorAll(".btn-links");

function mobileMenu(menu) {
  menu.classList.toggle("change");
  menuMobile.classList.toggle("active");
  overlay.classList.toggle("hidden");

  if (!menuMobile.classList.contains("active")) {
    featuresMenu.classList.remove("active-list");
    companyMenu.classList.remove("active-list");
  }
}

btns.forEach(function (btn, key) {
  btn.addEventListener("click", function () {
    listItems[key].classList.toggle("active-list");
    btnArrows[key].src = "./images/icon-arrow-up.svg";

    if (listItems[key].classList.contains("active-list")) {
      btnArrows[key].src = "./images/icon-arrow-down.svg";
    }
  });
});
