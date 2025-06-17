function checkPassword() {
  const input = document.getElementById("passwordInput").value;
  const monster = document.getElementById("monster");
  const strengthBar = document.getElementById("strengthBar");
  const resultMessage = document.getElementById("resultMessage");

  const successPopup = document.getElementById("successPopup");
  const failPopup = document.getElementById("failPopup");

  const strength = calculateStrength(input);

  strengthBar.style.width = strength.percent + "%";
  strengthBar.style.backgroundColor = strength.color;
  resultMessage.textContent = strength.message;

  if (strength.score >= 4) {
    playSound("victorySound");

    monster.style.filter = "hue-rotate(0deg) saturate(0) brightness(1.5)";
    monster.style.animation = "jumpFade 1s forwards";

    setTimeout(() => {
      monster.style.display = "none";
      const rect = monster.getBoundingClientRect();
      triggerSparkles(rect.left + rect.width / 2, rect.top);
      successPopup.classList.remove("hidden");
    }, 1000);
  }
  else if (strength.score < 3) {
    playSound("warningSound");
    failPopup.classList.remove("hidden");
  }
  else {
    resultMessage.textContent = strength.message;
  }
}

function calculateStrength(password) {
  let score = 0;
  if (password.length >= 12) score++;
  if (/[A-Z]/.test(password)) score++;
  if (/[a-z]/.test(password)) score++;
  if (/[0-9]/.test(password)) score++;
  if (/[^A-Za-z0-9]/.test(password)) score++;

  let percent = (score / 5) * 100;
  let color = "red";
  if (score >= 4) color = "lime";
  else if (score === 3) color = "orange";

  let message = "Weak password!!";
  if (score >= 4) message = "Strong password! Skeleton defeated!";
  else if (score === 3) message = "Almost there! Add more variety.";

  return { score, percent, color, message };
}

function playSound(id) {
  const sound = document.getElementById(id);
  if (sound) {
    sound.currentTime = 0;
    sound.play();
  }
}

const particles = document.querySelector(".particles");
    for (let i = 0; i < 80; i++) {
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
  window.location.href = "ch2.html";
}

function triggerSparkles(x, y) {
  const sparkleContainer = document.getElementById("sparkleContainer") || document.body;

  for (let i = 0; i < 20; i++) {
    const sparkle = document.createElement("div");
    sparkle.className = "sparkle";
    sparkle.style.left = `${x + (Math.random() * 50 - 25)}px`;
    sparkle.style.top = `${y + (Math.random() * 50 - 25)}px`;
    sparkle.style.animationDuration = `${0.5 + Math.random()}s`;
    sparkleContainer.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 1000);
  }
}
