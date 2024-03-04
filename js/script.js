const toggleBtn = document.querySelector(".menu-btn");
const nav = document.getElementById("navbar");
const icon = document.getElementById("icon");

toggleBtn.addEventListener("click", function () {
  nav.classList.toggle("show");
  // Toggle icon between bars and times
  if (icon.classList.contains("fa-bars")) {
    icon.classList.remove("fa-bars");
    icon.classList.add("fa-times");
    icon.classList.add("rotate-times");
    icon.classList.remove("rotate-bars");
  } else {
    icon.classList.remove("fa-times");
    icon.classList.add("fa-bars");
    icon.classList.add("rotate-bars");
    icon.classList.remove("rotate-times");
  }
});

var swiper = new Swiper(".swiper", {
  slidesPerView: 3,
  direction: getDirection(),
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  on: {
    resize: function () {
      swiper.changeDirection(getDirection());
    },
  },
});

function getDirection() {
  var windowWidth = window.innerWidth;
  var direction = window.innerWidth <= 760 ? "vertical" : "horizontal";

  return direction;
}
