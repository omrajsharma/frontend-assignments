const randomNumber = Math.floor(Math.random() * 100)

const counter = document.querySelector('#counter')
const programResponse = document.querySelector('#programResponse')
const guessedNumber = document.querySelector('#guessedNumber')
const submitButton = document.querySelector('#submitButton')

let counterValue = 0

submitButton.addEventListener('click', (e) => {
    e.preventDefault()

    counterValue++
    counter.textContent = counterValue

    if (guessedNumber.value == randomNumber) {
        programResponse.textContent = 'You guessed the number in ' + counterValue + ' tries!'
        programResponse.style.color = 'green'
        counterValue = 0
    } else if (guessedNumber.value > randomNumber) {
        programResponse.textContent = 'Too high!'
        programResponse.style.color = 'red'
    } else if (guessedNumber.value < randomNumber) {
        programResponse.textContent = 'Too low!'
        programResponse.style.color = 'red'
    } else {
        programResponse.textContent = 'Please enter a valid number'
        programResponse.style.color = 'red'
    }
})