function OnContactSubmit(form) {
    //most validation is done in html
    //assert that at least one check box is selected
    var dayPicked = false;
    for (let i = 0; i < form.elements.length; i++) {
        const element = form.elements[i];
        if (element.type == 'checkbox') {
            dayPicked = dayPicked || element.checked;
        }

    }
    if (!dayPicked) {
        alert("Please choose best day(s) to contact you.")
    }
    else {
        alert("Your input has been processed.");
    }

    return false;
}