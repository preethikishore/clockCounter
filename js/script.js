let clockH = document.querySelector('.clock_hours');
let clockM = document.querySelector('.clock_minutes');
let clockS = document.querySelector('.clock_seconds');
let countdownDays = document.querySelector('.countdown_days');
let countdownHours = document.querySelector('.countdown_hours');
let countdownMinutes = document.querySelector('.countdown_minutes');
let countdownSeconds = document.querySelector('.countdown_seconds');
let finalDate = new Date('Jan 01,2021 00:30:00');
let second = 1000;
let minute = second * 60;
let hour = minute * 60;
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
    setInterval( () =>
    {
      upDateTime();
      updateCountDown();
      
     } , 1000);
}


let updateCountDown = () => {
  let now = new Date();
  let diff = now -  finalDate ;
  let diffObject = converMilliDHMS(diff);
  countdownDays.textContent = diffObject.days >=10 ? diffObject.days :'0'+diffObject.days;
  countdownMinutes.textContent = diffObject.minutes >=10 ? diffObject.minutes :'0'+diffObject.minutes;
  countdownHours.textContent = diffObject.hours >=10 ? diffObject.hours :'0'+diffObject.hours;
  countdownSeconds.textContent = diffObject.seconds >=10 ? diffObject.seconds :'0'+diffObject.seconds;
}

let converMilliDHMS = (millis) =>
{
  let days = Math.floor(millis / day);
  let hours = Math.floor(millis % day / hour);
  let minutes = Math.floor(millis % hour / minute);
  let seconds = Math.floor(millis % minute / second);
  return{days,hours,minutes,seconds};

}
startclock();