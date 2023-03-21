const questionsList = [
  {
    questionId: 0,
    questionText: "Question 0?",
    answers: [
      { answerId: 0, answerText: "10", isCorrect: true },
      { answerId: 1, answerText: "20", isCorrect: false },
      { answerId: 2, answerText: "30", isCorrect: false },
      { answerId: 3, answerText: "40", isCorrect: false },
    ],
  },
  {
    questionId: 1,
    questionText: "Question 1?",
    answers: [
      { answerId: 0, answerText: "10", isCorrect: false },
      { answerId: 1, answerText: "20", isCorrect: true },
      { answerId: 2, answerText: "30", isCorrect: false },
      { answerId: 3, answerText: "40", isCorrect: false },
    ],
  },
  {
    questionId: 2,
    questionText: "Question 2?",
    answers: [
      { answerId: 0, answerText: "10", isCorrect: false },
      { answerId: 1, answerText: "20", isCorrect: false },
      { answerId: 2, answerText: "30", isCorrect: true },
      { answerId: 3, answerText: "40", isCorrect: false },
    ],
  },
  {
    questionId: 3,
    questionText: "Question 3?",
    answers: [
      { answerId: 0, answerText: "10", isCorrect: false },
      { answerId: 1, answerText: "20", isCorrect: false },
      { answerId: 2, answerText: "30", isCorrect: false },
      { answerId: 3, answerText: "40", isCorrect: true },
    ],
  },
];

//* DOM Variables */
const modalStartButton = document.querySelector(".modal-start-button");
const screenQuestion = document.querySelector(".screen h2");
const answerButtons = document.querySelectorAll(".answers-container button");

//* Loading page Modal
window.addEventListener("load", () => {
  const modal = document.querySelector(".modal");

  //* Close modal and show first question on the screen
  modalStartButton.addEventListener("click", () => {
    modal.classList.add("modal-hidden");

    //* Shuffle questionsList Array
    const shuffledQuestionsList = questionsList.sort(() => 0.5 - Math.random());

    screenQuestion.innerHTML = shuffledQuestionsList[0].questionText;
  });
});

//* Grab witch button was pressed
answerButtons.forEach((event) => {
  event.addEventListener("click", (button) => {
    console.log(button.target.classList.value);
  });
});

//* Show questions on the screen
