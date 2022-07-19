const menu = document.querySelector('#union-menu');
const close = document.querySelector('#nav-button-close');
const navs = document.querySelector('#nav-menu');
const links = document.querySelectorAll('#nav-menu li');

close.addEventListener('click', () => {
  navs.classList.toggle('hidden');
});

menu.addEventListener('click', () => {
  navs.classList.toggle('hidden');
});

links.forEach((ele) => ele.addEventListener('click', () => {
  navs.classList.toggle('hidden');
}));

const bio = document.querySelector('#demo');
const about = document.querySelector('#work-section');
const activeMenuNav = document.querySelectorAll('#desk-list > li > a');

document.addEventListener('scroll', () => {
  if (window.pageYOffset < bio.offsetHeight + bio.offsetTop) {
    activeMenuNav.forEach((e) => e.classList.remove('active'));
    activeMenuNav[0].classList.add('active');
  } else if (window.pageYOffset < about.offsetHeight + about.offsetTop - 200) {
    activeMenuNav.forEach((e) => e.classList.remove('active'));
    activeMenuNav[1].classList.add('active');
  } else {
    activeMenuNav.forEach((e) => e.classList.remove('active'));
    activeMenuNav[2].classList.add('active');
  }
});
