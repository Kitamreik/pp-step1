// Test Code 3-9-22 [does work]
// alert("HALT OMG this is working - YAS");

// Hamburger Menu Psuedocode [update HTML/CSS]

alert("OMG- Are you ready to see what's going on in this realm of cosmic deliciousness? If you're ready, click ok!");
console.log("You're doing a great job, Kit");

// Hamburger JS from CP 

// DOM Event Steps:

// 1. select hamburger icon --> event target
// const hamburgerIcon = document.querySelector("hamburger");
// const navUl = document.querySelector("nav-bar-list");

const hamburgerIcon = document.querySelector(".menu");

const navUl = document.querySelector(".nav-bar");

// 2. event handler --> show/hide

// 3. bind with event listener --> attach hamburger icon to event listener, NOT Menu Items
hamburgerIcon.addEventListener("click", () => {
    console.log("this has been clicked");
    navUl.classList.toggle("open-sesame");
});





