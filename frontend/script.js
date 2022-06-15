const msg = document.getElementById("hi");
const msgName = document.getElementById("name");
const msgTagLine = document.getElementById("tag-line");

const nav = document.getElementById("nav");
const header = document.getElementById("header");
const formEl = document.getElementById("form");
const mainContainer = document.querySelector(".main-container");
const projects = document.querySelectorAll(".project .img-container");
const socials = document.querySelectorAll(".social i");

const menu = document.getElementById("menu");
const openSlide = document.getElementById("openSlide");
const open_i = document.querySelector(".toggle-nav i");
const nav_links = document.querySelectorAll(".nav a");

openSlide.addEventListener("click", () => {
  if (open_i.className === "fas fa-times") {
    open_i.className = "fas fa-bars";
    menu.style.width = "0px";
    mainContainer.classList.remove("active");
    document.body.style.position = "";
    document.body.style.top = "";
    window.scrollTo(0, parseInt(document.body.style.top) * -1);
  } else {
    mainContainer.classList.add("active");
    document.body.style.top = `-${window.scrollY}px`;
    document.body.style.position = "fixed";
    open_i.className = "fas fa-times";
    menu.style.width = "250px";
  }
});

nav_links.forEach((link) => {
  link.addEventListener("click", () => {
    menu.style.width = "0px";
    open_i.className = "fas fa-bars";
    mainContainer.classList.remove("active");
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

formEl.addEventListener("submit", (e) => {
  alert("Thanks for Emailing me! I will reply as soon as possible :)");
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
