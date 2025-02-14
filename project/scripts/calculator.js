// Get the current year and populate the #currentyear span in the footer
document.getElementById("currentyear").textContent = new Date().getFullYear();

// Get the document's last modified date and populate the #lastModified paragraph
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;


  // Create the buttons.
  const buttons = [
    ['7', '8', '9', '/', '('],      
    ['4', '5', '6', '*', ')'],     
    ['1', '2', '3', '-', '+/-'],      
    ['0', '.', 'C', '+', '='],      
    ['√', '%', 'x²', '⌫']        
];
const buttonsContainer = document.getElementById('buttons');
const display = document.getElementById('display');

// Function to append numbers to the display
function appendNumber(number) {
    display.value += number;
}

// Function to append operators to the display
function appendOperator(operator) {
    display.value += operator;
}

// Function to clear the display
function clearDisplay() {
    display.value = '';
}

// Function to erase one character from the display (backspace)
function eraseDisplay() {
    display.value = display.value.slice(0, -1);
}

// Function to calculate the result
function calculate() {
    try {
        // Evaluate the expression using the eval function
        display.value = eval(display.value);
        // Store the result in localStorage
        localStorage.setItem('lastResult', display.value); // Save last result
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to calculate the square root
function calculateSquareRoot() {
    try {
        display.value = Math.sqrt(eval(display.value));
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to calculate the square of a number
function calculateSquare() {
    try {
        display.value = Math.pow(eval(display.value), 2);
    } catch (error) {
        display.value = 'Error';
    }
}

// Function to toggle the sign of the current number
function toggleSign() {
    display.value = (parseFloat(display.value) * -1).toString();
}

// Function to handle modulo operation
function modulo() {
    display.value = display.value / 100;
}

// Dynamically create buttons and add event listeners
buttons.forEach(row => {
    row.forEach(buttonText => {
        const button = document.createElement('button');
        button.classList.add('btn');
        button.textContent = buttonText;

        // Add the "hide-mobile" class for buttons to hide on mobile
        if (buttonText === '(' || buttonText === ')' || buttonText === '√' || buttonText === '⌫' || buttonText === '+/-' || buttonText === 'x²' || buttonText === '%') {
            button.classList.add('hide-mobile');
        }

         // Add the "btn-equal" class to the "=" button for special styling
         if (buttonText === '=') {
            button.classList.add('btn-equal');
        }

        // Add event listeners for each button
        if (buttonText === 'C') {
            button.addEventListener('click', clearDisplay);
        } else if (buttonText === '⌫') {
            button.addEventListener('click', eraseDisplay);
        } else if (buttonText === '√') {
            button.addEventListener('click', calculateSquareRoot);
        } else if (buttonText === 'x²') {
            button.addEventListener('click', calculateSquare);
        } else if (buttonText === '=') {
            button.addEventListener('click', calculate);
        } else if (buttonText === ',') {
            button.addEventListener('click', () => appendOperator('.'));
        } else if (buttonText === '%') {
            button.addEventListener('click', modulo);
        } else if (buttonText === '+/-') {
            button.addEventListener('click', toggleSign);
        } else if (buttonText === '(' || buttonText === ')') {
            button.addEventListener('click', () => appendOperator(buttonText));
        } else {
            // For numbers and operators
            button.addEventListener('click', () => appendNumber(buttonText));
        }
        document.querySelector('.calculator').appendChild(button);
        buttonsContainer.appendChild(button);
    });
});

// Function to check for a saved result and display it on page load
window.onload = function() {
    const savedResult = localStorage.getItem('lastResult');
    if (savedResult) {
        display.value = savedResult; // Set the last result on the display
    }
}

// Save calculation history
function saveHistory(result) {
    let history = JSON.parse(localStorage.getItem('history')) || [];
    history.unshift(result);  // Add the new result at the start
    if (history.length > 5) history.pop();  // Keep only the last 5 results
    localStorage.setItem('history', JSON.stringify(history));
}
saveHistory(display.value);
