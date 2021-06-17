<template>
  <div class="stopwatch">
    <div class="stopwatchcont">
    <div class="stopwatchsvg">
      <svg
        :time-up="timeUp"
        :time-up2="timeUp2"
        class="stopwatch__svg"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g class="stopwatch__circle">
          <circle class="stopwatch__path-elapsed" cx="50" cy="50" r="46.5" />
          <path
            class="stopwatch__path-remaining"
            d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
          ></path>
        </g>
      </svg>
      <span class="stopwatch__label" v-bind:class="{ labelOn: isStopwatchOn }">
        {{ formattedTimeUp }}
      </span>
    </div>
    </div>
    <div
      class="stopwatchStart"
      ref="stopwatchStart"
      v-on:click="watchRotate(), startTimer(), startMilliTimer()"
      v-bind:class="{ startOn: isStopwatchOn }"
    >
      <h3 class="startTxt"><ion-icon name="play-sharp"></ion-icon></h3>
    </div>
    <div
      class="lap"
      ref="lap"
      v-on:click="lapTimer"
      v-bind:class="{ lapOn: isStopwatchOn }"
    >
      <div class="lp"><ion-icon name="flag-sharp"></ion-icon></div>
    </div>
    <div class="buttoncontainer2">
      <div
        class="stopbtn"
        ref="stopbtn"
        v-on:click="stopTimer"
        v-bind:class="{ stopOn: isStopwatchOn }"
      >
        <div class="stop"><ion-icon name="pause-sharp"></ion-icon></div>
      </div>
      <div class="rsmbtn" v-bind:class="{ rsmOn: isStopwatchOn }" ref="rsmbtn">
        <div class="rsm" v-on:click="rsmTimer">
          <ion-icon name="play-sharp"></ion-icon>
        </div>
      </div>
      <div
        class="cnclbtn"
        ref="cnclbtn"
        v-on:click="cancelTimer"
        v-bind:class="{ cnclOn: isStopwatchOn }"
      >
        <div class="cncl"><ion-icon name="close-sharp"></ion-icon></div>
      </div>
    </div>
    <link
      href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;400&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Baloo+Tamma+2:wght@400;500&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Lato:wght@300;400;700&display=swap"
      rel="stylesheet"
    />
    <div>
      <h1 class="count" ref="count">0</h1>
    </div>
    <div></div>
    <ul class="laps" ref="laps" v-bind:class="{ lapsOn: isStopwatchOn }"></ul>
  </div>
</template>


<script>
import { Draggable } from "gsap";
export default {
  mounted() {
    Draggable.create("#knob", { type: "rotation" });
  },

  props: {
    isStopwatchOn: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      timeLimit: 0,
      timePassed: 0,
    };
  },

  computed: {
    formattedTimeUp() {
      const timeUp = this.timeUp;

      let minutes = Math.floor(timeUp / 60 / 60);

      if (minutes < 10) {
        minutes = `0${minutes}`;
      }

      let seconds = Math.floor((timeUp / 60) % 60);
      if (seconds < 10) {
        seconds = `0${seconds}`;
      }

      let milli = timeUp % 60;

      if (milli < 10) {
        milli = `0${milli}`;
      }

      return `${minutes}:${seconds}:${milli}`;
    },
    timeUp() {
      return this.timeLimit - this.timePassed;
    },
  },

  created() {},

  methods: {
    lapTimer() {
      let lapContainer = this.$refs.laps;

      let parent = document.createElement("div");
      let li = document.createElement("li");
      let laptext = document.createElement("h2");
      let lapline = document.createElement("div");
      laptext.innerHTML = "Lap";
      let lapNum = document.createElement("h2");
      let count = this.$refs.count;
      count.innerHTML++;

      li.innerText = this.formattedTimeUp;
      lapContainer.appendChild(parent);
      parent.appendChild(li);
      parent.appendChild(laptext);
      parent.appendChild(lapline);
      parent.appendChild(lapNum);
      parent.style.width = "210px";
      parent.style.left = "-40px";
      parent.style.position = "relative";
      parent.style.background = "none";
      parent.style.height = "30px";
      parent.style.top = "-6%";
      li.style.transform = "translate(-50%, -50%)";
      li.style.left = "115%";
      count.style.opacity = "0";

      lapline.style.top = "35px";
      lapline.style.position = "absolute";
      lapline.style.height = "1px";
      lapline.style.width = "255px";
      li.style.transform = "translate(-50%, -50%)";
      lapline.style.left = "8%";
      lapline.style.background = "rgb(111, 178, 255)";

      laptext.style.margin = "none";
      laptext.style.top = "5px";
      laptext.style.position = "relative";
      laptext.style.height = "8px";
      laptext.style.left = "5%";
      laptext.style.fontWeight = "normal";
      laptext.style.listStyleType = "none";
      laptext.style.fontSize = "17px";
      laptext.style.fontFamily = "Lato";
      laptext.style.fontWeight = "500";

      lapNum.innerHTML = count.innerText;
      lapNum.style.margin = "none";
      lapNum.style.top = "-17px";
      lapNum.style.position = "relative";
      lapNum.style.height = "0px";
      lapNum.style.left = "20.5%";
      lapNum.style.fontWeight = "normal";
      lapNum.style.listStyleType = "none";
      lapNum.style.fontSize = "17px";
      lapNum.style.fontFamily = "Lato";
      lapNum.style.fontWeight = "500";

      li.style.margin = "none";
      li.style.top = "8px";
      li.style.position = "relative";
      li.style.height = "3px";
      li.style.left = "20px;";
      li.style.position = "absolute";
      li.style.listStyleType = "none";
      li.style.fontSize = "17px";
      li.style.fontFamily = "Roboto";
    },

    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed -= 1), 1000 / 60);
      const start = this.$refs.stopwatchStart;
      start.style.transition = "0s";
    },

    watchRotate() {
      let rotater = document.querySelector(".clock2");
      let nums = document.querySelector(".nums");
      let nu = document.querySelectorAll(".nu");
      let numsChildren = nums.children;

      [nu].forEach.call(nu, function (nu) {
        nu.style.setProperty("--transition", "0.0s");
      });
      numsChildren[0].classList.add("zero0");
      numsChildren[0].classList.add("zero1");
      numsChildren[1].classList.add("one0");
      numsChildren[1].classList.add("one1");
      numsChildren[2].classList.add("two0");
      numsChildren[2].classList.add("two1");
      numsChildren[3].classList.add("three0");
      numsChildren[3].classList.add("three1");
      numsChildren[4].classList.add("four0");
      numsChildren[4].classList.add("four1");
      numsChildren[5].classList.add("five0");
      numsChildren[5].classList.add("five1");
      numsChildren[6].classList.add("six0");
      numsChildren[6].classList.add("six1");
      numsChildren[7].classList.add("seven0");
      numsChildren[7].classList.add("seven1");
      numsChildren[8].classList.add("eight0");
      numsChildren[8].classList.add("eight1");
      numsChildren[9].classList.add("nine0");
      numsChildren[9].classList.add("nine1");
      numsChildren[10].classList.add("ten1");
      numsChildren[11].classList.add("eleven0");
      numsChildren[11].classList.add("eleven1");

      rotater.classList.add("animated");

      let nu0 = document.querySelectorAll(
        ".nu.zero1, .nu.one1, .nu.two1, .nu.three1, .nu.four1, .nu.five1, .nu.six1, .nu.seven1, .nu.eight1, .nu.nine1, .nu.ten1, .nu.eleven1"
      );
      [nu0].forEach.call(nu0, function (nu0) {
        nu0.style.setProperty("--animationPlay", "running");
      });

      rotater.style.animationPlayState = "running";

      const start = this.$refs.stopwatchStart;
      const rsm = this.$refs.rsmbtn;
      const lap = this.$refs.lap;
      const stop = this.$refs.stopbtn;
      const cncl = this.$refs.cnclbtn;

      start.style.visibility = "hidden";
      start.style.transitionDelay = "0s";
      lap.style.visibility = "visible";
      lap.style.opacity = "1";
      lap.style.left = "72%";
      lap.style.transition = "0.2s";
      stop.style.visibility = "visible";
      stop.style.opacity = "1";
      stop.style.left = "28%";
      stop.style.transition = "0.2s";
      cncl.style.left = "72%";
      cncl.style.transition = "0s";
      rsm.style.left = "72%";
      rsm.style.transition = "0s";
    },

    stopTimer() {
      clearInterval(this.timerInterval);
      let rotater = document.querySelector(".clock2");
      let nu0 = document.querySelectorAll(
        ".nu.zero1, .nu.one1, .nu.two1, .nu.three1, .nu.four1, .nu.five1, .nu.six1, .nu.seven1, .nu.eight1, .nu.nine1, .nu.ten1, .nu.eleven1"
      );
     
      let rsm = this.$refs.rsmbtn;
      let lap = this.$refs.lap;
      let stop = this.$refs.stopbtn;
      let cncl = this.$refs.cnclbtn;

      [nu0].forEach.call(nu0, function (nu0) {
        nu0.style.setProperty("--animationPlay", "paused");
      });

      rotater.style.animationPlayState = "paused";

      rsm.style.visibility = "visible";
      rsm.style.opacity = "1";
      rsm.style.left = "28%";
      rsm.style.transition = "0s";

      stop.style.visibility = "hidden";
      stop.style.opacity = "0";
      stop.style.left = "50%";

      stop.style.transition = "0s";

      cncl.style.transition = "0s";
      cncl.style.visibility = "visible";
      cncl.style.opacity = "1";
      lap.style.visibility = "hidden";
      lap.style.transition = "0s";
    },
    rsmTimer() {
      this.timerInterval = setInterval(() => (this.timePassed -= 1), 1000 / 60);

      let rotater = document.querySelector(".clock2");
      let nu0 = document.querySelectorAll(
        ".nu.zero1, .nu.one1, .nu.two1, .nu.three1, .nu.four1, .nu.five1, .nu.six1, .nu.seven1, .nu.eight1, .nu.nine1, .nu.ten1, .nu.eleven1"
      );
      let rsm = this.$refs.rsmbtn;
      let lap = this.$refs.lap;
      let stop = this.$refs.stopbtn;
      let cncl = this.$refs.cnclbtn;

      [nu0].forEach.call(nu0, function (nu0) {
        nu0.style.setProperty("--animationPlay", "running");
      });

      rotater.style.animationPlayState = "running";

      rsm.style.visibility = "hidden";
      rsm.style.opacity = "0";
      rsm.style.left = "50%";

      stop.style.visibility = "visible";
      stop.style.opacity = "1";
      stop.style.left = "28%";
      rsm.style.transition = "0s";
      stop.style.transition = "0s";

      lap.style.transition = "0s";
      lap.style.visibility = "visible";
      lap.style.opacity = "1";
      cncl.style.visibility = "hidden";
      cncl.style.transition = "0s";
    },
    cancelTimer() {
      let lapContainer = this.$refs.laps;
      let count = this.$refs.count;
      let nums = document.querySelector(".nums");
      let numsChildren = nums.children;
      let rotater = document.querySelector(".clock2");
      const start = this.$refs.stopwatchStart;
      const rsm = this.$refs.rsmbtn;
      const lap = this.$refs.lap;
      const stop = this.$refs.stopbtn;
      const cncl = this.$refs.cnclbtn;

      start.style.visibility = "visible";
      start.style.opacity = "1";
      start.style.transitionDelay = "0.2s";
      lap.style.visibility = "hidden";
      lap.style.opacity = 0;
      lap.style.transition = "0.2s";
      lap.style.left = "50%";
      stop.style.visibility = "hidden";
      stop.style.opacity = 0;
      stop.style.transition = "0.2s";
      stop.style.left = "50%";
      cncl.style.visibility = "hidden";
      cncl.style.opacity = 0;
      cncl.style.transition = "0.2s";
      cncl.style.left = "50%";
      rsm.style.visibility = "hidden";
      rsm.style.opacity = 0;
      rsm.style.transition = "0.2s";
      rsm.style.left = "50%";

      clearInterval(this.timerInterval);
      this.timeLimit = 0;
      this.timePassed = 0;
      numsChildren[0].classList.remove("zero0");
      numsChildren[0].classList.remove("zero1");
      numsChildren[1].classList.remove("one0");
      numsChildren[1].classList.remove("one1");
      numsChildren[2].classList.remove("two0");
      numsChildren[2].classList.remove("two1");
      numsChildren[3].classList.remove("three0");
      numsChildren[3].classList.remove("three1");
      numsChildren[4].classList.remove("four0");
      numsChildren[4].classList.remove("four1");
      numsChildren[5].classList.remove("five0");
      numsChildren[5].classList.remove("five1");
      numsChildren[6].classList.remove("six0");
      numsChildren[6].classList.remove("six1");
      numsChildren[7].classList.remove("seven0");
      numsChildren[7].classList.remove("seven1");
      numsChildren[8].classList.remove("eight0");
      numsChildren[8].classList.remove("eight1");
      numsChildren[9].classList.remove("nine0");
      numsChildren[9].classList.remove("nine1");
      numsChildren[10].classList.remove("ten1");
      numsChildren[11].classList.remove("eleven0");
      numsChildren[11].classList.remove("eleven1");

      rotater.classList.remove("animated");

      lapContainer.innerHTML = "";
      count.innerHTML = "0";
    },
  },
};
</script>


<style scoped>
.stopwatchcont{
  margin-top: 20px;
  top: 31%;
  left: 50%;
  z-index: +100;
 
  background: black;
  position: absolute;
  transform: translate(-50%, -50%)
}
.stopwatchsvg {
  position: absolute;
  width: 218px;
  height: 218px;
  left: 50%;
  
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: black;
  z-index: +10;
  visibility: visible;
}

.stopwatch__circle {
  fill: none;
  stroke: none;
  font-size: 48px;
  visibility: visible;
  position: absolute;
  top: 0%;
}

.stopwatch__path-elapsed {
  stroke-width: 7px;
  stroke: grey;
  opacity: 0;
  font-size: 48px;
  position: absolute;
  top: 0%;
  visibility: visible;
}

.stopwatch__path-remaining {
  stroke-width: 2px;
  stroke-linecap: square;
  transform: rotate(90deg);
  transform-origin: center;
  transition: 1s linear all;
  stroke: rgb(135, 102, 252);

  font-size: 48px;
  visibility: hidden;
  position: absolute;
  top: 0%;
}

.stopwatch__svg {
  transform: scaleX(-1);
  font-size: 48px;
  visibility: visible;
  position: absolute;
  top: 0%;
  color: black;
}

.stopwatch__label {
  position: relative;
  top: 37%;
  left: 12.5%;
  transform: translate(-50%, -50%);
  font-family: "Rubik", sans-serif;
  font-size: 38px;
  color: rgb(77, 77, 77);
  opacity: 1;
  visibility: hidden;
  z-index: +40;
}

.labelOn {
  visibility: visible;
}

.stopwatch__label2 {
  position: absolute;
  top: 66.5%;
  left: 90%;
  transform: translate(-50%, -50%);
  font-family: "Rubik", sans-serif;
  font-size: 42px;
  color: rgb(77, 77, 77);
  opacity: 1;
  visibility: visible;
  z-index: +40;
}

.stopwatchStart {
  height: 75px;
  width: 75px;
  border-radius: 500px;
  position: absolute;
  transform: translate(-50%, -50%);
  /*top: 85%;*/
  top: 110%;
  left: 50%;
  background: rgb(111, 178, 255);
  box-shadow: 0px 0px 10px 1px rgba(58, 150, 255, 0.582);
  opacity: 1;
}

.startOn {
  top: 85%;
  transition: 0.2s;
}

.startTxt {
  margin: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 54%;
  left: 54%;
  font-family: "Roboto", sans-serif;
  color: white;
  font-weight: 400;
  font-size: 25px;
  letter-spacing: 1px;
}

.laps {
  width: 250px;
  height: 165px;
  position: absolute;
  font-size: 12px;
  color: black;
  /*background: rgb(234, 242, 243);*/
  left: 50%;
  transform: translate(-50%, -50%);
  top: 63%;
  overflow: scroll;
  z-index: +50;
  background: none;
  visibility: hidden;
}

.stopbtn {
  left: 50%;
  height: 70px;
  width: 70px;
  border-radius: 500px;
  position: absolute;
  transform: translate(-50%, -50%);
  /*top: 85%;*/
  top: 110%;
  visibility: hidden;
  background: rgb(111, 178, 255);
  box-shadow: 0px 0px 10px 1px rgba(58, 150, 255, 0.568);
  opacity: 0;
}

.stopOn {
  top: 85%;
  transition: 0.2s;
}
.lapsOn{
  visibility: visible;
}

.stop {
  margin: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 55%;
  left: 50%;
  font-family: "Roboto", sans-serif;
  color: white;
  font-weight: 400;
  font-size: 30px;
  letter-spacing: 1px;
}

.rsmbtn {
  left: 50%;
  height: 70px;
  width: 70px;
  border-radius: 500px;
  position: absolute;
  transform: translate(-50%, -50%);
  /*top: 85%;*/
  top: 110%;
  visibility: hidden;
  background: rgb(111, 178, 255);
  box-shadow: 0px 0px 10px 1px rgba(58, 150, 255, 0.589);
  opacity: 0;
}

.rsmOn {
  top: 85%;
  transition: 0.2s;
}

.rsm {
  margin: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 54%;
  left: 53%;
  font-family: "Roboto", sans-serif;
  color: white;
  font-weight: 400;
  font-size: 25px;
  letter-spacing: 1px;
}

.lp {
  margin: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 54%;
  left: 50%;
  font-family: "Roboto", sans-serif;
  color: white;
  font-weight: 400;
  font-size: 22px;
  letter-spacing: 1px;
}

.lap {
  left: 50%;
  height: 70px;
  width: 70px;
  border-radius: 500px;
  position: absolute;
  transform: translate(-50%, -50%);
  /*top: 85%;*/
  top: 110%;
  visibility: hidden;
  background-color: rgba(0, 0, 0, 0.712);
  box-shadow: 0px 0px 8px 0px rgb(170, 170, 170);
  opacity: 0;
}

.lapOn {
  top: 85%;
  transition: 0.2s;
}

.cnclbtn {
  height: 70px;
  width: 70px;
  border-radius: 500px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 110%;
  left: 50%;
  background-color: rgba(255, 0, 0, 0.541);
  box-shadow: 0px 0px 4px 0px rgb(187, 127, 127);
  visibility: hidden;
  opacity: 0;
}

.cnclOn {
  top: 85%;
  transition: 0.2s;
}

.cncl {
  margin: 0;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 56%;
  left: 50%;
  font-family: "Roboto", sans-serif;
  color: white;
  font-weight: 400;
  font-size: 30px;
  letter-spacing: 1px;
}

.count {
  opacity: 0;
}
</style>
