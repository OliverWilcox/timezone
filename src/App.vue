<template>
  <div id="app">
<link href="https://fonts.googleapis.com/css2?family=Lato&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Raleway&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap" rel="stylesheet">
    <Clock/>
   
    <div class="boxcont" v-on:click="delet()">
    <div class="clockbox" >

    <label class="labl" for="toggle" v-on:click="checkbox">
      <div class="custom-check"></div>
    </label>
    <input type="checkbox" class="rmv" id="toggle">

</div>
    </div>
   
    <div class="addclock" v-on:click="addclock">+</div>

      <font-awesome-icon icon="user-cog" class="cog"/>
      <div class="circle" v-on:click="menu">
      
      </div>
      <div class="circle2" v-on:click="stopdeleteclock">
      <font-awesome-icon icon="trash-alt" class="trash2"/>
</div>
<div class="circle3"></div>
<div class="circle4" v-on:click="deleteclock">
</div>
<div class="deletebtn" v-on:click="deletekey">
<div class="cross">+</div>
  <span class="dele" ><h2>REMOVE</h2></span>
</div>
    </div>
</template>

<script>
import Clock from './components/Clock.vue'



export default {
  name: 'App',
  components: {
    Clock,
   
    
  },
  props: {

  },

  data(){
    return{
     isTest: "hello"
    }
  },

methods: {
  addclock(){
  const box = document.querySelector('.boxcont')
  const boxChildren = box.children;
  const boxItem = boxChildren[0];
  const boxCopy = boxItem.cloneNode(true);
  box.appendChild(boxCopy);
},
menu(){
let circle = document.querySelector(".circle");
let circle2 = document.querySelector(".circle2");
let circle3 = document.querySelector(".circle3");
let circle4 = document.querySelector(".circle4");
circle.style.top = "62%";
circle.style.visibility = "hidden";
circle2.style.visibility = "visible";
circle2.style.top = "63.5%";
circle3.style.top = "73%";
circle3.style.visibility = "visible";
circle3.style.opacity = "1"
circle4.style.top = "82%";
circle4.style.visibility = "visible";
circle4.style.opacity = "1";
circle3.style.transition = "0.25s ease-in";
circle4.style.transition = "0.35s ease-in";
},
deleteclock(){
  let rmv = document.querySelectorAll(".rmv")
  let deletebtn = document.querySelector(".deletebtn")
  let addclock = document.querySelector(".addclock");
  let circle = document.querySelector(".circle");
let circle2 = document.querySelector(".circle2");
let circle3 = document.querySelector(".circle3");
let circle4 = document.querySelector(".circle4");
const clockBox = document.querySelectorAll('.clockbox');
[rmv].forEach.call(rmv, function(rmv){
rmv.style.visibility = "visible";
});
[clockBox].forEach.call(clockBox, function(clockBox){
clockBox.style.backgroundColor = "rgba(255, 255, 255, 0.1)";
});
addclock.style.pointerEvents = "none";
circle.style.pointerEvents = "none"
addclock.style.backgroundColor = "rgba(135, 102, 252, 0.671)";
circle.style.backgroundColor = "rgba(255, 255, 255, 0.371)"
circle.style.top = "72%";
circle2.style.visibility = "hidden";
circle.style.visibility = "visible"
circle3.style.top = "76%";
circle3.style.visibility = "hidden";
circle3.style.opacity = "0"
circle4.style.top = "88%";
circle4.style.visibility = "hidden";
circle4.style.opacity = "0";
circle3.style.transition = "0.1s ease-in"
circle4.style.transition = "0.2s ease-in"
circle2.style.top = "72%";
circle2.style.transition = "0.3s"

addclock.style.transition = "0.3s";
addclock.style.top = "82%";

deletebtn.style.opacity = "1"
deletebtn.style.visibility = "visible"
deletebtn.style.transition = "0.3s"
deletebtn.style.marginBottom = "5%"

},
stopdeleteclock(){
let circle = document.querySelector(".circle");
let circle2 = document.querySelector(".circle2");
let circle3 = document.querySelector(".circle3");
let circle4 = document.querySelector(".circle4");
let clockBox = document.querySelectorAll('.clockbox')
circle.style.top = "82%";
circle2.style.visibility = "hidden";
circle.style.visibility = "visible"
circle3.style.top = "76%";
circle3.style.visibility = "hidden";
circle3.style.opacity = "0"
circle4.style.top = "88%";
circle4.style.visibility = "hidden";
circle4.style.opacity = "0";
circle3.style.transition = "0.1s ease-in"
circle4.style.transition = "0.2s ease-in"
circle2.style.top = "82%";
[clockBox].forEach.call(clockBox, function(clockBox){
clockBox.style.backgroundColor = "rgb(245, 245, 245)"
});


},
delet(){
//let clockBox = document.querySelectorAll('.clockbox');
//[clockBox].forEach.call(clockBox, function(clockBox){
//clockBox.onclick = function(){
  //clockBox.remove();
  let rem = document.querySelectorAll(".rem");
       
[rem].forEach.call(rem, function(rem){
rem.style.visibility = "visible"
});
   },
   deletekey(){

       let rmvCheckBox = document.querySelectorAll('.rmv');
       let clockBox = document.querySelectorAll('.clockbox') 
       let deletebtn = document.querySelector('.deletebtn');
       let addclock = document.querySelector(".addclock");
       let circle = document.querySelector('.circle');
[rmvCheckBox].forEach.call(rmvCheckBox, function(rmvCheckBox){
          if(rmvCheckBox.checked){ 
  rmvCheckBox.parentElement.remove();
}
});  
[rmvCheckBox].forEach.call(rmvCheckBox, function(rmvCheckBox){
rmvCheckBox.style.visibility = "hidden";
rmvCheckBox.style.transition = "0s";
});
[clockBox].forEach.call(clockBox, function(clockBox){
clockBox.style.backgroundColor = "rgb(245, 245, 245)";
  });
deletebtn.style.visibility = "hidden";
deletebtn.style.opacity = "0";
deletebtn.style.marginBottom = "2%";
deletebtn.style.transition = "0.2s";
circle.style.top = "82%";
addclock.style.top = "92%";
addclock.style.pointerEvents = "auto";
circle.style.pointerEvents = "auto";
addclock.style.backgroundColor = "rgb(135, 102, 252)";

circle.style.backgroundColor = "rgb(255, 255, 255)"
   },
   checkbox(){

   }
}
}


</script>

<style lang="scss">
.boxcont{
 
 display: grid;
 grid-template-columns: 170px 170px;

 grid-gap: 13px;
margin-top: 20px;
justify-content: center;
}

body{
    background-color: rgb(234, 242, 243);
  
}

.addclock{
  background-color: rgb(135, 102, 252);
    width: 70px;
 height: 70px;
  border-radius: 70px;
z-index: +2;

font-size: 50px;
color: rgb(255, 255, 255);
line-height:130%;
text-align: center;
position: fixed;
transform: translate(-50%, -50%);
left: 81%;
top: 92%;
 box-shadow:         0.5px 0.5px 8px 0px rgb(167, 167, 167); 
visibility: hidden;

}



.addclock:active{
  background-color: rgb(120, 85, 248);
background-size: 100%;
top: 92.5%;
transition: 0.1s ease-in;
 box-shadow:         0px 0px 0px 0px rgb(167, 167, 167); 

}
 






.boxcont > .clockbox{
  background-color: rgb(245, 245, 245);
   width: 170px;
 height: 170px;
 border-radius: 30px;


 box-shadow:         0.5px 0.5px 10px 1px rgb(216, 216, 216);  
}




.cog{
  position: absolute;
  transform: translate(-50%, -50%);
  left: 90%;
  top: 50%;
  font-size: 30px;
  color: rgba(255, 255, 255, 0);
stroke: rgb(250, 17, 106);
  stroke-width: 15;
z-index: +1;
}

.circle{
    background-color: rgb(255, 255, 255);
    width: 70px;
 height: 70px;
  border-radius: 70px;
z-index: +2;

color: rgb(255, 255, 255);
line-height:150%;
text-align: center;
position: fixed;
transform: translate(-50%, -50%);
left: 81%;
top: 82%;

 box-shadow:         0.5px 0.5px 8px 0px rgb(190, 190, 190); 
 transition: 0.15s ease-in;
visibility: hidden;
}

.trash{
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top:50%;
  font-size: 22px;
color: rgba(0, 0, 0, 0);
stroke: rgb(105, 48, 238);
stroke-width: 20;
  z-index: +2;
  transition: 0.1s ease-in;
  opacity: 1;
}

.circle2{
    background-color: rgb(255, 255, 255);
    width: 70px;
 height: 70px;
  border-radius: 70px;
z-index: +1;
visibility: hidden;

line-height:150%;
text-align: center;
position: fixed;
transform: translate(-50%, -50%);
left: 81%;
top: 82%;
box-shadow:         0.5px 0.5px 8px 0px rgb(183, 170, 201);
 transition: 0.15s ease-in;
 
}

.circle3{
    background-color: rgb(255, 255, 255);
    width: 62px;
 height: 62px;
  border-radius: 70px;
z-index: +1;
visibility: hidden;
opacity: 0;
line-height:150%;
text-align: center;
position: fixed;
transform: translate(-50%, -50%);
left: 81%;
top: 76%;
box-shadow:         0.5px 0.5px 8px 0px rgb(183, 170, 201);
 transition: 0.25s ease-in;
 z-index: +5;
}

.circle4{
    background-color: rgb(255, 255, 255);
    width: 62px;
 height: 62px;
  border-radius: 70px;
z-index: +1;
opacity: 0;
visibility: hidden;
line-height:150%;
text-align: center;
position: fixed;
transform: translate(-50%, -50%);
left: 81%;
top: 85%;
box-shadow:         0.5px 0.5px 8px 0px rgb(183, 170, 201);
 transition: 0.35s ease-in;
 
}



.trash2{
  position: absolute;
  transform: translate(-50%, -50%);
  left: 50%;
  top: 50%;
  font-size: 22px;
color: rgb(255, 255, 255);

  z-index: +2;
  visibility: hidden;
  transition: 0.1s ease-in;
  opacity: 0;
}

.header{
      position: fixed;
  top: 0%;
  left: 0;
  width: 100%;
  height: 7.5%;
  z-index: +1;
  border-bottom: 1px solid rgba(172, 172, 172, 0.295);
  background-color: rgb(235, 235, 235);
}

.rem{

color: rgb(154, 114, 247);
visibility: hidden;
position: relative;
top: -8%;
text-align: center;
cursor: pointer;
margin-top: 85px;

font-size: 20px;
font-weight: normal;
  font-family: 'Lato', sans-serif;
}

.innercircle{
  position: absolute;
  width: 30px;
  height: 30px;
  left: 20.5%;
top: 11%;
border-radius: 70px;
  border: 2px solid rgb(190, 190, 190);
}



.deletebtn{
  height: 70px;
  position: absolute;
  width: 80%;
  left: 10%;
  bottom: 0;
  background-color: rgb(135, 102, 252);
  z-index: +2;
  text-align: center;
  margin-bottom: 2%;
  border-radius: 7px;
   box-shadow:  4px 4px 8px 0px rgb(160, 152, 187); 
 visibility: hidden;
 opacity: 0;
}

.deletebtn:active{
bottom: -0.5%;
   box-shadow:  1px 1px 6px 0px rgb(160, 152, 187); 
 
}



.dele{
  transform: translate(-50%, -50%);
  top: 50%;
  left: 25%;
  font-size: 12px;
  position: absolute;
  font-family: "lato";
  color: rgb(245, 245, 245);
}

.cross{
  transform: translate(-50%, -50%);
  top: 11%;
  left: 80%;
  font-size: 40px;
  position: absolute;
  font-family: 'Quicksand', sans-serif;
  color: rgb(245, 245, 245);
transform: rotate(-45deg);
}






.custom-check{
  width: 0px;
  height: 0px;
  position: absolute;
  background-color: rgb(154, 114, 247);
  border-radius: 50px;
  left: 50%;
  top: 50%;
  opacity: 0%;
  transform: translate(-50%, -50%);
  transition: 0.2s;
}

.rmv{
  position: relative;
   left: 46%;
  top: 46%;
  transform: translate(-50%, -50%);
  visibility: hidden;
  transition: 0.2s ease-in;
}

input[type='checkbox']:after{
    line-height: 1.5em;
    content: '';
    display: inline-block;
    width: 25px;
    height: 25px;
    margin-top: -4px;
    margin-left: -4px;
  
    border: 1px solid rgb(135, 102, 252);
    border-radius: 50em;
    background: rgb(238, 238, 238);
}

input[type='checkbox']:checked:after {
background: rgb(135, 102, 252);

transition: 0.2s ease-in;
 width: 26px;
    height: 26px;
 border: 1px solid rgb(245,245,245)
}



</style>
