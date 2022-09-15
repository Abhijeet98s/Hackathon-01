// Timer
let minHand = document.getElementById("min");
let secHand = document.getElementById("sec");
let time = document.getElementById("time")

// Buttons
let resetButton = document.getElementById("reset");
let playButton = document.getElementById("play");
let pauseButton = document.getElementById("pause");

let startTimer;

window.addEventListener("keyup", handleKeyPress);

time.addEventListener("load", setValue());


function setValue() {
    minHand.innerText = "01"
    secHand.innerText = "00";
}

function startBreak() {
    minHand.innerText = "02";
    secHand.innerText = "00";
}
// console.log(StartBreak);

function handleKeyPress() {
    if (startTimer == undefined) {
        playButton.click();
    }
    else if
        (startTimer != undefined) {
        pause.click();
    }
}

//Chrome Storage

// chrome.storage.local.set({key: value}, function() {
//     console.log('Value is set to ' + value);
//   });


// Start the timer
playButton.addEventListener("click", function () {
    if (startTimer === undefined) {
        startTimer = setInterval(timer, 1000);
    }
    else {
        alert("Timer is already running")
    }
});


// Timer countdown
function timer() {
    if (secHand.innerText != 0) {
        secHand.innerText--;
    }
    else if
        (minHand.innerText != 0 && secHand.innerText == 0) {
        secHand.innerText = 59;
        minHand.innerText--;
        if (minHand.innerText < 10) {
            minHand.innerText = "0" + minHand.innerText;
        }
    }
    else if (minHand.innerText == 0 && secHand.innerText == 0) {
        alert("Time is up");
        startBreak();
        clearInterval(startTimer);
        startTimer = undefined;
    }
}


// Pause the timer
pauseButton.addEventListener("click", function () {
    clearInterval(startTimer);
    startTimer = undefined;
});



// Reset the timer
resetButton.addEventListener("click", function () {
    minHand.innerText = "25"
    secHand.innerText = "00";
    clearInterval(startTimer);
    startTimer = undefined;
});

