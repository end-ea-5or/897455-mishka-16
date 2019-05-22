var basketLink = document.querySelectorAll(".button__modal");
var popup = document.querySelector(".modal");
var bg = document.querySelector(".modal__bg");
var form = document.querySelector(".modal__form");
var mapImg = document.querySelector(".contacts__map--img");
var mapFrame = document.querySelector(".contacts__map");

for (var i=0; i < basketLink.length; i++) {
  var element = basketLink[i];
  element.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.add("modal__show");
    bg.classList.add("modal__show");
  });
}

if (form) {
  form.addEventListener("submit", function (evt) {
    evt.preventDefault();
    popup.classList.remove("modal__show");
    bg.classList.remove("modal__show");
  });
}

window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    if (popup.classList.contains("modal__show")) {
      popup.classList.remove("modal__show");
      bg.classList.remove("modal__show");
    }
  }
});

if (mapImg) {
  mapImg.classList.add("contacts__map--close");
  mapFrame.classList.add("contacts__map--open");
}
