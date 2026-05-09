// console.log("HEllo JS");


let menuBar = document.getElementById("barMenu");
let navMenu = document.getElementById("navMenu");

menuBar.addEventListener("click", function () {
    navMenu.classList.toggle("showMenu");
});