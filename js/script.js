"use strict";

document.getElementById("javascript_message").innerHTML = "Melina Bazrafkan";

const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");
const navigationItems = document.querySelectorAll(".nav-links a");
const currentYear = document.getElementById("current-year");

function closeNavigation() {
    navLinks.classList.remove("is-open");
    navToggle.setAttribute("aria-expanded", "false");
    document.body.classList.remove("nav-open");
}

navToggle.addEventListener("click", function () {
    const menuIsOpen = navLinks.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", menuIsOpen.toString());
    document.body.classList.toggle("nav-open", menuIsOpen);
});

navigationItems.forEach(function (link) {
    link.addEventListener("click", closeNavigation);
});

currentYear.textContent = new Date().getFullYear();
