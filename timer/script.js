const semicircles = document.querySelectorAll(".semicircle");
const timer = document.querySelector(".timer");
const add = document.querySelector(".btn1");

let hr =0; 
let min =1;
var sec= 0;




const hours = hr*3600000;
const minutes = min*60000;
const seconds = sec*1000;
const setTime = hours + minutes + seconds;
const startTime = Date.now();
const futureTime = startTime+setTime;

const timeloop = setInterval(countDownTime);

countDownTime();
function countDownTime(){
 
  const currentTime = Date.now();
  const timeLeft = futureTime - currentTime;
  const angle = (timeLeft/setTime)*360;
  
  

  //progress indicator 
  if(angle>180){
    semicircles[2].style.display = 'none';
    semicircles[0].style.transform = 'rotate(180deg)';
    semicircles[1].style.transform=`rotate(${angle}deg)`;
  }
  else{
    semicircles[2].style.display = 'block';
    semicircles[0].style.transform = `rotate(${angle}deg)`;
    semicircles[1].style.transform=`rotate(${angle}deg)`;

  }
  

  const hrs =Math.floor((timeLeft/(1000*60*60)) %24);
  const mins =Math.floor((timeLeft/(1000*60))%60);
  const secs =Math.floor((timeLeft/(1000)) %60);
  console.log(hrs,mins,secs)

  //timer

  timer.innerHTML =`
  
  <div>${hrs}</div>
  <div class="colon">:</div>
  <div>${mins}</div>
  <div class="colon">:</div>
  <div>${secs}</div>
  `;

  if(timeLeft<0){
    clearInterval(timeloop);
    semicircles[0].style.display = 'none';
    semicircles[1].style.display = 'none';
    semicircles[2].style.display = 'none';
  }

}
document.getElementById("add").onclick = function() {
  add10Seconds();
};

function add10Seconds() {
  var count = document.getElementById("count").innerHTML;
  count = parseInt(count) + 10;
  document.getElementById("count").innerHTML = count;
}