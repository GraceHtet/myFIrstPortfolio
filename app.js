const getBody = document.body;
const getNavBar = document.getElementById('navBar');
const getNavBtn = document.getElementById('navBtn');
const getNavItems = document.querySelectorAll('.nav-menu .nav-items');

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