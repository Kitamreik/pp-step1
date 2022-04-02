// Test Code 3-9-22 [does work]
// alert("HALT OMG this is working - YAS");

// Hamburger Menu Psuedocode [update HTML/CSS]

alert("OMG- Are you ready to see what's going on in this realm of cosmic deliciousness? If you're ready, click ok!");
console.log("You're doing a great job, Kit");

// Task: Write JavaScript code so that clicking the hamburger 
// menu will hide the menu items if it is currently showing,

// psuedocode
// hide the navbar by default --> display: none
// target: nav --> navbar 
// nav hides the navbar

// or show the menu items if it is currently hidden
// psuedocode
// class: open --> display: block
// when we open --> target the navbar
// toggle --> on/off --> show/hide

// DOM Event Steps:

// 1. select hamburger icon --> event target
// const hamburgerIcon = document.querySelector('.menu');

// 2. event handler --> show/hide
// const toggleMenu = function() {
//     const navbar = document.querySelector('.navbar');
//     hamburgerIcon.classList.toggle('open');
// };

// 3. bind with event listener --> attach hamburger icon to event listener, NOT Menu Items
// hamburgerIcon.addEventListener('click', toggleMenu);