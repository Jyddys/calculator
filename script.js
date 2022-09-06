




// Add
function add(num1,num2) {
 console.log(num1 + num2)
}

// Subtract
function sub(num1,num2) {
  console.log(num1 - num2)
}

// Multiply
function multiply(num1,num2) {
  console.log(num1 * num2)
}

// Divide
function divide(num1,num2) {
  console.log(num1 / num2)
}


// Operator
function operate(num1,num2) {
  let userInput = prompt("+ - / or *");
  num1 = parseInt(prompt("Enter value"));
  num2 = parseInt(prompt("Enter 2 value"));
  if(userInput == "+") {
    add(num1,num2)
  } else if(userInput == "-") {
    sub(num1,num2)
  } else if(userInput == "/") {
    divide(num1,num2)
  } else if(userInput == "*" ) {
    multiply(num1,num2)
  }
}
let display = document.getElementById('display')
display.innerHTML = operate();