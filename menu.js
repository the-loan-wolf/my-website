// Get the SVG element
var rect = document.getElementById('menu-svg');
var menu = document.getElementById("menu-nav");



function displayMenu() {
  menu.style.display = "block";
  menu.style.setProperty("position", "absolute");
  menu.style.setProperty("top", "100px");
  menu.style.setProperty("height", "100vh");
  menu.style.setProperty("width", "100vh");
  menu.style.setProperty("z-index", "10");
  menu.style.setProperty("background-color", "#357edd");
  menu.style.setProperty("left", "0px");
  menu.style.setProperty("padding", "5%");
}

function hideMenu() {
  menu.style.display = "none";
}

function toggleMenu() {
  if (menu.style.display === "none"){
    displayMenu();
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

window.onload = function (e) {
 getTheState(); 
}
