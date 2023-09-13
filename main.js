"use strict";

// Spinner
var spinner = function () {
  var spinnerElement = document.getElementById('spinner');
  if (spinnerElement) {
    setTimeout(function () {
      spinnerElement.classList.remove('show');
    }, 1000);
  }
};
spinner();

// Hide the spinner when the page finishes loading
window.addEventListener('load', function () {
  var spinnerElement = document.getElementById('spinner');
  if (spinnerElement) {
    spinnerElement.style.display = 'none';
  }
});

// Other JavaScript code...


AOS.init();

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 10,
  nav: true,
  dots: false,
  autoplay: true,
  navContainer: '.custom-nav', // Specify the navigation container

  responsiveClass: true,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    1000: {
      items: 1
    }
  }
});

let m=moment().format('MMMM Do YYYY');
document.getElementById('date').innerHTML=m;