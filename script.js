let startButton = document.querySelector("#start");
let startScreen = document.querySelector("#startScreen");
let questionsElement = document.querySelector("#questions");
let currentQuestion = 0;
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

function checkAnswer() {
  console.log(this.value);
  if (this.value === questions[currentQuestion].answer) {
    currentQuestion++;
    renderQuestions();
  }
}
function renderQuestions() {
  let questionTitleEl = document.querySelector("#question-title");
  let choicesEl = document.querySelector("#choices");
  questionTitleEl.textContent = questions[currentQuestion].questionTitle;
  choicesEl.textContent="";
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
}

startButton.onclick = startQuiz;
