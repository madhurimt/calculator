const buttons = document.querySelectorAll("button");
let user_input = "";
let calc_done = false;
const operators = [...document.querySelectorAll(".operator")].map(
  (element) => element.textContent
);

buttons.forEach(function (btn) {
  btn.addEventListener("click", (e) => {
    const button_clicked = e.currentTarget.textContent;
    if (calc_done && button_clicked !== "C") {
      user_input = button_clicked;
      document.querySelector("input").value = user_input;
      calc_done = false;
    } else if (button_clicked == "=") {
      if (user_input !== "") {
        let answer = eval(user_input);
        document.querySelector("input").value = answer;
        calc_done = true;
      }
    } else if (button_clicked == "C") {
      user_input = "";
      document.querySelector("input").value = user_input;
    } else {
      if (
        operators.includes(button_clicked) &&
        operators.includes(user_input.charAt(user_input.length - 1))
      ) {
        console.log("i m in here");
        user_input =
          user_input.substring(0, user_input.length - 1) + button_clicked;
      } else {
        user_input += button_clicked;
      }
      document.querySelector("input").value = user_input;
    }
  });
});
