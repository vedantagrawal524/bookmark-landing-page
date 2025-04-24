const questions = document.querySelectorAll(".question");

questions.forEach((question) => {
  const button = question.querySelector(".dropdown-button");
  const answer = question.querySelector(".answer");
  const icon = question.querySelector(".dropdown-img");
  const ques = question.querySelector(".ques");

  ques.addEventListener("click", () => {
    button.classList.toggle("opened");
    answer.classList.toggle("opened");
    icon.classList.toggle("opened");
  });

  button.addEventListener("click", () => {
    button.classList.toggle("opened");
    answer.classList.toggle("opened");
    icon.classList.toggle("opened");
  });
});
