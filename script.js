/* ==========================================
        TOQA TAWFIK PORTFOLIO
              SCRIPT.JS
==========================================*/

// =========================
// Navbar Scroll Effect
// =========================

const navbar = document.querySelector("header");

window.addEventListener("scroll", () => {

    if (window.scrollY > 60) {

        navbar.style.background = "rgba(8,17,31,.92)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,.35)";

    }

    else {

        navbar.style.background = "rgba(8,17,31,.45)";
        navbar.style.boxShadow = "none";

    }

});


// =========================
// Reveal Sections
// =========================

const observer = new IntersectionObserver(

(entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.classList.add("show");

}

});

},

{

threshold:.15

}

);

document.querySelectorAll(".section,.project-card,.skill-card,.timeline-item,.certificate-card")
.forEach(item=>{

item.classList.add("hidden");

observer.observe(item);

});


// =========================
// Active Navigation
// =========================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const top=section.offsetTop-120;

if(pageYOffset>=top){

current=section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(link.getAttribute("href")==="#"+current){

link.classList.add("active");

}

});

});


// =========================
// Smooth Hover Effect
// =========================

const cards=document.querySelectorAll(".project-card");

cards.forEach(card=>{

card.addEventListener("mousemove",(e)=>{

const rect=card.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

card.style.background=
`radial-gradient(circle at ${x}px ${y}px,
rgba(124,58,237,.22),
rgba(255,255,255,.05))`;

});

card.addEventListener("mouseleave",()=>{

card.style.background="rgba(255,255,255,.06)";

});

});


// =========================
// Typing Effect
// =========================

const title=document.querySelector(".hero h2");

const words=[

"Computer Science Student",

"Machine Learning Enthusiast",

"AI Developer",

"Embedded Systems Enthusiast"

];

let wordIndex=0;
let charIndex=0;
let deleting=false;

function type(){

const current=words[wordIndex];

if(!deleting){

title.textContent=current.substring(0,charIndex++);

if(charIndex>current.length){

deleting=true;

setTimeout(type,1500);

return;

}

}

else{

title.textContent=current.substring(0,charIndex--);

if(charIndex===0){

deleting=false;

wordIndex++;

if(wordIndex>=words.length){

wordIndex=0;

}

}

}

setTimeout(type,deleting?45:90);

}

type();


// =========================
// Hidden Animation
// =========================

const style=document.createElement("style");

style.innerHTML=`

.hidden{

opacity:0;

transform:translateY(40px);

transition:all .8s ease;

}

.show{

opacity:1;

transform:translateY(0);

}

.active{

color:#8b5cf6 !important;

}

`;

document.head.appendChild(style);


// =========================
// Current Year
// =========================

const footer=document.querySelector("footer p:last-child");

footer.innerHTML=`© ${new Date().getFullYear()} Toqa Tawfik. All Rights Reserved.`;


// =========================
// Console Message 😄
// =========================

console.log(
"%cWelcome to Toqa's Portfolio!",
"color:#8b5cf6;font-size:18px;font-weight:bold;"
);

console.log(
"Built with HTML, CSS & JavaScript."
);
