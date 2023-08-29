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
	updateScreenValue()
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
	if (screenValue === '') return

	operation = selectedOperation
	firstNumber = screenValue
	screenValue = ''

	element.additionButton.classList.add('calculator__control--disabled')
	element.subtractionButton.classList.add('calculator__control--disabled')
	element.multiplicationButton.classList.add('calculator__control--disabled')
	element.divisionButton.classList.add('calculator__control--disabled')
}

export const onBackClick = () => {
	if (screenValue === '') return

	screenValue = screenValue.substring(0, screenValue.length - 1)
}

export const updateScreenValue = () => {
	element.screen.textContent = screenValue
}

export const clearScreenValue = () => {
	element.screen.textContent = ''
}

export const clearCalculator = () => {
	screenValue = ''
	firstNumber = ''
	operation = ''

	element.nineButton.classList.remove('calculator__control--disabled')
	element.eightButton.classList.remove('calculator__control--disabled')
	element.sevenButton.classList.remove('calculator__control--disabled')
	element.sixButton.classList.remove('calculator__control--disabled')
	element.fiveButton.classList.remove('calculator__control--disabled')
	element.fourButton.classList.remove('calculator__control--disabled')
	element.threeButton.classList.remove('calculator__control--disabled')
	element.twoButton.classList.remove('calculator__control--disabled')
	element.oneButton.classList.remove('calculator__control--disabled')
	element.zeroButton.classList.remove('calculator__control--disabled')
	element.commaButton.classList.remove('calculator__control--disabled')
	element.additionButton.classList.remove('calculator__control--disabled')
	element.subtractionButton.classList.remove('calculator__control--disabled')
	element.multiplicationButton.classList.remove('calculator__control--disabled')
	element.divisionButton.classList.remove('calculator__control--disabled')
	element.backButton.classList.remove('calculator__control--disabled')
	element.resultButton.classList.remove('calculator__control--disabled')
}

export const calculateResult = () => {
	if (firstNumber === '' || operation === '') return

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

	element.nineButton.classList.add('calculator__control--disabled')
	element.eightButton.classList.add('calculator__control--disabled')
	element.sevenButton.classList.add('calculator__control--disabled')
	element.sixButton.classList.add('calculator__control--disabled')
	element.fiveButton.classList.add('calculator__control--disabled')
	element.fourButton.classList.add('calculator__control--disabled')
	element.threeButton.classList.add('calculator__control--disabled')
	element.twoButton.classList.add('calculator__control--disabled')
	element.oneButton.classList.add('calculator__control--disabled')
	element.zeroButton.classList.add('calculator__control--disabled')
	element.commaButton.classList.add('calculator__control--disabled')
	element.backButton.classList.add('calculator__control--disabled')
	element.resultButton.classList.add('calculator__control--disabled')
}
