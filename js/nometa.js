const typedTextSpan = document.querySelector(".typed-text");
const cursorSpan = document.querySelector(".cursor");

const textArray = [
    "hello", "sup", "hi", "привет", "greetings!", "aloha", "Namaskaar", "你好!", "안녕", "Sain uu?", "どうも", "Sua s'dei", "Wai", "नमस्ते", "Halo", "Namaskara", "Salem", "Dev baro dis div", "Sabaidee", "Вiтаю", "Salut", "Ciao!"
];
const typingDelay = 50;
const erasingDelay = 100;
const newTextDelay = 1000; // Delay between current and next text
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

document.addEventListener("DOMContentLoaded", function() { // On DOM Load initiate the effect
  if(textArray.length) setTimeout(type, newTextDelay + 250);
});

document.getElementById("year").innerHTML = new Date().getFullYear();

function copySiteLink() {
  const siteLink = window.location.href;
  navigator.clipboard.writeText(siteLink).then(() => {
      // alert("Site link copied to clipboard!");
  }).catch(err => {
      console.error("Failed to copy site link: ", err);
  });
}

const button = document.getElementById("copylink");
const block = document.getElementById("alert-success");

button.addEventListener('click', function() {
  if (block.style.display === 'none') {
    block.style.display = 'block';
  }
  setTimeout(function() {
    block.style.display = 'none';
  }, 5000);
});