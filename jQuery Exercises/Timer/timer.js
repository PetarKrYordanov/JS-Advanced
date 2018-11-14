function timer() {
    let hours = $("#hours");
    let minutes = $("#minutes");
    let seconds = $("#seconds");

    $("#start-timer")
        .on("click", startTimer);

    $("#stop-timer")
        .on("click", stopTimer);

    let secondsVal = 0;
    let interval = null;

    function startTimer() {

        if (interval === null) {
            interval = setInterval(tick, 1000);
        }
    }

    function tick() {
        secondsVal++;
        hours.text(`0${Math.floor(secondsVal / 60 / 60)}`.slice(-2));
        minutes.text(`0${Math.floor((secondsVal / 60) % 60)}`.slice(-2));
        seconds.text(`0${Math.floor(secondsVal % 60)}`.slice(-2));

    }

    function stopTimer() {
        clearInterval(interval);
        interval = null;
    }

}
