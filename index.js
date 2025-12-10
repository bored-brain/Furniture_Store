
const toggle = document.querySelector('.menu_btn'); 
const bar = document.querySelector("ul");


toggle.addEventListener('click', tooglemynav);

function tooglemynav() {
  bar.classList.toggle("active");
}

const cross = document.querySelector('.close')
cross.addEventListener('click', closemynav);
function closemynav() {
  bar.classList.toggle("active");
}

let slideIndex1 = 0;
showSlides1();

function showSlides1() {
  let j;
  let slides = document.getElementsByClassName("mySlides");
  for (j = 0; j < slides.length; j++) {
    slides[j].style.display = "none";
  }
  slideIndex1++;
  if (slideIndex1 > slides.length) {slideIndex1 = 1}
  slides[slideIndex1-1].style.display = "block";
  setTimeout(showSlides1, 5000); 
}