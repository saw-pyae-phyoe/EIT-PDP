var swiper = new Swiper(".mySwiper", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  // Responsive breakpoints
  breakpoints: {
    // when window width is >= 200px
    200: {
      slidesPerView: 2,
      spaceBetween: 20
    },
   
    // when window width is >= 480px
    480: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 720px
    720: {
      slidesPerView:4,
      spaceBetween:20
    },
// when window width is >= 1200px
    1200: {
      slidesPerView: 6,
      spaceBetween: 20
    },
  }
})