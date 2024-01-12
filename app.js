
const menu = document.querySelector('#mobile-menu');
const menuLinks = document.querySelector('.navbar__menu');

menu.addEventListener('click', function() {
  menu.classList.toggle('is-activeSlide');
  menuLinks.classList.toggle('activeSlide');
});
let slideIndex = 1;
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
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" activeSlide", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " activeSlide";
}
function changeImage(imageUrl) {
    document.getElementById('mainImageBuy').src = imageUrl;
}

function toggleDropdown(element) {
    var hiddenText = element.nextElementSibling;
    if (hiddenText.style.display === "none" || hiddenText.style.display === "") {
        hiddenText.style.display = "block";
        element.innerText = "hide...";
    } else {
        hiddenText.style.display = "none";
        element.innerText = "read more...";
    }
}

/*$(document).ready(function(){
   $(".redRose").on('click',function(){
    $(".image-containerbuy1").attr("src", "./images/rot/kaufen.png");

}) ;
});

$(document).ready(function(){
    $(".lilaRose").on('click',function(){
     $(".image-containerbuy2").attr("src", "./images/lila/kaufen.png");
 
 }) ;
 });
*/