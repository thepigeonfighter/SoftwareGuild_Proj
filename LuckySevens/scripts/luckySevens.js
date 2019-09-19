
function init() {
    var slider = document.getElementById('playSpeed');
    var output = document.getElementById('playSpeedLabel');
    slider.oninput = function () {
        output.innerHTML = 'Turns Per Second: ' + this.value;

    }
    slider.oninput();
}
var currentMoney = 0;
var currentRollCount = 0;
var winnings = 0;
function validateItems() {
    var element = document.getElementById('starting-bet');
    if (!checkElementForNumber(element)) {
        setErrorOnElement(element);
        return false;
    }
    var startingBet = parseInt(element.value);
    document.getElementById('startingBetStat').innerHTML = convertNumberToCurrency(startingBet);
    updateCurrentMoney(startingBet);
    currentMoney = startingBet;
    currentRollCount = 0;
    winnings = 0;
    playGame();
    return false;
}
//Main Game Loop
function playGame() {

    if (currentMoney <= 0) {
        console.log("Game-Over");
        updateRollCount(currentRollCount);
        updateWinnings(winnings);
        return;
    }
    var diceRoll1 = GetDiceRoll();
    var diceRoll2 = GetDiceRoll();
    updateDieImages(diceRoll1, diceRoll2);
    var roll = diceRoll1 + diceRoll2;
    if (roll == 7) {
        currentMoney += 4;
        winnings += 4;
        updateCurrentMoney(currentMoney,true);
    } else {
        currentMoney--;
        updateCurrentMoney(currentMoney,false);
    }
  
    currentRollCount++;
    var currentWaitTime = document.getElementById('playSpeed').value;
    var waitTime = 1 / currentWaitTime;
    waitTime *= 1000;
    window.setTimeout(playGame, waitTime);


}
function getNumFromDollarAmount(money) {
    var num = money.replace(/^\D+/g, '');
    num = parseInt(num);
    return num;
}
function updateWinnings(totalWinnings) {
    document.getElementById('totalWinnings').innerHTML = convertNumberToCurrency(totalWinnings);
    var bestMoney = getNumFromDollarAmount(document.getElementById('bestAmount').innerHTML);
    if (totalWinnings > bestMoney) {
        document.getElementById('bestAmount').innerHTML = convertNumberToCurrency(totalWinnings);
    }
}
function updateRollCount(rollCount) {
    document.getElementById('rollCount').innerHTML = rollCount;
    var bestCount = parseInt(document.getElementById('bestRollCount').innerHTML);
    if (bestCount < rollCount) {
        document.getElementById('bestRollCount').innerHTML = rollCount;
    }
}
function updateCurrentMoney(money, wonMoney) {
    var currentMoney = document.getElementById('currentMoney');
    currentMoney.innerHTML = 'Current Money : ' + convertNumberToCurrency(money);
    if (wonMoney) {
        currentMoney.className = 'text-success';
    } else {
        currentMoney.className = 'text-danger';
    }
}
//Will update the images of the die with the corresponding numbers
//that were generated on the last roll
function updateDieImages(num1, num2) {
    var die1 = document.getElementById('die1');
    var die2 = document.getElementById('die2');
    var img1 = GetImageLocation(num1);
    var img2 = GetImageLocation(num2);
    die1.src = img1;
    die2.src = img2;
    die1.srcset = img1;
    die2.srcset = img2;
}
//Converts a number to look like currency 
function convertNumberToCurrency(num) {
    return '$' + num.toFixed(2);
}

function resetForm() {
    var element = document.getElementById('starting-bet');
    element.value = "";
    updateDieImages(0, 0);
    updateCurrentMoney(0, true);
    document.getElementById('rollCount').innerHTML = 0;
    document.getElementById('bestRollCount').innerHTML = 0;
    document.getElementById('totalWinnings').innerHTML = '$0.00';
    document.getElementById('bestAmount').innerHTML = '$0.00';
    document.getElementById('startingBetStat').innerHTML = '$0.00';
}

function GetDiceRoll() {
    return Math.floor(Math.random() * 6 + 1);
}

function GetImageLocation(num) {
    switch (num) {
        case 0:
            return "images/Zero.png";
        case 1:
            return "images/One.png";
        case 2:
            return "images/Two.png";
        case 3:
            return "images/Three.png";
        case 4:
            return "images/Four.png";
        case 5:
            return "images/Five.png";
        case 6:
            return "images/Six.png";

        default:
            console.warn("invalid number was rolled by dice");
            break;
    }
}



function checkElementForNumber(e) {
    if (e.value == "" || isNaN(e.value) || e.value == '0') {
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
function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds) {
            break;
        }
    }
}
function closeDescription()
{
    var elements =document.getElementsByClassName('description');
    var parent = elements[0].parentNode;
    parent.removeChild(elements[0]);
}