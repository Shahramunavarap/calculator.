var screen = document.getElementById('screen');

function btnclick(value) {
    screen.value += value;
}

function clearScreen() {
    screen.value ="";
}

function calculateResult() {
    let screen = document.getElementById('screen');
    let result = eval(screen.value);
    screen.value = result;
}