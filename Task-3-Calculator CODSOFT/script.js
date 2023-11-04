let input = document.getElementById("InputBox");
let buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      try {
        string = eval(string);
      } catch (error) {
        string = "Error";
      }
      input.value = string;
    } else if (e.target.innerHTML === "AC") {
      string = "";
      input.value = "";
    } else if (e.target.innerHTML === "DEL") {
      string = string.slice(0, -1);
      input.value = string;
    } else {
      string += e.target.innerHTML;
      input.value = string;
    }
  });
});
