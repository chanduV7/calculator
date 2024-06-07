// Get the calculator buttons and display screen
const buttons = document.querySelectorAll('.button');
const display = document.querySelector('.display');

// Initialize variables for calculation
let num1 = '';
let num2 = '';
let operator = '';

// Add click event listeners to calculator buttons
buttons.forEach(button => {
  button.addEventListener('click', () => {
    const buttonValue = button.getAttribute('data-value');

    if (buttonValue === '+' || buttonValue === '-' || buttonValue === '*' || buttonValue === '/') {
      // Operator button clicked
      operator = buttonValue;
      display.textContent = '';
    } else if (buttonValue === 'C') {
      // Clear button clicked
      num1 = '';
      num2 = '';
      operator = '';
      display.textContent = '';
    } else if (buttonValue === '=') {
      // Equals button clicked
      const result = calculate(num1, num2, operator);
      display.textContent = result;
      num1 = result;
      num2 = '';
      operator = '';
    } else {
      // Number button clicked
      if (operator === '') {
        // First number entered
        num1 += buttonValue;
        display.textContent = num1;
      } else {
        // Second number entered
        num2 += buttonValue;
        display.textContent = num2;
      }
    }
  });
});

// Calculate the result of the operation
function calculate(num1, num2, operator) {
  num1 = parseFloat(num1);
  num2 = parseFloat(num2);

  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    case '/':
      return num1 / num2;
  }
}
