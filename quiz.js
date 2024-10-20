// Function to check the user's answer
function checkAnswer() {
    // The correct answer to the quiz question
    const correctAnswer = "4";

    // Retrieve the user's selected answer by using document.querySelector
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // If no option is selected, provide feedback and return
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    const userAnswer = selectedOption.value;

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        // If correct, display this feedback
        document.getElementById("feedback").textContent = "Correct! Well done.";
    } else {
        // If incorrect, display this feedback
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
    }
}

// Add event listener to the "Submit Answer" button
document.getElementById("submit-answer").addEventListener('click', checkAnswer);
