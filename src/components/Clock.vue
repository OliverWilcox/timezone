<template>
  <div class="clockapp">
<div class="clockcontain">
 <div class="clockui">
     
           <timer v-bind:isTimerOn="isTimerOn" v-bind:isTimerSped="isTimerSped"></timer>

<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
<div class="clockcirc" v-bind:class="{'clockcircOff':isClockOff, 'clockcircAlarmOn':isAlarmMenuOn, 'clockcircTimerOn':isTimerOn, 'clockcircStopwatchOn':isStopwatchOn}">
<div class="numsthree" v-bind:class="{'clockNumsOff':isClockMenuOff}">
<div class="num a"></div>
<div class="num b"></div>
<div class="num c"></div>
<div class="num d"></div>
<div class="num e"></div>
<div class="num f"></div>
<div class="num g"></div>
<div class="num h"></div>
<div class="num i"></div>
<div class="num j"></div>
<div class="num k"></div>
<div class="num l"></div>
<div class="num m"></div>
<div class="num n"></div>
<div class="num o"></div>
<div class="num p"></div>
<div class="num q"></div>
<div class="num r"></div>
<div class="num s"></div>
<div class="num t"></div>
<div class="num u"></div>
<div class="num v"></div>
<div class="num w"></div>
<div class="num x"></div>
<div class="num y"></div>
  </div>

<div class="nums">
  <div class="nu a"></div>
  <div class="nu b"></div>
  <div class="nu c"></div>
  <div class="nu d"></div>
<div class="nu e"></div>
<div class="nu f"></div>
<div class="nu g"></div>
  <div class="nu h"></div>
  <div class="nu i"></div>
  <div class="nu j"></div>
  <div class="nu k"></div>
  <div class="nu l"></div>
  
</div>
                   </div>

                   
                   
      <div class="clock" id="clock" v-bind:class="{'clockOff':isClockOff, 'clockAlarmOn':isAlarmMenuOn, 'clockTimerOn':isTimerOn, 'clockStopwatchOn':isStopwatchOn}">
        <div class="clockmincirc" v-bind:class="{'clockmincircOff':isStopwatchOn}">
          


        </div>
        <div class="hour">
          <div class="hr" id="hr" v-bind:class="{'hrOff':isClockMenuOff}"></div>
        </div>
        <div class="min">
          <div class="mn" id="mn" v-bind:class="{'mnOff':isClockMenuOff}"></div>
        </div>
        <div class="hour2">
          <div class="hr2" id="hr2" v-bind:class="{'hr2On':isAlarmMenuOn, 'hr2Off':isHandSped}" ></div>
        </div>
        <div class="min2">
          <div class="mn2" id="mn2" v-bind:class="{'mn2On':isAlarmMenuOn, 'mn2Off':isHandSped}"></div>
        </div>
        <div class="sec">
        <div class="sc" id="sc"></div>
        </div>
      </div>
      <div class="name">
      <div class="city">{{city}}</div>
      <div class="country" v-bind:class="{'countryOff':isCountryOff, 'countryInv':isClockMenuOff}">{{ country }}</div>
      <div class="time" v-bind:class="{'timeOff':isTimeOff, 'timeInv':isClockMenuOff}">{{time}}</div>
    </div>

    <div class="switch">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet">
           <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;1,100&display=swap" rel="stylesheet">
<swish @created="time"  v-bind:isClockOff="isClockOff" v-on:clockOffMenu="updateClockOff($event)"  v-on:clockOnMenu="updateClockOn($event)" v-on:alarmOnMenu="updateAlarmOn($event)" v-on:alarmOffMenu="updateAlarmOff($event)" v-on:timerOnMenu="updateTimerOn($event)" v-on:timerOffMenu="updateTimerOff($event)" v-on:stopwatchOnMenu="updateStopwatchOn($event)" v-on:stopwatchOffMenu="updateStopwatchOff($event)"></swish>



</div>

   
<stopwatch v-bind:isStopwatchOn="isStopwatchOn"></stopwatch>
<alarm v-bind:isAlarmMenuOn="isAlarmMenuOn"></alarm>

<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<div class="clock2" id="clock2">
  <div class="clockmincirc2" v-bind:class="{'clockmincirc2On':isStopwatchOn}">

  </div>
</div>
</div>
<div class="savedclock" v-bind:class="{'addbtnOff':isAddOff}" v-on:click="Search()">
  <div class="searchbtn"><ion-icon name="add-outline"></ion-icon></div>
</div>
<div class="tutorial" v-bind:class="{'tutorialOn':isSearchOn}">
  <h3 class="howto">Search by Continent/Capital</h3>
  <h3 class="examples">Examples<br>Europe/London<br>Asia/Shanghai<br>America/Toronto</h3>
</div>

<input type="text" 
  class="search-bar" v-bind:class="{'searchOn':isSearchOn}"
  placeholder="Search..."
  v-model="query"
  @keydown.enter="fetchTime(), changeTime()"
   @keyup.enter="fetchTime(), changeTime()"
 
  /> 
   <div class="enter-btn" v-on:click="fetchTime(), changeTime()" v-bind:class="{'searchOn':isSearchOn}">enter</div>

  <div class="cityname"></div>

</div>
</div>
</template>

<script>
import Swish from '../components/Switch'
import Timer from '../components/Timer'
import Stopwatch from '../components/Stopwatch'
import Alarm from '../components/Alarm'
export default {
props:{

},
name: 'Clock',
   components: {
  Timer,
  Swish,
  Stopwatch,
  Alarm
  },
created(){

},
data: function(){
return{
    query: '',
    loaded: false,
    city: '',
    country: '',
    time: '',
    clock: '', 
    searchBar: '',
    isClockOff: false,
    isAddOff: false,
    isSearchOn: false,
    isCountryOff: false,
    isTimeOff: false,
    isAlarmMenuOn: false,
    isTimerOn: false,
    isStopwatchOn: false,
    isClockMenuOff: false,
    isTimerSped: false,
    isHandSped: false,
}
},
  mounted(){
//this.interval = setInterval(() => this.ClockWork(), 1000);
  },
  methods:{
    updateClockOff(updatedClockOff){
this.isAddOff = updatedClockOff;
this.isClockMenuOff = updatedClockOff;
    },
    updateClockOn(updatedClockOn){
this.isAddOff = updatedClockOn;
this.isClockMenuOff = updatedClockOn
    },
    updateAlarmOn(updatedAlarmOn){
    this.isAlarmMenuOn = updatedAlarmOn;
    this.isHandSped = false;
    },
    updateAlarmOff(updatedAlarmOff){
    this.isAlarmMenuOn = updatedAlarmOff;
    this.isHandSped = true;
    },
    updateTimerOn(updatedTimerOn){
     this.isTimerOn = updatedTimerOn;
     this.isTimerSped = false;
    },
    updateTimerOff(updatedTimerOff){
     this.isTimerOn = updatedTimerOff;
     this.isTimerSped = true;
    },
    updateStopwatchOn(){
     this.isStopwatchOn = true;
    },
    updateStopwatchOff(){
     this.isStopwatchOn = false;
    },
  fetchTime () {
      let _this = this;
fetch(`http://api.timezonedb.com/v2.1/get-time-zone?key=WPNJI5WCV526&format=json&by=zone&zone=${this.query}`)
.then(res => res.json())
.then(function(data){
console.log(data)
let timestamp = data.timestamp
let countryname = data.countryName
const deg = 6;
const hr = document.querySelector("#hr");
const mn = document.querySelector("#mn");
var date = new Date(timestamp * 1000);
var hours = date.getHours();
var minutes = "0" + date.getMinutes();
let formattedTime = hours + ':' + minutes.substr(-2)
let hh = hours * 30;
let mm = date.getMinutes() * deg;
hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
mn.style.transform = `rotateZ(${mm}deg)`;
_this.time = formattedTime
 _this.country = countryname
})
},
Search(){
this.isClockOff = true;
this.isAddOff = true;
this.isSearchOn = true;
this.isCountryOff = true;
this.isTimeOff = true;
},
ClockWork(){
  const deg = 6;
  const hr = document.querySelector("#hr");
  const mn = document.querySelector("#mn");
  const sc = document.querySelector('#sc')
  let day = new Date();
  let hh = day.getHours() * 30;
  let mm = day.getMinutes() * deg;
  let ss = day.getSeconds() * deg;
  hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
  mn.style.transform = `rotateZ(${mm}deg)`;
  sc.style.transform = `rotateZ(${ss}deg)`
},
changeTime(){

  this.interval = setInterval(() => this.fetchTime(), 60000);
  this.interval = clearInterval(() => this.ClockWork(), 1000);
this.isClockOff = false;
this.isAddOff = false;
this.isSearchOn = false;
this.isCountryOff = false;
this.isTimeOff = false
}
  }
  }
</script>

<style scoped>
.clockcontain{
top: 50%;
left: 50%;
width: 100%;
height: 100%;
background-color: rgb(247, 251, 255);   
transform: translate(-50%, -50%);
position: absolute;
overflow: hidden;
}
.clockui{
top: 50%;
left: 50%;
width: 100%;
height: 100%;
background-color: rgb(241, 248, 255);
transform: translate(-50%, -50%);
position: absolute;
z-index: +1;
}
.clock{
top: 31%;
position: absolute;
left: 50%;
transform: translate(-50%, -50%);
width: 197px;
height: 197px;
background: rgb(237, 245, 253);
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
box-shadow:  1px 1px 20px 5px rgb(188, 219, 252),
0px 0px 30px 5px rgb(253, 253, 253);
transition: 0.4s;
}
.clockOff{
top: -40%;
}
.clockAlarmOn{
  background: rgb(237, 245, 253);
 height: 195px;
width: 195px;
top: 29%;
left: 50%;
transition: 0.35s;
box-shadow: 1px 1px 20px 5px rgb(188, 219, 252), 
0px 0px 30px 5px rgb(253, 253, 253);
}
.clockStopwatchOn{
  margin-top: 20px;
  top: 31%;
  height:197px;
  width:197px;
  background: white;
  box-shadow: 10px 10px 17px 2px rgba(215, 223, 231, 0.5);
}
.clockTimerOn{
top: 40%;
height: 230px;
width: 230px;
background: rgb(248, 252, 255);
box-shadow: 0px 0px 5px 1px rgb(158, 219, 255);
transition: 0.4s ease;
opacity: 0;
visibility: hidden
}

.clockNumsOff{
  visibility: hidden;
  opacity: 0;
}
.search-bar{
position: absolute;
display: block;
width: 80%;
height: 36px;
padding: 8px;
visibility: hidden;
opacity: 0;
top: 50%;
transform:translate(-50%, -50%);
left: 50%;
z-index: +30;
color: #ffffff;
font-size: 20px;
appearance: none;
outline: none;
box-shadow:  -7px 7px 10px 3px rgba(109, 165, 224, 0.171),
0px 1px 10px 1px rgba(157, 204, 255, 0.11);
border: none;
border-radius: 5px;
background: rgb(234,244,255);
background: linear-gradient(330deg, rgba(234,244,255,1) 0%, rgba(215,235,255,1) 100%);
transition: 0.4s;
box-shadow: 0px, 0px, 0px, 16px rgba(0, 0, 0, 0.25);
}
.enter-btn{
    font-family: 'Open Sans', sans-serif;
position: absolute;
display: block;
text-align: center;

width: 100px;
height: 36px;
padding: 8px;
visibility: hidden;
opacity: 0;
top: 50%;
transform:translate(-50%, -50%);
right: -20px;
z-index: +35;
color: #ffffff;
font-size: 24px;
appearance: none;
outline: none;
box-shadow:  -7px 7px 10px 3px rgba(109, 165, 224, 0.171),
0px 1px 10px 1px rgba(157, 204, 255, 0.11);
border: none;
border-radius: 5px;
background: rgb(234,244,255);
background: linear-gradient(330deg, rgb(195, 222, 252) 0%, rrgb(162, 209, 255)100%);
transition: 0.4s;
box-shadow: 0px, 0px, 0px, 16px rgba(0, 0, 0, 0.25);
}
.search-bar::placeholder{
  color: rgb(255, 255, 255);
  opacity: 1;
  font-size: 15px;
}
.search-bar:focus{ 
margin-top: 25px;
}
.search-bar:focus .enter-btn{
  margin-top: 25px;
}
.searchOn{
top: 7%;
visibility: visible;
opacity: 1;
transition: 0.4s;
}
.enter-btn.searchOn{
  top: 20%;
}
.clock2{
top: 21.6%;
position: absolute;
left: 29.9%; 
width: 152px;
height: 152px;
background: white;
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
visibility: hidden;
}
.animated{
animation: rotae 1s infinite;
animation-delay: 0.1s;
}
@keyframes zero1{
from{
background: rgb(55, 153, 252);
box-shadow:  1px 2px 8px 0px rgba(55, 153, 252, 0.486);
}
}
@keyframes one1{
from{
background: rgb(55, 153, 252);
box-shadow:  1px 2px 8px 0px rgba(55, 153, 252, 0.486);
}
}
@keyframes two1{
from{
background: rgb(55, 153, 252);
box-shadow:  1px 2px 8px 0px rgba(55, 153, 252, 0.486);
}
}
@keyframes three1{
from{
background: rgb(55, 153, 252);
box-shadow:  1px 2px 8px 0px rgba(55, 153, 252, 0.486);
}
}
@keyframes four1{
from{
background: rgb(55, 153, 252);
box-shadow:  1px 2px 8px 0px rgba(55, 153, 252, 0.486);
}
}
@keyframes five1{
from{
background: rgb(55, 153, 252);
box-shadow:  1px 2px 8px 0px rgba(55, 153, 252, 0.486);
}
}
@keyframes six1{
from{
background: rgb(55, 153, 252);
box-shadow:  1px 2px 8px 0px rgba(55, 153, 252, 0.486);
}
}
@keyframes seven1{
from{
background: rgb(55, 153, 252);
box-shadow:  1px 2px 8px 0px rgba(55, 153, 252, 0.486);
}
}
@keyframes eight1{
from{
background: rgb(55, 153, 252);
box-shadow:  1px 2px 8px 0px rgba(55, 153, 252, 0.486);
}
}
@keyframes nine1{
from{
background: rgb(55, 153, 252);
box-shadow:  1px 2px 8px 0px rgba(55, 153, 252, 0.486);
}
}
@keyframes ten1{
from{
background: rgb(55, 153, 252);
box-shadow:  1px 2px 8px 0px rgba(55, 153, 252, 0.486);
}
}
@keyframes eleven1{
from{
background: rgb(55, 153, 252);
box-shadow:  1px 2px 8px 0px rgba(55, 153, 252, 0.486);
}
}
.nu.zero1:after{
animation: zero1 1s infinite;
animation-delay: 0.000s; 
animation-play-state: var(--animationPlay);
}
.nu.one1:after{
animation: one1 1s infinite;
animation-delay: 0.066s; 
animation-play-state: var(--animationPlay);
}
.nu.two1:after{
animation: two1 1s infinite;
animation-delay: 0.149s; 
transition: 0.0s;
animation-play-state: var(--animationPlay);
}
.nu.three1:after{
animation: three1 1s infinite;
animation-delay: 0.232s; 
animation-play-state: var(--animationPlay);
}
.nu.four1:after{
animation: four1 1s infinite;
animation-delay: 0.315s; 
animation-play-state: var(--animationPlay);
}
.nu.five1:after{
animation: five1 1s infinite;
animation-delay: 0.398s; 
animation-play-state: var(--animationPlay);
}
.nu.six1:after{
animation: six1 1s infinite;
animation-delay: 0.481s;
animation-play-state: var(--animationPlay); 
}
.nu.seven1:after{
animation: seven1 1s infinite;
animation-delay: 0.564s; 
animation-play-state: var(--animationPlay);
}
.nu.eight1:after{
animation: eight1 1s infinite;
animation-delay: 0.647s; 
animation-play-state: var(--animationPlay);
}
.nu.nine1:after{
animation: nine1 1s infinite;
animation-delay: 0.730s; 
animation-play-state: var(--animationPlay);
}
.nu.ten1:after{
animation: ten1 1s infinite;
animation-delay: 0.813s; 
animation-play-state: var(--animationPlay);
}
.nu.eleven1:after{
animation: eleven1 1s infinite;
animation-delay: 0.9s; 
animation-play-state: var(--animationPlay);
}
@keyframes rotae{
from{transform: rotate(0deg)}
to{transform: rotate(-360deg)}
}
.num:paused{
-webkit-animation-play-state: paused;
-moz-animation-play-state: paused;
-o-animation-play-state: play;
animation-play-state: running;
}
.clockmincirc{
content: '';
width: 8px;
height: 8px;
background-color: rgb(205, 223, 242);
position: absolute;
left: 50%;
top: 50%;
border-radius: 50px;
z-index: 20;
transform:translate(-50%, -50%);
display: block;
opacity: 1;
visibility: visible;
}
.clockmincircOff{
  visibility: hidden;
}
.clockmincirc2{
content: '';
width: 12px;
height: 12px;
background-color: rgb(197, 217, 238);
position: relative;
left: 50%;
margin-top: -50px;
  top: 31%;
border-radius: 50px;
z-index: +30;
transform:translate(-50%, -50%);
visibility: hidden;
} 
.clockmincirc2On{
  visibility: hidden;
}
.clockcirc{
top: 31%;
position: absolute;
left: 50%;
transform: translate(-50%, -50%);
width: 260px;
height: 260px;
background: rgb(244, 248, 253);
display: flex;
justify-content: center;
align-items: center;
border-radius: 50%;
border: 3px solid rgb(230, 242, 255);  
box-shadow:  7px 2px 10px 5px rgb(221, 237, 254),
15px 15px 40px 10px inset 	rgb(223, 239, 255),
-5px 0px 10px 4px rgb(255, 255, 255); 
transition: 0.4s;
} 
.clockcircOff{
top: -40%;
}
.clockcircAlarmOn{
  top: 29%;
  left: 50%;
  height: 230px;
  width: 230px;
  transition: 0.35s;
  box-shadow: 7px 2px 10px 5px rgb(221, 237, 254), 15px 15px 40px 10px inset 	rgb(223, 239, 255), -5px 0px 10px 4px rgb(255, 255, 255);
}
.clockcircTimerOn{
top: 40%;
height: 255px;
width: 255px;
background: rgb(248, 252, 255);
box-shadow: inset 0px 0px 60px 35px rgba(187, 226, 241, 0.3), 
0px 0px 5px 0px rgb(158, 219, 255);
transition: 0.4s ease;
opacity: 0;
visibility: hidden;
}
.clockcircStopwatchOn{
top: 31%;
height: 260px;
width: 260px;
box-shadow: none;
visibility: hidden;
transition: 0s;
}
.hour,
.min,
.sec{
position: absolute;
}
.hour, .hr{
width: 160px;
height: 95px;
}
.min, .mn{
width: 190px;
height: 198px;
}
.sec, .sc{
width: 230px;
height: 226px;
visibility: hidden;
}
  .hr, .mn, .sc{
display: flex;
justify-content: center;
position: absolute;
border-radius: 50%;;
}
.hr::before{
content: '';
position: absolute;
left: 50%;
top: 20%;
transform: translate(-50%, -50%);
width: 2px;
height: 0px;  
z-index: 10; 
border-left: 1px solid transparent;
border-right: 1px solid transparent;    
border-bottom: 84px solid rgb(93, 89, 105);
}
.hrOff{
  visibility: hidden;
}
.mn::before{
content: '';
position: absolute;
width: 2px;
height: 0px;
z-index: 10;
border-left: 1px solid transparent;
border-right: 1px solid transparent;
border-bottom: 110px solid rgb(205, 223, 242);
}
.mnOff{
  visibility: hidden;
}
.sc::before{
content:'';
position: absolute;
width: 2px;
height: 127px;
z-index: 12;
background-color: rgb(252, 102, 102);
  }
.hour2,
.min2{
position: absolute;
}
.hour2, .hr2{
width: 160px;
height: 95px;
}
.min2, .mn2{
width: 190px;
height: 198px;
}
.sec2, .sc2{
width: 230px;
height: 226px;  
  }
.hr2, .mn2{
display: flex;
justify-content: center;
position: absolute;
border-radius: 50%;;
visibility: hidden;
transition: all 0.3s ease-in;
}
.hr2::before{
content: '';
position: absolute;
left: 50%;
top: 20%;
transform: translate(-50%, -50%);
width: 2px;
height: 0px;
z-index: 10;
border-left: 1px solid transparent;
border-right: 1px solid transparent; 
border-bottom: 84px solid rgb(93, 89, 105);
}
.mn2::before{
content: '';
position: absolute;
width: 2px;
height: 0px;
z-index: 10;
border-left: 1px solid transparent;
border-right: 1px solid transparent;
border-bottom: 110px solid rgb(205, 223, 242);
}

.hr2On{
  visibility: visible;
  transition: all 0.3s ease-in;
}

.hr2Off{
  transition: all 0s;
}

.mn2On{
  visibility: visible;
  transition: all 0.3s ease-in;
  }

  .mn2Off{
  transition: all 0s;
}
.tutorial{
  position: absolute;
  z-index: +100;
  transform: translate(-50%, -50%);
  top: 150%;
  left: 50%;
  height: 220px;
  width: 320px;
  border-radius: 40px;
  border: 1px solid white;
box-shadow:  0px 7px 10px 3px rgba(109, 165, 224, 0.071),
0px 1px 10px 1px rgba(157, 204, 255, 0.11);
transition: 0.2s;
}
.tutorialOn{
  top: 70%;
}
.howto{
  font-family: 'Open Sans', sans-serif;
  transform: translate(-50%, -50%);
  position: absolute;
top: 15%;
  left: 160px;
 white-space: nowrap;
 font-size: 15px;
}

.examples{
  font-family: 'Open Sans', sans-serif;
   transform: translate(-50%, -50%);
  position: absolute;
top: 15%;
  left: 120px;
  margin-top: 95px;
  font-size: 15px;
  line-height: 25px;
}

.city{
left: 50%;
top: 54%;
position: absolute;
transform: translate(-50%, -50%);
font-family: 'Open Sans', sans-serif;
font-size: 18px;
color: rgb(151, 164, 165);
transition: 0.4s;
}
.country{
left: 50%;
top: 58%;
position: absolute;
transform: translate(-50%, -50%);
font-family: 'Open Sans', sans-serif;
font-weight: 400;
font-size: 24px;
white-space: nowrap;
color: rgb(58, 73, 77);
font-weight: 600;
transition: 0.4s;             
}
.countryOff{
top: -40%;
}
.countryInv{
  visibility: hidden;
  transition: 0s;
}
.time{
left: 50%;
top: 62.5%;
position: absolute;
transform: translate(-50%, -50%);
font-family: 'Open Sans', sans-serif;
font-weight: 400;
font-size: 24px;
white-space: nowrap;
color: rgb(58, 73, 77);
font-weight: 600;
transition: 0.4s;
}
.timeOff{
top: -40%;
}
.timeInv{
visibility: hidden;
transition: 0s;
}
.savedclock{
height: 70px;
width: 70px;
border-radius: 500px;
position: absolute;
transform: translate(-50%, -50%);
top: 85%;
left: 50%;
z-index: 10;
background: rgb(111, 178, 255);
  box-shadow: 0px 0px 10px 1px rgba(58, 150, 255, 0.582);
opacity: 1;
transition: 0.4s;
}
.addbtnOff{
  top: 140%;
}
.addbtnOffMenu{
    top: 140%;
    transition: 0.2s;
}
.searchbtn{
z-index: +40;
position: absolute;
top: 56%;
left: 50%;
transform: translate(-50%, -50%);
font-family: 'Lato';
color: rgb(255, 255, 255);
font-size: 35px;
font-weight: 300;
}
.num{
position: absolute;
top: 3%;
left: 3%;
width: 94%;
height: 94%;
transform: translate(-50%, -50%);
}
.num:after{
content: '';
position: absolute;
top: 0;
left: 50%;
transform: translateX(-50%);
width: 3px;
height: 11px;
background: rgb(255, 255, 255);
transition: 0.2s ease-in;
opacity: 0.7;
animation-play-state: paused;
}
.nu{
position: absolute;
top: 0%;
left: 0%;
width: 100%;
height: 100%;
transform: translate(-50%, -50%);
visibility: hidden;
animation-play-state: paused;
}
.nu:after{
content: '';
position: absolute;
top: -5%;
left: 50%;
transform: translateX(-50%);
width: 3px;
height: 28px;
background: var(--background);
animation-play-state: var(--animationPlay);
transition-delay: var(--transitionDelay);
}
.num.a{
transform: rotate(15deg);
}
.num.b{
  transform: rotate(-30deg);
}
.num.c{
  transform: rotate(-45deg);
}
.num.d{
  transform: rotate(-60deg);
}
.num.e{
  transform: rotate(-75deg);
}
.num.f{
  transform: rotate(-90deg);
}
.num.g{
  transform: rotate(-105deg);
}
.num.h{
  transform: rotate(-120deg);
}
.num.i{
  transform: rotate(-135deg);
}
.num.j{
  transform: rotate(-150deg);
}
.num.k{
  transform: rotate(-165deg);
}
.num.l{
  transform: rotate(-180deg);
}
.num.m{
  transform: rotate(-195deg);
}
.num.n{
  transform: rotate(-210deg);
}
.num.o{
  transform: rotate(-225deg);
}
.num.p{
  transform: rotate(-240deg);
}
.num.q{
  transform: rotate(-255deg);
}
.num.r{
  transform: rotate(-270deg);
}
.num.s{
  transform: rotate(-285deg);
}
.num.t{
  transform: rotate(-300deg);
}
.num.u{
  transform: rotate(-315deg);
}
.num.v{
  transform: rotate(-330deg);
}
.num.w{
  transform: rotate(-345deg);
}
.num.x{
  transform: rotate(-360deg);
}
.num.y{
  transform: rotate(-375deg);
}
.nu.a{
transform: rotate(-30deg);
}
.nu.b{
  transform: rotate(-60deg);
}
.nu.c{
  transform: rotate(-90deg);
}
.nu.d{
  transform: rotate(-120deg);
}
.nu.e{
  transform: rotate(-150deg);
}
.nu.f{
  transform: rotate(-180deg);
}
.nu.g{
  transform: rotate(-210deg);
}
.nu.h{
  transform: rotate(-240deg);
}
.nu.i{
  transform: rotate(-270deg);
}
.nu.j{
  transform: rotate(-300deg);
}
.nu.k{
  transform: rotate(-330deg);
}
.nu.l{
  transform: rotate(-360deg);
}
@media only screen and (min-width: 450px) {
  .clockapp{
    
    position: relative;
    width: 375px;
    height: 800px;
    align-items: center;
   margin: 0 auto;
    justify-content: center;
     border-radius: 10px;
    margin-top: 10px;
    box-shadow:  0px 7px 80px 5px rgba(113, 182, 255, 0.5),
    0px 1px 10px 1px rgba(157, 204, 255, 0.11);
  }
  .clockui{
    border-radius: 10px;
  }
  .clockcontain{
    border-radius: 10px;
  }
}
</style>
