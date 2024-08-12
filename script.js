function computeSimpleInterest() {
    let principal = getInputValue('amount');
    let rate = getInputValue('interestRate');
    let time = getInputValue('years');
    
    if (isValidInput(principal, rate, time)) {
        let simpleInterest = calculateSimple(principal, rate, time);
        let total = principal + simpleInterest;
        showResult('Simple Interest', simpleInterest, total);
    }
}

function computeCompoundInterest() {
    let principal = getInputValue('amount');
    let rate = getInputValue('interestRate');
    let time = getInputValue('years');
    let compounding = getInputValue('compoundTimes');

    if (isValidInput(principal, rate, time) && compounding > 0) {
        let compoundInterest = calculateCompound(principal, rate, time, compounding);
        let total = principal + compoundInterest;
        showResult('Compound Interest', compoundInterest, total);
    } else {
        alert('Please enter positive values for all fields.');
    }
}

function getInputValue(id) {
    return parseFloat(document.getElementById(id).value);
}

function isValidInput(principal, rate, time) {
    if (principal <= 0 || rate <= 0 || time <= 0) {
        alert('Please enter positive values for Loan Amount, Interest Rate, and Duration.');
        return false;
    }
    return true;
}

function calculateSimple(principal, rate, time) {
    return (principal * rate * time) / 100;
}

function calculateCompound(principal, rate, time, compounding) {
    return principal * Math.pow((1 + (rate / (compounding * 100))), (compounding * time)) - principal;
}

function showResult(type, interest, total) {
    alert(`${type} calculated successfully.`);
    document.getElementById('output').innerText = `${type}: $${interest.toFixed(2)}, Total Amount: $${total.toFixed(2)}`;
}
