const buttons = document.querySelectorAll("button");
let user_input = "";
let calc_done = false;

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
      user_input += button_clicked;
      console.log(user_input);
      document.querySelector("input").value = user_input;
    }
  });
});
