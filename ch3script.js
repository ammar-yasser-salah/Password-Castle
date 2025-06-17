function choose(option) {
  const result = document.getElementById("resultMessage");
  const successPopup = document.getElementById("successPopup");
  const failPopup = document.getElementById("failPopup");

  if (option === "backup") {
    playSound("victorySound");
    result.textContent = "Correct! You used a backup.";
    successPopup.classList.remove("hidden");
  } else {
    playSound("warningSound");
    result.textContent = "Not the best choice.";
    failPopup.classList.remove("hidden");
  }
}

function goToNextChapter() {
  window.location.href = "ch4.html";
}

function closeFailPopup() {
  document.getElementById("failPopup").classList.add("hidden");
}

function playSound(id) {
  const sound = document.getElementById(id);
  if (sound) {
    sound.currentTime = 0;
    sound.play();
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
