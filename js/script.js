const $buttonOpenMenu = document.querySelector('.js-open-menu');
const $copyrightYear = document.querySelector('.js-copyright-year');

$copyrightYear.textContent = '2019';

$buttonOpenMenu.addEventListener('click', function () {
  const $menu = document.querySelector('.js-menu');
  $menu.classList.toggle('menu--show');
});

$(document).ready( function() {
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
});