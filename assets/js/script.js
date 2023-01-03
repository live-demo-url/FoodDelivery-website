'use strict';



/**
 * add event on multiple elements
 */

const addEventOnElements = function (elem, type, callback) {
  for (let i = 0, len = elem.length; i < len; i++) {
    elem[i].addEventListener(type, callback);
  }
}



/**
 * LOADING
 */

const loadingElement = document.querySelector("[data-loading-container]");

window.addEventListener("load", function () {
  loadingElement.classList.add("loaded");
  document.body.classList.add("loaded");
});



/**
 * MOBILE NAVBAR TOGGLE
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const navbarLinks = document.querySelectorAll("[data-nav-link]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

const closeNavbar = function () {
  navbar.classList.remove("active");
  overlay.classList.remove("active");
  document.body.classList.remove("active");
}

addEventOnElements(navbarLinks, "click", closeNavbar);



/**
 * HEADER
 */

// header will be active after scroll 200px of window

const header = document.querySelector("[data-header]");

const headerActive = function () {
  window.scrollY > 200 ? header.classList.add("active")
    : header.classList.remove("active");
}

window.addEventListener("scroll", headerActive);



/**
 * SCROLL REVEAL
 */

const revealElements = document.querySelectorAll("[data-reveal]");

const scrollReveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

window.addEventListener("scroll", scrollReveal);
window.addEventListener("load", scrollReveal);

// ---------------------------

(function(){
  const sliders = [...document.querySelectorAll('.testimony__body')];
  const buttomNext = document.querySelector('#next');
  const buttomBefore = document.querySelector('#before');
  let value;


  buttomNext.addEventListener('click', ()=>{
      changePosition(1);

  });

  buttomBefore.addEventListener('click', ()=>{
      changePosition(-1);

  });

  const changePosition = (add)=>{
      const currentTestimony = document.querySelector('.testimony__body--show').dataset.id;
      value = Number(currentTestimony);
      value+= add;

      sliders[Number(currentTestimony)-1].classList.remove('testimony__body--show')
      if(value === sliders.length+1 || value === 0){
          value = value === 0 ? sliders.length : 1;
      }
      
      sliders[value-1].classList.add('testimony__body--show')

  }



})();