const display = document.getElementById("display");
const buttons = document.querySelectorAll("button");
let expression = "";

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const value = btn.innerText;

    if (value === "Light" || value === "Dark") return;

    if (value === "AC") {
      expression = "";
      display.innerText = "";
    } 
    else if (value === "Esc") {
      expression = expression.slice(0, -1);
      display.innerText = expression;
    }
    else if (value === "=") {
      try {
        expression = eval(expression).toString();
        display.innerText = expression;
      } catch {
        display.innerText = "Error";
        expression = "";
      }
    } 
    else {
      expression += value;
      display.innerText = expression;
    }
  });
});

let isLight = false;
const toggleChange = document.querySelector('.toggleClass');

toggleChange.addEventListener("click", () => {
  if (!isLight) {
    document.body.style.background = "#eee";
    display.style.color = "#ffffffff";
    toggleChange.innerText = "Dark";
    buttons.forEach(
        btn =>{
            btn.style.color="black";
        }
    );
    
  } else {
    document.body.style.background = "#0b2027";
    display.style.color = "#fff";
    toggleChange.innerText = "Light";
    buttons.forEach(btn=>{
        btn.style.color="#fff";
    })
  }
  isLight = !isLight;
});