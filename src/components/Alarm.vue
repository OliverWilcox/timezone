
<template>
  <div class="alarm">
<link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet">


      <div class="alarmcircles">
          <div class="timeleftalarm">ALARM SOUND</div>
          <div class="alarmsoundContainer">
            <div class="sounds" id="sounds">
              <div class="soundsnep" id="soundsnep"></div>
              <div class="alarmsound2 morning2">Morning Call</div>
              <div class="alarmsound2 blissful2">Blissful Day</div>
              <div class="alarmsound2 clone">Neptune</div>
          <div class="alarmsound2 timeleftnum">Morning Call</div>
          <div class="alarmsound2 ">Blissful Day</div>
          <div class="alarmsound2 neptune">Neptune</div>
          </div>
          </div>
                    <div class="alarmtime">ALARM TIME</div>
          <div class="alarmcirclecontainer">
          <div class="alarmcircle1">
              <div class="okdiv" v-on:click="getTime(), showTime()">
                  <div class="ok">OK</div>
              </div>
              <div class="setdiv" v-on:click="getTimeStop()">
                  <div class="set">SET</div>
              </div>
          </div>
          <div class="alarmcircle2" id = "knob3">
              <div class="amspms">
                <div class="ampm a" data-value="am">AM</div>
                <div class="ampm b" data-value="pm">PM</div>
                <div class="ampm c" data-value="am">AM</div>
                <div class="ampm d" data-value="pm">PM</div>
                <div class="ampm e" data-value="am">AM</div>
                <div class="ampm f" data-value="pm">PM</div>
                <div class="ampm g" data-value="am">AM</div>
                <div class="ampm h" data-value="pm">PM</div>
                <div class="ampm i" data-value="am">AM</div>
                <div class="ampm j" data-value="pm">PM</div>
              </div>
          </div>
          <div class="alarmcircle3" id ="knob2">
              <div class="numin"></div>
              <div class="numn a" data-value="00">0</div>
              <div class="numn b" data-value="05">5</div>
              <div class="numn c">10</div>
              <div class="numn d">15</div>
              <div class="numn e">20</div>
              <div class="numn f">25</div>
              <div class="numn g">30</div>
              <div class="numn h">35</div>
              <div class="numn i">40</div>
              <div class="numn j">45</div>
              <div class="numn k">50</div>
              <div class="numn l">55</div>
          </div>
          <div class="alarmcircle4" id="knob">
              <div class="numstwo">
  <div class="numb a" data-value="01">1</div>
  <div class="numb b" data-value="02">2</div>
  <div class="numb c" data-value="03">3</div>
  <div class="numb d" data-value="04">4</div>
  <div class="numb e" data-value="05">5</div>
  <div class="numb f" data-value="06">6</div>
  <div class="numb g" data-value="07">7</div>
  <div class="numb h" data-value="08">8</div>
   <div class="numb i" data-value="09">9</div>
    <div class="numb j" data-value="10">10</div>
     <div class="numb k" data-value="11">11</div>
      <div class="numb l" data-value="12">12</div>
       <div class="numb m" data-value="01">1</div>
  <div class="numb n" data-value="02">2</div>
  <div class="numb o" data-value="03">3</div>
  <div class="numb p" data-value="04">4</div>
  <div class="numb q" data-value="05">5</div>
  <div class="numb r" data-value="06">6</div>
  <div class="numb s" data-value="07">7</div>
  <div class="numb t" data-value="08">8</div>
   <div class="numb u" data-value="09">9</div>
    <div class="numb v" data-value="10">10</div>
     <div class="numb w" data-value="11">11</div>
      <div class="numb x" data-value="12">12</div>

</div>
          </div>
          </div>
      </div>
      <div class="collision-box"></div>
      <div class="collision-box2"></div>
      <div class="collision-box3"></div>
      
<div class="alarmcircle4ms"> </div> 
      
    <div class="hours">
        00
    </div>

     <div class="minutes">
         00
     </div>

   <div class="ampmone">
       am
   </div>
    <div class="currentTime">

    </div>
    <div class="currentTime2">

    </div>

    <div class="alarmOff">
        <div class="backgroundcirc"></div>
        <div class="backgroundcurve"></div>
         <div class="miniclock">
           <div class="miniclockmincirc"></div>
           <div class="hour1">
          <div class="hr1" id="hr1"></div>
        </div>
        <div class="min1">
          <div class="mn1" id="mn1"></div>
        </div>
         </div>
         <div class="miniclockcirc"></div>
         <div class="alarmbell1"></div>
         <div class="alarmbell2"></div>
        <div class="alarmOffbg"></div>
        <div class="alarmOffcirc1"></div>
        <div class="alarmOffcirc2"></div>
        <div class="alarmOffcirc3"></div>
        <div class="alarmOffcirc4"></div>
        <div class="alarmOffcirc5"></div>
        <div class="alarmOffcirc6"></div>
        <div class="alarmOffcirc7"></div>
        
        <div class="displayTime">12:10</div>
        <div class="displayDate">WED JULY 9</div>
        <div class="dismissbtn" v-on:click="alarmOff"><div class="alarmX"><ion-icon class="ion" name="close-outline"></ion-icon></div></div>
        <div class="highlightCircle"></div>
        <div class="snoozebtn" v-on:click="snooze()">
            <div class="snooze">SNOOZE</div>
        </div>
        <div class="snoozebtn2" v-on:click="snooze2()">
            <div class="snooze2">SNOOZE</div>
        </div>
    </div>
<div class="clockcirclehighlight">
  <div class="svgcontainer">
  <svg height="80" width="80">
  <circle class="circular" cx="120" cy="120" r="115" />
</svg>
</div>
</div>

  </div>  
</template>

<script>
import { gsap, TweenMax, TweenLite} from "gsap";
import { Draggable } from "gsap/Draggable";
import { PixiPlugin } from "gsap/PixiPlugin.js";



gsap.registerPlugin(Draggable, PixiPlugin);
gsap.registerPlugin(TweenMax)
gsap.registerPlugin(TweenLite)

//let hours = document.querySelector(".hours");






export default {
name: 'Alarm',



     mounted(){

     

  

       let sounds = document.querySelector(".sounds");
         
//let rotationSounds = document.querySelector(".soundsrotation")
         
         Draggable.create("#sounds", {
           type:"x",
         bounds: {minX: -320, maxX: 450},    
           
           onDrag:function(){
      //rotationSounds.innerHTML = sounds.getBoundingClientRect().left
      
           },



    onRelease:function(){



if(sounds.getBoundingClientRect().left < 103 && sounds.getBoundingClientRect().left > -54){
 TweenMax.to(sounds, 0.1, {x:0,})
  }
  else if(sounds.getBoundingClientRect().left < -54 && sounds.getBoundingClientRect().left > -200){
 TweenMax.to(sounds, 0.1, {x:-159,})
  }
  else if(sounds.getBoundingClientRect().left < -200 && sounds.getBoundingClientRect().left > -322){
 TweenMax.to(sounds, 0.02, {x:138,})
  }
  else if(sounds.getBoundingClientRect().left < 250 && sounds.getBoundingClientRect().left > 103){
 TweenMax.to(sounds, 0.1, {x:138,})
  }
  else if(sounds.getBoundingClientRect().left < 364 && sounds.getBoundingClientRect().left > 250){
 TweenMax.to(sounds, 0.1, {x:283,})
  }
   else if(sounds.getBoundingClientRect().left < 530 && sounds.getBoundingClientRect().left > 364){
 TweenMax.to(sounds, 0.02, {x:0,})
  }

    }
           
           
           
         })




         //let alarmOff = document.querySelector('.alarmOff');
        
       window.setInterval(function(){
  const deg = 6;
  const hr = document.querySelector("#hr1");
  const mn = document.querySelector("#mn1");

  
    let day = new Date();
    let hh = day.getHours() * 30;
    let mm = day.getMinutes() * deg;

    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;


       },1000 );
         
         

let rotationNum
let rotationNum2
let rotationNum3


Draggable.create("#knob", {
    type:"rotation", 
    
    onDrag:function(){
      let rotation = parseInt(this.rotation %
      360, 10);
      rotationNum = (rotation < 0) ?
      rotation + 360 : rotation;
     


let alarm4 = document.querySelector('.alarmcircle4')
      alarm4.style.transition = "0s";
alarm4.style.boxShadow = "0px 0px 15px 4px rgb(188, 219, 254)"
       if(rotationNum < 309 && rotationNum > 293){
        
         
numba.style.fontSize = "44px"
         numba.style.top = "1.2%";
         numba.style.opacity = "1";
         numba.style.fontWeight = "300";
          numba.style.left = "49%";
          numtes.innerHTML = numba.getAttribute('data-value');  
         numtes.value = numba.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(30deg)";
         
     }
     else{
       numba.style.fontSize = "22px";
         numba.style.top = "3.5%";
         numba.style.left = "50%";
         numba.style.opacity = "0.5"
         
     }
     if(rotationNum < 294 &&  rotationNum > 282){
       
       numbb.style.fontSize = "44px"
         numbb.style.top = "1.2%";
         numbb.style.opacity = "1";
         numbb.style.fontWeight = "300";
         numbb.style.left = "50%";
         numtes.innerHTML = numbb.getAttribute('data-value');  
         numtes.value = numbb.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(60deg)";
        
     }else {
         numbb.style.fontSize = "22px";
         numbb.style.top = "3.5%";
         numbb.style.opacity = "0.5"
         numbb.style.left = "50%";
       }
       if(rotationNum < 283 &&  rotationNum > 263){
       numbc.style.fontSize = "44px"
         numbc.style.top = "1.4%";
         numbc.style.opacity = "1";
         numbc.style.fontWeight = "300";
         numbc.style.left = "51%";
         numtes.innerHTML = numbc.getAttribute('data-value');  
         numtes.value = numbc.getAttribute('data-value');  
         circlehighlight.style.transform = "rotate(90deg)";
        
     }else {
         numbc.style.fontSize = "22px";
         numbc.style.top = "3.5%";
         numbc.style.opacity = "0.5"
         numbc.style.left = "50%";
       }
       if(rotationNum < 264 &&  rotationNum > 249){
       numbd.style.fontSize = "44px"
         numbd.style.top = "1.5%";
         numbd.style.opacity = "1";
          numbd.style.fontWeight = "300";
         numbd.style.left = "51%";
         numtes.innerHTML = numbd.getAttribute('data-value'); 
         numtes.value = numbd.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(120deg)";
        
     }else {
         numbd.style.fontSize = "22px";
         numbd.style.top = "3.5%";
         numbd.style.opacity = "0.5"
         numbd.style.left = "50%";
       }
       if(rotationNum < 250 &&  rotationNum > 234){
      numbe.style.fontSize = "44px"
         numbe.style.top = "1.5%";
         numbe.style.opacity = "1";
         numbe.style.fontWeight = "300";
         numbe.style.left = "51.5%";
         numtes.innerHTML = numbe.getAttribute('data-value'); 
         numtes.value = numbe.getAttribute('data-value');  
         circlehighlight.style.transform = "rotate(150deg)";
        
     }else {
          numbe.style.fontSize = "22px";
         numbe.style.top = "3.5%";
         numbe.style.opacity = "0.5"
         numbe.style.left = "50%";
       }
       if (rotationNum < 235 &&  rotationNum > 218) {
         numbf.style.fontSize = "44px"
         numbf.style.top = "2.4%";
         numbf.style.opacity = "1";
         numbf.style.fontWeight = "300";
         numbf.style.left = "52%";
          numtes.innerHTML = numbf.getAttribute('data-value'); 
          numtes.value = numbf.getAttribute('data-value');  
          circlehighlight.style.transform = "rotate(180deg)";
        
       } else {
         numbf.style.fontSize = "22px";
         numbf.style.top = "3.5%";
         numbf.style.opacity = "0.5"
         numbf.style.left = "50%";
         
       }
       if (rotationNum < 219 &&  rotationNum > 203) {
       numbg.style.fontSize = "44px"
         numbg.style.top = "3%";
         numbg.style.opacity = "1";
         numbg.style.fontWeight = "300";
         numbg.style.left = "52.2%";
         numtes.innerHTML = numbg.getAttribute('data-value'); 
         numtes.value = numbg.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(210deg)";
         
       } else {
         numbg.style.fontSize = "22px";
         numbg.style.top = "3.5%";
         numbg.style.opacity = "0.5"
         numbg.style.left = "50%";
       }
       if (rotationNum < 204 &&  rotationNum > 189) {
       numbh.style.fontSize = "44px"
         numbh.style.top = "3.5%";
         numbh.style.opacity = "1";
         numbh.style.fontWeight = "300";
         numbh.style.left = "52.5%";
         numtes.innerHTML = numbh.getAttribute('data-value'); 
         numtes.value = numbh.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(240deg)";
         //numba.style.textShadow
       } else {
         numbh.style.fontSize = "22px";
         numbh.style.top = "3.5%";
         numbh.style.opacity = "0.5"
         numbh.style.left = "50%";
       }
if (rotationNum < 190 &&  rotationNum > 174) {
       numbi.style.fontSize = "44px"
         numbi.style.top = "4.4%";
         numbi.style.opacity = "1";
         numbi.style.fontWeight = "300";
         numbi.style.left = "52.1%";
         numtes.innerHTML = numbi.getAttribute('data-value'); 
         numtes.value = numbi.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(270deg)";
         
       } else {
         numbi.style.fontSize = "22px";
         numbi.style.top = "3.5%";
         numbi.style.opacity = "0.5"
         numbi.style.left = "50%";
       }
if (rotationNum < 175 &&  rotationNum > 157){
          numbj.style.fontSize = "44px"
         numbj.style.top = "4%";
         numbj.style.opacity = "1";
         numbj.style.fontWeight = "300";
         numbj.style.left = "53.5%";
         numtes.innerHTML = numbj.getAttribute('data-value'); 
         numtes.value = numbj.getAttribute('data-value');  
         circlehighlight.style.transform = "rotate(300deg)";
         
       } else {
         numbj.style.fontSize = "22px";
         numbj.style.top = "3.5%";
         numbj.style.opacity = "0.5"
         numbj.style.left = "50%";
       }
if (rotationNum < 158 &&  rotationNum > 143){
       numbk.style.fontSize = "44px"
         numbk.style.top = "5%";
         numbk.style.opacity = "1";
         numbk.style.fontWeight = "300";
         numbk.style.left = "52.5%";
         numtes.innerHTML = numbk.getAttribute('data-value'); 
         numtes.value = numbk.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(330deg)";
         
       } else {
         numbk.style.fontSize = "22px";
         numbk.style.top = "3.5%";
         numbk.style.opacity = "0.5"
         numbk.style.left = "50%";
       }
if (rotationNum < 144 &&  rotationNum > 125){
        numbl.style.fontSize = "44px"
         numbl.style.top = "6%";
         numbl.style.opacity = "1";
         numbl.style.fontWeight = "300";
         numbl.style.left = "52.5%";
         numtes.innerHTML = numbl.getAttribute('data-value'); 
         numtes.value = numbl.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(360deg)"; 
         
       } else {
         numbl.style.fontSize = "22px";
         numbl.style.top = "3.5%";
         numbl.style.opacity = "0.5"
         numbl.style.left = "50%";
       }
       if (rotationNum < 126 &&  rotationNum > 111){
        numbm.style.fontSize = "44px"
         numbm.style.top = "5.7%";
         numbm.style.opacity = "1";
         numbm.style.fontWeight = "300";
          numbm.style.left = "50%";
          numtes.innerHTML = numbm.getAttribute('data-value'); 
          numtes.value = numbm.getAttribute('data-value'); 
          circlehighlight.style.transform = "rotate(30deg)"; 
         
       } else {
         numbm.style.fontSize = "22px";
         numbm.style.top = "3.5%";
         numbm.style.left = "50%";
         numbm.style.opacity = "0.5"
       }
       if (rotationNum < 112 &&  rotationNum > 97){
         numbn.style.fontSize = "44px"
         numbn.style.top = "6%";
         numbn.style.opacity = "1";
         numbn.style.fontWeight = "300";
          numbn.style.left = "50%";
          numtes.innerHTML = numbn.getAttribute('data-value'); 
          numtes.value = numbn.getAttribute('data-value'); 
          circlehighlight.style.transform = "rotate(60deg)"; 
         
       } else {
         numbn.style.fontSize = "22px";
         numbn.style.top = "3.5%";
         numbn.style.left = "50%";
         numbn.style.opacity = "0.5"
       }
       if (rotationNum < 98 &&  rotationNum > 82){
      numbo.style.fontSize = "44px"
         numbo.style.top = "5.5%";
         numbo.style.opacity = "1";
         numbo.style.fontWeight = "300";
         numbo.style.left = "49%";
         numtes.innerHTML = numbo.getAttribute('data-value'); 
         numtes.value = numbo.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(90deg)";
        } else {
         numbo.style.fontSize = "22px";
         numbo.style.top = "3.5%";
         numbo.style.opacity = "0.5"
         numbo.style.left = "50%";
       }
       if (rotationNum < 83 &&  rotationNum > 69){
         numbp.style.fontSize = "44px"
         numbp.style.top = "5.2%";
         numbp.style.opacity = "1";
         numbp.style.fontWeight = "300";
         numbp.style.left = "48.5%";
         numtes.innerHTML = numbp.getAttribute('data-value'); 
         numtes.value = numbp.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(120deg)";
      
       } else {
         numbp.style.fontSize = "22px";
         numbp.style.top = "3.5%";
         numbp.style.opacity = "0.5"
         numbp.style.left = "50%";
       }
    if (rotationNum < 70 &&  rotationNum > 55){
         numbq.style.fontSize = "44px"
         numbq.style.top = "5.2%";
         numbq.style.opacity = "1";
          numbq.style.fontWeight = "300";
         numbq.style.left = "48.5%";
         numtes.innerHTML = numbq.getAttribute('data-value'); 
         numtes.value = numbq.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(150deg)"; 
         //numba.style.textShadow
       } else {
         numbq.style.fontSize = "22px";
         numbq.style.top = "3.5%";
         numbq.style.opacity = "0.5"
         numbq.style.left = "50%";
       }
 if (rotationNum < 56 &&  rotationNum > 40){
        numbr.style.fontSize = "44px"
         numbr.style.top = "5%";
         numbr.style.opacity = "1";
         numbr.style.fontWeight = "300";
         numbr.style.left = "48%";
         numtes.innerHTML = numbr.getAttribute('data-value'); 
         numtes.value = numbr.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(180deg)"; 
         //numba.style.textShadow
       } else {
         numbr.style.fontSize = "22px";
         numbr.style.top = "3.5%";
         numbr.style.opacity = "0.5"
         numbr.style.left = "50%";
       }

         if (rotationNum < 41 &&  rotationNum > 26){
         numbs.style.fontSize = "44px"
         numbs.style.top = "4%";
         numbs.style.opacity = "1";
        numbs.style.fontWeight = "300";
         numbs.style.left = "48%";
         numtes.innerHTML = numbs.getAttribute('data-value'); 
          numtes.value = numbs.getAttribute('data-value');
          circlehighlight.style.transform = "rotate(210deg)"; 
         //numba.style.textShadow
       } else {
         numbs.style.fontSize = "22px";
         numbs.style.top = "3.5%";
         numbs.style.opacity = "0.5"
         numbs.style.left = "50%";
       }
       if (rotationNum < 27 &&  rotationNum > 12){
         numbt.style.fontSize = "44px"
         numbt.style.top = "4%";
         numbt.style.opacity = "1";
         numbt.style.fontWeight = "300";
         numbt.style.left = "47.5%";
         numtes.innerHTML = numbt.getAttribute('data-value');  
         numtes.value = numbt.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(240deg)";
         //numba.style.textShadow
       } else {
         numbt.style.fontSize = "22px";
         numbt.style.top = "3.5%";
         numbt.style.opacity = "0.5"
         numbt.style.left = "50%";
       }
if (rotationNum < 13 &&  rotationNum > 0){
       numbu.style.fontSize = "44px"
         numbu.style.top = "3%";
         numbu.style.opacity = "1";
         numbu.style.fontWeight = "300";
         numbu.style.left = "47.8%";
         numtes.innerHTML = numbu.getAttribute('data-value'); 
         numtes.value = numbu.getAttribute('data-value');   
         circlehighlight.style.transform = "rotate(270deg)";
         //numba.style.textShadow
       } else {
         numbu.style.fontSize = "22px";
         numbu.style.top = "3.5%";
         numbu.style.opacity = "0.5"
         numbu.style.left = "50%";
       }
       if (rotationNum < 360 &&  rotationNum > 339){
 numbv.style.fontSize = "44px"
         numbv.style.top = "3%";
         numbv.style.opacity = "1";
         numbv.style.fontWeight = "300";
         numbv.style.left = "46%";
         numtes.innerHTML = numbv.getAttribute('data-value'); 
         numtes.value = numbv.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(300deg)";
       }
         else if(rotationNum == 0){
numbv.style.fontSize = "44px"
         numbv.style.top = "3%";
         numbv.style.opacity = "1";
         numbv.style.fontWeight = "300";
         numbv.style.left = "46%";
         numtes.innerHTML = numbv.getAttribute('data-value'); 
         numtes.value = numbv.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(330deg)";
         }
         else {
         numbv.style.fontSize = "22px";
         numbv.style.top = "3.5%";
         numbv.style.opacity = "0.5"
         numbv.style.left = "50%";
       }

      
         
       
       
       if (rotationNum < 340 &&  rotationNum > 324){
       numbw.style.fontSize = "44px"
         numbw.style.top = "2%";
         numbw.style.opacity = "1";
         numbw.style.fontWeight = "300";
         numbw.style.left = "47%";
         numtes.innerHTML = numbw.getAttribute('data-value');  
         numtes.value = numbw.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(330deg)";
         //numba.style.textShadow
       } else {
         numbw.style.fontSize = "22px";
         numbw.style.top = "3.5%";
         numbw.style.opacity = "0.5"
         numbw.style.left = "50%";
       }
       if (rotationNum < 325 &&  rotationNum > 308){
        numbx.style.fontSize = "44px"
         numbx.style.top = "1%";
         numbx.style.opacity = "1";
         numbx.style.fontWeight = "300";
         numbx.style.left = "47%";
         numtes.innerHTML = numbx.getAttribute('data-value'); 
         numtes.value = numbx.getAttribute('data-value'); 
         circlehighlight.style.transform = "rotate(360deg)";
         
       } else {
         numbx.style.fontSize = "22px";
         numbx.style.top = "3.5%";
         numbx.style.opacity = "0.5"
         numbx.style.left = "50%";
       }
    },

    onRelease:function(){

  let alarm4 = document.querySelector('.alarmcircle4');
if(rotationNum < 309 && rotationNum > 293){
 TweenMax.to(alarm4, 0.1, {rotation:-61,})
alarm4.style.boxShadow = "0px 0px 16px 6px rgb(188, 219, 254)"

  }
  else if(rotationNum < 294 &&  rotationNum > 282){
     TweenMax.to(alarm4, 0.1, {rotation:-76.5,})
     alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)" 
  }
  else if(rotationNum < 283 &&  rotationNum > 263){
    TweenMax.to(alarm4, 0.1, {rotation:-92,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 264 &&  rotationNum > 249){
    TweenMax.to(alarm4, 0.1, {rotation:-106.5,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 250 &&  rotationNum > 234){
   TweenMax.to(alarm4, 0.1, {rotation:-121,}) 
   alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 235 &&  rotationNum > 218){
    TweenMax.to(alarm4, 0.1, {rotation:-137,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 219 &&  rotationNum > 203) {
    TweenMax.to(alarm4, 0.1, {rotation:-151,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 204 &&  rotationNum > 189) {
    TweenMax.to(alarm4, 0.1, {rotation:-167,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 190 &&  rotationNum > 174) {
    TweenMax.to(alarm4, 0.1, {rotation:-182,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 175 &&  rotationNum > 157) {
    TweenMax.to(alarm4, 0.1, {rotation:-198,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 158 &&  rotationNum > 143) {
    TweenMax.to(alarm4, 0.1, {rotation:-213.75,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 144 &&  rotationNum > 125) {
    TweenMax.to(alarm4, 0.1, {rotation:-228.75,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 126 &&  rotationNum > 111) {
    TweenMax.to(alarm4, 0.1, {rotation:-243,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 112 &&  rotationNum > 97) {
    TweenMax.to(alarm4, 0.1, {rotation:-257.5,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 98 &&  rotationNum > 82) {
    TweenMax.to(alarm4, 0.1, {rotation:-272.5,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 83 &&  rotationNum > 69){
    TweenMax.to(alarm4, 0.1, {rotation:-287.5,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
   else if(rotationNum < 70 &&  rotationNum > 55){
    TweenMax.to(alarm4, 0.1, {rotation:-302,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 56 &&  rotationNum > 40){
    TweenMax.to(alarm4, 0.1, {rotation:-317,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 41 &&  rotationNum > 26){
    TweenMax.to(alarm4, 0.1, {rotation:-331.5,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 27 &&  rotationNum > 12){
    TweenMax.to(alarm4, 0.1, {rotation:-346.5,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
   else if(rotationNum < 13 &&  rotationNum > 0){
    TweenMax.to(alarm4, 0.1, {rotation:-361.5,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 360 &&  rotationNum > 339){
    TweenMax.to(alarm4, 0.1, {rotation:-378,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
   else if(rotationNum == 0){
    TweenMax.to(alarm4, 0.1, {rotation:-378,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 340 &&  rotationNum > 324){
    TweenMax.to(alarm4, 0.1, {rotation:-393,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
  else if(rotationNum < 325 &&  rotationNum > 308){
    TweenMax.to(alarm4, 0.1, {rotation:-408,}) 
    alarm4.style.boxShadow = "0px 0px 16px 5px rgb(188, 219, 254)"
  }
 
 
 
 
    }

    
   
});

let circular = document.querySelector(".circular");

Draggable.create("#knob2", {
    type:"rotation", //instead of "x,y" or "top,left", we can simply do "rotation" to make the object spinnable! 
    throwProps: true, //enables kinetic-based flicking (continuation of movement, decelerating after releasing the mouse/finger)
    onDrag:function(){
      let rotation2 = parseInt(this.rotation %
      360, 10);
      rotationNum2 = (rotation2 < 0) ?
      rotation2 + 360 : rotation2;
      let alarm3 = document.querySelector('.alarmcircle3')
      alarm3.style.transition = "0s";

      
       if(rotationNum2 < 293 && rotationNum2 > 276){
numna.style.fontSize = "40px"
         numna.style.top = "1%";
         numna.style.opacity = "1";
         numna.style.fontWeight = "300";
          numna.style.left = "50%";
          numtes2.innerHTML = numna.getAttribute('data-value'); 
         numtes2.value = numna.getAttribute('data-value');   
         circular.style.stroke = "rgb(198, 225, 255)";
         //numba.style.textShadow
       } else {
         numna.style.fontSize = "22px";
         numna.style.top = "4.5%";
         numna.style.left = "50%";
         numna.style.opacity = "0.5"
     }
     if(rotationNum2 < 277 && rotationNum2 > 250){
numnb.style.fontSize = "40px"
         numnb.style.top = "1.5%";
         numnb.style.opacity = "1";
         numnb.style.fontWeight = "300";
         numnb.style.left = "52%";
         numtes2.innerHTML = numnb.getAttribute('data-value'); 
         numtes2.value = numnb.getAttribute('data-value'); 
 circular.style.stroke = "rgb(185, 218, 255);";
         //numba.style.textShadow
       } else {
         numnb.style.fontSize = "22px";
         numnb.style.top = "4.5%";
         numnb.style.opacity = "0.5"
         numnb.style.left = "50%";
       }
       if(rotationNum2 < 251 && rotationNum2 > 217){
 numnc.style.fontSize = "40px"
         numnc.style.top = "2%";
         numnc.style.opacity = "1";
         numnc.style.fontWeight = "300";
         numnc.style.left = "52%";
         numtes2.innerHTML = numnc.innerText;
         numtes2.value = numnc.innerText; 
          circular.style.stroke = "rgb(164, 207, 255)";
         //numba.style.textShadow
       } else {
         numnc.style.fontSize = "22px";
         numnc.style.top = "4.5%";
         numnc.style.opacity = "0.5"
         numnc.style.left = "50%";
       }
       if(rotationNum2 < 218 && rotationNum2 > 187){
          numnd.style.fontSize = "40px"
         numnd.style.top = "3%";
         numnd.style.opacity = "1";
          numnd.style.fontWeight = "300";
         numnd.style.left = "54%";
         numtes2.innerHTML = numnd.innerText;
         numtes2.value = numnd.innerText; 
         circular.style.stroke = "rgb(150, 199, 255)";
         //numba.style.textShadow
       } else {
         numnd.style.fontSize = "22px";
         numnd.style.top = "4.5%";
         numnd.style.opacity = "0.5"
         numnd.style.left = "50%";
       }
if(rotationNum2 < 188 && rotationNum2 > 158){
        numne.style.fontSize = "40px"
         numne.style.top = "5%";
         numne.style.opacity = "1";
         numne.style.fontWeight = "300";
         numne.style.left = "54%";
         numtes2.innerHTML = numne.innerText;
         numtes2.value = numne.innerText; 
     circular.style.stroke = "rgb(133, 190, 255)";
       } else {
         numne.style.fontSize = "22px";
         numne.style.top = "4.5%";
         numne.style.opacity = "0.5"
         numne.style.left = "50%";      
}
if(rotationNum2 < 159 && rotationNum2 > 128){
 numnf.style.fontSize = "40px"
         numnf.style.top = "7%";
         numnf.style.opacity = "1";
         numnf.style.fontWeight = "300";
         numnf.style.left = "53%";
         numtes2.innerHTML = numnf.innerText;
         numtes2.value = numnf.innerText; 
        circular.style.stroke = "rgb(120, 182, 253)";
         //numba.style.textShadow
       } else {
         numnf.style.fontSize = "22px";
         numnf.style.top = "4.5%";
         numnf.style.opacity = "0.5"
         numnf.style.left = "50%";
       }
       if(rotationNum2 < 129 && rotationNum2 > 97){
          numng.style.fontSize = "40px"
         numng.style.top = "8%";
         numng.style.opacity = "1";
         numng.style.fontWeight = "300";
         numng.style.left = "51%";
         numtes2.innerHTML = numng.innerText;
         numtes2.value = numng.innerText; 
         circular.style.stroke = "rgb(103, 174, 255)";
         //numba.style.textShadow
       } else {
         numng.style.fontSize = "22px";
         numng.style.top = "4.5%";
         numng.style.opacity = "0.5"
         numng.style.left = "50%";
       }
       if(rotationNum2 < 98 && rotationNum2 > 68){
         numnh.style.fontSize = "40px"
         numnh.style.top = "9%";
         numnh.style.opacity = "1";
         numnh.style.fontWeight = "300";
         numnh.style.left = "49%";
         numtes2.innerHTML = numnh.innerText;
         numtes2.value = numnh.innerText; 
         circular.style.stroke = "rgb(90, 167, 255)";
         //numba.style.textShadow
       } else {
         numnh.style.fontSize = "22px";
         numnh.style.top = "4.5%";
         numnh.style.opacity = "0.5"
         numnh.style.left = "50%";
       }
       if(rotationNum2 < 69 && rotationNum2 > 36){
numni.style.fontSize = "40px"
         numni.style.top = "8%";
         numni.style.opacity = "1";
         numni.style.fontWeight = "300";
         numni.style.left = "47.5%";
         numtes2.innerHTML = numni.innerText;
         numtes2.value = numni.innerText; 
         circular.style.stroke = "rgb(76, 160, 255)";
         //numba.style.textShadow
       } else {
         numni.style.fontSize = "22px";
         numni.style.top = "4.5%";
         numni.style.opacity = "0.5"
         numni.style.left = "50%";
       }
       if(rotationNum2 < 37 && rotationNum2 > 6){
         numnj.style.fontSize = "40px"
         numnj.style.top = "5%";
         numnj.style.opacity = "1";
         numnj.style.fontWeight = "300";
         numnj.style.left = "47%";
         numtes2.innerHTML = numnj.innerText;
         numtes2.value = numnj.innerText; 
         circular.style.stroke = "rgb(65, 153, 253)";
         //numba.style.textShadow
       } else {
         numnj.style.fontSize = "22px";
         numnj.style.top = "4.5%";
         numnj.style.opacity = "0.5"
         numnj.style.left = "50%";
       }
       if(rotationNum2 < 370 && rotationNum2 > 339){
         numnk.style.fontSize = "40px"
         numnk.style.top = "4%";
         numnk.style.opacity = "1";
         numnk.style.fontWeight = "300";
         numnk.style.left = "46%";
         numtes2.innerHTML = numnk.innerText;
         numtes2.value = numnk.innerText; 
         circular.style.stroke = "rgb(55, 148, 255))";
         //numba.style.textShadow
        } 
        else if(rotationNum2 == 6){
         numnk.style.fontSize = "40px"
         numnk.style.top = "4%";
         numnk.style.opacity = "1";
         numnk.style.fontWeight = "300";
         numnk.style.left = "46%";
         numtes2.innerHTML = numnk.innerText;
         numtes2.value = numnk.innerText; 
         circular.style.stroke = "rgb(55, 148, 255)";
         //numba.style.textShadow
       } 
       else if(rotationNum2 == 5){
         numnk.style.fontSize = "40px"
         numnk.style.top = "4%";
         numnk.style.opacity = "1";
         numnk.style.fontWeight = "300";
         numnk.style.left = "46%";
         numtes2.innerHTML = numnk.innerText;
         numtes2.value = numnk.innerText; 
         circular.style.stroke = "rgb(55, 148, 255)";
         //numba.style.textShadow
       } 
       else if(rotationNum2 == 4){
         numnk.style.fontSize = "40px"
         numnk.style.top = "4%";
         numnk.style.opacity = "1";
         numnk.style.fontWeight = "300";
         numnk.style.left = "46%";
         numtes2.innerHTML = numnk.innerText;
         numtes2.value = numnk.innerText; 
         circular.style.stroke = "rgb(55, 148, 255)";
         //numba.style.textShadow
       } 
       else if(rotationNum2 == 3){
         numnk.style.fontSize = "40px"
         numnk.style.top = "4%";
         numnk.style.opacity = "1";
         numnk.style.fontWeight = "300";
         numnk.style.left = "46%";
         numtes2.innerHTML = numnk.innerText;
         numtes2.value = numnk.innerText; 
         circular.style.stroke = "rgb(55, 148, 255)";
         //numba.style.textShadow
       } 
       else if(rotationNum2 == 2){
         numnk.style.fontSize = "40px"
         numnk.style.top = "4%";
         numnk.style.opacity = "1";
         numnk.style.fontWeight = "300";
         numnk.style.left = "46%";
         numtes2.innerHTML = numnk.innerText;
         numtes2.value = numnk.innerText; 
         circular.style.stroke = "rgb(55, 148, 255)";
         //numba.style.textShadow
       } 
       else if(rotationNum2 == 1){
         numnk.style.fontSize = "40px"
         numnk.style.top = "4%";
         numnk.style.opacity = "1";
         numnk.style.fontWeight = "300";
         numnk.style.left = "46%";
         numtes2.innerHTML = numnk.innerText;
         numtes2.value = numnk.innerText; 
         circular.style.stroke = "rgb(55, 148, 255)";
         //numba.style.textShadow
       } 
       else if(rotationNum2 == 0){
         numnk.style.fontSize = "40px"
         numnk.style.top = "4%";
         numnk.style.opacity = "1";
         numnk.style.fontWeight = "300";
         numnk.style.left = "46%";
         numtes2.innerHTML = numnk.innerText;
         numtes2.value = numnk.innerText; 
         circular.style.stroke = "rgb(55, 148, 255)";
         //numba.style.textShadow
       } 
        else {
         numnk.style.fontSize = "22px";
         numnk.style.top = "4.5%";
         numnk.style.opacity = "0.5"
         numnk.style.left = "50%";
       }
       if(rotationNum2 < 340 && rotationNum2 > 292){
        numnl.style.fontSize = "40px"
         numnl.style.top = "2%";
         numnl.style.opacity = "1";
         numnl.style.fontWeight = "300";
         numnl.style.left = "48%";
         numtes2.innerHTML = numnl.innerText;
         numtes2.value = numnl.innerText; 
         circular.style.stroke = "rgb(34, 137, 255)";
         //numba.style.textShadow
       } else {
         numnl.style.fontSize = "22px";
         numnl.style.top = "4.5%";
         numnl.style.opacity = "0.5"
         numnl.style.left = "50%";
       }
    },
     onRelease:function(){

  let alarm3 = document.querySelector('.alarmcircle3');
  if(rotationNum2 < 293 && rotationNum2 > 276){
    TweenMax.to(alarm3, 0.15, {rotation:-76.5,})
  }
else if(rotationNum2 < 277 && rotationNum2 > 250){
    TweenMax.to(alarm3, 0.15, {rotation:-106.5,})
  }
  else if(rotationNum2 < 251 && rotationNum2 > 217){
    TweenMax.to(alarm3, 0.15, {rotation:-138,})
  }
  else if(rotationNum2 < 218 && rotationNum2 > 187){
    TweenMax.to(alarm3, 0.15, {rotation:-167.5,})
  }
  else if(rotationNum2 < 188 && rotationNum2 > 158){
    TweenMax.to(alarm3, 0.15, {rotation:-197.5,})
  }
  else if(rotationNum2 < 159 && rotationNum2 > 128){
    TweenMax.to(alarm3, 0.15, {rotation:-227.5,})
  }
  else if(rotationNum2 < 129 && rotationNum2 > 97){
    TweenMax.to(alarm3, 0.15, {rotation:-257.5,})
  }
  else if(rotationNum2 < 98 && rotationNum2 > 68){
     TweenMax.to(alarm3, 0.15, {rotation:-287.5,})
  }
  else if(rotationNum2 < 69 && rotationNum2 > 36){
    TweenMax.to(alarm3, 0.15, {rotation:-317.5,})
  }
  else if(rotationNum2 < 37 && rotationNum2 > 6){
  TweenMax.to(alarm3, 0.15, {rotation:-349.5,})
  }
  
else if(rotationNum2 < 361 && rotationNum2 > 339){
 TweenMax.to(alarm3, 0.15, {rotation:-18.5,})
  }
  else if(rotationNum2 == 7){
 TweenMax.to(alarm3, 0.15, {rotation:-18.5,})
  }
  else if(rotationNum2 == 6){
 TweenMax.to(alarm3, 0.15, {rotation:-18.5,})
  }
  else if(rotationNum2 == 5){
 TweenMax.to(alarm3, 0.15, {rotation:-18.5,})
  }
  else if(rotationNum2 == 4){
 TweenMax.to(alarm3, 0.15, {rotation:-18.5,})
  }
  else if(rotationNum2 == 3){
 TweenMax.to(alarm3, 0.15, {rotation:-18.5,})
  }
  else if(rotationNum2 == 2){
 TweenMax.to(alarm3, 0.15, {rotation:-18.5,})
  }
  else if(rotationNum2 == 1){
 TweenMax.to(alarm3, 0.15, {rotation:-18.5,})
  }
  else if(rotationNum2 == 0){
 TweenMax.to(alarm3, 0.15, {rotation:-18.5,})
  }
  if(rotationNum2 < 340 && rotationNum2 > 292){
  TweenMax.to(alarm3, 0.15, {rotation:-49,})
  }
    }
});


Draggable.create("#knob3", {
    type:"rotation", //instead of "x,y" or "top,left", we can simply do "rotation" to make the object spinnable! 
     onDrag:function(){
      let rotation3 = parseInt(this.rotation %
      360, 10);
      rotationNum3 = (rotation3 < 0) ?
      rotation3 + 360 : rotation3;
      let alarm2 = document.querySelector('.alarmcircle2')
      alarm2.style.transition = "0s";

if(rotationNum3 < 307 && rotationNum3 > 268){
ampmChildren[0].style.fontSize = "25px"
         ampmChildren[0].style.top = "8%";
         ampmChildren[0].style.opacity = "1";
         ampmChildren[0].style.fontWeight = "300";
          ampmChildren[0].style.left = "50%";
          numtes3.innerHTML = ampmChildren[0].getAttribute('data-value');
         numtes3.value = ampmChildren[0].getAttribute('data-value');
         //numba.style.textShadow
       } else {
         ampmChildren[0].style.fontSize = "23px";
         ampmChildren[0].style.top = "8%";
         ampmChildren[0].style.left = "50%";
         ampmChildren[0].style.opacity = "0.3"
       }

if(rotationNum3 < 269 && rotationNum3 > 231){
ampmChildren[1].style.fontSize = "25px"
         ampmChildren[1].style.top = "8%";
         ampmChildren[1].style.opacity = "1";
         ampmChildren[1].style.fontWeight = "300";
         ampmChildren[1].style.left = "50%";
         numtes3.innerHTML = ampmChildren[1].getAttribute('data-value'); 
         numtes3.value = ampmChildren[1].getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         ampmChildren[1].style.fontSize = "23px";
         ampmChildren[1].style.top = "8%";
         ampmChildren[1].style.opacity = "0.3"
         ampmChildren[1].style.left = "50%";
       }

if(rotationNum3 < 232 && rotationNum3 > 196){
   ampmChildren[2].style.fontSize = "25px"
         ampmChildren[2].style.top = "8%";
         ampmChildren[2].style.opacity = "1";
         ampmChildren[2].style.fontWeight = "300";
         ampmChildren[2].style.left = "50%";
         numtes3.innerHTML = ampmChildren[2].getAttribute('data-value'); 
         numtes3.value = ampmChildren[2].getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         ampmChildren[2].style.fontSize = "23px";
         ampmChildren[2].style.top = "8%";
         ampmChildren[2].style.opacity = "0.3";
         ampmChildren[2].style.left = "50%";
       }

if(rotationNum3 < 197 && rotationNum3 > 160){
  ampmChildren[3].style.fontSize = "25px"
         ampmChildren[3].style.top = "8%";
         ampmChildren[3].style.opacity = "1";
         ampmChildren[3].style.fontWeight = "300";
         ampmChildren[3].style.left = "50%";
         numtes3.innerHTML = ampmChildren[3].getAttribute('data-value'); 
         numtes3.value = ampmChildren[3].getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         ampmChildren[3].style.fontSize = "23px";
         ampmChildren[3].style.top = "8%";
         ampmChildren[3].style.opacity = "0.3";
         ampmChildren[3].style.left = "50%";
       }


if(rotationNum3 < 161 && rotationNum3 > 125){
ampmChildren[4].style.fontSize = "25px"
         ampmChildren[4].style.top = "8%";
         ampmChildren[4].style.opacity = "1";
         ampmChildren[4].style.fontWeight = "300";
         ampmChildren[4].style.left = "50%";
         numtes3.innerHTML = ampmChildren[4].getAttribute('data-value'); 
         numtes3.value = ampmChildren[4].getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         ampmChildren[4].style.fontSize = "23px";
         ampmChildren[4].style.top = "8%";
         ampmChildren[4].style.opacity = "0.3";
         ampmChildren[4].style.left = "50%";
       }

if(rotationNum3 < 126 && rotationNum3 > 88){
 ampmChildren[5].style.fontSize = "25px"
         ampmChildren[5].style.top = "8%";
         ampmChildren[5].style.opacity = "1";
         ampmChildren[5].style.fontWeight = "300";
         ampmChildren[5].style.left = "50%";
         numtes3.innerHTML = ampmChildren[5].getAttribute('data-value'); 
         numtes3.value = ampmChildren[5].getAttribute('data-value');
         //numba.style.textShadow
       } else {
         ampmChildren[5].style.fontSize = "23px";
         ampmChildren[5].style.top = "8%";
         ampmChildren[5].style.opacity = "0.3";
         ampmChildren[5].style.left = "50%";
       }

if(rotationNum3 < 89 && rotationNum3 > 52){
ampmChildren[6].style.fontSize = "25px"
         ampmChildren[6].style.top = "8%";
         ampmChildren[6].style.opacity = "1";
         ampmChildren[6].style.fontWeight = "300";
         ampmChildren[6].style.left = "50%";
         numtes3.innerHTML = ampmChildren[6].getAttribute('data-value');
         numtes3.value = ampmChildren[6].getAttribute('data-value');
         //numba.style.textShadow
       } else {
         ampmChildren[6].style.fontSize = "23px";
         ampmChildren[6].style.top = "8%";
         ampmChildren[6].style.opacity = "0.3";
         ampmChildren[6].style.left = "50%";
       }

if(rotationNum3 < 53 && rotationNum3 > 16){
ampmChildren[7].style.fontSize = "25px"
         ampmChildren[7].style.top = "8%";
         ampmChildren[7].style.opacity = "1";
         ampmChildren[7].style.fontWeight = "300";
         ampmChildren[7].style.left = "50%";
         numtes3.innerHTML = ampmChildren[7].getAttribute('data-value');
         numtes3.value = ampmChildren[7].getAttribute('data-value');
         //numba.style.textShadow
       } else {
         ampmChildren[7].style.fontSize = "23px";
         ampmChildren[7].style.top = "8%";
         ampmChildren[7].style.opacity = "0.3";
         ampmChildren[7].style.left = "50%";
       }
  
if(rotationNum3 < 17 && rotationNum3 > 0){
  ampmChildren[8].style.fontSize = "25px"
         ampmChildren[8].style.top = "8%";
         ampmChildren[8].style.opacity = "1";
         ampmChildren[8].style.fontWeight = "300";
         ampmChildren[8].style.left = "50%";
         numtes3.innerHTML = ampmChildren[8].getAttribute('data-value');
         numtes3.value = ampmChildren[8].getAttribute('data-value');
         //numba.style.textShadow
}
else if(rotationNum3 == 0){
  ampmChildren[8].style.fontSize = "25px"
         ampmChildren[8].style.top = "8%";
         ampmChildren[8].style.opacity = "1";
         ampmChildren[8].style.fontWeight = "300";
         ampmChildren[8].style.left = "50%";
         numtes3.innerHTML = ampmChildren[8].getAttribute('data-value');
         numtes3.value = ampmChildren[8].getAttribute('data-value');
         //numba.style.textShadow
}
else if(rotationNum3 < 361 && rotationNum3 > 341){
    ampmChildren[8].style.fontSize = "25px"
         ampmChildren[8].style.top = "8%";
         ampmChildren[8].style.opacity = "1";
         ampmChildren[8].style.fontWeight = "300";
         ampmChildren[8].style.left = "50%";
         numtes3.innerHTML = ampmChildren[8].getAttribute('data-value');
         numtes3.value = ampmChildren[8].getAttribute('data-value');
         //numba.style.textShadow
       } else {
         ampmChildren[8].style.fontSize = "23px";
         ampmChildren[8].style.top = "8%";
         ampmChildren[8].style.opacity = "0.3";
         ampmChildren[8].style.left = "50%";
         
       }

if(rotationNum3 < 342 && rotationNum3 > 306){
 ampmChildren[9].style.fontSize = "25px"
         ampmChildren[9].style.top = "8%";
         ampmChildren[9].style.opacity = "1";
         ampmChildren[9].style.fontWeight = "300";
         ampmChildren[9].style.left = "50%";
         numtes3.innerHTML = ampmChildren[9].getAttribute('data-value');
         numtes3.value = ampmChildren[9].getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         ampmChildren[9].style.fontSize = "23px";
         ampmChildren[9].style.top = "8%";
         ampmChildren[9].style.opacity = "0.3";
         ampmChildren[9].style.left = "50%";
    } 
     },
     onRelease:function(){

  let alarm2 = document.querySelector('.alarmcircle2');
  if(rotationNum3 < 307 && rotationNum3 > 268){
    TweenMax.to(alarm2, 0.15, {rotation:-89,})
  }
  else if(rotationNum3 < 269 && rotationNum3 > 231){
    TweenMax.to(alarm2, 0.15, {rotation:-125,})
  }
   else if(rotationNum3 < 232 && rotationNum3 > 196){
    TweenMax.to(alarm2, 0.15, {rotation:-163,})
  }
  else if(rotationNum3 < 197 && rotationNum3 > 160){
    TweenMax.to(alarm2, 0.15, {rotation:-197,})
  }
  else if(rotationNum3 < 161 && rotationNum3 > 125){
    TweenMax.to(alarm2, 0.15, {rotation:-234,})
  }
  else if(rotationNum3 < 126 && rotationNum3 > 88){
    TweenMax.to(alarm2, 0.15, {rotation:-269.5,})
  }
  else if(rotationNum3 < 89 && rotationNum3 > 52){
    TweenMax.to(alarm2, 0.15, {rotation:-306,})
  }
  else if(rotationNum3 < 53 && rotationNum3 > 16){
    TweenMax.to(alarm2, 0.15, {rotation:-342,})
  }
  else if(rotationNum3 < 17 && rotationNum3 > 0){
    TweenMax.to(alarm2, 0.15, {rotation:-378,})
  }
  else if(rotationNum3 == 0){
    TweenMax.to(alarm2, 0.15, {rotation:-378,})
  }
  else if(rotationNum3 < 361 && rotationNum3 > 341){
    TweenMax.to(alarm2, 0.15, {rotation:-17,})
  }
  else if(rotationNum3 < 342 && rotationNum3 > 306){
    TweenMax.to(alarm2, 0.15, {rotation:-53,})
  }
     }
});

 //let numbCollision = document.querySelector('.numb.a');
 



//see https://www.greensock.com/draggable/ for more details.



//see https://www.greensock.com/draggable/ for more details.


//var droo7 = document.querySelector('.droo7')

let numtes = document.querySelector('.hours');
let numtes2 = document.querySelector('.minutes')
let numtes3 = document.querySelector('.ampmone');



var numba = document.querySelector(".numb.a")
var numbb = document.querySelector(".numb.b")
var numbc = document.querySelector(".numb.c")
var numbd = document.querySelector(".numb.d")
var numbe = document.querySelector(".numb.e")
var numbf = document.querySelector(".numb.f")
var numbg = document.querySelector(".numb.g")
var numbh = document.querySelector(".numb.h")
var numbi = document.querySelector(".numb.i")
var numbj = document.querySelector(".numb.j")
var numbk = document.querySelector(".numb.k")
var numbl = document.querySelector(".numb.l")
var numbm = document.querySelector(".numb.m")
var numbn = document.querySelector(".numb.n")
var numbo = document.querySelector(".numb.o")
var numbp = document.querySelector(".numb.p")
var numbq = document.querySelector(".numb.q")
var numbr = document.querySelector(".numb.r")
var numbs = document.querySelector(".numb.s")
var numbt = document.querySelector(".numb.t")
var numbu = document.querySelector(".numb.u")
var numbv = document.querySelector(".numb.v")
var numbw = document.querySelector(".numb.w")
var numbx = document.querySelector(".numb.x")


var numna = document.querySelector(".numn.a")
var numnb = document.querySelector(".numn.b")
var numnc = document.querySelector(".numn.c")
var numnd = document.querySelector(".numn.d")
var numne = document.querySelector(".numn.e")
var numnf = document.querySelector(".numn.f")
var numng = document.querySelector(".numn.g")
var numnh = document.querySelector(".numn.h")
var numni = document.querySelector(".numn.i")
var numnj = document.querySelector(".numn.j")
var numnk = document.querySelector(".numn.k")
var numnl = document.querySelector(".numn.l")

var ampm = document.querySelector(".amspms");

let ampmChildren = ampm.children;



  let ok = document.querySelector('.ok')
          ok == true;

let circlehighlight = document.querySelector(".clockcirclehighlight");

//the overlapThreshold can be a percentage ("50%", for example, would only trigger when 50% or more of the surface area of either element overlaps) or a number of pixels (20 would only trigger when 20 pixels or more overlap), or 0 will trigger when any part of the two elements overlap.
//var overlapThreshold = "50%"; 

//we'll call onDrop() when a Draggable is dropped on top of one of the "droppables", and it'll make it "flash" (blink opacity). Obviously you can do whatever you want in this function.


//TweenMax.ticker.addEventListener("tick", onDrag);








   


 

       
         
        

         

            

       
       
         
       
         
      
      

         
       
        
       
        

        

      
        
           
       

          
        

           

         
       
         
       
        
      
         
        
        
       







window.setInterval(function(){

         
    

         

         

        
       
         

         
       
       


       

   
       let current = document.querySelector(".currentTime2");
       current.innerText = numtes.innerText + ":" + numtes2.innerText + " " + numtes3.innerText;
const deg = 6;
  const hr = document.querySelector("#hr2");
  const mn = document.querySelector("#mn2");

  
    
    let hh = numtes.innerText * 30;
    let mm = numtes2.innerText * deg;
    hr.style.transform = `rotateZ(${(hh)+(mm/12)}deg)`;
    mn.style.transform = `rotateZ(${mm}deg)`;

       
        

}, 100 );




       
       
       /* ALTERNATE TEST: you can use the static Draggable.hitTest() method for even more flexibility, like passing in a mouse event to see if the mouse is overlapping with the element...
       if (Draggable.hitTest(droppables[i], e) && droppables[i] !== this.target) {
         $(droppables[i]).addClass("highlight");
       } else {
         $(droppables[i]).removeClass("highlight");
       }
       */
    },



    


  
  

 
      

    


  methods: {
    alarmClock(){

    },

   
      alarm3(){

let alarm3 = document.querySelector(".alarmcircle3");
alarm3.style.left = "20%";
      },
      getTime(){

          let alarm1 = document.querySelector('.alarmcircle1')
          let alarm2 = document.querySelector('.alarmcircle2')
          let alarm3 = document.querySelector('.alarmcircle3')
          let alarm4 = document.querySelector('.alarmcircle4')
         alarm4.style.top = "55px";
         alarm4.style.left = "55px";
         alarm4.style.transition = "0.375s"
  
         alarm3.style.top = "40px";
         alarm3.style.left = "40px";
         alarm3.style.transition = "0.25s"

         alarm2.style.top = "25px";
         alarm2.style.left = "25px";
  
          alarm2.style.transition = "0.125s"
          let set = document.querySelector('.set')
           let ok = document.querySelector('.ok')
         set.style.transition = "0.35s";
         set.style.opacity = "1";
          ok.style.transition = '0.35s';
          alarm1.style.transform = "rotate(180deg)";
          alarm1.style.left = "-80px";
          alarm1.style.top = "-80px";
          Draggable.get(".alarmcircle4").disable();
          Draggable.get(".alarmcircle3").disable();
          Draggable.get(".alarmcircle2").disable();
      },
      snooze(){
        let alarmOff = document.querySelector(".alarmOff");
         alarmOff.style.top = "150%";
        let snoozebutton = document.querySelector(".snoozebtn");
        snoozebutton.style.visibility = "hidden";
        let snooze2 = document.querySelector(".snoozebtn2");
        snooze2.style.visibility = "visible";
this.snooze = window.setInterval(function(){
  alarmOff.style.top = "50%";
this.snoozefunc = window.setInterval(function(){
let currentTime;
   
let currentDate;
let displayDate = document.querySelector('.displayDate')
let currentTimeDiv = document.querySelector(".currentTime")

    let now = new Date();
    var options = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
};

let nowDate = new Date();

currentDate = `${nowDate.getFullYear()}/${(nowDate.getMonth() + 1)}/${nowDate.getDate()}`;

displayDate.innerText = currentDate;


    currentTime = now.toLocaleString('en-GB', options);
    currentTimeDiv.textContent = currentTime;
   

   
   
 let displayTime = document.querySelector('.displayTime')
         displayTime.innerText = currentTime;
         displayTime.innerText = displayTime.innerText.replace(/m$/, "") + "";
         displayTime.innerText = displayTime.innerText.replace(/p$/, "") + "";
         displayTime.innerText = displayTime.innerText.replace(/a$/, "") + "";
         displayTime.innerText = displayTime.innerText.replace(/ $/, "") + "";
             }, 1000 )
}, 50000)

      },

    snooze2(){
      let alarmOff = document.querySelector('.alarmOff')
         alarmOff.style.top = "150%";
  },
  

     getTimeStop(){
         let alarm1 = document.querySelector('.alarmcircle1')
         let alarm2 = document.querySelector('.alarmcircle2')
          let alarm3 = document.querySelector('.alarmcircle3')
          let alarm4 = document.querySelector('.alarmcircle4')
       alarm4.style.top = "100%";
         alarm4.style.left = "100%";
         alarm4.style.transition = "0.375s"
         alarm3.style.top = "100%";
         alarm3.style.left = "100%";
         alarm3.style.transition = "0.25s"
         alarm2.style.top = "100%";
         alarm2.style.left = "100%";
          alarm2.style.transition = "0.125s"
         let set = document.querySelector('.set')
alarm1.style.transform = "rotate(360deg)";
          set.style.opacity = "0.5";
          set.style.transition = '0.35s';
          window.clearTimeout(this.showtime);
          window.clearTimeout(this.snooze);
         window.clearTimeout(this.snoozefunc);
         Draggable.get(".alarmcircle4").enable();
         Draggable.get(".alarmcircle3").enable();
         Draggable.get(".alarmcircle2").enable();

         },
         alarmOff(){
         let alarmOff = document.querySelector('.alarmOff')
         let alarm1 = document.querySelector('.alarmcircle1')
         alarmOff.style.top = "150%";
         window.clearTimeout(this.showtime);
         window.clearTimeout(this.snooze);
         window.clearTimeout(this.snoozefunc);
         alarm1.style.transform = "rotate(360deg)";
         },
         showTime(){
            this.showtime = window.setInterval(function(){
let currentTime;
   let current = document.querySelector(".currentTime2")
let currentDate;
let displayDate = document.querySelector('.displayDate')
let currentTimeDiv = document.querySelector(".currentTime")

    let now = new Date();
    var options = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
};

/*
let alarmDate = new Date('12:30:00');
var options2 = {
  hour: '2-digit',
  minute: '2-digit',
  hour12: true
};
*/

let nowDate = new Date();

currentDate = `${nowDate.getFullYear()}/${(nowDate.getMonth() + 1)}/${nowDate.getDate()}`;

displayDate.innerText = currentDate;


    currentTime = now.toLocaleString('en-GB', options);
    currentTimeDiv.textContent = currentTime;
   
   if(current.innerText === currentTimeDiv.innerText){
   let alarmOff = document.querySelector('.alarmOff');
   alarmOff.style.top = "50%";
   }
 let displayTime = document.querySelector('.displayTime')
         displayTime.innerText = currentTime;
         displayTime.innerText = displayTime.innerText.replace(/m$/, "") + "";
         displayTime.innerText = displayTime.innerText.replace(/p$/, "") + "";
         displayTime.innerText = displayTime.innerText.replace(/a$/, "") + "";
         displayTime.innerText = displayTime.innerText.replace(/ $/, "") + "";
             }, 1000 )
}
     }

   
}
</script>

<style scoped>
circle{
   fill: none;
  stroke: rgb(198, 225, 255);
  stroke-width: 2;
  stroke-dasharray: 150;
  stroke-dashoffset: 166;
visibility: hidden;

}

.alarmcirclecontainer{
  position: absolute;
  top: 150%;
  left: 150%;
  transition: 0.2s;
  z-index: +800;
  transform: translate(-50%, -50%);
}

.svgcontainer{
  left: 40%;
  top: -40px;
  position: absolute;
  transform: rotate(49deg);
}







.alarmcircle1{
    height: 160px;
    width: 160px;
    background: rgb(65, 152, 252);
    border: 2px solid rgb(65, 152, 252);
    border-radius: 50%;
    position: absolute;
    box-shadow: 0px 0px 12px 2px rgb(65, 152, 252);
 
   top: -80px;
   left: -80px;
    z-index: 100;
    transition: all 0.6s;
    overflow: hidden;
    
}

@keyframes rotatealarm{
100%{transform: rotate(180deg)}
100%{top: 90%}
100%{left: 78%};
}

@keyframes rotatealarm2{
100%{transform: rotate(180deg)}
100%{top: 90%}
100%{left: 78%};
}

.alarmcircle2{
    height: 310px;
    width: 310px;
    background: rgb(102, 172, 252);
    border: 3px solid 	rgba(94, 169, 255, 0.507);
    border-radius: 50%;
    position: absolute;
    box-shadow: 0px 0px 12px 2px 	rgb(102, 172, 252);
    transform: translate(-50%, -50%);
    left: 120%;
    top: 120%;
    z-index: 95;
    
}

.alarmcircle3{
    height: 460px;
    width: 460px;
    background: rgb(168, 209, 253);
    border: 3px solid rgba(158, 204, 253, 0.466);
    border-radius: 50%;
    position: absolute;
    box-shadow: 0px 0px 12px 5px rgb(158, 204, 253);
    transform: translate(-50%, -50%);
    left: 125%;
    top: 125%;
    z-index: 93;
    
    
}

.alarmcircle4{
    height: 610px;
    width: 610px;
    background: rgb(203, 227, 254);
    border-radius: 50%;
    border: 4px solid rgb(198, 225, 254);
    position: absolute;
    box-shadow: 0px 0px 15px 4px rgb(188, 219, 254);
  transform: translate(-50%, -50%);
    left: 135%;
    top: 135%;
    z-index: 90;
    opacity: 0.9;
   
    
   
}





.timeleftalarm{
    font-family: "Roboto";
    position: absolute;
    left: 0%;
    top: 54%;
    font-size: 15px;
    font-weight: 300;
    color: rgb(131, 193, 255);
    transform: translate(-50%, -50%);
    visibility: hidden;
}

.alarmtime{
    font-family: "Roboto";
    position: absolute;
    left: 0%;
    top: 65%;
    font-size: 14px;
    font-weight: 300;
    color: rgb(131, 193, 255);
    transform: translate(-50%, -50%);
    visibility: hidden;
}

.alarmsoundContainer{
  height: 50px;
  width: 140px;
overflow: hidden;
  position: absolute;
  left: 0%;
  visibility: hidden;
  top: 58%;
  z-index: +5000;
  transform: translate(-50%, -50%);
  
}

.sounds{
   height: 50px;
  width: 140px;
 
  
 
  
}
.soundsnep{
   height: 50px;
  width: 140px;
 left: -20;
 top: 50%;
  
 position: absolute;
  transform: translate(-50%, -50%);
}


.currentTime2{
  position: absolute;
top: 69%;
  left: 0%;
  font-weight: 300;
  transform: translate(-50%, -50%);
font-family: 'Roboto', sans-serif;
   font-size: 22px;
     color: rgb(55, 153, 252);
     opacity: 1;
    visibility: hidden;
    z-index: +40;
    
   
 
    
}




.alarmsound2.timeleftnum{
    font-family: "Roboto";
    position: absolute;
    left: 50%;
    top: 50%;
    font-size: 22px;
    word-spacing: 2px;
    font-weight: 300;
    opacity: 1;
    color: rgb(35, 145, 255);
    transform: translate(-50%, -50%);
    
    white-space: nowrap;
}

.alarmsound2{
    font-family: "Roboto";
    position: absolute;
    left: 160%;
    top: 50%;
    font-size: 22px;
    word-spacing: 2px;
    font-weight: 300;
    opacity: 1;
    color: rgb(35, 145, 255);
    transform: translate(-50%, -50%);
    
    white-space: nowrap;

}

.alarmsound2.neptune{
    font-family: "Roboto";
    position: absolute;
    left: 255%;
    top: 50%;
    font-size: 22px;
    word-spacing: 2px;
    font-weight: 300;
    opacity: 1;
    color: rgb(35, 145, 255);
    transform: translate(-50%, -50%);
   
    white-space: nowrap;
}

.alarmsound2.clone{
    font-family: "Roboto";
    position: absolute;
    left: -62%;
    top: 50%;
    font-size: 22px;
    word-spacing: 2px;
    font-weight: 300;
    opacity: 1;
    color: rgb(35, 145, 255);
    transform: translate(-50%, -50%);
    
    white-space: nowrap;

}

.alarmsound2.blissful2{
    font-family: "Roboto";
    position: absolute;
    left: -155%;
    top: 50%;
    font-size: 22px;
    word-spacing: 2px;
    font-weight: 300;
    opacity: 1;
    color: rgb(35, 145, 255);
    transform: translate(-50%, -50%);
    
    white-space: nowrap;

}

.alarmsound2.morning2{
    font-family: "Roboto";
    position: absolute;
    left: -265%;
    top: 50%;
    font-size: 22px;
    word-spacing: 2px;
    font-weight: 300;
    opacity: 1;
    color: rgb(35, 145, 255);
    transform: translate(-50%, -50%);
    
    white-space: nowrap;

}








.numb{
  position: absolute;
  top: 3.5%;
  left: 50%;

color: rgb(255, 255, 255);
  width: 0px;
  height: 93%;
font-size: 25px;
opacity: 0.5;
font-family: 'Open Sans', sans-serif;
  transform: translate(-50%, -50%);

text-shadow: 0px 0px 0px white;
  
}

.numb:after{
content: '';
position: absolute;
top: 100%;
left: 100%;
transform: translateX(-50%);


transition: 0.2s ease-in;

animation-play-state: paused;
}

.numn{
  position: absolute;
  top: 4.5%;
  left: 50%;

color: rgb(255, 255, 255);
  width: 0px;
  height: 91%;
font-size: 22px;
opacity: 0.5;
font-family: 'Open Sans', sans-serif;
  transform: translate(-50%, -50%);

text-shadow: 0px 0px 0px white;
  
}

.numn:after{
content: '';
position: absolute;
top: 100%;
left: 100%;
transform: translateX(-50%);


transition: 0.2s ease-in;

animation-play-state: paused;
}

.ampm{
  position: absolute;
  top: 8%;
  left: 50%;

color: rgb(255, 255, 255);
  width: 0px;
  height: 84%;
font-size: 23px;
opacity: 0.3;
font-family: 'Rubik', sans-serif;
  transform: translate(-50%, -50%);
visibility: visible;
text-shadow: 0px 0px 0px white;
font-weight: 300;
  
}

.ampm:after{
content: '';
position: absolute;
top: 100%;
left: 100%;



transition: 0.2s ease-in;

animation-play-state: paused;
}

.okdiv{
    
    background: none;
    width: 100px;
    height: 100px;
    font-size: 21px;
    opacity: 0.5;
   
    position: absolute;
    top: 18%;
    left: 18%;
  transform: translate(-50%, -50%);  
}

.ok{
font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    color: rgb(255, 255, 255);
    position: absolute;
    top: 66%;
    left: 66%;
    opacity: 1;
  transform: translate(-50%, -50%);  
}

.setdiv{
   background: none;
    width: 100px;
    height: 100px;
    font-size: 21px;
    opacity: 0.9;

    position: absolute;
    top: 81%;
    left: 81%;
  transform: translate(-50%, -50%);  

}

.set{
font-family: 'Open Sans', sans-serif;
    font-weight: 300;
    color: rgb(255, 255, 255);
    position: absolute;
    top: 20%;
    left: 15%;
    transform: rotate(180deg);
    opacity: 1; 
    text-shadow: 0px 0px 8px 8px white;
    letter-spacing: 0.5px;
}



.currentTime{
  position: absolute;
top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
font-family: 'Rubik', sans-serif;
   font-size: 40px;
     color: rgb(2, 2, 2);
     opacity: 0;
    visibility: visible;
    z-index: +40;
    width: 300px;
    height: 300px;
  
    
}


/*
.alarmtxt{
  position: absolute;
top: 24.5%;
  left: 50%;
  font-weight: 300;
  transform: translate(-50%, -50%);
font-family: 'Open Sans', sans-serif;
   font-size: 34px;
     color: rgb(168, 209, 253);
     opacity: 1;
    visibility: visible;
    z-index: +40;
   text-shadow: 0px 0px 5px 10px rgb(168, 209, 253);
 
    
}

*/
.dismissbtn{
    position: absolute;
    top: 90%;
    left: 50%;
     background: rgb(235, 245, 255);
 box-shadow: 0px 2px 5px 3px rgb(221, 233, 245);
    width: 55px;
height: 55px;
border-radius:50%;
    transform: translate(-50%, -50%);
    
}








.displayTime{
  position: absolute;
top: 54%;
  left: 50%;
  font-weight: 400;
  transform: translate(-50%, -50%);
font-family: 'Montserrat', sans-serif;
   font-size: 60px;
     color: rgb(78, 78, 78);
    visibility: visible;
    z-index: +40;
   text-shadow: 0px 0px 5px 10px white;
 
    
}

.displayDate{
  position: absolute;
top: 60.5%;
  left: 50%;
  font-weight: 300;
  transform: translate(-50%, -50%);
font-family: 'Montserrat', sans-serif;
font-weight: 300;
   font-size: 20px;
     color: rgb(161, 161, 161);
     opacity: 0.8;
    visibility: visible;
    z-index: +40;
   text-shadow: 0px 0px 5px 10px white;
 
    
}



.hours{
font-size: 40px;
color: black;
position: absolute;
left: 220%;
top: 50%;
width: 50px;
height: 50px;
opacity: 1;
background: black;
}

.minutes{
font-size: 40px;
color: black;
position: absolute;
left: 220%;
top: 50%;
opacity: 1;
background: black;
}

.ampmone{
   position: absolute;
left: 220%;
top: 50%; 
font-size: 40px;
opacity: 1;
background: black;
}



.alarmOff{
    top: 400%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgb(224, 240, 255);
visibility: visible;
    z-index: +1000000;

}

.alarmX{
  position: absolute;
  top: 56%;
    left: 50%;
   color: rgba(31, 141, 252, 0.945);
font-size: 25px;
font-family: 'Montserrat', sans-serif;
    transform: translate(-50%, -50%);
    
}

.alarmOffbg{
    background: rgb(241, 248, 255);
    position: absolute;
    top: 72%;
    left: 49%;
    z-index: -3;
    height: 68%;
    width: 110%;
    border-top-left-radius:-50%;
    border-top-right-radius:-50%;
transform: translate(-50%, -50%);
    
}
/*
.backgroundcurve{
    background: rgb(0, 22, 46);
    position: absolute;
    top: 35%;
    left: 50%;
    height: 10%;
    width: 130%;
    z-index: -2;
    border-radius: 100%;
    transform: translate(-50%, -50%);
}
*/

.miniclock{
  top: 38.3%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130px;
  height: 130px;
  background: rgb(237, 245, 253);
   box-shadow:  1px 1px 20px 5px rgb(188, 219, 252),
   0px 0px 30px 5px rgb(253, 253, 253);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

 z-index: +20;

  }

   .miniclockmincirc{
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


  }

  .miniclockcirc{
  top: 38.3%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 155px;
  height: 155px;
  background: rgb(244, 248, 253);
   box-shadow: 15px 15px 40px 10px inset rgb(223, 239, 255);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

 z-index: +18;

  }

  .hour1,
  .min1{
    position: absolute;
 
  }

  .hour1, .hr1{
    width: 160px;
    height: 95px;

  }

   .min1, .mn1{
    width: 190px;
    height: 198px;
  }

  .hr1, .mn1{
    display: flex;
    justify-content: center;
    position: absolute;
    border-radius: 50%;;
  }
  .hr1::before{
    content: '';
    position: absolute;
    left: 50%;
    top: 29%;
    transform: translate(-50%, -50%);
    width: 2px;
    height: 0px;
  
    z-index: 10;
 
           border-left: 1px solid transparent;
  border-right: 1px solid transparent;
    
  border-bottom: 60px solid rgb(93, 89, 105);
  }
  .mn1::before{
    content: '';
    position: absolute;
    width: 2px;
    height: 0px;
top: 17%;
    z-index: 10;
       border-left: 1px solid transparent;
  border-right: 1px solid transparent;

  border-bottom: 75px solid rgb(205, 223, 242);
  }


  .alarmbell1{
  position: absolute;
  top: 29.2%;
  left: 28.2%;
  width: 50px;
  height: 10px;
 background: rgb(242, 248, 255);

  border-radius: 20px 20px 20px 20px;
 
  z-index: +30;
  transform: rotate(-40deg);
  }

  .alarmbell2{
  position: absolute;
  top: 29.2%;
  left: 59%;
  width: 50px;
  height: 10px;
 background: rgb(242, 248, 255);

  border-radius: 20px 20px 20px 20px;
 
  z-index: +30;
  transform: rotate(40deg);
  }


.alarmOffcirc1{
   background: rgb(217, 235, 255);
   border: 1px solid rgb(198, 225, 254);
   box-shadow: 0px 0px 12px 2px rgb(188, 219, 254);
    position: absolute;
    top: 38.3%;
    left: 50%;
    height: 200px;
    width: 200px;
    border-radius: 100%;
    z-index: -4;
    transform: translate(-50%, -50%);
    animation: alarmOff1 3s infinite;
}
@keyframes alarmOff1{
0%{
width: 0px;
height: 0px;
}

50%{
  width: 200px;
height: 200px;
}

100%{
  width: 0px;
height: 0px;
}
}

.alarmOffcirc2{
   
    background: rgb(168, 209, 253);
    border: 3px solid rgba(158, 204, 253, 0.466);
    
    position: absolute;
    top: 38.3%;
    left: 50%;
    height: 240px;
    width: 240px;
    border-radius: 100%;
    z-index: -5;
    transform: translate(-50%, -50%);
    animation: alarmOff2 3s infinite;
    animation-delay: 0.1s;
}

@keyframes alarmOff2{
0%{
width: 0px;
height: 0px;
}

50%{
  width: 240px;
height: 240px;
}

100%{
  width: 0px;
height: 0px;
}
}
.alarmOffcirc3{
    background: rgb(137, 190, 252);
    border: 3px solid 	rgba(134, 188, 250, 0.507);
    position: absolute;
    top: 38.3%;
    left: 50%;
    height: 330px;
    width: 330px;
    border-radius: 100%;
    z-index: -6;
    transform: translate(-50%, -50%);
    animation: alarmOff3 3s infinite;
    animation-delay: 0.2s;
}

@keyframes alarmOff3{
0%{
width: 0px;
height: 0px;
}

50%{
  width: 330px;
height: 330px;
}

100%{
  width: 0px;
height: 0px;
}
}

.alarmOffcirc4{
     
    background: rgb(114, 178, 252);
    border: 3px solid 	rgba(115, 180, 255, 0.507);
    position: absolute;
    top: 38.3%;
    left: 50%;
    height: 430px;
    width: 430px;
    border-radius: 100%;
    z-index: -7;
    transform: translate(-50%, -50%);
    animation: alarmOff4 3s infinite;
    animation-delay: 0.3s;
}

@keyframes alarmOff4{
0%{
width: 0px;
height: 0px;
}

50%{
  width: 430px;
height: 430px;
}

100%{
  width: 0px;
height: 0px;
}
}

.alarmOffcirc5{
    background: rgb(79, 160, 252);
    border: 3px solid 	rgba(94, 169, 255, 0.507);
    position: absolute;
    top: 38.3%;
    left: 50%;
    height: 550px;
    width: 550px;
    border-radius: 100%;
    z-index: -8;
    transform: translate(-50%, -50%);
    animation: alarmOff5 3s infinite;
    animation-delay: 0.4s;
   
}

@keyframes alarmOff5{
0%{
width: 0px;
height: 0px;
}

50%{
  width: 550px;
height: 550px;
}

100%{
  width: 0px;
height: 0px;
}
}


.snoozebtn{
position: absolute;
top: 72%;
left: 50%;
width: 170px;
height: 55px;
z-index: +40;
border-radius: 50px 50px 50px 50px;
transform: translate(-50%, -50%);
 background: rgb(235, 245, 255);
 box-shadow: 0px 2px 5px 3px rgb(221, 233, 245);
}

.snooze{
position: absolute;
top: 51%;
left: 50%; 
color: rgba(31, 141, 252, 0.945);
font-size: 20px;
font-family: 'Montserrat', sans-serif;
font-weight: 400;
transform: translate(-50%, -50%);
}

.snoozebtn2{
position: absolute;
top: 72%;
left: 50%;
width: 170px;
height: 55px;
border-radius: 50px 50px 50px 50px;
transform: translate(-50%, -50%);
 background: rgb(235, 245, 255);
 visibility: hidden;
 box-shadow: 0px 2px 5px 3px rgb(221, 233, 245);
}

.snooze2{
position: absolute;
top: 51%;
left: 50%; 
color: rgba(31, 141, 252, 0.945);
font-size: 20px;
font-family: 'Montserrat', sans-serif;
font-weight: 400;
transform: translate(-50%, -50%);
}

.clockcirclehighlight{
  position: absolute;
  width: 278px;
  height: 278px;
border-radius: 50%;
  border: 3px solid rgb(241, 244, 247);
  transition: all 0.3s ease-in;;
  top: 11.75%;
  left: 12.75%;
  z-index: 0;
  visibility: hidden;
}









/*
.highlightCircle{
    width: 300px;
    height: 300px;
    position: absolute;
    top: 35%;
    left: -40%;
    transform: translate(-50%, -50%);
    border-radius: 50%;
    border: 0px solid rgba(168, 209, 253, 0);
    box-shadow: 
    350px 10px 300px 5px rgba(3, 163, 255, 0.603),
    inset 50px -50px 60px 1px rgba(168, 209, 253, 0);
     
}
*/














.ampm.a{
    transform: rotate(36deg);
}

.ampm.b{
    transform: rotate(72deg);
}

.ampm.c{
    transform: rotate(108deg);
}

.ampm.d{
    transform: rotate(144deg);
}

.ampm.e{
    transform: rotate(180deg);
}

.ampm.f{
  transform: rotate(216deg);  
}

.ampm.g{
    transform: rotate(252deg);  
}

.ampm.h{
    transform: rotate(288deg); 
}

.ampm.i{
    transform: rotate(324deg); 
}

.ampm.j{
    transform: rotate(360deg); 
}


.numn.a{
transform: rotate(30deg);

}

.numn.b{
  transform: rotate(60deg);
  
}

.numn.c{
  transform: rotate(90deg);
  
}

.numn.d{
  transform: rotate(120deg);
}

.numn.e{
  transform: rotate(150deg);
}

.numn.f{
  transform: rotate(180deg);
}

.numn.g{
  transform: rotate(210deg);
}

.numn.h{
  transform: rotate(240deg);
}

.numn.i{
  transform: rotate(270deg);
}

.numn.j{
  transform: rotate(300deg);
}

.numn.k{
  transform: rotate(330deg);
}

.numn.l{
  transform: rotate(360deg);
}



.numb.a{
transform: rotate(15deg);

}

.numb.b{
  transform: rotate(30deg);
  
}

.numb.c{
  transform: rotate(45deg);
  
}

.numb.d{
  transform: rotate(60deg);
}

.numb.e{
  transform: rotate(75deg);
}

.numb.f{
  transform: rotate(90deg);
}

.numb.g{
  transform: rotate(105deg);
}

.numb.h{
  transform: rotate(120deg);
}

.numb.i{
  transform: rotate(135deg);
}

.numb.j{
  transform: rotate(150deg);
}

.numb.k{
  transform: rotate(165deg);
}

.numb.l{
  transform: rotate(180deg);
}

.numb.m{
  transform: rotate(195deg);
}

.numb.n{
  transform: rotate(210deg);
}

.numb.o{
  transform: rotate(225deg);
}

.numb.p{
  transform: rotate(240deg);
}

.numb.q{
  transform: rotate(255deg);
}

.numb.r{
  transform: rotate(270deg);
}

.numb.s{
  transform: rotate(285deg);
}

.numb.t{
  transform: rotate(300deg);
}

.numb.u{
  transform: rotate(315deg);
}

.numb.v{
  transform: rotate(330deg);
}

.numb.w{
  transform: rotate(345deg);
}

.numb.x{
  transform: rotate(360deg);
}


















</style>