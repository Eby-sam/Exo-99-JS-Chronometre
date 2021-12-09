// Make it count up on a timer, calling this function
let seconds = document.getElementById("seconds");
let time = 0;
let go = true;
let countUp = function() {
    seconds.innerHTML = time;
    time++;
    if (go === true) {
        setTimeout(countUp, 1000)
    }
};
countUp();

// How can you make it stop counting?

let stopCountUp = function() {
    go = false;
};

let stopButton = document.getElementById("stop-button");
stopButton.addEventListener("click", stopCountUp);
