(function () {
    let screen = document.querySelector('.screen');
    let numberButtons = document.querySelectorAll('.btn-grey');
    let operatorButtons = document.querySelectorAll('.btn-yellow');
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear');
    let backspace = document.querySelector('.btn-back');

    let currentInput = '';
    let currentOperator = '';

    function updateScreen(value) {
        screen.value = value;
    }

    function clearScreen() {
        currentInput = '';
        currentOperator = '';
        updateScreen('');
    }

    function handleNumberClick(value) {
        currentInput += value;
        updateScreen(currentInput);
    }

    function handleOperatorClick(operator) {
        if (currentInput !== '') {
            if (currentOperator === '') {
                currentOperator = operator;
                currentInput += operator;
                updateScreen(currentInput);
            } else {
                calculateResult();
                currentOperator = operator;
                currentInput += operator;
                updateScreen(currentInput);
            }
        }
    }

    function calculateResult() {
    console.log("Inside cal function")

        if (currentInput !== '' && currentOperator !== '') {
            let operands = currentInput.split(currentOperator);
            let num1 = parseFloat(operands[0]);
            let num2 = parseFloat(operands[1]);
            let result;

            switch (currentOperator) {
                case '+':
                    result = num1 + num2;
                    break;
                case '-':
                    result = num1 - num2;
                    break;
                case '*':
                    result = num1 * num2;
                    break;
                case '/':
                    result = num1 / num2;
                    break;
                default:
                    result = NaN;
            }

            currentInput = result.toString();
            currentOperator = '';
        }
    }

    numberButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            handleNumberClick(e.target.textContent);
        });
    });

    operatorButtons.forEach(function (button) {
        button.addEventListener('click', function (e) {
            handleOperatorClick(e.target.textContent);
        });
    });

    equal.addEventListener('click', function (e) {
        calculateResult();
        updateScreen(currentInput);
    });

    clear.addEventListener('click', function (e) {
        clearScreen();
    });

    backspace.addEventListener('click', function (e) {
        currentInput = currentInput.slice(0, -1);
        updateScreen(currentInput);
    });

    // Event listener for keyboard input
    document.addEventListener('keydown', function (e) {
        const key = e.key;
        console.log(key)
        console.log(key === 'Enter')
        // Check if the pressed key is a number, operator, or special key
        if (/^[0-9\+\-\*\/\.\=]|Enter$|^Backspace$|^Delete$/.test(key)) {
           

            console.log("INSIDE FIRST IF CONDITION")

            if (key === '=') {
                // Equal sign
                calculateResult();
                updateScreen(currentInput);
            } else if (key === 'Enter') {

                console.log("Inside enter CONDITION")
                // Ensure Enter key works as equal sign
                calculateResult();
               
                updateScreen(currentInput);
            } else if (key === 'Backspace') {
                // Backspace
                currentInput = currentInput.slice(0, -1);
                updateScreen(currentInput);
            } else if (key === '.') {
                // Ensure only one decimal point in the input
                if (!currentInput.includes('.')) {
                    handleNumberClick('.');
                }
            }
            else if (key === 'Delete') {
                clearScreen();
                
            } else {
                // Numbers and operators
                if (key === '*') {
                    handleOperatorClick(key);
                } else if (key === '/') {
                    handleOperatorClick(key);
                } else if (key === '+') {
                    handleOperatorClick(key);
                } else if (key === '-') {
                    handleOperatorClick(key);
                } else {
                    handleNumberClick(key);
                }
            }
        }
    });
})();
