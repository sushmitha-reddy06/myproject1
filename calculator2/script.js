(function() {
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

    numberButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            handleNumberClick(e.target.textContent);
        });
    });

    operatorButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            handleOperatorClick(e.target.textContent);
        });
    });

    equal.addEventListener('click', function(e) {
        calculateResult();
        updateScreen(currentInput);
    });

    clear.addEventListener('click', function(e) {
        clearScreen();
    });

    backspace.addEventListener('click', function(e) {
        currentInput = currentInput.slice(0, -1);
        updateScreen(currentInput);
    });

    // Event listener for keyboard input using event delegation
    document.addEventListener('keydown', function(e) {
        const key = e.key;
        if (/^[0-9\+\-\*\/\.]$/.test(key)) {
            // Numbers and operators
            if (key === '.') {
                // Ensure only one decimal point in the input
                if (!currentInput.includes('.')) {
                    handleNumberClick('.');
                }
            } else {
                handleNumberClick(key);
            }
        } else if (key === 'Enter') {
            // Equal sign
            calculateResult();
            updateScreen(currentInput);
        } else if (key === 'Backspace') {
            // Backspace
            currentInput = currentInput.slice(0, -1);
            updateScreen(currentInput);
        }
    });
})();
