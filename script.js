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
