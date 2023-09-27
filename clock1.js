//Live Clock
setInterval(showTime, 1000);
function showTime() {
  // initialize data
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

let mealPeriod1;
console.log(hourSelect);
const mealPeriodInput1 = document.querySelector("#mealPeriod1");
mealPeriodInput1.onchange = (event) => {
  console.log(event.target.value);
  mealPeriod1 = event.target.value;
  console.log({ mealPeriod1 });
};
let mealPeriod2;
console.log(hourSelect);
const mealPeriodInput2 = document.querySelector("#mealPeriod2");
mealPeriodInput2.onchange = (event) => {
  console.log(event.target.value);
  mealPeriod2 = event.target.value;
  console.log({ mealPeriod2 });
};
//Calculate button

let calculator;
const button = document.querySelector("#calculator");

button.addEventListener("click", updateButton);

//equation for Meal Period 1 **Update comment**
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
  let mealPeriodTime1 = parseInt(document.getElementById("mealPeriod1").value);
  console.log ("updateButton: ", startTime, mealPeriodTime1);

  
  // equation for Meal Period 1 ITS WORKING
  let firstMealPeriodTime = updateTime(startTime, 4, 59);
  
  //equation for Meal Period 2
  
  let secondMealPeriodTime = updateTime(startTime, 9, 59, mealPeriodTime1);


  // Gets Start time value on first Display box
  document.getElementById("mealPeriod1answer").innerHTML = firstMealPeriodTime;
  // document.getElementById("mealPeriod1answer").innerHTML = "hello time";
  // Gets second Display Box
  document.getElementById("mealPeriod2answer").innerHTML = secondMealPeriodTime;


}

//Universal Time Equation
function updateTime(initialTime, hoursAhead, minutesAhead, buffer = 0) {
  // params: initialTime (string), 
  // returns: { mealPeriodBreak1: string, mealPeriodBreak2: string }
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
