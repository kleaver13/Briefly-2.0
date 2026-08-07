const menu = document.querySelector('.menu');
const nav = document.querySelector('.header nav');
menu?.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  menu.setAttribute('aria-expanded', String(open));
});
