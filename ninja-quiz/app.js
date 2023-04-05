const correctAnswers = ["B", "B", "B", "B"];
const quizForm = document.querySelector(".quiz-form");
const showResult = document.querySelector(".result");
const result_score = document.querySelector(".result--score");
quizForm.addEventListener("submit", function (e) {
  let score = 0;
  const userAnswers = [
    quizForm.q1.value,
    quizForm.q2.value,
    quizForm.q3.value,
    quizForm.q4.value,
  ];
  e.preventDefault();
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  scrollTo(0, 0);
  showResult.classList.remove("d-none");
  //
  // window object
  let output = 0;
  const timer = setInterval(() => {
    result_score.textContent = `${output}%`;
    if (output === score) {
      clearInterval(timer);
    } else {
      output++;
    }
  }, 10);
  //
});
