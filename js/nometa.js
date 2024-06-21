const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
    "hello", 
    "привет", 
    "namaskaar", 
    "你好!", 
    "안녕", 
    "sain uu?", 
    "どうも", 
    "sua s'dei", 
    "wai", 
    "halo", 
    "salem", 
    "dev baro dis div", 
    "sabaidee", 
    "namaskkaram", 
    "ज्वजलपा", 
    "hai", 
    "k cha", 
    "li-ho", 
    "xin chào", 
    "kamusta", 
    "tungjatjeta", 
    "grüßgott", 
    "hallo", 
    "kaixo", 
    "вiтаю", 
    "degemer mad", 
    "zdrasti", 
    "hej", 
    "Hola", 
    "Bok", 
    "ahoj", 
    "hej", 
    "hoi", 
    "tere päevast", 
    "hei", 
    "salut", 
    "goeie", 
    "dia duit", 
    "gamardjoba", 
    "Γεια σου", 
    "szia", 
    "góðan dag", 
    "ciào", 
    "chau", 
    "sveiki", 
    "moïen", 
    "здраво", 
    "aw gbien", 
    "witaj", 
    "oi", 
    "dobrý", 
    "živjo", 
    "hola", 
    "tja", 
    "привит",
];
const typingDelay = 50;
const erasingDelay = 100;
const newTextDelay = 1000;
let textArrayIndex = 0;
let charIndex = 0;

function type() {
  if (charIndex < textArray[textArrayIndex].length) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
    charIndex++;
    setTimeout(type, typingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
  	setTimeout(erase, newTextDelay);
  }
}

function erase() {
	if (charIndex > 0) {
    if(!cursorSpan.classList.contains("typing")) cursorSpan.classList.add("typing");
    typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
    charIndex--;
    setTimeout(erase, erasingDelay);
  } 
  else {
    cursorSpan.classList.remove("typing");
    textArrayIndex++;
    if(textArrayIndex>=textArray.length) textArrayIndex=0;
    setTimeout(type, typingDelay + 1100);
  }
}

document.addEventListener("DOMContentLoaded", function() {
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

document.getElementById("year").innerHTML = new Date().getFullYear();

function copySiteLink() {
  const siteLink = window.location.href;
  console.warn("DEBUG: Site link has been copied in clipboard")
  navigator.clipboard.writeText(siteLink).then(() => {
  }).catch(err => {
      console.error("Failed to copy site link: ", err);
  });
}

const button = document.getElementById("copylink");
const block = document.getElementById("alert-success");

button.addEventListener('click', function() {
  if (block.style.display === 'none') {
    block.style.display = 'block';
    console.warn("DEBUG: Alert has been displayed")
  }
  setTimeout(function() {
    block.style.display = 'none';
    console.warn("DEBUG: Alert has been hidden")
  }, 5000);
});