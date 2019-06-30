const setCurrentYear = () => {
  $('.js-copyright-year').text(new Date().getFullYear());
};

const openMobileMenu = () => {
  const $buttonOpenMenu = $('.js-open-menu');

  $buttonOpenMenu.on('click', () => {
    $('.js-menu').toggleClass('menu--show');
  });
};

const initSlider = () => {
  $('.js-clients-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1032,
        settings: {
          slidesToShow: 3,
          dots: true
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          dots: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          dots: true
        }
      }
    ]
  });
};

$(document).ready(() => {
  setCurrentYear();
  openMobileMenu();
  initSlider();
});