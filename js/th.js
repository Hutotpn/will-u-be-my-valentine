document.addEventListener("DOMContentLoaded", function () {
  const yesButton = document.getElementById("yesButton");
  const noButton = document.getElementById("noButton");
  const responseMessage = document.getElementById("responseMessage");

  const questions = [
    "แน่ใจหรอ?",
    "คุณแน่ใจจริงๆหรอ??",
    "แน่ใจจริงๆหรอ???",
    "คิดดูอีกครั้งเถอะ?",
    "เชื่อโอกาสครั้งที่สองมั้ย?",
    "ทำไมคุณถึงเย็นชาขนาดนี้? 😢",
    "บางทีเราสามารถคุยเกี่ยวกับเรื่องนี้ได้?",
    "ฉันจะไม่ถามอีกแล้วนะ! 😡",
    "โอเค ตอนนี้มันกำลังทำร้ายความรู้สึกของฉัน! 😭",
    "ตอนนี้คุณก็แค่ใจร้าย! 😭",
    "ทำไมถึงทำกับฉันได้? 😭",
    "โปรดให้โอกาสฉันด้วย! 🙏",
    "ฉันขอร้องให้คุณหยุด! 🙏",
  ];

  let questionIndex = 0;

  yesButton.addEventListener("click", function () {
    responseMessage.innerText = "เย้้! เจอกันเร็วๆ นี้้้ ❤️";
    noButton.style.display = "none";
  });

  noButton.addEventListener("click", function () {
    noButton.innerText = questions[questionIndex];
    questionIndex = (questionIndex + 1) % questions.length;
  });
});
