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
time(){
//let timer = document.querySelector(".base-timer")
//let baseCircle = document.querySelector(".base__circle");
//let baseLabel = document.querySelector(".base__label")
let timerNum = document.querySelector(".timerNum");
let timerNum4 = document.querySelector(".timerNum4");
let timerNum3 = document.querySelector(".timerNum3");
let menu = document.querySelector('.menu')
let menuChildren = menu.children;
let start = document.querySelector(".startbtn")
//start.style.transition = "0.4s ease"
             
start.style.visibility = "visible";
start.style.opacity = 1;
start.style.top = "85%";
timerNum.style.visibility = "visible";
timerNum4.style.visibility = "visible";
timerNum3.style.visibility = "visible";
menuChildren[0].style.color = "rgb(196, 204, 207)";
menuChildren[1].style.color = "rgb(196, 204, 207)";
menuChildren[3].style.color = "rgb(196, 204, 207)";
menuChildren[4].style.color = "rgb(196, 204, 207)";
menuChildren[5].style.color = "rgb(196, 204, 207)";
menuChildren[7].style.color = "rgb(196, 204, 207)";

menuChildren[2].style.color = "rgb(135, 102, 252)";
menuChildren[6].style.color = "rgb(135, 102, 252)";


let clockui = document.querySelector('.clockui')
let clockuiChildren = clockui.children;

let second = document.querySelector('.sec');
second.style.opacity = "0"
second.style.transition = "0.1s ease"

let min = document.querySelector('.min');
min.style.opacity = "0"
min.style.transition = "0.1s ease"

let hour = document.querySelector('.hour');
hour.style.opacity = "0"
hour.style.transition = "0.1s ease"

let clockmincirc = document.querySelector(".clockmincirc")
clockmincirc.style.opacity = "0";
clockmincirc.style.transition = "0.1s ease"

clockuiChildren[3].style.width = "180px"
clockuiChildren[3].style.height = "180px"
clockuiChildren[3].style.boxShadow = "0px 0px 30px 10px rgba(181, 230, 250, 0.2)"
clockuiChildren[2].style.width = "290px"
clockuiChildren[2].style.height = "290px"
clockuiChildren[2].style.boxShadow = "inset 0px 0px 20px 10px rgba(187, 226, 241, 0.3)"

clockuiChildren[3].style.transition = "0.4s ease"
clockuiChildren[2].style.transition = "0.4s ease"

clockuiChildren[3].style.top = "40%"
clockuiChildren[2].style.top = "40%"
clockuiChildren[5].style.top = "40%"


clockuiChildren[4].style.visibility = "hidden"
clockuiChildren[8].style.visibility = "hidden"






        },
clock(){
let menu = document.querySelector('.menu')
let menuChildren = menu.children;
          
 
menuChildren[2].style.color = "rgb(196, 204, 207)";
menuChildren[1].style.color = "rgb(196, 204, 207)";
menuChildren[3].style.color = "rgb(196, 204, 207)";
menuChildren[6].style.color = "rgb(196, 204, 207)";
menuChildren[5].style.color = "rgb(196, 204, 207)";
menuChildren[7].style.color = "rgb(196, 204, 207)";

menuChildren[0].style.color = "rgb(135, 102, 252)";
menuChildren[4].style.color = "rgb(135, 102, 252)";


        },
alarm(){
   
    //import { Draggable } from 'gsap'
let menu = document.querySelector('.menu')
let menuChildren = menu.children;
let clockui = document.querySelector('.clockui')
let clockuiChildren = clockui.children;   
let numsthree = document.querySelector('.numsthree');
//let numb = document.querySelectorAll('.numb');



numsthree.style.visibility = "hidden";

//clockuiChildren[3].style.background = "rgba(208, 195, 253, 0)";
//clockuiChildren[2].style.visibility = "hidden"
//clockuiChildren[3].style.visibility = "hidden"
clockuiChildren[3].style.height = "172px"
clockuiChildren[3].style.width = "172px"
clockuiChildren[3].style.top = "23%"
clockuiChildren[3].style.left = "50%"
clockuiChildren[2].style.height = "220px"
clockuiChildren[2].style.width = "220px"
clockuiChildren[2].style.top = "23%"
clockuiChildren[2].style.left = "50%"
//clockuiChildren[2].style.boxShadow = "none";
//clockuiChildren[2].style.background = "rgba(208, 195, 253, 0.3)";


clockuiChildren[4].style.visibility = "hidden"
clockuiChildren[8].style.visibility = "hidden"
 
menuChildren[0].style.color = "rgb(196, 204, 207)";
menuChildren[2].style.color = "rgb(196, 204, 207)";
menuChildren[3].style.color = "rgb(196, 204, 207)";
menuChildren[4].style.color = "rgb(196, 204, 207)";
menuChildren[6].style.color = "rgb(196, 204, 207)";
menuChildren[7].style.color = "rgb(196, 204, 207)";

menuChildren[1].style.color = "rgb(135, 102, 252)";
menuChildren[5].style.color = "rgb(135, 102, 252)";

let second = document.querySelector('.sec');
second.style.opacity = "0"
second.style.transition = "0.1s ease"

let min = document.querySelector('.min');
min.style.opacity = "0"
min.style.transition = "0.1s ease"

let hour = document.querySelector('.hour');
hour.style.opacity = "0"
hour.style.transition = "0.1s ease"

let minn = document.querySelector(".clockmincirc");
minn.style.opacity = "0"
minn.style.transition = "0.1s ease";



//[numb].forEach.call(numb, function(numb){
//.numb.style.visibility = "visible";

//});



//var collisionSquare = document.querySelector('.collision-square')











        },
stopwatch(){

//let pathremain = document.querySelector(".stopwatch__path-remaining")

let stopStart = document.querySelector('.stopwatchStart')
let menu = document.querySelector('.menu')
let menuChildren = menu.children;
let clockui = document.querySelector('.clockui')
let clockuiChildren = clockui.children;
let stopTimer = document.querySelector('.stopwatch__label')
//let clockcirc = document.querySelector('.clockcirc')
//let clockChildren = clockcirc.children;


stopStart.style.visibility = 'visible';
let num = document.querySelectorAll('.num');
let nu = document.querySelectorAll('.nu');
let second = document.querySelector('.sec');
second.style.opacity = "0"
second.style.transition = "0.1s ease"
stopTimer.style.visibility = "visible";

let min = document.querySelector('.min');
min.style.opacity = "0"
min.style.transition = "0.2s ease"

let hour = document.querySelector('.hour');
hour.style.opacity = "0"
hour.style.transition = "0.0s ease"

let minn = document.querySelector(".clockmincirc");

menuChildren[0].style.color = "rgb(196, 204, 207)";
menuChildren[1].style.color = "rgb(196, 204, 207)";
menuChildren[6].style.color = "rgb(196, 204, 207)";
menuChildren[4].style.color = "rgb(196, 204, 207)";
menuChildren[5].style.color = "rgb(196, 204, 207)";
menuChildren[2].style.color = "rgb(196, 204, 207)";
menuChildren[2].style.color = "rgb(196, 204, 207)";
menuChildren[3].style.color = "rgb(135, 102, 252)";
menuChildren[7].style.color = "rgb(135, 102, 252)";


clockuiChildren[2].style.boxShadow = "none";

clockuiChildren[9].style.visibility = "visible";


clockuiChildren[4].style.visibility = "hidden"
clockuiChildren[8].style.visibility = "hidden"
minn.style.top = "-16%";
minn.style.width = "12px"
minn.style.height = "12px";
minn.style.transition = "0.04s";

minn.style.visibility = "hidden";



[nu].forEach.call(nu, function(nu){
nu.style.height = "110%"
nu.style.transition = "0.2s"
nu.style.top = "-5%";
nu.style.visibility = "visible"
nu.style.setProperty('--background', 'rgb(192, 208, 209)');
nu.style.setProperty('--transition', '0.2s ease-in');
});

[num].forEach.call(num, function(num){
num.style.visibility = "hidden"
});




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
    color: rgb(135, 102, 252);
    

}

.alarm{
font-size: 41px;
font-family: 'Roboto', sans-serif;
color: rgb(196, 204, 207);


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
}

.worldclick{
font-size: 13px;
position: absolute;
    left: 18%;
    top: 80%;
 transform: translate(-50%, -50%);
    color: rgb(135, 102, 252);
  
    font-family: 'Roboto', sans-serif;
}

.alarmclick{
    font-size: 13px;
position: absolute;
    left: 39%;
    top: 80%;
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




