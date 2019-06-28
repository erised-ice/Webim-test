const $buttonOpenMenu = document.querySelector('.js-open-menu');
const $copyrightYear = document.querySelector('.js-copyright-year');

$copyrightYear.textContent = '2019';

$buttonOpenMenu.addEventListener('click', function () {
  const $menu = document.querySelector('.js-menu');
  $menu.classList.toggle('menu--show');
});
