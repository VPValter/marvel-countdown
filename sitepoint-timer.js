var blackwidowrd = '2020-11-06';
var eternalsrd = '2021-02-12';
var shangchird = '2021-05-07';
var strange2rd = '2021-11-05';
// var spider3rd = '2021-07-16';
var thor4rd = '2022-02-18';

function getRemainingTime(release) {
    var t = Date.parse(release) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function startClock(id, release) {
    var clock = document.getElementById(id);
    var interval = setInterval(function () {
        var t = getRemainingTime(release);
        clock.innerHTML = `
            <span>${t.days} days, ${t.hours} hours, ${t.minutes} minutes & ${t.seconds} seconds</span>
        `;
        if (t.total <= 0) {
            clearInterval(interval);
        }
    }, 1000);
}

startClock('blackwidow', blackwidowrd);
startClock('eternals', eternalsrd);
startClock('shangchi', shangchird);
startClock('strange2', strange2rd);
// startClock('spider3', spider3rd);
startClock('thor4', thor4rd);