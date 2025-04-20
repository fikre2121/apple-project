// Toggle between ☰ and ×
// const navbarCollapse = document.getElementById("navbarNav");
// const toggler = document.querySelector(".navbar-toggler");

// navbarCollapse.addEventListener("show.bs.collapse", () => {
//   toggler.innerHTML = "✕";
// });

// navbarCollapse.addEventListener("hide.bs.collapse", () => {
//   toggler.innerHTML = "☰";
// });

// // Initialize with correct icon on page load
// if (toggler.getAttribute("aria-expanded") === "false") {
//   toggler.innerHTML = "☰";
// } else {
//   toggler.innerHTML = "✕";
// }
// // **************************** the footer slide toggle

const pluss = $(".footer-links-wrapper h3");

pluss.on("click", function () {
  $(this).toggleClass("active");
  $(this).next("ul").slideToggle();
});
// the swipper

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  loop: true,
  centeredSlides: true,
  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    type: "bullets",
  },
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
    disableOnInteraction: false,
  },
  speed: 2000,
  breakpoints: {
    768: {
      slidesPerView: 1,
    },
    1024: {
      slidesPerView: 2,
    },
  },
});
// teh toggler  <i class="fa-solid fa-xmark"></i>
const naves = document.querySelector(".navbar-collapse");
const toggler = document.querySelector(".toggler");
toggler.addEventListener("click", function () {
toggler.classList.toggle("fa-xmark");
  naves.classList.toggle("active");
});
