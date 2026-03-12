// ========== WMT QUIZ MASTER - APP LOGIC ==========

// ---- State ----
let currentQuiz = null;
let currentQuestionIndex = 0;
let score = 0;
let answered = false;
let currentQuizKey = "";

// ---- Card Definitions ----
const cardDefs = [
  { key: "lecture1", icon: "📘", badge: "Lecture", badgeClass: "badge-lecture", cardClass: "lecture-card" },
  { key: "lecture2", icon: "📗", badge: "Lecture", badgeClass: "badge-lecture", cardClass: "lecture-card" },
  { key: "lecture3", icon: "📙", badge: "Lecture", badgeClass: "badge-lecture", cardClass: "lecture-card" },
  { key: "lecture4", icon: "📕", badge: "Lecture", badgeClass: "badge-lecture", cardClass: "lecture-card" },
  { key: "lecture5", icon: "📓", badge: "Lecture", badgeClass: "badge-lecture", cardClass: "lecture-card" },
  { key: "coding", icon: "💻", badge: "Coding", badgeClass: "badge-coding", cardClass: "coding-card" },
  { key: "mixedMcq", icon: "🧩", badge: "MCQ Mix", badgeClass: "badge-mcq", cardClass: "mcq-card" },
  { key: "guess1", icon: "🎯", badge: "Guessing", badgeClass: "badge-guess", cardClass: "guess-card" },
  { key: "guess2", icon: "🎲", badge: "Guessing", badgeClass: "badge-guess", cardClass: "guess-card" },
  { key: "guess3", icon: "🔮", badge: "Guessing", badgeClass: "badge-guess", cardClass: "guess-card" },
];

// ---- Login ----
function handleLogin() {
  const username = document.getElementById("username").value.trim().toLowerCase();
  const password = document.getElementById("password").value.trim();
  const errorEl = document.getElementById("loginError");

  if (username === "haritha" && password === "tharukumara") {
    errorEl.textContent = "";
    showPage("dashboardPage");
    renderCards();
  } else {
    errorEl.textContent = "❌ Invalid credentials! Try again.";
    document.getElementById("password").value = "";
  }
}

function handleLogout() {
  document.getElementById("username").value = "";
  document.getElementById("password").value = "";
  showPage("loginPage");
}

// ---- Page Navigation ----
function showPage(pageId) {
  document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
  document.getElementById(pageId).classList.add("active");
}

// ---- Dashboard Cards ----
function renderCards() {
  const container = document.getElementById("cardsContainer");
  container.innerHTML = "";

  cardDefs.forEach((card, i) => {
    const data = allQuizData[card.key];
    if (!data) return;

    const div = document.createElement("div");
    div.className = `card ${card.cardClass}`;
    div.style.animationDelay = `${i * 0.07}s`;
    div.innerHTML = `
      <span class="card-badge ${card.badgeClass}">${card.badge}</span>
      <div class="card-icon">${card.icon}</div>
      <h3>${data.title}</h3>
      <p>${data.questions.length} Questions</p>
    `;
    div.onclick = () => startQuiz(card.key);
    container.appendChild(div);
  });
}

// ---- Quiz Engine ----
function startQuiz(key) {
  currentQuizKey = key;
  currentQuiz = allQuizData[key];
  currentQuestionIndex = 0;
  score = 0;
  answered = false;

  document.getElementById("quizTitle").textContent = currentQuiz.title;
  document.getElementById("totalQuestions").textContent = currentQuiz.questions.length;

  showPage("quizPage");
  renderQuestion();
}

function renderQuestion() {
  const q = currentQuiz.questions[currentQuestionIndex];
  const total = currentQuiz.questions.length;

  document.getElementById("questionNum").textContent = currentQuestionIndex + 1;
  document.getElementById("progressFill").style.width = `${((currentQuestionIndex + 1) / total) * 100}%`;

  document.getElementById("questionText").innerHTML = `Q${currentQuestionIndex + 1}. ${q.q}`;

  const optContainer = document.getElementById("optionsContainer");
  optContainer.innerHTML = "";

  q.options.forEach((opt, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.innerHTML = `<span style="margin-right:10px;font-weight:700;opacity:0.5">${String.fromCharCode(65 + idx)}.</span> ${opt}`;
    btn.onclick = () => selectOption(idx);
    optContainer.appendChild(btn);
  });

  document.getElementById("explanationBox").classList.add("hidden");
  document.getElementById("explanationBox").innerHTML = "";
  document.getElementById("nextBtn").disabled = true;
  answered = false;

  // Change button text on last question
  document.getElementById("nextBtn").textContent =
    currentQuestionIndex === total - 1 ? "See Results 🏆" : "Next Question →";
}

function selectOption(idx) {
  if (answered) return;
  answered = true;

  const q = currentQuiz.questions[currentQuestionIndex];
  const btns = document.querySelectorAll(".option-btn");

  // Highlight correct answer
  btns[q.answer].classList.add("correct");

  if (idx === q.answer) {
    score++;
    btns[idx].innerHTML = `✅ ${btns[idx].innerHTML}`;
  } else {
    btns[idx].classList.add("wrong");
    btns[idx].innerHTML = `❌ ${btns[idx].innerHTML}`;

    // Show explanation for wrong answers
    const expBox = document.getElementById("explanationBox");
    expBox.classList.remove("hidden");
    expBox.innerHTML = `<strong>💡 Explanation:</strong> ${q.explanation}`;
  }

  // Disable all buttons
  btns.forEach(b => b.disabled = true);
  document.getElementById("nextBtn").disabled = false;
}

function nextQuestion() {
  currentQuestionIndex++;
  if (currentQuestionIndex >= currentQuiz.questions.length) {
    showResults();
  } else {
    renderQuestion();
  }
}

// ---- Results ----
function showResults() {
  const total = currentQuiz.questions.length;
  showPage("resultsPage");

  document.getElementById("scoreDisplay").textContent = `${score} / ${total}`;

  let title, message, emojis, memeHTML;

  if (score < 10) {
    // Less than 10 - "idakin whutto" with laughing emojis
    title = "idakin whutto! 🤣";
    message = "Machan... poddk padanna oney! Try again and do better!";
    emojis = "🤣😂🤣😂🤣";
    memeHTML = `
      <div class="meme-face">🤡</div>
      <div class="meme-text">IDAKIN WHUTTO!</div>
      <div class="meme-subtext">Marks: ${score}/${total}... Padanna bro 😂😂😂</div>
      <div style="font-size:60px;margin-top:15px">😂🤣😂🤣😂</div>
      <div style="margin-top:15px">
        <img src="https://media.giphy.com/media/10JhviFuU2gWD6/giphy.gif" alt="laughing meme" style="width:100%;border-radius:12px;" onerror="this.style.display='none'">
      </div>
    `;
  } else if (score >= 10 && score <= 20) {
    // 10-20 - "madak hodai pagor" with thumbs up
    title = "madak hodai pagor! 👍";
    message = "Not bad machang! You're getting there. Keep studying!";
    emojis = "👍😊👍😏👍";
    memeHTML = `
      <div class="meme-face">😏</div>
      <div class="meme-text">MADAK HODAI PAGOR!</div>
      <div class="meme-subtext">Marks: ${score}/${total}... Hodatama hodai! 👍</div>
      <div style="font-size:60px;margin-top:15px">👍😏👍😊👍</div>
      <div style="margin-top:15px">
        <img src="https://media.giphy.com/media/111ebonMs90YLu/giphy.gif" alt="not bad meme" style="width:100%;border-radius:12px;" onerror="this.style.display='none'">
      </div>
    `;
  } else {
    // More than 20 - "kadimai whutto kadimai"
    title = "kadimai whutto kadimai! 🏆";
    message = "LEGEND machang! You absolutely CRUSHED it! 🔥🔥🔥";
    emojis = "🏆🔥⭐💪🎉";
    memeHTML = `
      <div class="meme-face">🏆</div>
      <div class="meme-text">KADIMAI WHUTTO KADIMAI!</div>
      <div class="meme-subtext">Marks: ${score}/${total}... Absolute GOAT! 🐐🔥</div>
      <div style="font-size:60px;margin-top:15px">🏆🔥⭐💪🎉</div>
      <div style="margin-top:15px">
        <img src="https://media.giphy.com/media/3ohzdIuqJoo8QdKlnW/giphy.gif" alt="champion meme" style="width:100%;border-radius:12px;" onerror="this.style.display='none'">
      </div>
    `;
  }

  document.getElementById("resultEmojis").textContent = emojis;
  document.getElementById("resultTitle").textContent = title;
  document.getElementById("resultMessage").textContent = message;
  document.getElementById("memeContainer").innerHTML = memeHTML;
}

function retryQuiz() {
  startQuiz(currentQuizKey);
}

function goToDashboard() {
  showPage("dashboardPage");
}

// ---- Enter key on login ----
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("password").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleLogin();
  });
  document.getElementById("username").addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleLogin();
  });
});
