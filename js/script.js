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

document.addEventListener("DOMContentLoaded", function () {
  const images = [
    "image1.jpg",
    "image2.jpg",
    "image3.jpg",
    "image4.jpg",
    "image5.jpg",
    "image6.jpg",
    "image7.jpg",
    "image8.jpg",
    "image9.jpg",
    "image10.jpg",
  ];
  const info = [
    "Information about Instructor 1",
    "Information about Instructor 2",
    "Information about Instructor 3",
    "Information about Instructor 4",
    "Information about Instructor 5",
    "Information about Instructor 6",
    "Information about Instructor 7",
    "Information about Instructor 8",
    "Information about Instructor 9",
    "Information about Instructor 10",
  ];
  const instructorsContent = document.querySelector(".instructors-content");
  const imgElement = instructorsContent.querySelector("img");
  const infoElement = instructorsContent.querySelector("p");

  let currentIndex = 0;

  function changeContent() {
    imgElement.src = images[currentIndex];
    infoElement.textContent = info[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }

  changeContent(); // Initial call to display the first image and information

  setInterval(changeContent, 1000); // Change content every second
});

document.addEventListener("DOMContentLoaded", function () {
  const instructors = document.querySelectorAll(".instructor");
  let currentIndex = 0;

  function showNextInstructor() {
    instructors.forEach((instructor) => {
      instructor.style.display = "none";
    });
    instructors[currentIndex].style.display = "block";
    currentIndex = (currentIndex + 1) % instructors.length;
  }

  function startAnimation() {
    showNextInstructor(); // Show the first instructor immediately
    setInterval(showNextInstructor, 6000);
  }

  startAnimation();
});

function showSocialIcons() {
  const socialIcons = document.querySelector(".social-icons");
  socialIcons.style.display = "block";
}

function hideSocialIcons() {
  const socialIcons = document.querySelector(".social-icons");
  socialIcons.style.display = "none";
}
