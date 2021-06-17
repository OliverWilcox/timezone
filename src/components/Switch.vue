<template>
<div class="menu" v-bind:class="{'menuOff':isClockOff}">
<div class="worldclick" v-bind:class="{'menuClockChild':isMenuClock}">Clock</div>
<div class="alarmclick" v-bind:class="{'menuAlarmChild':isMenuAlarm}">Alarm</div>
<div class="timerclick" v-bind:class="{'menuTimerChild':isMenuTimer}">Timer</div>
<div class="stopwatchclick" v-bind:class="{'menuStopwatchChild':isMenuStopwatch}">Stopwatch</div>
<div class="world" v-on:click="clock()" v-bind:class="{'menuClock':isMenuClock}"><ion-icon name="time-outline"></ion-icon></div>
<div class="alarm" v-on:click="alarm()" v-bind:class="{'menuAlarm':isMenuAlarm}"><ion-icon name="alarm-outline"></ion-icon></div>
<div class="timer" v-on:click="time(); leadingZeros();" v-bind:class="{'menuTimer':isMenuTimer}"><ion-icon name="timer-outline"></ion-icon></div>
<div class="stopwatch" v-on:click="stopwatch" v-bind:class="{'menuStopwatch':isMenuStopwatch}"><ion-icon name="stopwatch-outline"></ion-icon></div>
</div>
</template>
<script>
export default {
    props: {
isClockOff:{
type: Boolean,
required: true,
},
},
data(){
return{
isMenuClock: true,
isMenuAlarm: false,
isMenuTimer: false,
}
},     
name: 'Swish',
methods:{
clockOffMenu(){
this.$emit('clockOffMenu', true)
let num = document.querySelectorAll('.num');
this.isMenuClock = false;
[num].forEach.call(num, function(num){
num.style.visibility = "hidden"
}); },
clockOnMenu(){
this.$emit('clockOnMenu', false)
this.isMenuClock = true;
let num = document.querySelectorAll('.num');
[num].forEach.call(num, function(num){
num.style.visibility = "visible"
});
},
alarmOnMenu(){
this.$emit('alarmOnMenu', true)
this.isMenuAlarm = true;
const numb = document.querySelectorAll('.numb');
const numn = document.querySelectorAll('.numn');
[numb].forEach.call(numb, function(numb){
numb.style.visibility = "visible"
});
[numn].forEach.call(numn, function(numn){
numn.style.visibility = "visible"
});
}, 
alarmOffMenu(){
this.$emit('alarmOffMenu', false) 
this.isMenuAlarm = false;
const numb = document.querySelectorAll('.numb');
const numn = document.querySelectorAll('.numn');
[numb].forEach.call(numb, function(numb){
numb.style.visibility = "hidden"
});
[numn].forEach.call(numn, function(numn){
numn.style.visibility = "hidden"
});
},
timerOnMenu(){
this.$emit('timerOnMenu', true) 
this.isMenuTimer = true;
},
timerOffMenu(){
this.$emit('timerOffMenu', false)
this.isMenuTimer = false;
},
stopwatchOnMenu(){
this.$emit('stopwatchOnMenu', true)
this.isMenuStopwatch = true;
let nu = document.querySelectorAll('.nu');
[nu].forEach.call(nu, function(nu){
nu.style.height = "110%"
nu.style.transition = "0.2s"
nu.style.top = "-5%";
nu.style.visibility = "visible"
nu.style.setProperty('--background', 'rgb(192, 208, 209)');
nu.style.setProperty('--transition', '0.2s ease-in');
nu.style.marginTop = "20px"

});
},
stopwatchOffMenu(){
this.$emit('stopwatchOffMenu', false)
this.isMenuStopwatch = false;
let nu = document.querySelectorAll('.nu');
[nu].forEach.call(nu, function(nu){
nu.style.height = "70%"
nu.style.transition = "0.2s"
nu.style.top = "15%";
nu.style.visibility = "hidden"
nu.style.setProperty('--background', 'rgb(192, 208, 209)');
nu.style.setProperty('--transition', '0.2s ease-in');
});
},
time(){
this.timerOnMenu();
this.clockOffMenu();
this.alarmOffMenu();
this.stopwatchOffMenu();
},
clock(){
this.clockOnMenu();
this.alarmOffMenu();
this.timerOffMenu()
this.stopwatchOffMenu();
},
alarm(){
this.alarmOnMenu();
this.clockOffMenu();
this.timerOffMenu()
this.stopwatchOffMenu();
},
stopwatch(){
this.stopwatchOnMenu();
this.clockOffMenu();
this.alarmOffMenu();
this.timerOffMenu();
}
}
}
</script>
<style scoped>
.world{   
font-size: 38px;
position: absolute;
left: 18%;
top: 52%;
transform: translate(-50%, -50%);
color: rgb(196, 204, 207);
}
.worldclick{
font-size: 13px;
position: absolute;
left: 18%;
top: 80%;
transform: translate(-50%, -50%);
color: rgb(196, 204, 207);
font-family: 'Roboto', sans-serif;
}
.menuClock{
color: rgb(55, 153, 252);
}
.menuClockChild{
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
.menuAlarm{
color: rgb(55, 153, 252);
}
.menuAlarmChild{
color: rgb(55, 153, 252);
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
}

.menuTimer{
    color: rgb(55, 153, 252)
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
}
.menuStopwatch{
    color: rgb(55, 153, 252)
}
.menu{
position: absolute;
width: 100%;
height: 80px;
left: 50%;
top: 5%;
transform: translate(-50%, -50%);
z-index: +10000;
transition: 0.4s;
}
.menuOff{
top: -40%;
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
.menuTimerChild{
    color: rgb(55, 153, 252)
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
.menuStopwatchChild{
    color: rgb(55, 153, 252)
}
</style>




