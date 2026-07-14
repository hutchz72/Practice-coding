const prompt = require("prompt-sync")();

function calculator() {
  let num1 = parseFloat(prompt("Enter the first number: "));
  let num2 = parseFloat(prompt("Enter the second number: "));
  let operation = prompt("Enter the operation (+, -, *, /, ^, %): ");
  let result;

  switch (operation) {
    case "+":
        result = num1 + num2;
      break;
    case "-":
        result = num1 - num2;
      break;
    case "*":
        result = num1 * num2;
      break;
    case "/":
        result = num1 / num2;
      break;
    case "^":
        for(i=1; i<=num2; i++) {
            if(i===1){
                result = num1;
            } else {
                result = result * num1;
            }
        }
      break;
    case "%":
        result = num1 % num2;
      break;
    default:
        console.log("ไม่สามารถทำงานได้เนื่องจากไม่สามารถวิเคราห์ค่าได้");
      break;
  }

  console.log(`Result: ${num1} ${operation} ${num2} = ${result}`);
}

calculator();
