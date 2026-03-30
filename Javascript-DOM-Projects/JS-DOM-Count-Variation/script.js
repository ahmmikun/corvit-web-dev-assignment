const increaseButton = document.querySelector(".counter__button--increase");
const decreaseButton = document.querySelector(".counter__button--decrease");
const counterValue = document.querySelector(".counter__value");
const resetButton = document.querySelector(".counter__reset-button");
const counterContainer = document.querySelector(".counter");

function updateCounterState(value) {
    if (value >= 5) {
        counterContainer.style.backgroundColor = "red";
        return;
    }

    counterContainer.style.backgroundColor = "#bef227";
}

resetButton.addEventListener("click", function(){
    counterValue.textContent = 0;
    updateCounterState(0);
});

decreaseButton.addEventListener("click", function() {
    const currentValue = counterValue.textContent;
    const currentValueAsNumber = +currentValue;
    let newValue = currentValueAsNumber - 1 ;
    if(newValue < 0){
        newValue = 0;
    }
    counterValue.textContent = newValue;
    updateCounterState(newValue);
});

increaseButton.addEventListener("click", function() {
    const currentValue = counterValue.textContent;
    const currentValueAsNumber = +currentValue;
    let newValue = currentValueAsNumber + 1;

    if (currentValueAsNumber >= 5) {
        newValue = 5;
    }

    counterValue.textContent = newValue;
    updateCounterState(newValue);
});
