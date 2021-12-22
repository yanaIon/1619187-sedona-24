(() => {
  const menu = document.querySelector('.nav');
  const menuButton = document.querySelector('.nav__toggle');
  const menuList = document.querySelector('.nav__list');

  menuButton.addEventListener('click', () => {
    let expanded = menuButton.getAttribute('aria-expanded') === 'true' || 'false';
    menuButton.setAttribute('aria-expanded', !expanded);
    menuButton.classList.toggle('nav__toggle--open');
    menuList.classList.toggle('nav__list--open');
    menu.classList.toggle('nav--open')
  });
}) ();
