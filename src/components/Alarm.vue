
<template>
  <div class="alarm">
<link href="https://fonts.googleapis.com/css2?family=Arimo:wght@400;700&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Darker+Grotesque:wght@300&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400&display=swap" rel="stylesheet">

.one
      <div class="alarmcircles">
          <div class="timeleftalarm">TIME LEFT UNTIL ALARM</div>
          <div class="timeleftnum">08h 46m</div>
          <div class="alarmcircle1" >
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
      <div class="collision-box"></div>
      <div class="collision-box2"></div>
      <div class="collision-box3"></div>
      <div class="droo7"></div>

      
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
         <div class="miniclock"></div>
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
        <div class="alarmtxt"></div>
        <div class="displayTime">12:10</div>
        <div class="displayDate">WED JULY 9</div>
        <div class="dismissbtn" v-on:click="alarmOff"></div>
        <div class="highlightCircle"></div>
        <div class="snoozebtn">
            <div class="snooze">SNOOZE</div>
        </div>
        <div class="plusbtn"><h2 class="plus">+</h2></div>
            <div class="minusbtn"><h2 class="minus">_</h2></div>
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
         




         //let alarmOff = document.querySelector('.alarmOff');
        
         
         


var rotationSnap = 90;
Draggable.create("#knob", {
    type:"rotation", //instead of "x,y" or "top,left", we can simply do "rotation" to make the object spinnable! 
    throwProps: true,//enables kinetic-based flicking (continuation of movement, decelerating after releasing the mouse/finger)
    snap:function(endValue) { 
        //this function gets called when the mouse/finger is released and it plots where rotation should normally end and we can alter that value and return a new one instead. This gives us an easy way to apply custom snapping behavior with any logic we want. In this case, just make sure the end value snaps to 90-degree increments but only when the "snap" checkbox is selected.
        return Math.round(endValue / rotationSnap) * rotationSnap; 
    }
});

Draggable.create("#knob2", {
    type:"rotation", //instead of "x,y" or "top,left", we can simply do "rotation" to make the object spinnable! 
    throwProps: true, //enables kinetic-based flicking (continuation of movement, decelerating after releasing the mouse/finger)
    snap:function(endValue) { 
        //this function gets called when the mouse/finger is released and it plots where rotation should normally end and we can alter that value and return a new one instead. This gives us an easy way to apply custom snapping behavior with any logic we want. In this case, just make sure the end value snaps to 90-degree increments but only when the "snap" checkbox is selected.
        return Math.round(endValue / rotationSnap) * rotationSnap; 
    }
});

Draggable.create("#knob3", {
    type:"rotation", //instead of "x,y" or "top,left", we can simply do "rotation" to make the object spinnable! 
    throwProps: true, //enables kinetic-based flicking (continuation of movement, decelerating after releasing the mouse/finger)
    snap:function(endValue) { 
        //this function gets called when the mouse/finger is released and it plots where rotation should normally end and we can alter that value and return a new one instead. This gives us an easy way to apply custom snapping behavior with any logic we want. In this case, just make sure the end value snaps to 90-degree increments but only when the "snap" checkbox is selected.
        return Math.round(endValue / rotationSnap) * rotationSnap; 
    }
});

 //let numbCollision = document.querySelector('.numb.a');
 



//see https://www.greensock.com/draggable/ for more details.



//see https://www.greensock.com/draggable/ for more details.
//let alarm4 = document.querySelector('.alarmcircle4');

//var droo7 = document.querySelector('.droo7')

let numtes = document.querySelector('.hours');
let numtes2 = document.querySelector('.minutes')
let numtes3 = document.querySelector('.ampmone');
let numb = document.querySelector('.numstwo');
let numbChildren = numb.children;

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

var droppables = document.querySelectorAll(".collision-box");
var droppables2 = document.querySelectorAll(".collision-box2");
var droppables3 = document.querySelectorAll(".collision-box3");

  let ok = document.querySelector('.ok')
          ok == true;



//the overlapThreshold can be a percentage ("50%", for example, would only trigger when 50% or more of the surface area of either element overlaps) or a number of pixels (20 would only trigger when 20 pixels or more overlap), or 0 will trigger when any part of the two elements overlap.
//var overlapThreshold = "50%"; 

//we'll call onDrop() when a Draggable is dropped on top of one of the "droppables", and it'll make it "flash" (blink opacity). Obviously you can do whatever you want in this function.


//TweenMax.ticker.addEventListener("tick", onDrag);

window.setInterval(function(){

    
let isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) 
    );
}
    

    
 

  if (Draggable.hitTest(droppables, numbChildren[0]) && (isInViewport(numbChildren[0]) == true)) {
         numbChildren[0].style.fontSize = "44px"
         numbChildren[0].style.top = "1.2%";
         numbChildren[0].style.opacity = "1";
         numbChildren[0].style.fontWeight = "300";
          numbChildren[0].style.left = "49%";
           numtes.innerHTML = numbChildren[0].getAttribute('data-value'); 
           numtes.value = numbChildren[0].getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         numba.style.fontSize = "22px";
         numba.style.top = "3.5%";
         numba.style.left = "50%";
         numba.style.opacity = "0.5"
         numtes.innerHTML = "0";
       }
       if (Draggable.hitTest(droppables, numbb)) {
         numbb.style.fontSize = "44px"
         numbb.style.top = "1.2%";
         numbb.style.opacity = "1";
         numbb.style.fontWeight = "300";
         numbb.style.left = "50%";
         numtes.innerHTML = numbb.getAttribute('data-value');  
         numtes.value = numbb.getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         numbb.style.fontSize = "22px";
         numbb.style.top = "3.5%";
         numbb.style.opacity = "0.5"
         numbb.style.left = "50%";
       
       }
        if (Draggable.hitTest(droppables, numbc)) {
         numbc.style.fontSize = "44px"
         numbc.style.top = "1.4%";
         numbc.style.opacity = "1";
         numbc.style.fontWeight = "300";
         numbc.style.left = "51%";
         numtes.innerHTML = numbc.getAttribute('data-value');  
         numtes.value = numbc.getAttribute('data-value');  
         //numba.style.textShadow
       } else {
         numbc.style.fontSize = "22px";
         numbc.style.top = "3.5%";
         numbc.style.opacity = "0.5"
         numbc.style.left = "50%";
       }
            if (Draggable.hitTest(droppables, numbd)) {
         numbd.style.fontSize = "44px"
         numbd.style.top = "1.5%";
         numbd.style.opacity = "1";
          numbd.style.fontWeight = "300";
         numbd.style.left = "51%";
         numtes.innerHTML = numbd.getAttribute('data-value'); 
         numtes.value = numbd.getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         numbd.style.fontSize = "22px";
         numbd.style.top = "3.5%";
         numbd.style.opacity = "0.5"
         numbd.style.left = "50%";
       }

          if (Draggable.hitTest(droppables, numbe)) {
         numbe.style.fontSize = "44px"
         numbe.style.top = "1.5%";
         numbe.style.opacity = "1";
         numbe.style.fontWeight = "300";
         numbe.style.left = "51.5%";
         numtes.innerHTML = numbe.getAttribute('data-value'); 
         numtes.value = numbe.getAttribute('data-value');  
         //numba.style.textShadow
       } else {
         numbe.style.fontSize = "22px";
         numbe.style.top = "3.5%";
         numbe.style.opacity = "0.5"
         numbe.style.left = "50%";
       }

            if (Draggable.hitTest(droppables, numbf)) {
         numbf.style.fontSize = "44px"
         numbf.style.top = "2.4%";
         numbf.style.opacity = "1";
         numbf.style.fontWeight = "300";
         numbf.style.left = "52%";
          numtes.innerHTML = numbf.getAttribute('data-value'); 
          numtes.value = numbf.getAttribute('data-value');  
         //numba.style.textShadow
       } else {
         numbf.style.fontSize = "22px";
         numbf.style.top = "3.5%";
         numbf.style.opacity = "0.5"
         numbf.style.left = "50%";
         
       }

        if (Draggable.hitTest(droppables, numbg)) {
         numbg.style.fontSize = "44px"
         numbg.style.top = "3%";
         numbg.style.opacity = "1";
         numbg.style.fontWeight = "300";
         numbg.style.left = "52.2%";
         numtes.innerHTML = numbChildren[6].getAttribute('data-value'); 
         numtes.value = numbg.getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         numbg.style.fontSize = "22px";
         numbg.style.top = "3.5%";
         numbg.style.opacity = "0.5"
         numbg.style.left = "50%";
       }
       if (Draggable.hitTest(droppables, numbh)) {
         numbh.style.fontSize = "44px"
         numbh.style.top = "3.5%";
         numbh.style.opacity = "1";
         numbh.style.fontWeight = "300";
         numbh.style.left = "52.5%";
         numtes.innerHTML = numbh.getAttribute('data-value'); 
         numtes.value = numbh.getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         numbh.style.fontSize = "22px";
         numbh.style.top = "3.5%";
         numbh.style.opacity = "0.5"
         numbh.style.left = "50%";
       }
       if (Draggable.hitTest(droppables, numbi)) {
         numbi.style.fontSize = "44px"
         numbi.style.top = "4.4%";
         numbi.style.opacity = "1";
         numbi.style.fontWeight = "300";
         numbi.style.left = "52.1%";
         numtes.innerHTML = numbi.getAttribute('data-value'); 
         numtes.value = numbi.getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         numbi.style.fontSize = "22px";
         numbi.style.top = "3.5%";
         numbi.style.opacity = "0.5"
         numbi.style.left = "50%";
       }
       if (Draggable.hitTest(droppables, numbj)) {
         numbj.style.fontSize = "44px"
         numbj.style.top = "4%";
         numbj.style.opacity = "1";
         numbj.style.fontWeight = "300";
         numbj.style.left = "53.5%";
         numtes.innerHTML = numbj.getAttribute('data-value'); 
         numtes.value = numbj.getAttribute('data-value');  
         //numba.style.textShadow
       } else {
         numbj.style.fontSize = "22px";
         numbj.style.top = "3.5%";
         numbj.style.opacity = "0.5"
         numbj.style.left = "50%";
       }
        if (Draggable.hitTest(droppables, numbk)) {
         numbk.style.fontSize = "44px"
         numbk.style.top = "5%";
         numbk.style.opacity = "1";
         numbk.style.fontWeight = "300";
         numbk.style.left = "52.5%";
         numtes.innerHTML = numbk.getAttribute('data-value'); 
         numtes.value = numbk.getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         numbk.style.fontSize = "22px";
         numbk.style.top = "3.5%";
         numbk.style.opacity = "0.5"
         numbk.style.left = "50%";
       }
        if (Draggable.hitTest(droppables, numbl)) {
         numbl.style.fontSize = "44px"
         numbl.style.top = "6%";
         numbl.style.opacity = "1";
         numbl.style.fontWeight = "300";
         numbl.style.left = "52.5%";
         numtes.innerHTML = numbl.getAttribute('data-value'); 
         numtes.value = numbl.getAttribute('data-value');  
         //numba.style.textShadow
       } else {
         numbl.style.fontSize = "22px";
         numbl.style.top = "3.5%";
         numbl.style.opacity = "0.5"
         numbl.style.left = "50%";
       }
       if (Draggable.hitTest(droppables, numbm)) {
         numbm.style.fontSize = "44px"
         numbm.style.top = "5.7%";
         numbm.style.opacity = "1";
         numbm.style.fontWeight = "300";
          numbm.style.left = "50%";
          numtes.innerHTML = numbm.getAttribute('data-value'); 
          numtes.value = numbm.getAttribute('data-value');  
         //numba.style.textShadow
       } else {
         numbm.style.fontSize = "22px";
         numbm.style.top = "3.5%";
         numbm.style.left = "50%";
         numbm.style.opacity = "0.5"
       }

         if (Draggable.hitTest(droppables, numbn)) {
         numbn.style.fontSize = "44px"
         numbn.style.top = "6%";
         numbn.style.opacity = "1";
         numbn.style.fontWeight = "300";
          numbn.style.left = "50%";
          numtes.innerHTML = numbn.getAttribute('data-value'); 
          numtes.value = numbn.getAttribute('data-value');  
         //numba.style.textShadow
       } else {
         numbn.style.fontSize = "22px";
         numbn.style.top = "3.5%";
         numbn.style.left = "50%";
         numbn.style.opacity = "0.5"
       }

       if (Draggable.hitTest(droppables, numbo)) {
         numbo.style.fontSize = "44px"
         numbo.style.top = "5.5%";
         numbo.style.opacity = "1";
         numbo.style.fontWeight = "300";
         numbo.style.left = "49%";
         numtes.innerHTML = numbo.getAttribute('data-value'); 
         numtes.value = numbo.getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         numbo.style.fontSize = "22px";
         numbo.style.top = "3.5%";
         numbo.style.opacity = "0.5"
         numbo.style.left = "50%";
       }
        if (Draggable.hitTest(droppables, numbp)) {
         numbp.style.fontSize = "44px"
         numbp.style.top = "5.2%";
         numbp.style.opacity = "1";
         numbp.style.fontWeight = "300";
         numbp.style.left = "48.5%";
         numtes.innerHTML = numbp.getAttribute('data-value'); 
         numtes.value = numbp.getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         numbp.style.fontSize = "22px";
         numbp.style.top = "3.5%";
         numbp.style.opacity = "0.5"
         numbp.style.left = "50%";
       }
            if (Draggable.hitTest(droppables, numbq)) {
         numbq.style.fontSize = "44px"
         numbq.style.top = "5.2%";
         numbq.style.opacity = "1";
          numbq.style.fontWeight = "300";
         numbq.style.left = "48.5%";
         numtes.innerHTML = numbq.getAttribute('data-value'); 
         numtes.value = numbq.getAttribute('data-value');  
         //numba.style.textShadow
       } else {
         numbq.style.fontSize = "22px";
         numbq.style.top = "3.5%";
         numbq.style.opacity = "0.5"
         numbq.style.left = "50%";
       }

          if (Draggable.hitTest(droppables, numbr)) {
         numbr.style.fontSize = "44px"
         numbr.style.top = "5%";
         numbr.style.opacity = "1";
         numbr.style.fontWeight = "300";
         numbr.style.left = "48%";
         numtes.innerHTML = numbr.getAttribute('data-value'); 
         numtes.value = numbr.getAttribute('data-value');  
         //numba.style.textShadow
       } else {
         numbr.style.fontSize = "22px";
         numbr.style.top = "3.5%";
         numbr.style.opacity = "0.5"
         numbr.style.left = "50%";
       }

            if (Draggable.hitTest(droppables, numbs)) {
         numbChildren[18].style.fontSize = "44px"
         numbChildren[18].style.top = "4%";
         numbChildren[18].style.opacity = "1";
        numbChildren[18].style.fontWeight = "300";
         numbChildren[18].style.left = "48%";
         numtes.innerHTML = numbChildren[18].getAttribute('data-value'); 
          numtes.value = numbs.getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         numbs.style.fontSize = "22px";
         numbs.style.top = "3.5%";
         numbs.style.opacity = "0.5"
         numbs.style.left = "50%";
       }

        if (Draggable.hitTest(droppables, numbt)) {
         numbt.style.fontSize = "44px"
         numbt.style.top = "4%";
         numbt.style.opacity = "1";
         numbt.style.fontWeight = "300";
         numbt.style.left = "47.5%";
         numtes.innerHTML = numbt.getAttribute('data-value');  
         numtes.value = numbt.getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         numbt.style.fontSize = "22px";
         numbt.style.top = "3.5%";
         numbt.style.opacity = "0.5"
         numbt.style.left = "50%";
       }
       if (Draggable.hitTest(droppables, numbu)) {
         numbu.style.fontSize = "44px"
         numbu.style.top = "3%";
         numbu.style.opacity = "1";
         numbu.style.fontWeight = "300";
         numbu.style.left = "47.8%";
         numtes.innerHTML = numbu.getAttribute('data-value'); 
         numtes.value = numbu.getAttribute('data-value');   
         //numba.style.textShadow
       } else {
         numbu.style.fontSize = "22px";
         numbu.style.top = "3.5%";
         numbu.style.opacity = "0.5"
         numbu.style.left = "50%";
       }
       if (Draggable.hitTest(droppables, numbv)) {
         numbv.style.fontSize = "44px"
         numbv.style.top = "3%";
         numbv.style.opacity = "1";
         numbv.style.fontWeight = "300";
         numbv.style.left = "46%";
         numtes.innerHTML = numbv.getAttribute('data-value'); 
         numtes.value = numbv.getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         numbv.style.fontSize = "22px";
         numbv.style.top = "3.5%";
         numbv.style.opacity = "0.5"
         numbv.style.left = "50%";
       }
       if (Draggable.hitTest(droppables, numbw)) {
         numbw.style.fontSize = "44px"
         numbw.style.top = "2%";
         numbw.style.opacity = "1";
         numbw.style.fontWeight = "300";
         numbw.style.left = "47%";
         numtes.innerHTML = numbw.getAttribute('data-value');  
         numtes.value = numbw.getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         numbw.style.fontSize = "22px";
         numbw.style.top = "3.5%";
         numbw.style.opacity = "0.5"
         numbw.style.left = "50%";
       }
        if (Draggable.hitTest(droppables, numbx)) {
         numbx.style.fontSize = "44px"
         numbx.style.top = "1%";
         numbx.style.opacity = "1";
         numbx.style.fontWeight = "300";
         numbx.style.left = "47%";
         numtes.innerHTML = numbx.getAttribute('data-value'); 
         numtes.value = numbx.getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         numbx.style.fontSize = "22px";
         numbx.style.top = "3.5%";
         numbx.style.opacity = "0.5"
         numbx.style.left = "50%";
       }
        
       
}, 10);




window.setInterval(function(){
  if (Draggable.hitTest(droppables2, numna)) {
         numna.style.fontSize = "40px"
         numna.style.top = "1%";
         numna.style.opacity = "1";
         numna.style.fontWeight = "300";
          numna.style.left = "50%";
          numtes2.innerHTML = numna.getAttribute('data-value'); 
         numtes2.value = numna.getAttribute('data-value');   
         //numba.style.textShadow
       } else {
         numna.style.fontSize = "22px";
         numna.style.top = "4.5%";
         numna.style.left = "50%";
         numna.style.opacity = "0.5"
       }
       if (Draggable.hitTest(droppables2, numnb)) {
         numnb.style.fontSize = "40px"
         numnb.style.top = "1.5%";
         numnb.style.opacity = "1";
         numnb.style.fontWeight = "300";
         numnb.style.left = "52%";
         numtes2.innerHTML = numnb.getAttribute('data-value'); 
         numtes2.value = numnb.getAttribute('data-value'); 
         //numba.style.textShadow
       } else {
         numnb.style.fontSize = "22px";
         numnb.style.top = "4.5%";
         numnb.style.opacity = "0.5"
         numnb.style.left = "50%";
       }
        if (Draggable.hitTest(droppables2, numnc)) {
         numnc.style.fontSize = "40px"
         numnc.style.top = "2%";
         numnc.style.opacity = "1";
         numnc.style.fontWeight = "300";
         numnc.style.left = "52%";
         numtes2.innerHTML = numnc.innerText;
         numtes2.value = numnc.innerText; 
         //numba.style.textShadow
       } else {
         numnc.style.fontSize = "22px";
         numnc.style.top = "4.5%";
         numnc.style.opacity = "0.5"
         numnc.style.left = "50%";
       }
            if (Draggable.hitTest(droppables2, numnd)) {
         numnd.style.fontSize = "40px"
         numnd.style.top = "3%";
         numnd.style.opacity = "1";
          numnd.style.fontWeight = "300";
         numnd.style.left = "54%";
         numtes2.innerHTML = numnd.innerText;
         numtes2.value = numnd.innerText; 
         //numba.style.textShadow
       } else {
         numnd.style.fontSize = "22px";
         numnd.style.top = "4.5%";
         numnd.style.opacity = "0.5"
         numnd.style.left = "50%";
       }

          if (Draggable.hitTest(droppables2, numne)) {
         numne.style.fontSize = "40px"
         numne.style.top = "5%";
         numne.style.opacity = "1";
         numne.style.fontWeight = "300";
         numne.style.left = "54%";
         numtes2.innerHTML = numne.innerText;
         numtes2.value = numne.innerText; 
         //numba.style.textShadow
       } else {
         numne.style.fontSize = "22px";
         numne.style.top = "4.5%";
         numne.style.opacity = "0.5"
         numne.style.left = "50%";
       }

            if (Draggable.hitTest(droppables2, numnf)) {
         numnf.style.fontSize = "40px"
         numnf.style.top = "7%";
         numnf.style.opacity = "1";
         numnf.style.fontWeight = "300";
         numnf.style.left = "53%";
         numtes2.innerHTML = numnf.innerText;
         numtes2.value = numnf.innerText; 
         //numba.style.textShadow
       } else {
         numnf.style.fontSize = "22px";
         numnf.style.top = "4.5%";
         numnf.style.opacity = "0.5"
         numnf.style.left = "50%";
       }

        if (Draggable.hitTest(droppables2, numng)) {
         numng.style.fontSize = "40px"
         numng.style.top = "8%";
         numng.style.opacity = "1";
         numng.style.fontWeight = "300";
         numng.style.left = "51%";
         numtes2.innerHTML = numng.innerText;
         numtes2.value = numng.innerText; 
         //numba.style.textShadow
       } else {
         numng.style.fontSize = "22px";
         numng.style.top = "4.5%";
         numng.style.opacity = "0.5"
         numng.style.left = "50%";
       }
       if (Draggable.hitTest(droppables2, numnh)) {
         numnh.style.fontSize = "40px"
         numnh.style.top = "9%";
         numnh.style.opacity = "1";
         numnh.style.fontWeight = "300";
         numnh.style.left = "49%";
         numtes2.innerHTML = numnh.innerText;
         numtes2.value = numnh.innerText; 
         //numba.style.textShadow
       } else {
         numnh.style.fontSize = "22px";
         numnh.style.top = "4.5%";
         numnh.style.opacity = "0.5"
         numnh.style.left = "50%";
       }
       if (Draggable.hitTest(droppables2, numni)) {
         numni.style.fontSize = "40px"
         numni.style.top = "8%";
         numni.style.opacity = "1";
         numni.style.fontWeight = "300";
         numni.style.left = "47.5%";
         numtes2.innerHTML = numni.innerText;
         numtes2.value = numni.innerText; 
         //numba.style.textShadow
       } else {
         numni.style.fontSize = "22px";
         numni.style.top = "4.5%";
         numni.style.opacity = "0.5"
         numni.style.left = "50%";
       }
       if (Draggable.hitTest(droppables2, numnj)) {
         numnj.style.fontSize = "40px"
         numnj.style.top = "5%";
         numnj.style.opacity = "1";
         numnj.style.fontWeight = "300";
         numnj.style.left = "47%";
         numtes2.innerHTML = numnj.innerText;
         numtes2.value = numnj.innerText; 
         //numba.style.textShadow
       } else {
         numnj.style.fontSize = "22px";
         numnj.style.top = "4.5%";
         numnj.style.opacity = "0.5"
         numnj.style.left = "50%";
       }
        if (Draggable.hitTest(droppables2, numnk)) {
         numnk.style.fontSize = "40px"
         numnk.style.top = "4%";
         numnk.style.opacity = "1";
         numnk.style.fontWeight = "300";
         numnk.style.left = "46%";
         numtes2.innerHTML = numnk.innerText;
         numtes2.value = numnk.innerText; 
         //numba.style.textShadow
       } else {
         numnk.style.fontSize = "22px";
         numnk.style.top = "4.5%";
         numnk.style.opacity = "0.5"
         numnk.style.left = "50%";
       }
        if (Draggable.hitTest(droppables2, numnl)) {
         numnl.style.fontSize = "40px"
         numnl.style.top = "2%";
         numnl.style.opacity = "1";
         numnl.style.fontWeight = "300";
         numnl.style.left = "48%";
         numtes2.innerHTML = numnl.innerText;
         numtes2.value = numnl.innerText; 
         //numba.style.textShadow
       } else {
         numnl.style.fontSize = "22px";
         numnl.style.top = "4.5%";
         numnl.style.opacity = "0.5"
         numnl.style.left = "50%";
       }


   

}, 10);

window.setInterval(function(){
  if (Draggable.hitTest(droppables3, ampmChildren[0])) {
         ampmChildren[0].style.fontSize = "25px"
         ampmChildren[0].style.top = "8%";
         ampmChildren[0].style.opacity = "1";
         ampmChildren[0].style.fontWeight = "300";
          ampmChildren[0].style.left = "50%";
          numtes3.innerHTML = ampmChildren[0].innerText; 
         numtes3.value = ampmChildren[0].innerText; 
         //numba.style.textShadow
       } else {
         ampmChildren[0].style.fontSize = "23px";
         ampmChildren[0].style.top = "8%";
         ampmChildren[0].style.left = "50%";
         ampmChildren[0].style.opacity = "0.3"
       }
       if (Draggable.hitTest(droppables3, ampmChildren[1])) {
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
        if (Draggable.hitTest(droppables3, ampmChildren[2])) {
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
       if (Draggable.hitTest(droppables3, ampmChildren[3])) {
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
       if (Draggable.hitTest(droppables3, ampmChildren[4])) {
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
       if (Draggable.hitTest(droppables3, ampmChildren[5])) {
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
       if (Draggable.hitTest(droppables3, ampmChildren[6])) {
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
       if (Draggable.hitTest(droppables3, ampmChildren[7])) {
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
       if (Draggable.hitTest(droppables3, ampmChildren[8])) {
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

       if (Draggable.hitTest(droppables3, ampmChildren[9])) {
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
       
       

   
       let current = document.querySelector(".currentTime2");
       current.innerText = numtes.innerText + ":" + numtes2.innerText + " " + numtes3.innerText;

       
        

}, 10 );




       
       
       /* ALTERNATE TEST: you can use the static Draggable.hitTest() method for even more flexibility, like passing in a mouse event to see if the mouse is overlapping with the element...
       if (Draggable.hitTest(droppables[i], e) && droppables[i] !== this.target) {
         $(droppables[i]).addClass("highlight");
       } else {
         $(droppables[i]).removeClass("highlight");
       }
       */
    },

    


  
  

 
      

    
   



 

  methods: {
      alarm3(){

let alarm3 = document.querySelector(".alarmcircle3");
alarm3.style.left = "20%";
      },
      getTime(){

          let alarm1 = document.querySelector('.alarmcircle1')
          let set = document.querySelector('.set')
           let ok = document.querySelector('.ok')
         set.style.transition = "0.35s";
         set.style.opacity = "1";
          ok.style.transition = '0.35s';
          alarm1.style.transform = "rotate(180deg)";
          alarm1.style.left = "78%";
          alarm1.style.top = "90%";
          
      },

     getTimeStop(){
         let alarm1 = document.querySelector('.alarmcircle1')
         let set = document.querySelector('.set')
alarm1.style.transform = "rotate(360deg)";
          set.style.opacity = "0.5";
          set.style.transition = '0.35s';
          window.clearTimeout(this.showtime);

         },
         alarmOff(){
         let alarmOff = document.querySelector('.alarmOff')
         let alarm1 = document.querySelector('.alarmcircle1')
         alarmOff.style.top = "150%";
         window.clearTimeout(this.showtime);
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
.alarmcircle1{
    height: 160px;
    width: 160px;
    background: rgb(65, 152, 252);
    border: 2px solid rgb(65, 152, 252);
    border-radius: 50%;
    position: absolute;
    box-shadow: 0px 0px 12px 2px rgb(65, 152, 252);
    transform: translate(-50%, -50%);
    left: 100%;
    top: 100%;
    z-index: 4;
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
    left: 100%;
    top: 100%;
    z-index: 3;
    
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
    left: 100%;
    top: 100%;
    z-index: 2;
    
    
}

.alarmcircle4{
    height: 610px;
    width: 610px;
    background: rgb(203, 227, 254);
    border-radius: 50%;
    border: 4px solid rgb(198, 225, 254);
    position: absolute;
    box-shadow: 0px 0px 12px 2px rgb(188, 219, 254);
    transform: translate(-50%, -50%);
    left: 100%;
    top: 100%;
    z-index: 1;
    opacity: 0.9;
    
}

.timeleftalarm{
    font-family: "Roboto";
    position: absolute;
    left: 30%;
    top: 40%;
    font-size: 15px;
    font-weight: 300;
    color: rgb(131, 193, 255);
    transform: translate(-50%, -50%);
}

.droo7{
     width: 5px;
    height: 5px;
    position: absolute;
    transform: translate(-50%, -50%);
    background: red;
    opacity: 0;
    top: 77.5%;
    left: 49%;
    z-index: 5;
    opacity: 1;
    border-radius: 60px;
}

.timeleftnum{
    font-family: "Roboto";
    position: absolute;
    left: 30%;
    top: 46%;
    font-size: 42px;
    word-spacing: 2px;
    font-weight: 300;
    opacity: 0;
    color: rgb(55, 153, 252);
    transform: translate(-50%, -50%);
}

.collision-box{
    width: 1px;
    height: 1px;
    position: absolute;
    transform: translate(-50%, -50%);
    background: red;
    opacity: 0;
    top: 77.5%;
    left: 49%;
    z-index: 5;
    opacity: 1;
    ;
}

.collision-box2{
    width: 5px;
    height: 5px;
    position: absolute;
    transform: translate(-50%, -50%);
    background: red;
    opacity: 0.5;
    top: 83%;
    left: 63%;
    z-index: 5;
    opacity: 1;
    border-radius: 60px;
}

.collision-box3{
    width: 5px;
    height: 5px;
    position: absolute;
    transform: translate(-50%, -50%);
    background: red;
    opacity: 0.5;
    top: 90%;
    left: 78%;
    z-index: 5;
    opacity: 0;
}





.numb{
  position: absolute;
  top: 3.5%;
  left: 50%;

color: rgb(255, 255, 255);
  width: 0px;
  height: 93%;
font-size: 25px;
opacity: 1;
font-family: 'Open Sans', sans-serif;
  transform: translate(-50%, -50%);
visibility: visible;
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
visibility: visible;
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
opacity: 1;
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

.currentTime2{
  position: absolute;
top: 49%;
  left: 33%;
  font-weight: 300;
  transform: translate(-50%, -50%);
font-family: 'Roboto', sans-serif;
   font-size: 42px;
     color: rgb(111, 181, 252);
     opacity: 1;
    visibility: visible;
    z-index: +40;
    width: 200px;
    height: 100px;
 
    
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


.dismissbtn{
    position: absolute;
    top: 85%;
    left: 50%;
    width: 75px;
    height: 75px;
    border-radius: 50%;
    border: 2px solid rgb(168, 209, 253);
    background: none;
    transform: translate(-50%, -50%);
}
*/

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
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    position: absolute;
    background: rgb(224, 240, 255);
visibility: hidden;
    z-index: +40;

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

  .alarmbell1{
  position: absolute;
  top: 29.2%;
  left: 28.2%;
  width: 50px;
  height: 10px;
 background: rgb(244, 248, 253);
   box-shadow: 15px 15px 40px 10px inset rgb(233, 243, 253);
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
 background: rgb(244, 248, 253);
   box-shadow: 15px 15px 40px 10px inset rgb(233, 243, 253);
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
    height: 230px;
    width: 230px;
    border-radius: 100%;
    z-index: -4;
    transform: translate(-50%, -50%);
}

.alarmOffcirc2{
   
    background: rgb(168, 209, 253);
    border: 3px solid rgba(158, 204, 253, 0.466);
    
    position: absolute;
    top: 38.3%;
    left: 50%;
    height: 310px;
    width: 310px;
    border-radius: 100%;
    z-index: -5;
    transform: translate(-50%, -50%);
}
.alarmOffcirc3{
    background: rgb(137, 190, 252);
    border: 3px solid 	rgba(134, 188, 250, 0.507);
    position: absolute;
    top: 38.3%;
    left: 50%;
    height: 430px;
    width: 430px;
    border-radius: 100%;
    z-index: -6;
    transform: translate(-50%, -50%);
}
.alarmOffcirc4{
     
    background: rgb(114, 178, 252);
    border: 3px solid 	rgba(115, 180, 255, 0.507);
    position: absolute;
    top: 38.3%;
    left: 50%;
    height: 550px;
    width: 550px;
    border-radius: 100%;
    z-index: -7;
    transform: translate(-50%, -50%);
}

.alarmOffcirc5{
    background: rgba(79, 160, 252, 0.507);
    border: 3px solid 	rgba(94, 169, 255, 0.507);
    position: absolute;
    top: 38.3%;
    left: 50%;
    height: 550px;
    width: 550px;
    border-radius: 100%;
    z-index: -8;
    visibility: hidden;
    transform: translate(-50%, -50%);
   
}


.snoozebtn{
position: absolute;
top: 72%;
left: 50%;
width: 170px;
height: 55px;
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

.plusbtn{
position: absolute;
top: 72%;
left: 83%;
width: 45px;
height: 45px;
border-radius: 50%;
transform: translate(-50%, -50%);
 background: rgb(235, 245, 255);
 box-shadow: 0px 2px 5px 3px rgb(221, 233, 245);
}

.plus{
position: absolute;
top: -11%;
left: 50%; 
color: rgba(31, 141, 252, 0.945);
font-size: 35px;
font-family: 'Montserrat', sans-serif;
font-weight: 300;
transform: translate(-50%, -50%);
}

.minusbtn{
position: absolute;
top: 72%;
left: 17%;
width: 45px;
height: 45px;
border-radius: 50%;
transform: translate(-50%, -50%);
 background: rgb(235, 245, 255);
 box-shadow: 0px 2px 5px 3px rgb(221, 233, 245);
}

.minus{
position: absolute;

top: -32%;
left: 50%; 

color: rgba(31, 141, 252, 0.945);
font-size: 32px;
font-family: 'Montserrat', sans-serif;
font-weight: 300;
transform: translate(-50%, -50%);
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