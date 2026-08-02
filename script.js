/* ==========================
   SMOOTH SCROLL
========================== */

document.querySelectorAll('nav a').forEach(link => {

link.addEventListener('click',function(e){

e.preventDefault();

const target=document.querySelector(this.getAttribute('href'));

target.scrollIntoView({

behavior:'smooth'

});

});

});


/* ==========================
   ACTIVE NAVBAR
========================== */

const sections=document.querySelectorAll("section");

const navLinks=document.querySelectorAll("nav a");

window.addEventListener("scroll",()=>{

let current="";

sections.forEach(section=>{

const sectionTop=section.offsetTop-150;

if(window.scrollY>=sectionTop){

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


/* ==========================
   SCROLL REVEAL
========================== */

const reveal=document.querySelectorAll(

".skill-card,.project-card,.certificate-card,.about-card,.edu-card,.timeline-card,.contact-box"

);

function revealSection(){

const windowHeight=window.innerHeight;

reveal.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<windowHeight-120){

card.style.opacity="1";

card.style.transform="translateY(0)";

}

});

}

reveal.forEach(card=>{

card.style.opacity="0";

card.style.transform="translateY(80px)";

card.style.transition="all .8s ease";

});

window.addEventListener("scroll",revealSection);

revealSection();


/* ==========================
   FLOATING HERO IMAGE
========================== */

const image=document.querySelector(".glass-card");

let angle=0;

function floating(){

angle+=0.02;

image.style.transform=

`translateY(${Math.sin(angle)*10}px)`;

requestAnimationFrame(floating);

}

floating();


/* ==========================
   SCROLL PROGRESS BAR
========================== */

const progress=document.createElement("div");

progress.style.position="fixed";

progress.style.top="0";

progress.style.left="0";

progress.style.height="4px";

progress.style.background="#06B6D4";

progress.style.zIndex="99999";

document.body.appendChild(progress);

window.addEventListener("scroll",()=>{

const total=

document.documentElement.scrollHeight-

window.innerHeight;

const percentage=

(window.scrollY/total)*100;

progress.style.width=percentage+"%";

});


/* ==========================
   BACK TO TOP BUTTON
========================== */

const topBtn=document.createElement("button");

topBtn.innerHTML="↑";

topBtn.style.position="fixed";

topBtn.style.bottom="30px";

topBtn.style.right="30px";

topBtn.style.width="55px";

topBtn.style.height="55px";

topBtn.style.borderRadius="50%";

topBtn.style.border="none";

topBtn.style.background="#6366F1";

topBtn.style.color="white";

topBtn.style.fontSize="22px";

topBtn.style.cursor="pointer";

topBtn.style.display="none";

topBtn.style.boxShadow="0 15px 35px rgba(0,0,0,.35)";

document.body.appendChild(topBtn);

window.addEventListener("scroll",()=>{

if(window.scrollY>400){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};


/* ==========================
   BUTTON HOVER EFFECT
========================== */

document.querySelectorAll(".btn1,.btn2").forEach(btn=>{

btn.addEventListener("mousemove",e=>{

const rect=btn.getBoundingClientRect();

const x=e.clientX-rect.left;

const y=e.clientY-rect.top;

btn.style.background=

`radial-gradient(circle at ${x}px ${y}px,#06B6D4,#6366F1)`;

});

btn.addEventListener("mouseleave",()=>{

btn.style.background="";

});

});


/* ==========================
   TYPEWRITER EFFECT
========================== */

const title=document.querySelector(".hero-left h2");

const text="Java Full Stack Developer";

let i=0;

title.innerHTML="";

function typing(){

if(i<text.length){

title.innerHTML+=text.charAt(i);

i++;

setTimeout(typing,80);

}

}

typing();


/* ==========================
   PARALLAX EFFECT
========================== */

window.addEventListener("mousemove",e=>{

const x=(window.innerWidth/2-e.clientX)/60;

const y=(window.innerHeight/2-e.clientY)/60;

document.querySelector(".bg-blur.one").style.transform=

`translate(${x}px,${y}px)`;

document.querySelector(".bg-blur.two").style.transform=

`translate(${-x}px,${-y}px)`;

});
