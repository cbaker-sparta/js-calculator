// Dual calculator function for working out basic sums as well as working out the square root and power of give numbers.

var calculatorFunction = prompt("Which calculator would you like to use: (1)basic, (2)advanced), (3)BMI?");

if (calculatorFunction == "1") {
  var stringBasicNum1 = prompt("Please enter first number:", "0");
  var basicOperator = prompt("Please enter the operator (+ , - , / , *):");
  var stringBasicNum2 = prompt("Please enter second number:", "0");
  var bNum1 = parseInt(stringBasicNum1);
  var bNum2 = parseInt(stringBasicNum2);
    if (basicOperator == "+") {
      alert(bNum1 + bNum2);
    }
    else if (basicOperator == "-"){
      alert(bNum1 - bNum2);
    }
    else if (basicOperator == "/") {
      alert(bNum1 / bNum2);
    }
    else if (basicOperator == "*") {
      alert(bNum1 * bNum2);
    }
    else {
      alert("Invalid entry. Please try again.")
    }
}
else if (calculatorFunction == "2") {
  var stringAdvNum1 = prompt("Please enter the number:", "0");
  var advOperator = prompt("Please choose square root(1) or power(2):");
  var aNum1 = parseInt(stringAdvNum1);
    if (advOperator == "1") {
      alert(Math.sqrt(aNum1));
    }
    else if (advOperator == "2") {
      var stringAdvNum2 = prompt("Please enter the number by which to multiply:", "0");
      var aNum2 = parseInt(stringAdvNum2);
      alert(Math.pow(aNum1, aNum2));
    }
    else {
      alert("Invalid entry. Please try again.")
    }
}
else if (calculatorFunction == "3") {
  var stringBmiNum1 = prompt("Please enter your height:", "0");
  var stringBmiNum2 = prompt("Please enter your weight:", "0");
  var bmiNum1 = parseInt(stringBmiNum1);
  var bmiNum2 = parseInt(stringBmiNum2);
    if (bmiNum1 != null && bmiNum2 != null) {
      alert("Your BMI is: " + (bmiNum2 / Math.sqrt(bmiNum1)));
    }
    else {
      alert("Invalid entry. Please try again.")
    }
}
else {
  alert("Invalid entry. Please try again.")
  var calculatorFunction = prompt("Which calculator would you like to use? ((b)asic or (a)dvanced)");
}
