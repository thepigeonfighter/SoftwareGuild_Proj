function validateItems() {
    var startingNumElement = document.getElementById('starting-num');
    var stopNumElement = document.getElementById('stopping-num');
    var stepNumElement = document.getElementById('step-num');
    var elements = [startingNumElement, stopNumElement, stepNumElement];
    var startNum = parseInt(startingNumElement.value,10);
    var stopNum = parseInt(stopNumElement.value, 10);
    var step = parseInt(stepNumElement.value, 10);
    if (checkAllHaveNums(elements)) {

        if (startNum > stopNum) {
            alert("Starting number cant be greater than ending number!");

            return false;
        }
        if (step <= 0) {
            alert("Step cannot be equal or less than zero!");
            return false;
        }
        var results = getResults(startingNumElement.value, stopNumElement.value, stepNumElement.value);
        showResults(results);
        return false;
    }

}
function showResults(results) {
    var resultElement = document.getElementById('results');
    if (results.length == 0) {
        resultElement.innerText = "There were no even numbers using the given input.";
    } else {
        var displayMessage = "Here are the even numbers using the given input\n";
        for (var result in results) {
            displayMessage += results[result] + '\n';
        }
        resultElement.innerText = displayMessage;
    }
}
function getResults(startingNum, stoppingNum, step) {
    var results = [];
    var counter = parseInt(startingNum, 10);
    while (true) {
        if (counter % 2 == 0) {
            results.push(counter);
        }
        counter += parseInt(step, 10);
        if (counter > stoppingNum) {
            break;
        }
    }
    return results;

}
function checkAllHaveNums(elements) {
    elements.forEach(x => { if (!checkElementForNumber(x)) { setErrorOnElement(x); } })
    return true;
}
function checkElementForNumber(e) {
    if (e.value == "" || isNaN(e.value)) {
        return false;
    }
    else {
        return true;
    }
}
function setErrorOnElement(e) {
    e.parentElement.className = ('form-group has-error');
    e.focus();
    alert("Nums must be nummy!");
    return false;
}
function initTooltip() {
    $('[data-toggle="tooltip"]').tooltip()
}