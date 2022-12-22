const getBody = document.body;
const getNavBar = document.getElementById('navBar');
const getNavBtn = document.getElementById('navBtn');
const getNavItems = document.querySelectorAll('.nav-menu .nav-items');
const getName = document.querySelector('input#name');
const getText = document.querySelector('textarea');

getNavBtn.addEventListener('click', () => {
  getNavBar.classList.toggle('active');
  getBody.classList.toggle('nav-active');
});

getNavItems.forEach((navitem) => {
  navitem.addEventListener('click', () => {
    getNavBar.classList.remove('active');
    getBody.classList.remove('nav-active');
  });
});

// Start Modal Box
const projectDetails = [
  {
    name: 'Project 1',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br/><br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './img/pj1.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    live: 'https://gracehtet.github.io/myFIrstPortfolio/',
    source: 'https://github.com/GraceHtet',
  },
  {
    name: 'Project 2',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br/><br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './img/pj2.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    live: 'https://gracehtet.github.io/myFIrstPortfolio/',
    source: 'https://github.com/GraceHtet',
  },
  {
    name: 'Project 3',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br/><br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './img/pj3.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    live: 'https://gracehtet.github.io/myFIrstPortfolio/',
    source: 'https://github.com/GraceHtet',
  },
  {
    name: 'Project 4',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br/><br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './img/pj4.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    live: 'https://gracehtet.github.io/myFIrstPortfolio/',
    source: 'https://github.com/GraceHtet',
  },
  {
    name: 'Project 5',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br/><br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './img/pj5.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    live: 'https://gracehtet.github.io/myFIrstPortfolio/',
    source: 'https://github.com/GraceHtet',
  },
  {
    name: 'Project 6',
    detail:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br/><br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    image: './img/pj6.svg',
    technologies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
    live: 'https://gracehtet.github.io/myFIrstPortfolio/',
    source: 'https://github.com/GraceHtet',
  },
];

const projectCards = document.querySelectorAll('.project-cards');
const getModal = document.querySelector('#modal');
const pjName = getModal.querySelector('.pjname');
const lgLists = getModal.querySelectorAll('.lg-lists li');
const mainImg = getModal.querySelector('.main-img');
const imgLists = getModal.querySelectorAll('.img-lists li');
const modalContent = getModal.querySelector('.modal-content');
const liveLink = getModal.querySelector('#liveLink');
const sourceLink = getModal.querySelector('#sourceLink');
const closeBtn = getModal.querySelector('.close-btn');

for (let i = 0; i < projectCards.length; i += 1) {
  const pjbtn = projectCards[i].querySelector('.pjbtn');
  const project = projectDetails[i];

  pjbtn.addEventListener('click', () => {
    getModal.classList.add('active');

    pjName.innerText = project.name;
    mainImg.style.backgroundImage = `linear-gradient(90deg, rgba(0, 0, 0, 0.15) 0%, rgba(0, 0, 0, 0) 5.21%, rgba(0, 0, 0, 0) 92.16%, rgba(0, 0, 0, 0.15) 100%), url(${project.image})`;
    modalContent.innerHTML = project.detail;
    liveLink.href = project.live;
    sourceLink.href = project.source;

    for (let j = 0; j < lgLists.length; j += 1) {
      lgLists[j].innerText = project.technologies[j];
    }

    imgLists.forEach((imgList) => {
      imgList.style.backgroundImage = `url(${project.image})`;
    });

    closeBtn.addEventListener('click', () => {
      getModal.classList.remove('active');
    });
  });
}
// End Modal Box

// Start form validation
const getForm = document.querySelector('form');
const getEmail = document.querySelector('input[type="email"]');
const getMessage = document.querySelector('form .message');

function showError(msg) {
  getMessage.style.display = 'block';
  getMessage.innerText = msg;
}

function showSuccess(msg) {
  getMessage.style.display = 'block';
  getMessage.style.color = 'green';
  getMessage.style.borderColor = 'green';
  getMessage.innerText = msg;
}

// End form validation

// Start Local Storage

const inputDatas = JSON.parse(localStorage.getItem('inputDatas')) || [];

function addData(name, email, text) {
  inputDatas.push({ name, email, text });
  localStorage.setItem('inputDatas', JSON.stringify(inputDatas));
  return { name, email, text };
}

function showData({ name, email, text }) {
  getName.value = name;
  getEmail.value = email;
  getText.value = text;
}

inputDatas.forEach(showData);

// End Local Storage

function checkLowerCase(input) {
  if (input.value !== input.value.toLowerCase()) {
    showError(`${input.type.toUpperCase()} should be in lowercase. Please resubmit again.`);
  } else {
    showSuccess("Thank You. We'll consider it.");
    getForm.submit();
  }
}

getForm.addEventListener('change', (e) => {
  e.preventDefault();
  addData(getName.value, getEmail.value, getText.value);
});

getForm.addEventListener('submit', (e) => {
  e.preventDefault();
  checkLowerCase(getEmail);
});
