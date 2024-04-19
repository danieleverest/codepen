'use strict';
//Need to be Optimized

const slide = document.querySelectorAll(".slide");
const btnLeft = document.querySelector(".btn__left");
const btnRight = document.querySelector(".btn__right");

//Declaring variables
let currentPosition = 0;
let maxPosition = slide.length - 1;
//functions

const leftSlide = function () {
  if (currentPosition === 0) {
    currentPosition = maxPosition;
  } else if (currentPosition >= 1) {
    currentPosition--;
  }
  let prevSlide;
  currentPosition == 4 ? (prevSlide = 0) : (prevSlide = currentPosition + 1);

  slide.forEach((s) => s.classList.remove("prevSlide"));
  slide.forEach((s) => s.classList.remove("animatePrevSlide"));
  slide.forEach((s) => s.classList.remove("rightSlide"));
  slide.forEach((s) => s.classList.remove("leftSlide"));
  slide.forEach((s) => s.classList.remove("active"));
  slide[currentPosition].classList.add("leftSlide");
  slide[currentPosition].classList.add("active");
  slide[prevSlide].classList.add("prevSlide");
  slide[prevSlide].classList.add("animatePrevSlide");
};
const rightSlide = function () {
  if (currentPosition === maxPosition) {
    currentPosition = 0;
  } else {
    currentPosition++;
  }
  let prevSlide;
  currentPosition == 0
    ? (prevSlide = maxPosition)
    : (prevSlide = currentPosition - 1);

  slide.forEach((s) => s.classList.remove("prevSlide"));
  slide.forEach((s) => s.classList.remove("animatePrevSlide"));
  slide.forEach((s) => s.classList.remove("rightSlide"));
  slide.forEach((s) => s.classList.remove("leftSlide"));
  slide.forEach((s) => s.classList.remove("active"));
  slide[currentPosition].classList.add("rightSlide");
  slide[currentPosition].classList.add("active");
  slide[prevSlide].classList.add("prevSlide");
  slide[prevSlide].classList.add("animatePrevSlide");
};
//Event Listeners

btnLeft.addEventListener("click", leftSlide);
btnRight.addEventListener("click", rightSlide);