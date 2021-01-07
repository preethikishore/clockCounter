let clockH = document.querySelector('.clock_hours');
let clockM = document.querySelector('.clock_minutes');
let clockS = document.querySelector('.clock_seconds');
let finalDate = new Date('Jul 25,2020 00:00:00');
let seconds = 1000;
let minutes = seconds * 60;
let hour = minutes * 60;
let day = hour * 24;

let upDateTime = () => {
    let now = new Date();
    let hours = now.getHours() % 12 ;
    let minutes = now.getMinutes() ;
    let seconds = now.getSeconds();
    clockH.style.transform = `rotate(${360/12 * hours}deg)`;
    clockM.style.transform = `rotate(${360/60 * minutes}deg)`;
    clockS.style.transform = `rotate(${360/60 * seconds}deg)`;
}
let startclock = () =>
{
    upDateTime ();
  setInterval(upDateTime,1000);
}

startclock();