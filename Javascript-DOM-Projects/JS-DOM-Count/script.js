const increaseButton = document.querySelector('.counter_button--increase');
const decreaseButton = document.querySelector('.counter_button--decrease');
const counterValue = document.querySelector('.counter_value');
const resetButton = document.querySelector('.reset_button'); // fixed class


increaseButton.addEventListener("click", function () {
    const currentValue = counterValue.textContent;
    const currentValueAsNumber = +currentValue;
    const newValue = currentValueAsNumber + 1;

    counterValue.textContent = newValue;
});


decreaseButton.addEventListener("click", function () {
    const currentValue = counterValue.textContent;
    const currentValueAsNumber = +currentValue;

    // prevent negative numbers
    if (currentValueAsNumber > 0) {
        const newValue = currentValueAsNumber - 1;
        counterValue.textContent = newValue;
    }
});