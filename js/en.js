document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const responseMessage = document.getElementById("responseMessage");

  const questions = [
    "Are you sure?",
    "Are you really sure??",
    "Are you really really sure???",
    "Think again?",
    "Don't believe in second chances?",
    "Why are you being so cold? 😢",
    "Maybe we can talk about it?",
    "I am not going to ask again! 😡",
    "Ok now this is hurting my feelings! 😭",
    "You are now just being mean! 😭",
    "Why are you doing this to me? 😭",
    "Please give me a chance! 🙏",
    "I am begging you to stop! 🙏",
  ];

  let questionIndex = 0;

  yesButton.addEventListener("click", function () {
    responseMessage.innerText = "Yepppie, see you sooonnn ❤️";
    noButton.style.display = "none";
  });

  noButton.addEventListener("click", function () {
    noButton.innerText = questions[questionIndex];
    questionIndex = (questionIndex + 1) % questions.length;
  });
});
