svg4everybody();

const burgerBtn = document.querySelector(".burger-btn");
const navLinks = document.querySelector(".header-site-nav");

burgerBtn.addEventListener("click", function(evt) {
  evt.preventDefault;
  burgerBtn.classList.toggle("burger-btn--active");
  navLinks.classList.toggle("header-site-nav--active");
})

const swiper = new Swiper('.swiper-container', {
  slidesPerView: 'auto',
  spaceBetween: 20,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'custom',
    renderCustom: function (swiper, current, total) {
      return '0' + current;
    }
  },
})
