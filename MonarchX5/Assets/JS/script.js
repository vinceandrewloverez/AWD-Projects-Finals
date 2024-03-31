const showMenu = (toggleId, navId) =>{
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  if(toggle && nav){
      toggle.addEventListener('click', ()=>{
          nav.classList.toggle('show')
      })
  }
}

showMenu('nav-toggle','nav-bar')

/*GSAP ANIMATION*/
gsap.from('.home-title', {opacity: -1, duration: 1.5, delay:1})
gsap.from('.home-img', {opacity: 0, duration: 1, delay:1, x: 100})
gsap.from('.home-information', {opacity: 0, duration: 1, delay:1.2, y: -30})

gsap.from('.box-medium', {opacity: 0, duration: 1.5, delay:1.3, y: -50})
gsap.from('.box-small', {opacity: -1, duration: 1.5, delay:1.4, y: -50})

let slideIndex = 0;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}

const navTogglers = document.querySelectorAll("[data-nav-toggler]");                                       