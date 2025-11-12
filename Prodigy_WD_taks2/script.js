let minuteEl = document.getElementById('minutes');
let secondEl = document.getElementById('seconds');
let msecEl = document.getElementById('milliseconds');
let lapsList = document.getElementById('lapsList');

let startStopBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');
let lapBtn = document.getElementById('lapBtn');

let interval;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let running = false;

function updateTime() {
    milliseconds += 1;
    if (milliseconds > 99) {
        milliseconds = 0;
        seconds += 1;
    }
    if (seconds > 59) {
        seconds = 0;
        minutes += 1;
    }j

    minuteEl.textContent = minutes.toString().padStart(2, '0');
    secondEl.textContent = seconds.toString().padStart(2, '0');
    msecEl.textContent = milliseconds.toString().padStart(2, '0');
}

startStopBtn.addEventListener('click', () => {
    if (!running) {
        interval = setInterval(updateTime, 10);
        running = true;
        startStopBtn.textContent = 'Stop';
    } else {
        clearInterval(interval);
        running = false;
        startStopBtn.textContent = 'Start';
    }
});

resetBtn.addEventListener('click', () => {
    clearInterval(interval);
    running = false;
    minutes = 0;
    seconds = 0;
    milliseconds = 0;
    minuteEl.textContent = '00';
    secondEl.textContent = '00';
    msecEl.textContent = '00';
    lapsList.innerHTML = '';
    startStopBtn.textContent = 'Start';
});

lapBtn.addEventListener('click', () => {
    if (running) {
        let li = document.createElement('li');
        li.textContent = `${minutes.toString().padStart(2,'0')} : ${seconds.toString().padStart(2,'0')} : ${milliseconds.toString().padStart(2,'0')}`;
        lapsList.appendChild(li);
    }
});
