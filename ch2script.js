let cluesFound = 0;
const totalClues = 3;
const clueCounter = document.getElementById("clueCounter");
const monster = document.getElementById("monster");
const victorySound = document.getElementById("victorySound");
const warningSound = document.getElementById("warningSound");

function flagClue(element) {
  if (element.classList.contains("found")) return;

  element.classList.add("found");
  cluesFound++;
  clueCounter.textContent = `Clues found: ${cluesFound} / ${totalClues}`;

  if (cluesFound >= totalClues) {
    monster.style.animation = "jumpFade 1s forwards";
    victorySound.play();
    setTimeout(() => {
      monster.style.display = "none";
      document.getElementById("successPopup").classList.remove("hidden");
    }, 1000);
  }
}

function closeFailPopup() {
  document.getElementById("failPopup").classList.add("hidden");
}

function goToNextChapter() {
  window.location.href = "ending.html"; 
}

document.querySelectorAll(".email-simulation p, .email-simulation strong").forEach(p => {
  p.addEventListener("click", function (e) {
    if (!e.target.classList.contains("clickable")) {
      warningSound.play();
      document.getElementById("failPopup").classList.remove("hidden");
    }
  });
});
