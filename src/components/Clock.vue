<template>
<div class="clockcontain">
 <div class="clockui">
     
           <Timer/>

<link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&display=swap" rel="stylesheet">
                   <div class="clockcirc" v-bind:class="{'clockcircOff':isClockOff}">
                     <div class="numsthree">
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

                   
                   
      <div class="clock" id="clock" v-bind:class="{'clockOff':isClockOff}">
        <div class="clockmincirc">
          


        </div>
        <div class="hour">
          <div class="hr" id="hr"></div>
        </div>
        <div class="min">
          <div class="mn" id="mn"></div>
        </div>
        <div class="hour2">
          <div class="hr2" id="hr2"></div>
        </div>
        <div class="min2">
          <div class="mn2" id="mn2"></div>
        </div>
        <div class="sec">
        <div class="sc" id="sc"></div>
        </div>
      </div>
      <div class="name">
      <div class="city">{{city}}</div>
      <div class="country" v-bind:class="{'clockOff':isClockOff}">{{ country }}</div>
      <div class="time" v-bind:class="{'clockOff':isClockOff}">{{time}}</div>
    </div>

    <div class="switch">
<link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500&display=swap" rel="stylesheet">
           <link href="https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,400;1,100&display=swap" rel="stylesheet">
<Swish @created="time"/>



</div>


   
<Stopwatch/>
<Alarm/>

<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
<div class="clock2" id="clock2">
  <div class="clockmincirc2">

  </div>
</div>
</div>
<div class="savedclock" v-on:click="Search()" v-bind:class="{'addbtnOff':isAddOff}">
  <div class="searchbtn"><ion-icon name="add-outline"></ion-icon></div>
</div>

<input type="text" 
  class="search-bar" v-bind:class="{'searchOn':isSearchOn}"
  placeholder="Search..."
  v-model="query"
  @keydown.enter="fetchTime(), changeTime()"
  /> 

  <div class="cityname"></div>

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


data(){
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
}
},
  
  mounted(){

   
//this.interval = setInterval(() => this.ClockWork(), 1000);
  },



  
  methods:{


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
  //const sc = document.querySelector('#sc')
var date = new Date(timestamp * 1000);
var hours = date.getHours() - 1;
// Minutes part from the timestamp
var minutes = "0" + date.getMinutes();
// Seconds part from the timestamp
//var seconds = "0" + date.getSeconds();

// Will display time in 10:30:23 format
let formattedTime = hours + ':' + minutes.substr(-2)

let hh = hours * 30;
    let mm = date.getMinutes() * deg;
    //let ss = date.getSeconds() * deg;

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
let menu = document.querySelector(".menu");
menu.style.top = "5%";
menu.style.transition = "0.4s";
this.isClockOff = false;
this.isAddOff = false;
this.isSearchOn = false;

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

.search-bar::placeholder{
  color: rgb(255, 255, 255);
  opacity: 1;
  font-size: 15px;
}

.search-bar:focus{
  
  margin-top: 25px;

}

.searchOn{
  top: 7%;
  visibility: visible;
  opacity: 1;
   transition: 0.4s;
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
    from {transform: rotate(0deg)}
 
    to {transform: rotate(-360deg)}
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
background-color: rgb(252, 102, 102);
position: absolute;
left: 50%;
top: 50%;
border-radius: 50px;
z-index: 20;
transform:translate(-50%, -50%);
visibility: hidden;

  }

  .clockmincirc2{
    content: '';
width: 12px;
height: 12px;
background-color: rgb(197, 217, 238);
position: absolute;
left: 50%;
top: -15%;
border-radius: 50px;
z-index: +30;
transform:translate(-50%, -50%);
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
  
  
  
/*
  .clockcirc{
   top: 70%;
  position: absolute;
  left: 105%;
  transform: translate(-50%, -50%);
  width: 760px;
  height: 750px;
  background: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
 
  }
  */
  
  
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

  



.savedclock{
   height: 70px;
  width: 70px;
  border-radius: 500px;
    position: absolute;
    transform: translate(-50%, -50%);
  top: 85%;
  left: 50%;
  z-index: 10;
    background: #93c4ff;
  box-shadow:  0px 0px 30px 2px #83b4f5;
  opacity: 1;
  transition: 0.4s;
}

.addbtnOff{
  top: 140%;
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



/*rgb(192, 208, 209)*/

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

.collision-square{
  position: fixed;
  left: 44%;
  top: 60%;
  transform: translate(-50%, -50%);
  width: 0px;
  height: 50px;
  background: red;
  opacity: 0.5;
  

}


/*
.stopwatchStart{
  position: absolute;
  height: 61px;
  width: 110px;
  border-radius: 10px;
  top: 78%;
  left: 65%;
  transform: translate(-50%, -50%);
  background: rgb(135, 102, 252);
  
}

.startTxt{
 position: absolute;
 margin: 0;
 padding: 0;
 left: 50%;
 top: 50%;
 color: white;
transform: translate(-50%, -50%);
 font-family: 'Roboto', sans-serif;
 font-weight: 400;
 letter-spacing: 1px;
 font-size: 17px;
}

.stopwatchSeconds{
   position: absolute;
  height: 40px;
  width: 72px;
  border-radius: 6px;
  top: 64%;
  left: 60%;
  transform: translate(-50%, -50%);
  background: rgb(51, 54, 54);

}

.secondsTxt{
   position: absolute;
 margin: 0;
 padding: 0;
 left: 50%;
 top: 50%;
 color: rgb(255, 255, 255);
transform: translate(-50%, -50%);
 font-family: 'Roboto', sans-serif;
 font-weight: 400;
 letter-spacing: 1px;
 font-size: 14px;
}

.stopwatchMinutes{
   position: absolute;
  height: 38px;
  width: 69px;
  border-radius: 6px;
  top: 64%;
  left: 80.2%;
  transform: translate(-50%, -50%);
  background: none;
border: 2px solid rgb(187, 204, 211);

}

.MinutesTxt{
   position: absolute;
 margin: 0;
 padding: 0;
 left: 50%;
 top: 50%;
 color: rgb(187, 204, 211);
transform: translate(-50%, -50%);
 font-family: 'Roboto', sans-serif;
 font-weight: 500;
 letter-spacing: 1px;
 font-size: 14px;
}

.stopwatchHours{
   position: absolute;
  height: 20px;
  width: 100px;
  border-radius: 4px;
  top: 68.5%;
  left: 64.3%;
  transform: translate(-50%, -50%);
  background: none;
border: 2px solid rgb(187, 204, 211);
  
}

.HoursTxt{
   position: absolute;
 margin: 0;
 padding: 0;
 left: 50%;
 top: 50%;
 color: rgb(187, 204, 211);
transform: translate(-50%, -50%);
 font-family: 'Roboto', sans-serif;
 font-weight: 500;
 letter-spacing: 1px;
 font-size: 14px;
}

.sec{
     position: absolute;
 margin: 0;
 padding: 0;
 left: 80%;
 top: 46%;
 color: rgb(0, 0, 0);
transform: translate(-50%, -50%);
 font-family: 'Rubik', sans-serif;
 font-weight: 300;
 letter-spacing: 1px;
 font-size: 180px;
}

.scnd{
  letter-spacing: 0px;
  font-weight: 500;
   font-size: 25px;
 
}



*/






</style>
