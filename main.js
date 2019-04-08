// Dual calculator function for working out basic sums as well as working out the square root and power of give numbers.

var calculatorFunction = prompt("Which calculator would you like to use: (b)asic or (a)dvanced)?");

if (calculatorFunction.toLowerCase() == "b") {
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
else if (calculatorFunction.toLowerCase() == "a") {
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
else {
  alert("Invalid entry. Please try again.")
  var calculatorFunction = prompt("Which calculator would you like to use? ((b)asic or (a)dvanced)");

}

// How to take string inputs into a mathematical equation - chain together different inputs
// -> is it even possible with operators? - or do I need to create something specific and different?
