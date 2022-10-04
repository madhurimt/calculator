const buttons = document.querySelectorAll("button");
const screen = document.getElementById("calculation_screen");

buttons.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const button_clicked = e.currentTarget.textContent;
    console.log(button_clicked);
  });
});
