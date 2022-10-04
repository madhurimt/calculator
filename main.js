const buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const button_clicked = e.currentTarget.textContent;
    if (button_clicked == "=") {
      string = eval(string);
      document.querySelector("input").value = string;
    } else if (button_clicked == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      string = string + button_clicked;
      document.querySelector("input").value = string;
    }
  });
});
