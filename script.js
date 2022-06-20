const msg = document.getElementById("hi");
const msgName = document.getElementById("name");
const msgTagLine = document.getElementById("tag-line");

const header = document.getElementById("header");
const mainContainer = document.querySelector(".main-container");
const projects = document.querySelectorAll(".project .img-container");

const menu = document.getElementById("menu");
const show_slide = document.getElementById("show-slide");
const close_slide = document.getElementById("close-slide");

const nav_links = document.querySelectorAll(".phone-nav-links a");

const frontendToggle = document.getElementById("frontend");
const frontendSkills = document.querySelector(".frontend-skills");
const backendToggle = document.getElementById("backend");
const backendSkills = document.querySelector(".backend-skills");

const resume = document.querySelector(".resume-button");

const externalLinks = document.querySelectorAll(".fa-external-link-alt");
const githubLinks = document.querySelectorAll(".fa-github");

window.addEventListener("load", () => {
  resume.classList.remove("active");
  menu.classList.remove("active");
});

let text = "Hi,my name is";
let nameText = "Kenan Dropic.";
let tagLine = "Making ideas come alive.";
let idx = 1;
let lastScrollTop = 0;

//function for writing text letter by letter
function printLetterByLetter(destination, message, speed) {
  var i = 0;
  var interval = setInterval(function () {
    destination.innerHTML += message.charAt(i);
    i++;
    if (i > message.length) {
      clearInterval(interval);
    }
  }, speed);
}
printLetterByLetter(msg, text, 100);
setTimeout(() => {
  printLetterByLetter(msgName, nameText, 110);
}, 1500);
setTimeout(() => {
  printLetterByLetter(msgTagLine, tagLine, 100);
}, 3000);
setTimeout(() => {
  resume.classList.add("active");
}, 5300);

// adding event listeners to each project
projects.forEach((project) => {
  project.addEventListener("click", (e) => {
    if (project.classList.contains("first")) {
      window.open("https://crypto-keno.netlify.app/");
    } else if (project.classList.contains("second")) {
      window.open("https://tradeshop-mern.herokuapp.com/");
    }
    if (project.classList.contains("third")) {
      window.open("https://real-estates-mern.herokuapp.com/");
    }
  });
});

// desktop navbar - show/hide depends on which direction I scroll
window.addEventListener("scroll", (e) => {
  let scrollTop = document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    header.style.top = `${-71}px`;
    header.style.zIndex = "0";
  } else {
    header.style.boxShadow = "0 4px 15px 5px var(--navy-shadow)";
    header.style.backgroundColor = "rgb(10,25,47)";
    header.style.top = `${0}px`;
    header.style.zIndex = "1000";
  }
  lastScrollTop = scrollTop;

  if (lastScrollTop == 0) {
    header.style.backgroundColor = "none";
    header.style.boxShadow = "none";
    header.style.zIndex = `${1}`;
  }
});

// show slide - mobile sidebar
show_slide.addEventListener("click", (e) => {
  show_slide.classList.remove("active");
  close_slide.classList.add("active");
  menu.classList.add("active");
  mainContainer.classList.add("active");
  document.documentElement.style.overflow = "hidden";
});

// close slide - mobile sidebar
close_slide.addEventListener("click", () => {
  mainContainer.classList.remove("active");
  show_slide.classList.add("active");
  close_slide.classList.remove("active");
  menu.classList.remove("active");
  document.documentElement.style.overflow = "";
});

// ading event listeners to each nav link
nav_links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.classList.remove("active");
    mainContainer.style.position = "relative";
    mainContainer.classList.remove("active");
    close_slide.classList.remove("active");
    show_slide.classList.add("active");
    document.documentElement.style.overflow = "";
  });
});

// add event listeners to each external link
externalLinks.forEach((link, idx) => {
  link.addEventListener("click", () => {
    if (idx === 0) {
      window.open("https://crypto-keno.netlify.app/");
    } else if (idx === 1) {
      window.open("https://tradeshop-mern.herokuapp.com/");
    } else if (idx === 2) {
      window.open("https://real-estates-mern.herokuapp.com/");
    }
  });
});

// add event listeners to each github link
githubLinks.forEach((link) => {
  link.addEventListener("click", () => {
    window.open("https://github.com/KenanDropic");
  });
});

// toggle frontend skills
frontendToggle.addEventListener("click", () => {
  frontendSkills.classList.toggle("active");
});
// toggle backend skills
backendToggle.addEventListener("click", () => {
  backendSkills.classList.toggle("active");
});
