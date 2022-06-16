const msg = document.getElementById("hi");
const msgName = document.getElementById("name");
const msgTagLine = document.getElementById("tag-line");

const header = document.getElementById("header");
const mainContainer = document.querySelector(".main-container");
const projects = document.querySelectorAll(".project .img-container");
const socials = document.querySelectorAll(".social i");

const menu = document.getElementById("menu");
const show_slide = document.getElementById("show-slide");
const close_slide = document.getElementById("close-slide");

const nav_links = document.querySelectorAll(".phone-nav-links a");

const frontendToggle = document.getElementById("frontend");
const frontendSkills = document.querySelector(".frontend-skills");
const backendToggle = document.getElementById("backend");
const backendSkills = document.querySelector(".backend-skills");

import { init } from "../utils/initAOS.js";

window.addEventListener("load", () => {
  const initializing = init;
});

let topH;

// show slide
show_slide.addEventListener("click", (e) => {
  show_slide.classList.remove("active");
  close_slide.classList.add("active");
  menu.style.width = "250px";
  mainContainer.classList.add("active");
  document.body.style.position = "fixed";
  mainContainer.style.top = `-${window.scrollY}px`;
  // init;
  console.log("Scroll height", topH);
});

window.addEventListener("scroll", (e) => {
  // console.log(window.scrollY);
  topH = window.scrollY;
});

// close slide
close_slide.addEventListener("click", () => {
  mainContainer.classList.remove("active");
  show_slide.classList.add("active");
  close_slide.classList.remove("active");
  menu.style.width = "0px";
  window.scrollTo(0, parseInt(mainContainer.style.top) * -1);
  mainContainer.style.position = "relative";
  mainContainer.style.top = "";
});

nav_links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.style.width = "0px";
    mainContainer.classList.remove("active");
    mainContainer.style.position = "relative";
    mainContainer.style.top = "";
    window.scrollTo(0, parseInt(document.body.style.top) * -1);
    close_slide.classList.remove("active");
    show_slide.classList.add("active");
  });
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
printLetterByLetter(msg, text, 200);
setTimeout(() => {
  printLetterByLetter(msgName, nameText, 210);
}, 3000);
setTimeout(() => {
  printLetterByLetter(msgTagLine, tagLine, 200);
}, 6000);

projects.forEach((project) => {
  project.addEventListener("click", (e) => {
    if (project.classList.contains("first")) {
      window.open("https://crypto11.netlify.app");
    } else if (project.classList.contains("second")) {
      window.open("https://practical-bartik-9a6860.netlify.app/");
      console.log(e.target);
    }
    if (project.classList.contains("third")) {
      window.open("https://festive-cray-a36f31.netlify.app/");
    }
  });
});
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

// toggle frontend skills
frontendToggle.addEventListener("click", () => {
  frontendSkills.classList.toggle("active");
});
// toggle backend skills
backendToggle.addEventListener("click", () => {
  backendSkills.classList.toggle("active");
});

// mainContainer.addEventListener("scroll", (e) => {
//   let scrollTop = mainContainer.scrollTop;
//   if (scrollTop > lastScrollTop) {
//     header.style.top = `${-71}px`;
//     header.style.zIndex = "0";
//   } else {
//     header.style.boxShadow = "0 4px 15px 5px var(--navy-shadow)";
//     header.style.backgroundColor = "rgb(10,25,47)";
//     header.style.top = `${0}px`;
//     header.style.zIndex = "1000";
//   }
//   lastScrollTop = scrollTop;

//   if (lastScrollTop == 0) {
//     header.style.backgroundColor = "none";
//     header.style.boxShadow = "none";
//     header.style.zIndex = `${1}`;
//   }
// });

// function writeText() {
//   msg.innerText = text.slice(0, idx);

//   //odsijecamo text od 0 do trenutno indexa. Prvobitno će to biti od 0 do 1,znači uzet će se prvo slovo,zatim uvećamo index i kroz setTimeout pozovemo f-iju nakon 250ms,sada će se odsijeći text od 0 do 2,itd... Sve dok je idx manji od dužine texta,to će se i izvršavati,nakon toga očistimo setTimeout i ne izvršava se više.
//   idx++;
//   const animatxedTxt = setTimeout(writeText, 250);
//   if (idx > text.length) {
//     idx = 1;
//     clearTimeout(animatxedTxt);
//   }
// }
// setTimeout(writeText, 1000);
