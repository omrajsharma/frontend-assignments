let start = 1
let end = 100
let guess = 0
let guessCount = 0
const GuessNumber = document.getElementById("guess-number")

function randomNumberGenerator(start, end) {
    return Math.floor(Math.random() * (end - start + 1)) + start
}

guess = randomNumberGenerator(start, end)
GuessNumber.textContent = guess

function userInputHandle(type) {
    if (type === "high") {
        end = guess - 1
    } else if (type === "low") {
        start = guess + 1
    } else {
        alert("Game Over! Program guessed the number in " + guessCount + " guesses. ")
        return
    }

    guess = randomNumberGenerator(start, end)
    GuessNumber.textContent = guess
    guessCount++
}