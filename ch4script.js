const correctAnswer = "My first concert was Metallica";

function pickOption(button) {
  const userChoice = button.innerText.trim();
  const successPopup = document.getElementById("successPopup");
  const failPopup = document.getElementById("failPopup");

  if (userChoice === correctAnswer) {
    document.getElementById("victorySound").play();
    successPopup.classList.remove("hidden");
  } else {
    document.getElementById("warningSound").play();
    failPopup.classList.remove("hidden");
  }
}
const particles = document.querySelector(".particles");

for (let i = 0; i < 100; i++) {
  const p = document.createElement("div");
  p.className = "particle";
  p.style.left = Math.random() * 100 + "vw";
  p.style.top = Math.random() * 100 + "vh";
  p.style.animationDuration = (Math.random() * 3 + 2) + "s";
  particles.appendChild(p);
}

function closeFailPopup() {
  const failPopup = document.getElementById("failPopup");
  failPopup.classList.add("hidden");
}

function goToNextChapter() {
  window.location.href = "ending.html";
}
