var basketLink = document.querySelectorAll(".button__modal");
var popup = document.querySelector(".modal");
var bg = document.querySelector(".bg");
var form = document.querySelector(".modal__form");
var mapImg = document.querySelector(".contacts__map-img");
var mapFrame = document.querySelector(".contacts__map");
var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

for (var i = 0; i < basketLink.length; i++) {
  var element = basketLink[i];
  element.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__show");
    bg.classList.add("bg__show");
  });
}

if (form) {
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show");
    bg.classList.remove("bg__show");
  });
}

if (bg) {
  bg.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show");
    bg.classList.remove("bg__show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal__show")) {
      popup.classList.remove("modal__show");
      bg.classList.remove("bg__show");
    }
  }
});

if (mapImg) {
  mapImg.classList.add("contacts__map-img--close");
  mapFrame.classList.add("contacts__map--open");
}

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});
