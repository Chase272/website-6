console.log("hello friend");
var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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
 (function(){
var elements;
var windowHeight;

function getelements() {
  elements = document.querySelectorAll(".hidden");
  windowHeight = window.innerHeight;
}
function checkPosition() {
  for (var i = 0;i<elements.length;i++){
   var currentelement = elements[i];
   var positionFromTop = elements[i].getBoundingClientRect().top;

   if (positionFromTop - windowHeight<=0) {
     currentelement.classList.add("fade-in");
     currentelement.classList.remove("hidden");
   }
  }
}
window.addEventListener('scroll', checkPosition);
window.addEventListener('resize',getelements);

getelements();
checkPosition();
 }) ();
 var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 4000);
}
