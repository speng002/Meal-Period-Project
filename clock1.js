//Live Clock
setInterval(showTime, 1000);
function showTime() {
  //
  let time = new Date();
  let hour = time.getHours();
  let min = time.getMinutes();
  let sec = time.getSeconds();
  am_pm = " AM";
  
  if (hour > 12) {
    hour -= 12;
    am_pm = " PM";
  }
  if (hour == 0) {
    hr = 12;
    am_pm = " AM";
  }
  hour = hour < 10 ? "0" + hour : hour;
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;

  let currentTime = hour + ":" + min + ":" + sec + am_pm;
  document.getElementById("clock").innerHTML = currentTime;
}
showTime();
//input test vaughan

let startTime;
const hourSelect = document.querySelector("#start_time");
hourSelect.onchange = (event) => {
  console.log(event.target.value);
  startTime = event.target.value;

  console.log({ startTime });
};

let lunch1;
console.log(hourSelect);
const lunchinput1 = document.querySelector("#lunch1");
lunchinput1.onchange = (event) => {
  console.log(event.target.value);
  lunch1 = event.target.value;
  console.log({ lunch1 });
};
let lunch2;
console.log(hourSelect);
const lunchinput2 = document.querySelector("#lunch2");
lunchinput2.onchange = (event) => {
  console.log(event.target.value);
  lunch2 = event.target.value;
  console.log({ lunch2 });
};
//Calculate button

let calculator;
const button = document.querySelector("#calculator");

button.addEventListener("click", updateButton);

//equation for Lunch time 1 **Update comment**
function timeToMinutes(hours, min){
  return (60*hours) + min;
}

function minutesToTime(min){
  let res = "";
  let h = Math.floor(min/60);
  let m = min%60;
  return `${h}:${m}`;
}


function updateButton() {
  let startTime = document.getElementById("start_time").value;
  let lunchTime1 = parseInt(document.getElementById("lunch1").value);
  console.log ("updateButton: ", startTime, lunchTime1);

  
  // equation for Lunch time 1 ITS WORKING
  let firstLunchTime = updateTime(startTime, 4, 59);
  
  //equation for Lunch time 2
  
  let secondLunchTime = updateTime(startTime, 9, 59, lunchTime1);


  // Gets Start time value on first Display box
  document.getElementById("lunch1answer").innerHTML = firstLunchTime;
  // document.getElementById("lunch1answer").innerHTML = "hello time";
  // Gets second Display Box
  document.getElementById("lunch2answer").innerHTML = secondLunchTime;


}

//Universal Time Equation
function updateTime(initialTime, hoursAhead, minutesAhead, buffer = 0) {
  // params: initialTime (string), 
  // returns: { lunchBreak1: string, lunchBreak2: string }
  console.log(initialTime);
  let hours = parseInt(initialTime.slice(0, 2));
  let minutes = parseInt(initialTime.slice(3, 5));
  
  let t1Min = timeToMinutes(hours,minutes);
  let t2Min = timeToMinutes(4,59);

  let res = minutesToTime (t1Min + t2Min);


  let totalMinutes = (hours*60) + minutes;

  console.log("RES: " + typeof res);

  //convert totalMinutes to Hours in decimal

  console.log({ initialTime, hours, minutes, totalMinutes });

  // For people who start work at night
  if (hours >= 24) {
    hours -= 24;
  }

  // *NOT WORKING* Adds AM/PM 
  if (hours >= 12) {
    let period = hours >= 12 ? "PM" : "AM";

    let newTime = `${hours}:${minutes} ${period}`;
    return newTime;
  }
  return res;
}

function minutesToHours(minutes) {
  const hours = (minutes / 60)
  return;
}
