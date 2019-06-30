const setCurrentYear = () => {
  $(".js-copyright-year").text(new Date().getFullYear());
};

const openMobileMenu = () => {
  const $buttonOpenMenu = $(".js-open-menu");

  $buttonOpenMenu.on("click", () => {
    $(".js-menu").toggleClass("menu--show");
  });
};

const initSlider = () => {
  $(".js-clients-slider").slick({
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

const setPhoneMasks = () => {
  $(".js-registration-phone").mask("+7 (000) - 000 - 00 - 00");
};

const smoothAnchor = () => {
  const $headerRegistrationButton = $(".js-header-registration-button");
  const $registration = $(".js-registration");
  const offsetTopOfRegistration = $registration.offset().top;
  const smoothSpeed = 500;

  $headerRegistrationButton.on("click", () => {
    $("body,html").animate({ scrollTop: offsetTopOfRegistration }, smoothSpeed);
  });
};

$(document).ready(() => {
  setCurrentYear();
  openMobileMenu();
  initSlider();
  setPhoneMasks();
  smoothAnchor();
});
