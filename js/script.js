const $buttonOpenMenu = document.querySelector('.js-open-menu');

$buttonOpenMenu.addEventListener('click', function () {
  const $menu = document.querySelector('.js-menu');
  $menu.classList.toggle('menu--show');
});
