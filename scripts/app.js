// create a analog clock
const date = new Date();
const secondAnalog = document.querySelector('.clockAnalog .second');
const minAnalog = document.querySelector('.clockAnalog .minute');
const hourAnalog = document.querySelector('.clockAnalog .hour');
let deg = 6;
let second = date.getSeconds() * 6; 
let min = (date.getMinutes() * 6) + (6 / 360) * second;

// hour
let Hours = date.getHours();
if(Hours >= 13){
  Hours = Hours - 12;
}

if(Hours == 12){
  Hours = 0;
}

let setHours = (Hours * 30) + (30 * min) / 360;
const colorsDiv = document.querySelector('#colorParent p');
var updateSecods = setInterval(()=>{
  let ran1 = Math.random() * 10;
  let ran2 = Math.random() * 10;
  let ran3 = Math.random() * 10;
  ran1 = Math.floor(ran1);
  ran2 = Math.floor(ran2);
  ran3 = Math.floor(ran3);
  secondAnalog.style.transform = `rotate(${second}deg)`;
  minAnalog.style.transform = `rotate(${min}deg)`;
  hourAnalog.style.transform = `rotate(${setHours}deg)`;
  min = min + 0.1;
  second = second + 6;
  setHours = setHours + (1 / 120);
  document.body.style.backgroundColor = `rgb(${ran1*28},${ran2*20},${ran3*ran1*5})`;
  colorsDiv.style.color = `rgb(${ran1*28},${ran2*20},${ran3*ran1*5})`;
  colorsDiv.innerText = `COLOR-CODE: rgb(${ran1*28}, ${ran2*20},${ran3*ran1*5})`;
},1000);
