console.log('Its working');

var menuIcon = document.querySelector('.menu-icon');
var sideBar = document.querySelector('.sidebar');
var container = document.querySelector('.container');

menuIcon.addEventListener('click',menuIconToggle);

function menuIconToggle(){
    sideBar.classList.toggle("small-sidebar");
    container.classList.toggle("large-container");

}
