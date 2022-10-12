var button = document.getElementsByClassName("rating");
let question = document.getElementById("question");
let response = document.getElementById("response");
let submit = document.getElementById("submit");
let active = document.getElementsByClassName("active");
let span = document.getElementById("chosen");

response.hidden = true;

for (var i = button.length - 1; i > -1; i--) {
  var currentButton;
  button[i].onclick = function () {
    if (currentButton) {
      currentButton.classList.remove("active");
    }
    this.classList.add("active");
    currentButton = this;
    span.innerText = currentButton.innerText;
    submit.addEventListener("click", () => {
      question.hidden = true;
      response.hidden = false;
    });
  };
}
