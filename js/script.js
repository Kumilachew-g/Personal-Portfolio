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

links.forEach((ele) =>
  ele.addEventListener('click', () => {
    navs.classList.toggle('hidden');
  })
);

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
    // imgURL: './images/Snapshoot-Portfolio-4.png',
    imgURL: './images/popup/p3.png',
    heading: 'Haddis Technology PLC',
    firstList: ['Microverse', 'Front End', '2022'],
    text: 'This capstone project website is developed using HTML5, CSS3, and vanilla JavaScript for technology campanies to present the service provided by the campany and to share the latest work ifrormations.',
    secList: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 1,
    imgURL: './images/popup/p4-min.png',
    heading: 'Movie Series',
    firstList: ['Microverse', 'Front End Dev', '2022'],
    text: 'This Movies Series project is about building my own web application based on an external API. I was select an API that provides data about a topic that you like and then build the webapp around it. The webapp have 2 user interfaces.',
    secList: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 2,
    imgURL: './images/popup/p5.png',
    heading: 'LeaderBoard',
    firstList: ['Microverse', 'kumilachew', '2022'],
    text: 'The leaderboard website displays scores submitted by different players. It also allows users to submit your score. Once scores are submitted, users can refresh the current dashboard to get updated scores.',
    secList: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 3,
    imgURL: './images/popup/p6.png',
    heading: 'Awesome Books',
    firstList: ['Microverse', 'Front End', '2022'],
    text: 'This awesome book web application is developed using Vanilla JavaScript. The app has adding books and storing them in local storage and display books features to the pages.',
    secList: ['HTML', 'CSS', 'JavaScript'],
  },
  {
    id: 4,
    imgURL: './images/popup/p7-min.png',
    heading: 'Book Store',
    firstList: ['Microverse', 'Front End Dev', '2022'],
    text: 'The bookstore is a website that allows you to display a list of books, add a book, and remove a selected book. Built with React and Redux.',
    secList: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
  },
];

const closePopup = document.querySelector('#popup-head > span');
const PopUp = document.querySelector('#pop-up-win');
const cards = document.querySelectorAll('.card a');

closePopup.addEventListener('click', () => {
  PopUp.classList.toggle('hidden');
});

const makePopup = ({ imgURL, heading, firstList, text, secList }) => {
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
