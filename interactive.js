let button = document.querySelector(".rating");
let question = document.querySelector("#question");
let response = document.querySelector("#response");
let submit = document.querySelector("#submit");
let active = document.querySelector(".active");
let span = document.querySelector("#chosen");

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
