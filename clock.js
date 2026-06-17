

function startLiveClockEngine() {
    var today = new Date();
    var hours = today.getHours();
    var minutes = today.getMinutes();
    var seconds = today.getSeconds();
    
    minutes = fixZeroPrefix(minutes);
    seconds = fixZeroPrefix(seconds);
    
    var clockDisplay = document.getElementById('live-clock');
    if (clockDisplay) {
        clockDisplay.innerHTML = hours + ":" + minutes + ":" + seconds;
    }
    setTimeout(startLiveClockEngine, 1000);
}

function fixZeroPrefix(numberValue) {
    if (numberValue < 10) { 
        numberValue = "0" + numberValue;
    }
    return numberValue;
}