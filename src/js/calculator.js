const screen = document.querySelector('#screen');

const numButtons = document.querySelectorAll('#num');
const operatorButtons = document.querySelectorAll('#operator')

const delButton = document.querySelector('#del');
const equelButton = document.querySelector('#equel');
const resetButton = document.querySelector('#reset');
const dotButton = document.querySelector('#dot');

const operators = ["+", "-", "*", "/"]


delButton.addEventListener('click', deleteLast)
resetButton.addEventListener('click', reset)
equelButton.addEventListener('click', calculate)
dotButton.addEventListener('click', addDot)

numButtons.forEach(button => {
	button.addEventListener('click', () => {
		screen.value += button.value
	})
})

operatorButtons.forEach(operator => {
	operator.addEventListener('click', () => {
		if (!operators.includes(screen.value.slice(-1))) {
			switch (operator.value) {
				case "+":
					screen.value += "+";
					break;
				case "-":
					screen.value += "-";
					break;
				case "/":
					screen.value += "/";
					break;
				case "*":
					screen.value += "*";
					break;
				default:
					break;
			}
		} else {
			screen.value = screen.value.slice(0, -1) + operator.value;
		}
	})
})

function reset() {
	screen.value = "0";;
}

function calculate() {
	try {
		screen.value = eval(screen.value)
	} catch (error) {
		alert("Invalid input")
		reset()
	}
}

function deleteLast() {
	screen.value = screen.value.slice(0, -1) 
}

function addDot() {
	if (!'.'.includes(screen.value.slice(-1))) {
		screen.value += '.';
	} else {
		screen.value = screen.value.slice(0, -1)
	}
}