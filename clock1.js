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

// Lets you input your start time 
let startTime="07:13";
const hourSelect = document.querySelector("#start_time");
hourSelect.onchange = (event) => {
  console.log(event.target.value);
  startTime = event.target.value;

  console.log({ startTime });
};

// How long did you take your first meal Period
let mealPeriod1 = 30;
const mealPeriodInput1 = document.querySelector("#mealPeriod1");
mealPeriodInput1.onchange = (event) => {
  mealPeriod1 = event.target.value;
};

// value on js works. If you input your own value, it spits extra numbers
let mealPeriod2 = 30;
const mealPeriodInput2 = document.querySelector("#mealPeriod2");
mealPeriodInput2.onchange = (event) => {
  mealPeriod2 = event.target.value;
};

// This works
let buffer = 0;
const bufferInput = document.querySelector("#buffer");
bufferInput.onchange = (event) => {
  buffer = event.target.value;
};

//Calculate button

let calculator;
const button = document.querySelector("#calculator");

button.addEventListener("click", updateButton);

function timeToMinutes(hours, min){
  return (60*hours) + min;
}

function minutesToTime(min){
  let res = "";
  let h = Math.floor(min/60);
  let m = min%60;
  return `${h}:${m}`;
}

function minutesToHours(minutes) {
  const hours = (minutes / 60)
  return;
}

// Calculates for the 3 Display boxes
function updateButton() {
// parseInt works! How come buffer doesn't need it?
  // Start time + 4:59 - Buffer
  let firstMealPeriodTime = timeToNumber(startTime) + timeToNumber('04:59') - buffer;
  
  //equation for Meal Period 2
  // Start time + 9:59 + mealPeriod1 - buffer
  let secondMealPeriodTime = timeToNumber(startTime) + timeToNumber('09:59') + parseInt(mealPeriod1) - buffer;

  //Equation for twelfthHour
  // Start time + 12 + mealPeriod1 + mealPeriod2
  let twelfthHourTime = timeToNumber(startTime) + timeToNumber('12:00') + parseInt(mealPeriod1) + parseInt(mealPeriod2);

  // Gets Start time value on first Display box
  document.getElementById("mealPeriod1Answer").innerHTML = minutesToTimeFormat(firstMealPeriodTime);
  // document.getElementById("mealPeriod1answer").innerHTML = "hello time";
 
  // Gets second Display Box
  // WHY DO I LOSE 1 DIGIT?
  document.getElementById("mealPeriod2Answer").innerHTML = minutesToTimeFormat(secondMealPeriodTime);

  // Gets 3rd Display box
  // WHY DO I LOSE 1 DIGIT?
  document.getElementById("mealPeriod3Answer").innerHTML = minutesToTimeFormat(twelfthHourTime);
}

// type text '01:13' -> 73 type number
function timeToNumber(time) {
  let h = parseInt(time.slice(0, 2));
  let m = parseInt(time.slice(3, 5));
  return h*60 + m;
}

// minutes to "xx:xx"
// Minutes/60 + (residual= minutes) *Need to convert from Number to string* *How to add strings together* *Add AM PM*

// convert min to hours
// If hours > 12, subtract 12 and use PM
// otherwise use AM **Look at this very closely**
function minutesToTimeFormat(m) {
  let hConvert = Math.floor(m/60);
  let mConvert = m % 60;
  let amOrPm = 'AM';

  if (hConvert >= 24) {
    hconvert -= 24;
  }

  if (hConvert >= 12) {
    amOrPm = 'PM';
  }

  if (hConvert >= 13) {
    hConvert -= 12;
  }

// idk if this is will work, but I'm looking at my live clock
// This adds a "0" in front if Hour or Min less than 10 *THIS DID THE TRICK, BUT I DONT UNDERSTAND IT*
  hConvert = hConvert < 10 ? "0" + hConvert : hConvert;
  mConvert = mConvert < 10 ? "0" + mConvert : mConvert;

// If minutes is less than 10, Add a "0" in front (It kinda works...)
// How would I make it work with both hours and Minutes Display
// Start Time 7:35 breaks code too

  return hConvert.toString() + ':' + mConvert.toString() + ' ' + amOrPm;
}

// //Universal Time Equation
// function updateTime(initialTime, hoursAhead, minutesAhead, buffer = 0) {
//   // params: initialTime (string), 
//   // returns: { mealPeriodBreak1: string, mealPeriodBreak2: string }
//   console.log(initialTime);
//   let hours = parseInt(initialTime.slice(0, 2));
//   let minutes = parseInt(initialTime.slice(3, 5));
  
//   let t1Min = timeToMinutes(hours,minutes);
//   let t2Min = timeToMinutes(4,59);

//   let res = minutesToTime (t1Min + t2Min);


//   let totalMinutes = (hours*60) + minutes;

//   console.log("RES: " + typeof res);

//   //convert totalMinutes to Hours in decimal

//   console.log({ initialTime, hours, minutes, totalMinutes });

//   // For people who start work at night
//   if (hours >= 24) {
//     hours -= 24;
//   }

//   // *NOT WORKING* Adds AM/PM 
//   if (hours >= 12) {
//     let period = hours >= 12 ? "PM" : "AM";

//     let newTime = `${hours}:${minutes} ${period}`;
//     return newTime;
//   }
//   return res;
// }


