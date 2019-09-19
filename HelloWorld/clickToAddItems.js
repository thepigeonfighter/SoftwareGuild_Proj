function clearErrors() {
    for (let i = 0; i < document.forms['numberFun'].elements.length; i++) {
        const element = document.forms['numberFun'].elements[i];
        if (element.parentElement.className.indexOf('has-') !== -1) {
            element.parentElement.className = 'form-group';
        }

    }
}
function resetForm() {
    clearErrors();
    document.forms['numberFun']['num1'].value = "";
    document.forms['numberFun']['num2'].value = "";
    document.getElementById('results').style.display = 'none';
    document.getElementById('submitButton').innerText = 'Submit';
    document.forms['numberFun']['num1'].focus();
}
function validateItems() {
    clearErrors();
    var num1 = document.forms["numberFun"]["num1"].value;
    var num2 = document.forms["numberFun"]["num2"].value;
    if (num1 == "" || isNaN(num1)) {
        alert("Num1 must be filled in with a number.");
        document.forms["numberFun"]["num1"]
           .parentElement.className = "form-group has-error";
        document.forms["numberFun"]["num1"].focus();
        return false;
    }
   if (num2 == "" || isNaN(num2)) {
       alert("Num2 must be filled in with a number.");
       document.forms["numberFun"]["num2"]
          .parentElement.className = "form-group has-error"
       document.forms["numberFun"]["num2"].focus();
       return false;
   }
   document.getElementById("results").style.display = "block";
   document.getElementById("submitButton").innerText = "Recalculate";
   document.getElementById("addResult").innerText = Number(num1) +
                                                     Number(num2);
   document.getElementById("subtractResult").innerText = num1 - num2;
   document.getElementById("multiplyResult").innerText = num1 * num2;
   document.getElementById("divideResult").innerText = num1 / num2;
   // We are returning false so that the form doesn't submit 
   // and so that we can see the results
   return false;
}
function checkElementForNumber(e) {
    if (e.value == "" || isNaN(e.value)) {
        return false;
    }
    else {
        return true;
    }
}
function setErrorOnElement(e)
{
    e.parentElement.className = ('form-group has-error');
    e.focus();
    alert("Nums must be nummy!");
    return false;
}