let startButton = document.querySelector("#start");
let startScreen = document.querySelector("#startScreen");
let questionsElement = document.querySelector("#questions");
let timer = document.querySelector("#timer");
let currentQuestion = 0;
let currentTime = 60;
let countdown;
const questions = [
  {
    questionTitle: "What is red + blue",
    choices: ["yellow", "purple", "orange", "green"],
    answer: "purple",
  },
  {
    questionTitle: "What is the powerhouse of the cell?",
    choices: ["cytoplasm", "nucleus", "mitochondria", "golgi body"],
    answer: "mitochondria",
  },
  {
    questionTitle: "Who is Zeus's wife?",
    choices: ["Hera", "Athena", "Artemis", "Bastet"],
    answer: "Hera",
  },
  {
    questionTitle: "How does water get from the roots to the leaves?",
    choices: ["adhesion/cohesion", "osmosis", "reverse gravity", "magic"],
    answer: "adhesion/cohesion",
  },
  {
    questionTitle: "Who was Time Magazine's person of the year in 2006?",
    choices: ["George Clooney", "Brad Pitt", "You", "George W Bush"],
    answer: "You",
  },
];
function endQuiz() {
  clearInterval(countdown);
  let endScreenEl=document.querySelector("#endScreen")
  endScreenEl.removeAttribute("class")
  let finalScoreEl = document.querySelector("#finalScore")
  finalScoreEl.textContent=currentTime;
  questionsElement.setAttribute("class", "hide")
}
function checkAnswer() {
  console.log(this.value);
  console.log(currentQuestion);
  if (this.value !== questions[currentQuestion].answer) {
    currentTime = currentTime - 5;
    if (currentTime < 0) {
      currentTime = 0;
    }
    timer.textContent = currentTime;
  }
  if (this.value === questions[currentQuestion].answer) {
    if (currentTime < 0) {
      currentTime = 0;
    }
    timer.textContent = currentTime;
    currentQuestion++;
    renderQuestions();
  }
  if (currentTime <= 0 || currentQuestion === questions.length -1) {
    endQuiz();
  } else {
    renderQuestions();
  }
}
function renderQuestions() {
  let questionTitleEl = document.querySelector("#question-title");
  let choicesEl = document.querySelector("#choices");
  questionTitleEl.textContent = questions[currentQuestion].questionTitle;
  choicesEl.textContent = "";
  for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
    let button = document.createElement("button");
    button.textContent = questions[currentQuestion].choices[i];
    button.setAttribute("value", questions[currentQuestion].choices[i]);
    button.onclick = checkAnswer;
    choicesEl.appendChild(button);
  }
}

function startQuiz() {
  console.log("here");
  startScreen.setAttribute("class", "hide");
  questionsElement.removeAttribute("class");
  renderQuestions();
  startTimer();
}

function startTimer() {
  countdown = setInterval(() => {
    timer.textContent = currentTime;
    currentTime--;
    if (currentTime === 0) {
      clearInterval(countdown);
    }
  }, 1000);
}
startButton.onclick = startQuiz;
