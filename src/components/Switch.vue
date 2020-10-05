<template>
<div class="menu">
   <div class="worldclick">Clock</div>
   <div class="alarmclick">Alarm</div>
   <div class="timerclick">Timer</div>
    <div class="stopwatchclick">Stopwatch</div>
    <div class="world" v-on:click="clock"><ion-icon name="time-outline"></ion-icon></div>
    <div class="alarm" v-on:click="alarm"><ion-icon name="alarm-outline"></ion-icon></div>
    <div class="timer" v-on:click="time(); leadingZeros();"><ion-icon name="timer-outline"></ion-icon></div>
   <div class="stopwatch" v-on:click="stopwatch"><ion-icon name="stopwatch-outline"></ion-icon></div>
</div>

</template>




<script>

export default {
    
    mounted(){
 

  },
  
    name: 'Swish',
    methods:{
        clockOn(){
let clockui = document.querySelector('.clockui')
let clockuiChildren = clockui.children;
let menu = document.querySelector('.menu')
let menuChildren = menu.children;
let numsthree = document.querySelector('.numsthree');
let num = document.querySelectorAll('.num');
let clockmincirc = document.querySelector(".clockmincirc");
let second = document.querySelector('.sec');
let min = document.querySelector('.min');
let hour = document.querySelector('.hour');
let searchBtn = document.querySelector(".savedclock");

menuChildren[2].style.color = "rgb(196, 204, 207)";
menuChildren[1].style.color = "rgb(196, 204, 207)";
menuChildren[3].style.color = "rgb(196, 204, 207)";
menuChildren[6].style.color = "rgb(196, 204, 207)";
menuChildren[5].style.color = "rgb(196, 204, 207)";
menuChildren[7].style.color = "rgb(196, 204, 207)";
menuChildren[0].style.color = "rgb(55, 153, 252)";
menuChildren[4].style.color = "rgb(55, 153, 252)";

clockuiChildren[3].style.boxShadow = "1px 1px 20px 5px rgb(188, 219, 252), 0px 0px 30px 5px rgb(253, 253, 253)";
clockuiChildren[3].style.background = "rgb(237, 245, 253)";
clockuiChildren[3].style.height = "197px"
clockuiChildren[3].style.width = "197px"
clockuiChildren[3].style.top = "31%"
clockuiChildren[3].style.left = "50%"
clockuiChildren[3].style.transition = "0.35s"
clockuiChildren[2].style.boxShadow = " 7px 2px 10px 5px rgb(221, 237, 254), 15px 15px 40px 10px inset 	rgb(223, 239, 255), -5px 0px 10px 4px rgb(255, 255, 255)"
clockuiChildren[2].style.height = "260px"
clockuiChildren[2].style.width = "260px"
clockuiChildren[2].style.top = "31%"
clockuiChildren[2].style.left = "50%"
clockuiChildren[2].style.transition = "0.35s"
clockuiChildren[2].style.visibility = "visible"
clockuiChildren[4].style.visibility = "visible"
clockuiChildren[8].style.visibility = "visible"
numsthree.style.visibility = "visible";      
[num].forEach.call(num, function(num){
num.style.visibility = "visible"
});
clockuiChildren[4].style.top = "58%";
clockuiChildren[8].style.top = "54%";
searchBtn.style.top = "85%";
clockmincirc.style.visibility = "visible";
clockmincirc.style.opacity = "1";
clockmincirc.style.transition = "0.1s ease"

second.style.opacity = "1"
second.style.transition = "0.1s ease"
min.style.opacity = "1";
hour.style.opacity = "1";
searchBtn.style.transition = "0.2s";
clockuiChildren[4].style.transition = "none";
clockuiChildren[8].style.transition = "none";


        },
        clockOff(){
let clockui = document.querySelector('.clockui')
let clockuiChildren = clockui.children;
let num = document.querySelectorAll('.num');
            let numsthree = document.querySelector('.numsthree');
numsthree.style.visibility = "hidden";
let searchBtn = document.querySelector(".savedclock");
let second = document.querySelector('.sec');
second.style.opacity = "0"
second.style.transition = "0.1s ease"
let city = document.querySelector(".city");
let country = document.querySelector(".country");
let time = document.querySelector(".time");
let min = document.querySelector('.min');
min.style.opacity = "0"
min.style.transition = "0.1s ease"

let hour = document.querySelector('.hour');
hour.style.opacity = "0"
hour.style.transition = "0.1s ease"

searchBtn.style.top = "120%";
clockuiChildren[4].style.top = "-20%";
clockuiChildren[8].style.top = "-20%";
clockuiChildren[4].style.visibility = "hidden";
clockuiChildren[8].style.visibility = "hidden";

[num].forEach.call(num, function(num){
num.style.visibility = "hidden"
});
searchBtn.style.transition = "0.2s";
city.style.transition = "0s";
country.style.transition = "0s";
time.style.transition = "0s";
        },
alarmOn(){
let menu = document.querySelector('.menu')
let menuChildren = menu.children;
let clockui = document.querySelector('.clockui')
let clockuiChildren = clockui.children;   
const hr = document.querySelector("#hr2");
const mn = document.querySelector("#mn2");
const timeleftalarm = document.querySelector('.timeleftalarm');
const alarmsoundContainer = document.querySelector('.alarmsoundContainer');
const alarmtime = document.querySelector(".alarmtime");
const curTime2 = document.querySelector(".currentTime2")
const numb = document.querySelectorAll('.numb');
const numn = document.querySelectorAll('.numn');
let clockmincirc = document.querySelector(".clockmincirc");
let alarmcirccontainer = document.querySelector(".alarmcirclecontainer");
clockuiChildren[3].style.boxShadow = "1px 1px 20px 5px rgb(188, 219, 252), 0px 0px 30px 5px rgb(253, 253, 253)";
clockuiChildren[3].style.background = "rgb(237, 245, 253)";
clockuiChildren[3].style.height = "195px"
clockuiChildren[3].style.width = "195px"
clockuiChildren[3].style.top = "29%"
clockuiChildren[3].style.left = "50%"
clockuiChildren[3].style.transition = "0.35s"
clockuiChildren[2].style.height = "230px"
clockuiChildren[2].style.width = "230px"
clockuiChildren[2].style.top = "29%"
clockuiChildren[2].style.left = "50%"
clockuiChildren[2].style.transition = "0.35s"
clockuiChildren[2].style.boxShadow = " 7px 2px 10px 5px rgb(221, 237, 254), 15px 15px 40px 10px inset 	rgb(223, 239, 255), -5px 0px 10px 4px rgb(255, 255, 255)"

hr.style.transition = "all 0.3s ease-in"
mn.style.transition = "all 0.3s ease-in"

menuChildren[0].style.color = "rgb(196, 204, 207)";
menuChildren[2].style.color = "rgb(196, 204, 207)";
menuChildren[3].style.color = "rgb(196, 204, 207)";
menuChildren[4].style.color = "rgb(196, 204, 207)";
menuChildren[6].style.color = "rgb(196, 204, 207)";
menuChildren[7].style.color = "rgb(196, 204, 207)";
menuChildren[1].style.color = "rgb(55, 153, 252)";
menuChildren[5].style.color = "rgb(55, 153, 252)";

timeleftalarm.style.visibility = "visible";
alarmtime.style.visibility = "visible";
curTime2.style.visibility = "visible";
alarmsoundContainer.style.visibility = "visible";

alarmcirccontainer.style.left = "100%";
alarmcirccontainer.style.top = "100%";

timeleftalarm.style.left = "21.75%";
alarmtime.style.left = "19.25%";
curTime2.style.left = "20.1%";
curTime2.style.transition = "0.3s";
alarmtime.style.transition = "0.25s"
timeleftalarm.style.transition = "0.2s"
alarmsoundContainer.style.left = "24%";
alarmsoundContainer.style.transition = "0.2s";

clockmincirc.style.background = "rgb(205, 223, 242)";
hr.style.visibility = "visible";
mn.style.visibility = "visible";


[numb].forEach.call(numb, function(numb){
numb.style.visibility = "visible"
});
[numn].forEach.call(numn, function(numn){
numn.style.visibility = "visible"
});



},
alarmOff(){
const hr = document.querySelector("#hr2");
const mn = document.querySelector("#mn2");
let alarmcirccontainer = document.querySelector(".alarmcirclecontainer");
const timeleftalarm = document.querySelector('.timeleftalarm');
const alarmsoundContainer = document.querySelector('.alarmsoundContainer');
const alarmtime = document.querySelector(".alarmtime");
const curTime2 = document.querySelector(".currentTime2")

alarmcirccontainer.style.top = "150%";
alarmcirccontainer.style.left = "150%";
hr.style.transition = "none";
mn.style.transition = "none";
hr.style.visibility = "hidden";
mn.style.visibility = "hidden";
timeleftalarm.style.left = "-20%";
alarmtime.style.left = "-20%";
curTime2.style.left = "-20%";
curTime2.style.transition = "0.2s";
alarmtime.style.transition = "0.25s"
timeleftalarm.style.transition = "0.35s"
alarmsoundContainer.style.left = "-20%";
alarmsoundContainer.style.transition = "0.3s";
timeleftalarm.style.visibility = "hidden";
alarmtime.style.visibility = "hidden";
curTime2.style.visibility = "hidden";
alarmsoundContainer.style.visibility = "hidden";
},
timerOn(){
let timerNum = document.querySelector(".timerNum");
let timerNum4 = document.querySelector(".timerNum4");
let timerNum3 = document.querySelector(".timerNum3");
let menu = document.querySelector('.menu')
let menuChildren = menu.children;
let start = document.querySelector(".startbtn")
let clockui = document.querySelector('.clockui')
let clockuiChildren = clockui.children;
let pausebtn = document.querySelector(".pausebtn");
let resumebtn = document.querySelector(".resumebtn");
let cancelbtn = document.querySelector(".cancelbtn");
let baseCircle = document.querySelector(".base-timer__svg");
let baseText = document.querySelector(".base-timer__label");
const timerCirc1 = document.querySelector(".timercirc1");
const timerCirc2 = document.querySelector(".timercirc2");
//let basepath = document.querySelector(".base-timer__path-remaining");
baseCircle.style.top = "108%";
baseText.style.top = "152%";
baseCircle.style.transition = "0.4s";
baseText.style.transition = "0.4s";
baseCircle.style.opacity = "1";
baseText.style.opacity = "1";
timerCirc1.style.transition = "0.2s";
timerCirc2.style.transition = "0.2s";
timerCirc1.style.transitionDelay = "0.2s";
timerCirc2.style.transitionDelay = "0.2s";
timerCirc1.style.visibility = "visible";
timerCirc2.style.visibility = "visible";
timerCirc1.style.top = "40%";
timerCirc2.style.top = "40%";
pausebtn.style.top = "85%";
resumebtn.style.top = "85%";
cancelbtn.style.top = "85%";

pausebtn.style.transition = "0.2s";
resumebtn.style.transition = "0.2s";
cancelbtn.style.transition = "0.2s";

timerNum.style.top = "40%";
timerNum4.style.top = "40%";
timerNum3.style.top = "40%";

start.style.transition = "0.2s"
start.style.opacity = 1;
start.style.top = "85%";

menuChildren[0].style.color = "rgb(196, 204, 207)";
menuChildren[1].style.color = "rgb(196, 204, 207)";
menuChildren[3].style.color = "rgb(196, 204, 207)";
menuChildren[4].style.color = "rgb(196, 204, 207)";
menuChildren[5].style.color = "rgb(196, 204, 207)";
menuChildren[7].style.color = "rgb(196, 204, 207)";
menuChildren[2].style.color = "rgb(55, 153, 252)";
menuChildren[6].style.color = "rgb(55, 153, 252)";


clockuiChildren[3].style.visibility = "hidden";
clockuiChildren[3].style.background = "rgb(248, 252, 255)"
clockuiChildren[3].style.width = "230px"
clockuiChildren[3].style.height = "230px"
clockuiChildren[3].style.boxShadow = "0px 0px 5px 1px rgb(158, 219, 255)"
clockuiChildren[2].style.width = "255px"
clockuiChildren[2].style.height = "255px"
clockuiChildren[2].style.boxShadow = "inset 0px 0px 60px 35px rgba(187, 226, 241, 0.3), 0px 0px 5px 0px rgb(158, 219, 255)"
clockuiChildren[3].style.transition = "0.4s ease"
clockuiChildren[2].style.transition = "0.4s ease"
clockuiChildren[2].style.opacity = "0";

clockuiChildren[3].style.top = "40%"
clockuiChildren[2].style.top = "40%"
clockuiChildren[5].style.top = "40%"

let clockmincirc = document.querySelector(".clockmincirc")
clockmincirc.style.opacity = "0";
clockmincirc.style.transition = "0.1s ease";


},
timerOff(){
    let clockui = document.querySelector('.clockui')
let clockuiChildren = clockui.children;
let start = document.querySelector(".startbtn");         
const timerNum = document.querySelector(".timerNum");
const timerNum4 = document.querySelector(".timerNum4");
const timerNum3 = document.querySelector(".timerNum3");
let pausebtn = document.querySelector(".pausebtn");
let resumebtn = document.querySelector(".resumebtn");
let cancelbtn = document.querySelector(".cancelbtn");
let baseCircle = document.querySelector(".base-timer__svg");
let baseText = document.querySelector(".base-timer__label");
const timerCirc1 = document.querySelector(".timercirc1");
const timerCirc2 = document.querySelector(".timercirc2");

baseCircle.style.opacity = "0";
baseText.style.opacity = "0";
baseCircle.style.transitionDelay = "0s";
baseText.style.transitionDelay = "0s";
baseCircle.style.transition = "0s";
baseText.style.transition = "0s";
clockuiChildren[2].style.visibility = "hidden";
clockuiChildren[3].style.visibility = "visible";
clockuiChildren[2].style.opacity = "1";
timerCirc1.style.transition = "0s";
timerCirc2.style.transition = "0s";
timerCirc1.style.transitionDelay = "0s";
timerCirc2.style.transitionDelay = "0s";
timerCirc1.style.visibility = "hidden";
timerCirc2.style.visibility = "hidden";
baseCircle.style.top = "-60%";
baseText.style.top = "0%";
pausebtn.style.top = "110%";
resumebtn.style.top = "110%";
cancelbtn.style.top = "110%";
pausebtn.style.transition = "0.2s";
resumebtn.style.transition = "0.2s";
cancelbtn.style.transition = "0.2s";
start.style.opacity = 1;
start.style.top = "110%";
timerNum.style.top = "110%";
timerNum4.style.top = "110%";
timerNum3.style.top = "110%";

},
stopwathOn(){
let menu = document.querySelector('.menu')
let menuChildren = menu.children;
let clockui = document.querySelector('.clockui')
let clockuiChildren = clockui.children;
let stopTimer = document.querySelector('.stopwatch__label')
let stopStart = document.querySelector('.stopwatchStart')
let cnclbtn = document.querySelector(".cnclbtn");
let stopbtn = document.querySelector(".stopbtn");
let rsmbtn = document.querySelector(".rsmbtn");
let lapbtn = document.querySelector(".lap");
let nu = document.querySelectorAll('.nu');
let clockmincirc = document.querySelector(".clockmincirc");
let clockmincirc2 = document.querySelector(".clockmincirc2");

stopStart.style.transition = '0.2s';
lapbtn.style.transition = '0.2s';
rsmbtn.style.transition = '0.2s';
stopbtn.style.transition = '0.2s';
cnclbtn.style.transition = '0.2s';
lapbtn.style.top = "85%";
rsmbtn.style.top = "85%";
stopbtn.style.top = "85%";
cnclbtn.style.top = "85%";
menuChildren[0].style.color = "rgb(196, 204, 207)";
menuChildren[1].style.color = "rgb(196, 204, 207)";
menuChildren[6].style.color = "rgb(196, 204, 207)";
menuChildren[4].style.color = "rgb(196, 204, 207)";
menuChildren[5].style.color = "rgb(196, 204, 207)";
menuChildren[2].style.color = "rgb(196, 204, 207)";
menuChildren[2].style.color = "rgb(196, 204, 207)";
menuChildren[3].style.color = "rgb(55, 153, 252)";
menuChildren[7].style.color = "rgb(55, 153, 252)";
clockuiChildren[3].style.height = "197px"
clockuiChildren[3].style.width = "197px"
clockuiChildren[3].style.top = "31%"
clockuiChildren[3].style.left = "50%"
clockuiChildren[3].style.background = "rgb(250, 253, 255)";
clockuiChildren[3].style.boxShadow = "10px 10px 17px 2px rgba(215, 223, 231, 0.5)";
clockuiChildren[9].style.visibility = "visible";
clockuiChildren[3].style.background = "rgb(250, 253, 255)";
clockuiChildren[3].style.boxShadow = "10px 10px 17px 2px rgba(215, 223, 231, 0.5)";
clockuiChildren[2].style.boxShadow = "none";
clockuiChildren[2].style.height = "260px"
clockuiChildren[2].style.width = "260px"
clockuiChildren[2].style.visibility = "hidden";
clockuiChildren[2].style.top = "31%";
clockuiChildren[2].style.transition = "0s"
clockuiChildren[2].style.boxShadow = "none";

clockuiChildren[9].style.visibility = "visible";
clockmincirc.style.visibility = "hidden";
clockmincirc2.style.visibility = "visible";

[nu].forEach.call(nu, function(nu){
nu.style.height = "110%"
nu.style.transition = "0.2s"
nu.style.top = "-5%";
nu.style.visibility = "visible"
nu.style.setProperty('--background', 'rgb(192, 208, 209)');
nu.style.setProperty('--transition', '0.2s ease-in');
});







stopStart.style.top = '85%';
stopStart.style.transition = "0.2s";
stopTimer.style.visibility = "visible";

},
stopwatchOff(){
    let clockui = document.querySelector('.clockui')
let clockuiChildren = clockui.children;  
    let stopStart = document.querySelector(".stopwatchStart");
let nu = document.querySelectorAll('.nu');
let stopTimer = document.querySelector('.stopwatch__label');
const minn2 = document.querySelector(".clockmincirc2");
let cnclbtn = document.querySelector(".cnclbtn");
let stopbtn = document.querySelector(".stopbtn");
let rsmbtn = document.querySelector(".rsmbtn");
let lapbtn = document.querySelector(".lap");

[nu].forEach.call(nu, function(nu){
nu.style.height = "110%"
nu.style.transition = "0.2s"
nu.style.top = "-5%";
nu.style.visibility = "hidden"
nu.style.setProperty('--background', 'rgb(192, 208, 209)');
nu.style.setProperty('--transition', '0.2s ease-in');
});

clockuiChildren[2].style.visibility = "visible";
minn2.style.visibility = "hidden";
stopTimer.style.visibility = 'hidden';
stopStart.style.top = '110%';
lapbtn.style.top = "110%";
rsmbtn.style.top = "110%";
stopbtn.style.top = "110%";
cnclbtn.style.top = "110%";
stopStart.style.transition = '0.2s';
lapbtn.style.transition = '0.2s';
rsmbtn.style.transition = '0.2s';
stopbtn.style.transition = '0.2s';
cnclbtn.style.transition = '0.2s';
},
time(){

this.timerOn();
this.clockOff();
this.alarmOff();
this.stopwatchOff();
        },
clock(){
this.clockOn();
this.alarmOff();
this.timerOff();
this.stopwatchOff();
        },
alarm(){
this.alarmOn();
this.clockOff();
this.timerOff();
this.stopwatchOff();
        },
stopwatch(){
this.stopwathOn();
this.clockOff();
this.alarmOff();
this.timerOff();



        }
},
props: ['test']
}
</script>


<style scoped>
.world{
    
font-size: 38px;
position: absolute;
    left: 18%;
    top: 52%;
 transform: translate(-50%, -50%);
    color: rgb(55, 153, 252);
    

}

.alarm{
font-size: 41px;
font-family: 'Roboto', sans-serif;
color: rgb(196, 204, 207);

z-index: +200;
    left: 39%;
  position: absolute;
    top:52%;
 transform: translate(-50%, -50%);
/*
 justify-content: center;
text-align: center;
vertical-align: middle;
line-height: 62px; 
 border-radius: 100px;
    width: 50px;
    height: 50px;
    background-color: rgb(212, 225, 231);
*/
}

.timer{
font-size: 38px;
font-family: 'Roboto', sans-serif;
z-index: +300;
    
    color: rgb(196, 204, 207);
    
    position: absolute;
    left: 61%;
    top:52%;
 transform: translate(-50%, -50%);
/*
 justify-content: center;
text-align: center;
vertical-align: middle;
line-height: 62px; 
 border-radius: 100px;
    width: 50px;
    height: 50px;
    background-color: rgb(212, 225, 231);
*/
}

.stopwatch{
font-size: 38px;
font-family: 'Roboto', sans-serif;
font-weight: 400;
    color: rgb(196, 204, 207);
  
  position: absolute;
    left: 82%;
    top:52%;
 transform: translate(-50%, -50%);
/*
 justify-content: center;
text-align: center;
vertical-align: middle;
line-height: 62px; 
 border-radius: 100px;
    width: 50px;
    height: 50px;
    background-color: rgb(212, 225, 231);
*/
}

.menu{
    position: absolute;
    width: 100%;
    height: 80px;
    left: 50%;
    top: 5%;
    transform: translate(-50%, -50%);
    z-index: +10000;
}

.worldclick{
font-size: 13px;
position: absolute;
    left: 18%;
    top: 80%;
 transform: translate(-50%, -50%);
    color: rgb(55, 153, 252);
  
    font-family: 'Roboto', sans-serif;
}

.alarmclick{
    font-size: 13px;
position: absolute;
    left: 39%;
    top: 80%;
    z-index: +200;
 transform: translate(-50%, -50%);
    color: rgb(196, 204, 207);
  
    font-family: 'Roboto', sans-serif;
}

.timerclick{
      font-size: 13px;
position: absolute;
    left: 61%;
    top: 80%;
 transform: translate(-50%, -50%);
    color: rgb(196, 204, 207);
  
    font-family: 'Roboto', sans-serif;
}

.stopwatchclick{
      font-size: 13px;
position: absolute;
    left: 82%;
    top: 80%;
 transform: translate(-50%, -50%);
    color: rgb(196, 204, 207);
  
    font-family: 'Roboto', sans-serif;
}


</style>




