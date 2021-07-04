"use-strict"

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

const accordionButtons = document.querySelectorAll(".filters-form__button");

if(accordionButtons) {
  let accordionPanels = document.querySelectorAll(".filters-form__column");
  for(let i = 0; i < accordionButtons.length; i++) {
    accordionButtons[i].addEventListener("click", function(event) {
      event.preventDefault();
      accordionButtons[i].classList.toggle("filters-form__button--active");

      let accordionPanel = accordionPanels[i];

      accordionPanel.classList.toggle("filters-form__column--open");

      accordionPanel.style.maxHeight = accordionPanel.style.scrollHeight + "px";
    })
  }
}



const rangeSlider = document.getElementById("range-slider");

if(rangeSlider) {
  noUiSlider.create(rangeSlider, {
    start: [12000, 90000],
    connect: true,
    tooltips: [true,true],
    margin: 3000,
    padding: [12000, 10000],
    format: wNumb({
      decimals: 0,
      thousand: "",
      postfix: " ₽"
    }),
    range: {
        'min': 0,
        'max': 130000
    }
});
}





