const startButton = document.querySelector("#start");
const stopButton = document.querySelector("#stop");
let startTime,stopTime,interval;

function Time() {
    this.startTime = null;
    this.stopTime = null;
    this.interval = null;
}


Time.prototype.start = function start() {
    startTime = Date.now();

}
Time.prototype.stop = function stop() {
    stopTime = Date.now();
    interval = stopTime - startTime;
    console.log(`interval: ${interval} ms`);
}

let countTime = new Time;

// Свойство prototype может передать по ссылке свое значение
// всем потомкам функции-конструктора. 
// Если мы изменим значение у свойства prototype
// то это новое значение получат и все свойства,
// имеющие ссылку на объект prototype.

startButton.addEventListener("click", countTime.start);
stopButton.addEventListener("click", countTime.stop);

