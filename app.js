// Timer
let minHand = document.getElementById("min");
let secHand = document.getElementById("sec");
let time = document.getElementById("time")

// Buttons
let resetButton = document.getElementById("reset");
let startButton = document.getElementById("start");
let pauseButton = document.getElementById("pause");

// Text
let pomoTimer = document.getElementById("pomo")
let breakTimer = document.getElementById("break")

// Sound
let bell = new Audio("./bell.mp3")
let click = new Audio("./click.mp3")

let startTimer;

window.addEventListener("keyup", handleKeyPress);

time.addEventListener("load", setValue());


function setValue() {
    minHand.innerText = "00"
    secHand.innerText = "05";
    breakTimer.innerText = "";
}

function startBreak() {
    minHand.innerText = "00";
    secHand.innerText = "03";
    pomoTimer.innerText = "Break";
}


function handleKeyPress() {
    if (startTimer == undefined) {
        startButton.click();
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
startButton.addEventListener("click", function () {
    click.play()
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
        bell.play();
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
    minHand.innerText = "00"
    secHand.innerText = "05";
    pomoTimer.innerText = "";
    breakTimer.innerText = "Pomodoro"
    clearInterval(startTimer);
    startTimer = undefined;
});

