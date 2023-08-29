import { addition, subtraction, multiplication, division } from './utils/operations'
import * as element from './utils/elements'

let screenValue = ''
let firstNumber = ''
let operation = ''

element.nineButton.addEventListener('click', () => {
	onNumberClick(9)
	updateScreenValue()
})

element.eightButton.addEventListener('click', () => {
	onNumberClick(8)
	updateScreenValue()
})

element.sevenButton.addEventListener('click', () => {
	onNumberClick(7)
	updateScreenValue()
})

element.sixButton.addEventListener('click', () => {
	onNumberClick(6)
	updateScreenValue()
})

element.fiveButton.addEventListener('click', () => {
	onNumberClick(5)
	updateScreenValue()
})

element.fourButton.addEventListener('click', () => {
	onNumberClick(4)
	updateScreenValue()
})

element.threeButton.addEventListener('click', () => {
	onNumberClick(3)
	updateScreenValue()
})

element.twoButton.addEventListener('click', () => {
	onNumberClick(2)
	updateScreenValue()
})

element.oneButton.addEventListener('click', () => {
	onNumberClick(1)
	updateScreenValue()
})

element.zeroButton.addEventListener('click', () => {
	onNumberClick(0)
	updateScreenValue()
})

element.commaButton.addEventListener('click', () => {
	onNumberClick('.')
	updateScreenValue()
})

element.additionButton.addEventListener('click', () => {
	onOperationClick('+')
	clearScreenValue()
})

element.subtractionButton.addEventListener('click', () => {
	onOperationClick('-')
	clearScreenValue()
})

element.multiplicationButton.addEventListener('click', () => {
	onOperationClick('*')
	clearScreenValue()
})

element.divisionButton.addEventListener('click', () => {
	onOperationClick('/')
	clearScreenValue()
})

element.cleanButton.addEventListener('click', () => {
	clearCalculator()
})

element.backButton.addEventListener('click', () => {
	onBackClick()
	updateScreenValue()
})

element.resultButton.addEventListener('click', () => {
	calculateResult()
	updateScreenValue()
})

export const onNumberClick = (selectedNumber) => {
	screenValue += selectedNumber
}

export const onOperationClick = (selectedOperation) => {
	operation = selectedOperation
	firstNumber = screenValue
	screenValue = ''
}

export const onBackClick = () => {
	screenValue = screenValue.substring(0, screenValue.length - 1)
}

export const updateScreenValue = () => {
	element.screen.textContent = screenValue
}

export const clearScreenValue = () => {
	element.screen.textContent = null
}

export const clearCalculator = () => {
	screenValue = ''
	firstNumber = ''
	operation = ''
}

export const calculateResult = () => {
	switch (operation) {
		case '+':
			screenValue = addition(+firstNumber, +screenValue) + ''
			break
		case '-':
			screenValue = subtraction(+firstNumber, +screenValue) + ''
			break
		case '*':
			screenValue = multiplication(+firstNumber, +screenValue) + ''
			break
		case '/':
			screenValue = division(+firstNumber, +screenValue) + ''
			break
	}
}
