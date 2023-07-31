function calculatePercentage() {
    const scoreInput = document.getElementById("score").value;
    const totalInput = document.getElementById("total").value;
    
    const score = parseInt(scoreInput);
    const total = parseInt(totalInput);
    
    if (!isNaN(score) && !isNaN(total) && total !== 0) {
        const percentage = (score / total) * 100;
        document.getElementById("result").innerText = `Percentage: ${percentage.toFixed(2)}%`;
    } else {
        document.getElementById("result").innerText = "Invalid input. Please enter valid numbers.";
    }
}


function calculateDiscountedPrice() {
    const priceInput = document.getElementById("price").value;
    const discountInput = document.getElementById("discount").value;

    const price = parseFloat(priceInput.replace(/,/g, ''));
    const discount = parseFloat(discountInput);

    if (!isNaN(price) && !isNaN(discount)) {
        const discountedPrice = price - (price * discount / 100);
        document.getElementById("discounted-price").innerText = `Item's Price After Discount: $${addCommas(discountedPrice.toFixed(2))}`;
    } else {
        document.getElementById("discounted-price").innerText = "Invalid input. Please enter numbers only.";
    }
}

function calculateTimeToSave() {
    const monthlyIncome = parseFloat(document.getElementById('monthlyIncome').value.replace(/,/g, ''));
    const monthlyExpenses = parseFloat(document.getElementById('monthlyExpenses').value.replace(/,/g, ''));
    const itemCost = parseFloat(document.getElementById('itemCost').value.replace(/,/g, ''));

    if (!isNaN(monthlyIncome) && !isNaN(monthlyExpenses) && !isNaN(itemCost)) {
        const monthlySavings = monthlyIncome - monthlyExpenses;
        if (monthlySavings <= 0) {
            document.getElementById('timeToSaveResult').innerHTML = "You need to reduce your Monthly Expenses or increase your Monthly Income to afford this item.";
        } else {
            const timeToSave = Math.ceil(itemCost / monthlySavings);
            const plural = timeToSave === 1 ? '' : 's';
            const formattedTimeToSave = timeToSave.toLocaleString();
            document.getElementById('timeToSaveResult').innerHTML = `It will take approximately ${formattedTimeToSave} month${plural} to save for this item.`;
        }
    } else {
        document.getElementById('timeToSaveResult').innerHTML = "Please enter valid numbers.";
    }
}

function calculateMoneyLeft() {
    const bankBalance = parseFloat(document.getElementById('bankBalance').value.replace(/,/g, ''));
    const weddingCost = parseFloat(document.getElementById('weddingCost').value.replace(/,/g, ''));
    const housingChoice = document.getElementById('housingChoice').value;
    const houseRent = parseFloat(document.getElementById('houseRent').value.replace(/,/g, ''));
    const houseCost = parseFloat(document.getElementById('houseCost').value.replace(/,/g, ''));
    const houseFurnitureCost = parseFloat(document.getElementById('houseFurniture').value.replace(/,/g, ''));

    let moneyLeft = bankBalance - weddingCost;

    if (housingChoice === 'rent') {
        moneyLeft -= (houseFurnitureCost + houseRent * 12);
    } else if (housingChoice === 'buy') {
        moneyLeft -= (houseCost + houseFurnitureCost);
    }

    if (moneyLeft >= 0) {
        document.getElementById('moneyLeftResult').innerHTML = `You will have approximately $${moneyLeft.toLocaleString()} left after all of this.`;
    } else {
        document.getElementById('moneyLeftResult').innerHTML = "You need to increase your monthly income or reduce your monthly expenses or save more money to afford the wedding.";
    }
}

function toggleHousingInput() {
    const housingChoice = document.getElementById('housingChoice').value;
    const rentHouseContainer = document.querySelector('.rent-house-container');
    const buyHouseContainer = document.querySelector('.buy-house-container');

    if (housingChoice === 'rent') {
        rentHouseContainer.style.display = 'block';
        buyHouseContainer.style.display = 'none';
    } else if (housingChoice === 'buy') {
        rentHouseContainer.style.display = 'none';
        buyHouseContainer.style.display = 'block';
    }
}


function addCommas(number) {
    const parts = number.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}

function handleNumberInput(inputElement) {
    const currentValue = inputElement.value;
    const cleanedValue = currentValue.replace(/,/g, '');
    const formattedValue = addCommas(cleanedValue);
    inputElement.value = formattedValue;
}


function navigateToExamScore() {
    window.location.href = "exam_score.html";
}

function navigateToPriceCalculator() {
    window.location.href = "price_calculator.html";
}

function navigateToSavingsCalculator() {
    window.location.href = "save_money.html";
}

function navigateToWeddingCalculator() {
    window.location.href = "wedding_planner.html";
}



function goBack() {
    window.history.back();
}

// Get Inputs
document.getElementById("score").addEventListener("input", function() {
    handleNumberInput(this);
});

document.getElementById("total").addEventListener("input", function() {
    handleNumberInput(this);
});

document.getElementById("price").addEventListener("input", function() {
    handleNumberInput(this);
});

document.getElementById("discount").addEventListener("input", function() {
    handleNumberInput(this);
});

document.getElementById("timeToSaveButton").addEventListener("click", function() {
    calculateTimeToSave();
});
