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



/* Pulse Animation JS */
let lines = document.querySelectorAll("#front line");
let svg = document.getElementById("loader");
// Setting proper viewBox for the svg element
let box = svg.getBBox();
svg.setAttribute("viewBox",`${box.x} ${box.y} ${box.width} ${box.height}`)

function run() {
  for (let i = 0; i < lines.length; i += 1) {
    let currLine = lines[i];
    setStyle(currLine, i);
    removeStyle(currLine, i);
  }
  
  function setStyle(currElement, i) {
    // setting delay 0.06 * i for making sure the next animated element will get styles when the preveios finishes 
    setTimeout(() => {
      currElement.setAttribute('style', `stroke: #ff4d4f; stroke-dasharray: ${currElement.getTotalLength()}px; stroke-dashoffset: ${currElement.getTotalLength()}px; animation: dash 0.1s ease-out forwards 0.1s; animation-delay: ${0.06 * i}s`)
    }, i);
  }
  
  function removeStyle(element, i) {
    setTimeout(() => {
      element.removeAttribute("style")
    }, (100 * (i + 2)) - ((i + 1) * 20)); //100 * i + 2 - how fast we want to reset style. Each element is increasing its reset time with increasing i. For making the anumation smoother at the end, we can compensate by substracting (i + 1) * 20. Feel free to play around constants and find your perfect timing
  }
}

run();
setInterval(run, 2000);
var btn_array = document.querySelectorAll(".test__button");
for (let i = 0; i < btn_array.length; i++) {
  btn_array[i].onclick = function () {
    window.open("que.html","_self");
  };
}
