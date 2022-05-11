// Hamburger Menu DOM Event Steps:

// 1. select hamburger icon --> event target
const hamburgerIcon = document.querySelector(".menu");
const navUl = document.querySelector(".nav-bar");

// 2. event handler --> show/hide

// 3. bind with event listener --> attach hamburger icon to event listener, NOT Menu Items
hamburgerIcon.addEventListener("click", () => {
    navUl.classList.toggle("open-sesame");
});

// Date Method Test --> works 5/2
let currentDate = Date();
// remember that this is a variable you can use anywhere
// controller --> sending data --> the logic --> use the date variable





