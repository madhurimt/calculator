const buttons = document.querySelectorAll("button");
let string = "";
let calc_done = false;

buttons.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const button_clicked = e.currentTarget.textContent;
    if (calc_done) {
      string = "";
      document.querySelector("input").value = string;
      calc_done = false;
    } else if (button_clicked == "=") {
      if (string !== "") {
        string = eval(string);
        document.querySelector("input").value = string;
        calc_done = true;
      }
    } else if (button_clicked == "C") {
      string = "";
      document.querySelector("input").value = string;
    } else {
      string = string + button_clicked;
      document.querySelector("input").value = string;
    }
  });
});
