var isMouseTracking = false;
function updateMousePosition() {
    if (isMouseTracking)
    {
        var x = event.clientX;
        var y = event.clientY;
        document.getElementById('mousePositionX').innerText = x;
        document.getElementById('mousePositionY').innerText = y;
    } else {
        document.getElementById('mousePositionX').innerText = "";
        document.getElementById('mousePositionY').innerText = "";
    }
}
function toggleTracking()
{
    isMouseTracking = !isMouseTracking;
    if (isMouseTracking) {
        document.getElementById("trackingStatus")
            .innerText = "TRACKING";
    } else {
        document.getElementById("trackingStatus")
            .innerText = "NOT TRACKING";
    }
}