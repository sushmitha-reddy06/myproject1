document.addEventListener('DOMContentLoaded',function() {
    let screen = document.querySelector('.screen'); //
    let numberButtons = document.querySelectorAll('.btn-grey'); // Rename button to numberButtons
    let operatorButtons = document.querySelectorAll('.btn-yellow'); // Select operator buttons
    let equal = document.querySelector('.btn-equal');
    let clear = document.querySelector('.btn-clear'); // Select the clear button
    let backspace = document.querySelector('.btn-back');

    numberButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let value = e.target.dataset.num;
            screen.value += value;
        })
    });

    operatorButtons.forEach(function(button) {
        button.addEventListener('click', function(e) {
            let operator = e.target.dataset.num;
            screen.value += operator;
        })
    });

    equal.addEventListener('click', function(e) {
        if (screen.value === '') {
            screen.value = "please enter";
        } else {
            let answer = eval(screen.value);
            screen.value = answer;
        };
    });

    clear.addEventListener('click', function(e) {
        screen.value = "";
    });

    backspace.addEventListener('click', function(e) {
            screen.value = screen.value.slice(0, -1);
        });
});