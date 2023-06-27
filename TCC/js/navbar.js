const btnMobile = document.getElementById('btn-mobile')
btnMobile.addEventListener('click', toggleMenu);
let fechar = document.getElementById('fechar')
const nav = document.getElementById('navResponsivo');
const logo = document.querySelector('.logo')
let icones = document.querySelector('.icones')
let menuIcon = document.getElementById('menuIcon')

function toggleMenu(){
    nav.style.display = 'block'
    btnMobile.style.display = 'block';
    icones.style.display = 'none'
}


function fecharMenu()
{
    nav.style.display = 'none';
    btnMobile.style.display = 'block';
    icones.style.display = 'none'
    

}

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("navInfo");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
    
    icones.style.display = "none"
   

   
  } else {
    navbar.classList.remove("sticky");
    
    icones.style.display = "flex"
    
  }
}




