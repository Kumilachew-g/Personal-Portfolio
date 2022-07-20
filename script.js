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

// Pop up
const projectArray = [
  {
    id: 0,
    imgURL: './images/Snapshoot-Portfolio-4.png',
    heading: 'Multi-Post Stories',
    firstList: ['CANOPY', 'Back End', '2015'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    secList: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 1,
    imgURL: './images/Snapshoot-Portfolio.png',
    heading: 'Facebook 360',
    firstList: ['FACEBOOK', 'FULL Stack Dev', '2015'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    secList: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
  {
    id: 2,
    imgURL: './images/Snapshoot-Portfolio-1.png',
    heading: 'Uber Navigations',
    firstList: ['UBER', 'Lead Developer', '2018'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    secList: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
  {
    id: 3,
    imgURL: './images/Snapshoot-Portfolio-2.png',
    heading: 'Multi-Post Stories',
    firstList: ['CANOPY', 'Back End', '2015'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    secList: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
  {
    id: 4,
    imgURL: './images/Snapshoot-Portfolio-3.png',
    heading: 'Multi-Post Stories',
    firstList: ['FACEBOOK', 'FULL Stack Dev', '2015'],
    text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    secList: ['HTML', 'CSS', 'JavaScript', 'Ruby on rails'],
  },
];

const closePopup = document.querySelector('#popup-head > span');
const PopUp = document.querySelector('#pop-up-win');
const cards = document.querySelectorAll('.card a');

closePopup.addEventListener('click', () => {
  PopUp.classList.toggle('hidden');
});

const makePopup = ({
  imgURL, heading, firstList, text, secList,
}) => {
  const pHead = document.querySelector('#popup-head > h2');
  const P1List = document.querySelectorAll('#pop-up-win ul > li');
  const PImg = document.querySelector('#popup-card > img');
  const PText = document.querySelector('#popup-explain > p');
  const P2List = document.querySelector('#popup-explain menu');

  pHead.innerHTML = heading;
  PText.innerHTML = text;
  PImg.src = imgURL;
  P1List.forEach((ele, i) => {
    ele.innerHTML = firstList[i];
  });
  P2List.innerHTML = '';
  secList.forEach((ele) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = ele;
    P2List.appendChild(listItem);
  });
  PopUp.classList.toggle('hidden');
};

cards.forEach((ele, i) => {
  ele.addEventListener('click', () => {
    makePopup(projectArray[i]);
  });
});
