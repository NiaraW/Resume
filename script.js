function calculateSum() {
    // Get the values of the two input fields
    let number1 = parseFloat(document.getElementById('number1').value);
    let number2 = parseFloat(document.getElementById('number2').value);

    // Check if the inputs are valid numbers
    if (isNaN(number1) || isNaN(number2)) {
        document.getElementById('resultText').textContent = 'Invalid input!';
        return;
    }

    // Calculate the sum
    let sum = number1 + number2;

    // Display the result inside the circle
    document.getElementById('resultText').textContent = sum;
}