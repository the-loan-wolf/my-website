// Get the SVG element
var rect = document.getElementById('menu-svg');
var menu = document.getElementById("menu-nav");
var menuCont = document.getElementById("menu-cont");
var lang = document.getElementById("menu-lang");
var social = document.getElementById("menu-social");

function displayMenu() {
  menu.classList.add("db");
  menu.style.setProperty("position", "absolute");
  menu.style.setProperty("top", "calc(2rem + 4rem)");
  menu.style.setProperty("height", "100vh");
  menu.style.setProperty("width", "100vw");
  menu.style.setProperty("z-index", "10");
  menu.style.setProperty("background-color", "#357edd");
  menu.style.setProperty("left", "0px");
  menu.style.setProperty("padding", "5%");

  menuCont.style.setProperty("display", "flex");
  menuCont.style.setProperty("flex-direction", "column");
  menuCont.style.setProperty("justify-content", "space-evenly");
  menuCont.style.setProperty("height", "30vh");
  menuCont.style.setProperty("align-items", "center");

  lang.style.setProperty("display", "flex");
  lang.style.setProperty("justify-content", "center");

  //social.style.setProperty("display", "flex");
  //social.style.setProperty("justify-content", "space-around");
}

function hideMenu() {
  menu.classList.add("dn");
  menu.classList.remove("db");
}

function toggleMenu() {
  if (menu.classList.contains("dn")){
    displayMenu();
    menu.classList.remove("dn");
  }else{
    hideMenu();
  }
}

var pos,topl,ht,wt,zi,bgc,lt,pd;

function getTheState() {
  pos = window.getComputedStyle(element).getPropertyValue('position');
  topl = window.getComputedStyle(element).getPropertyValue('top');
  ht = window.getComputedStyle(element).getPropertyValue('height');
  wt = window.getComputedStyle(element).getPropertyValue('width');
  zi = window.getComputedStyle(element).getPropertyValue('z-index');
  bgc = window.getComputedStyle(element).getPropertyValue('background-color');
  lt = window.getComputedStyle(element).getPropertyValue('left');
  pd = window.getComputedStyle(element).getPropertyValue('padding');
}

// Add a click event listener to the SVG rectangle
rect.addEventListener('click', function() {
  //alert('Rectangle clicked!');
  // display menu 
  toggleMenu();
});

//window.onload = function (e) {
// getTheState(); 
//}
