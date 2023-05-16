const slides = document.querySelector('.slides');
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');

let slideIndex = 0;


function slideLeft() {
  if (slideIndex > 0) {
    slideIndex--;
    slides.style.transform = `translateX(-${slideIndex * 300}px)`;
  }
}

function slideRight() {
  if (slideIndex < slides.children.length - 1) {
    slideIndex++;
    slides.style.transform = `translateX(-${slideIndex * 300}px)`;
  }
}


leftButton.addEventListener('click', slideLeft);
rightButton.addEventListener('click', slideRight);
