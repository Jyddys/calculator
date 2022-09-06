




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
function operate(userInput) {
  userInput = prompt("+ - / or *");
  let num1 = parseInt(prompt("Enter value"));
  let num2 = parseInt(prompt("Enter 2 value"));
  if(userInput == "+") {
    return add(num1,num2)
  } else if(userInput == "-") {
    return sub(num1,num2)
  } else if(userInput == "/") {
    return divide(num1,num2)
  } else if(userInput == "*" ) {
    return multiply(num1,num2)
  } else {
    console.log(null);
    return "YRITÄ UUDELLEEN"
  }
}

const btn = document.getElementById("display");
btn.addEventListener('click', () => {
  alert("hello");
});

