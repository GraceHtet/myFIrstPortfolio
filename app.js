const getBody = document.body;
const getNavBar = document.getElementById("navBar");
const getNavBtn = document.getElementById("navBtn");
const getNavItems = document.querySelectorAll(".nav-menu .nav-items");

const projectDetails = [
  {
    name: "Project 1",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br/><br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    image: "./img/pj1.svg",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    live: "https://gracehtet.github.io/myFIrstPortfolio/",
    source: "https://github.com/GraceHtet",
  },
  {
    name: "Project 2",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br/><br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    image: "./img/pj2.svg",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    live: "https://gracehtet.github.io/myFIrstPortfolio/",
    source: "https://github.com/GraceHtet",
  },
  {
    name: "Project 3",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br/><br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    image: "./img/pj2.svg",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    live: "https://gracehtet.github.io/myFIrstPortfolio/",
    source: "https://github.com/GraceHtet",
  },
  {
    name: "Project 4",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br/><br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    image: "./img/pj2.svg",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    live: "https://gracehtet.github.io/myFIrstPortfolio/",
    source: "https://github.com/GraceHtet",
  },
  {
    name: "Project 5",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br/><br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    image: "./img/pj2.svg",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    live: "https://gracehtet.github.io/myFIrstPortfolio/",
    source: "https://github.com/GraceHtet",
  },
  {
    name: "Project 6",
    detail:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi<br/><br/>Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.",
    image: "./img/pj2.svg",
    technologies: ["HTML/CSS", "Ruby on Rails", "JavaScript"],
    live: "https://gracehtet.github.io/myFIrstPortfolio/",
    source: "https://github.com/GraceHtet",
  },
];

getNavBtn.addEventListener("click", () => {
  getNavBar.classList.toggle("active");
  getBody.classList.toggle("nav-active");
});

getNavItems.forEach((navitem) => {
  navitem.addEventListener("click", () => {
    getNavBar.classList.remove("active");
    getBody.classList.remove("nav-active");
  });
});
