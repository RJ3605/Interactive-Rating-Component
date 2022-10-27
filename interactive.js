var button = document.getElementsByClassName("rating");
let question = document.getElementById("question");
let response = document.getElementById("response");
let submit = document.getElementById("submit");
let active = document.getElementsByClassName("active");
let span = document.getElementById("chosen");

response.hidden = true;

const ratings = document.querySelectorAll(`.rating`);
ratings.forEach((rating) => {
  rating.addEventListener(`click`, (event) => {
    document.querySelector(`.rating.active`)?.classList.remove(`active`);
    event.currentTarget.classList.add(`active`);
    span.textContent = event.currentTarget.textContent;
  });
});

submit.addEventListener("click", () => {
  question.hidden = true;
  response.hidden = false;
});
