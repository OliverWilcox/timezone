<template>
  <div class="timerbase">
    <div class="timesvg" v-bind:class="{ svgOn: isTimerOn }">
    <div class="basis" value="1" ref="baseTime">
      <svg
        :time-left="timeLeft"
        class="base-timer__svg"
        v-bind:class="{ basecircleOn: isTimerOn }"
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g class="base-timer__circle">
          <circle class="base-timer__path-elapsed" cx="50" cy="50" r="46.5" />
          <path
            :time-left="timeLeft"
            :stroke-dasharray="circleDasharray"
            class="base-timer__path-remaining" ref="baseTimer"
            d="
            M 50, 50
            m -45, 0
            a 45,45 0 1,0 90,0
            a 45,45 0 1,0 -90,0
          "
          ></path>
        </g>
      </svg>
      <span class="base-timer__label" ref="baseTimerLabel" v-bind:class="{ baselabelOn: isTimerOn }">
        {{ formattedTimeLeft }}
      </span>
    </div>
</div>
    <link
      href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap"
      rel="stylesheet"
    />

    <input
      type="number"
      maxlength="2"
      id="myNumber"
      class="timerNum"
      ref="timerNum"
      value="00"
      v-bind:class="{ timerNumOn: isTimerOn }"
      v-on:change="leadingZeros(this)"
      v-on:click="leadingZeros(this)"
      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
    />
    <input
      type="number"
      maxlength="2"
      id="myNumber"
      class="timerNum4"
      ref="timerNum4"
      value="00"
      v-bind:class="{ timerNumBOn: isTimerOn }"
      v-on:change="leadingZeros(this)"
      v-on:click="leadingZeros(this)"
      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
    />
    <input
      type="number"
      maxlength="2"
      id="myNumber"
      class="timerNum3"
      ref="timerNum3"
      value="00"
      v-bind:class="{ timerNumCOn: isTimerOn }"
      v-on:change="leadingZeros(this)"
      v-on:click="leadingZeros(this)"
      oninput="javascript: if (this.value.length > this.maxLength) this.value = this.value.slice(0, this.maxLength);"
    />

    <div class="buttoncontainer">
      <div
        class="startbtn"
        ref="startbtn"
        v-on:click="timelimitt()"
        v-bind:class="{ startbtnOn: isTimerOn }"
      >
        <h3 class="start"><ion-icon name="play-sharp"></ion-icon></h3>
      </div>
      <div
        class="pausebtn"
        ref="pausebtn"
        v-on:click="pause()"
        v-bind:class="{ pausebtnOn: isTimerOn }"
      >
        <h3 class="pause"><ion-icon name="pause-sharp"></ion-icon></h3>
      </div>
      <div
        class="resumebtn"
        ref="resumebtn"
        v-on:click="resume()"
        v-bind:class="{ resumebtnOn: isTimerOn }"
      >
        <h3 class="resume"><ion-icon name="play-sharp"></ion-icon></h3>
      </div>
      <div
        class="cancelbtn"
        ref="cancelbtn"
        v-on:click="cancel()"
        v-bind:class="{ cancelbtnOn: isTimerOn }"
      >
        <h3 class="cancel"><ion-icon name="close-sharp"></ion-icon></h3>
      </div>
    </div>
    <div class="timerBase">
      <div class="timercirchand"></div>
      <div
        class="timercirc1"
        ref="timercirc1"
        v-bind:class="{ timercircOn: isTimerOn, timercircSped: isTimerSped }"
      ></div>
      <div
        class="timercirc2"
        ref="timercirc2"
        v-bind:class="{ timercircBOn: isTimerOn, timercircBSped: isTimerSped }"
      ></div>
      <div class="timercirc3"></div>
    </div>
  </div>
</template>

<script>
const FULL_DASH_ARRAY = 283;

let TIME_LIMIT = 2;

export default {
  mounted() {
    this.startTimer();
    this.zero();
    
  },

  watch: {
    timeLeft(newValue) {
      if (newValue === 0) {
        this.onTimesUp();
        this.timeLimitt();
      }
    },
  },
  data() {
    return {
      timeLimit: TIME_LIMIT,
      timePassed: 0,
      timeInterval: null,
      timeOut: null,
    };
  },

  computed: {
    circleDasharray() {
      return `${(this.timeFraction * FULL_DASH_ARRAY).toFixed(0)} 283`;
    },
    timeFraction() {
      let rawTimeFraction = this.timeLeft / TIME_LIMIT;
      return rawTimeFraction - (1 / TIME_LIMIT) * (1 - rawTimeFraction);
    },
    timeLeft() {
      return this.timeLimit - this.timePassed;
    },
    formattedTimeLeft() {
      let timeLeft = this.timeLeft;
      let minutes = Math.floor((timeLeft / 60) % 60);
      let seconds = timeLeft % 60;
      let hours = Math.floor(timeLeft / 60 / 60);

      if (seconds < 10) {
        seconds = `0${seconds}`;
      }
      if (minutes < 10) {
        minutes = `0${minutes}`;
      }
      if (hours < 10) {
        hours = `0${hours}`;
      }

      return `${hours}:${minutes}:${seconds}`;
    },
  },

  name: "Timer",
  components: {},

  props: {
    isTimerOn: {
      type: Boolean,
      required: true,
    },
    isTimerSped: {
      type: Boolean,
      required: true,
    },
  },

  methods: {
    cancel() {
      let clockui = document.querySelector(".clockui");
      let clockuiChildren = clockui.children;
      let baseCircle = this.$refs.baseTimer
      let timerNum = this.$refs.timerNum.value;
      let timerNum4 = this.$refs.timerNum4.value;
      let timerNum3 = this.$refs.timerNum3.value;
      let timerNumm = this.$refs.timerNum
      let timerNum44 = this.$refs.timerNum4
      let timerNum33 = this.$refs.timerNum3
      let cancelbtn = this.$refs.cancelbtn
      let resumebtn = this.$refs.resumebtn;
      let pausebtn = this.$refs.pausebtn;
      let startbtn = this.$refs.startbtn;
      let baseLabel = this.$refs.baseTimerLabel;

      timerNumm.style.visibility = "visible";
      timerNum33.style.visibility = "visible";
      timerNum44.style.visibility = "visible";

      resumebtn.style.visibility = "hidden";
      resumebtn.style.opacity = 0;
      pausebtn.style.left = "50%";
      cancelbtn.style.left = "50%";
      pausebtn.style.visibility = "hidden";
      pausebtn.style.opacity = "0";
      cancelbtn.style.visibility = "hidden";
      cancelbtn.style.opacity = "0";
      startbtn.style.visibility = "visible";
      startbtn.style.opacity = "1";
      pausebtn.style.transition = "0.3s ease";
      cancelbtn.style.transition = "0.3s ease";
      startbtn.style.transition = "0.3s ease";

      baseCircle.style.visibility = "hidden";
      baseCircle.style.transition = "0s";
      baseLabel.style.transition = "0s";
      const timerCirc1 = this.$refs.timercirc1;
      const timerCirc2 = this.$refs.timercirc2;

    

      
      

      timerCirc1.style.width = "235px";
      timerCirc1.style.height = "235px";
      timerCirc1.style.boxShadow = "0px 0px 5px 1px rgb(158, 219, 255)";
      timerCirc2.style.width = "275px";
      timerCirc2.style.height = "275px";
      timerCirc2.style.boxShadow =
        "inset 0px 0px 60px 35px rgba(187, 226, 241, 0.3), 0px 0px 5px 0px rgb(158, 219, 255)";

      timerCirc1.style.transition = "0.4s ease";
      timerCirc2.style.transition = "0.4s ease";

      timerCirc1.style.top = "40%";
      timerCirc2.style.top = "40%";
      clockuiChildren[5].style.top = "40%";

      baseLabel.style.visibility = "hidden";

      const fullTime = timerNum / 1 + timerNum4 * 60 + timerNum3 * 60 * 60;

      this.timeLimit = fullTime - fullTime + this.timePassed;
      TIME_LIMIT = fullTime - fullTime + this.timePassed;
      clearInterval(this.timerInterval);
    },
    resume() {
    let cancelbtn = this.$refs.cancelbtn
      let resumebtn = this.$refs.resumebtn;
      let pausebtn = this.$refs.pausebtn;
      let startbtn = this.$refs.startbtn;
      let baseCircle = this.$refs.baseTimer
      resumebtn.style.visibility = "hidden";
      resumebtn.style.opacity = 0;
      pausebtn.style.visibility = "visible";
      pausebtn.style.opacity = 1;
      pausebtn.style.transition = "0s";
      let timerNum = this.$refs.timerNum.value;
      let timerNum4 = this.$refs.timerNum4.value;
      let timerNum3 = this.$refs.timerNum3.value;
      this.timeOut = setTimeout(function () {
        baseCircle.style.stroke = "red";
        pausebtn.style.left = "50%";
        cancelbtn.style.left = "50%";
        pausebtn.style.visibility = "hidden";
        pausebtn.style.opacity = "0";
        cancelbtn.style.visibility = "hidden";
        cancelbtn.style.opacity = "0";
        startbtn.style.visibility = "visible";
        startbtn.style.opacity = "1";
        pausebtn.style.transition = "0.3s ease";
        cancelbtn.style.transition = "0.3s ease";
        startbtn.style.transition = "0.3s ease";
      }, timerNum * 1000 +
        timerNum4 * 1000 * 60 +
        (timerNum3 * 1000 * 60 * 60) / this.timePassed); //

      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    },
    pause() {
      let resumebtn = this.$refs.resumebtn;
      let pausebtn = this.$refs.pausebtn;
      resumebtn.style.visibility = "visible";
      resumebtn.style.opacity = 1;
      pausebtn.style.visibility = "hidden";
      pausebtn.style.opacity = 0;
      pausebtn.style.transition = "0s";
      window.clearTimeout(this.timeOut);

      clearInterval(this.timerInterval);
    },
    leadingZeros() {
      let timerNum = this.$refs.timerNum
      if (!isNaN(timerNum.value) && timerNum.value.length == 1) {
        timerNum.value = "0" + timerNum.value;
      }
    },
    timelimitt: function () {
      if (TIME_LIMIT > 0){
       let cancelbtn = this.$refs.cancelbtn;
      let pausebtn = this.$refs.pausebtn;
      let startbtn = this.$refs.startbtn;
      let baseCircle = this.$refs.baseTimer
      let baseLabel = this.$refs.baseTimerLabel;
      if (this.timeLeft == 0) {
        const timerCirc1 = this.$refs.timercirc1;
      const timerCirc2 = this.$refs.timercirc2;
        let timerNum = this.$refs.timerNum.value;
      let timerNum4 = this.$refs.timerNum4.value;
      let timerNum3 = this.$refs.timerNum3.value;
        let timerNum44 = this.$refs.timerNum4;
        let timerNum33 = this.$refs.timerNum3;
        let timerNu = this.$refs.timerNum;
        
        let timer = this.$refs.baseTime;
        timerNum44.style.visibility = "hidden";
        timerNum33.style.visibility = "hidden";
        TIME_LIMIT = timerNum / 1 + timerNum4 * 60 + timerNum3 * 60 * 60;
        this.timeLimit += timerNum / 1 + timerNum4 * 60 + timerNum3 * 60 * 60;
        this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
        timer.style.visibility = "visible";
        baseCircle.style.visibility = "visible";
        baseCircle.value = 1;
        baseLabel.style.visibility = "visible";
        timerNu.style.visibility = "hidden";
        timerCirc1.style.height = "250px";
        timerCirc1.style.width = "250px";
        timerCirc2.style.height = "296px";
        timerCirc2.style.width = "296px";
        timer.style.height = "315px";
        timer.style.width = "315px";
        timer.style.strokeDasharray = null;
        baseCircle.style.stroke = "rgb(69, 156, 255)";
        pausebtn.style.left = "28%";
        cancelbtn.style.left = "72%";
        pausebtn.style.visibility = "visible";
        pausebtn.style.opacity = "1";
        cancelbtn.style.visibility = "visible";
        baseCircle.style.transition = "0s";
        baseLabel.style.transition = "0s";
        baseCircle.style.transition = "1s linear all";
        cancelbtn.style.opacity = "1";
        startbtn.style.visibility = "hidden";
        startbtn.style.opacity = "0";
        pausebtn.style.transition = "0.3s ease";
        cancelbtn.style.transition = "0.3s ease";
        this.timeOut = setTimeout(function () {
          baseCircle.style.stroke = "red";
          pausebtn.style.left = "50%";
          cancelbtn.style.left = "50%";
          pausebtn.style.visibility = "hidden";
          pausebtn.style.opacity = "0";
          cancelbtn.style.visibility = "hidden";
          cancelbtn.style.opacity = "0";
          startbtn.style.visibility = "visible";
          startbtn.style.opacity = "1";
          pausebtn.style.transition = "0.3s ease";
          cancelbtn.style.transition = "0.3s ease";
          startbtn.style.transition = "0.3s ease";
        }, timerNum * 1000 +
          timerNum4 * 1000 * 60 +
          timerNum3 * 1000 * 60 * 60 +
          this.timePassed); //
      }
      }
    },
    onTimesUp() {
      clearInterval(this.timerInterval);
    },
    startTimer() {
      this.timerInterval = setInterval(() => (this.timePassed += 1), 1000);
    },
  },
};
</script>

<style scoped>
.timercirc1 {
  position: absolute;
  background: rgb(248, 252, 255);
  top: 40%;
  left: 50%;
  border-radius: 50%;
  width: 235px;
  height: 235px;
  z-index: +10;
  box-shadow: 0px 0px 10px 1px rgb(158, 219, 255);
  transform: translate(-50%, -50%);
  transition: 0.2s;
  visibility: hidden;
}

.timercircOn {
  top: 40%;
  visibility: visible;
  opacity: 1;
  transition: 0.2s;
  transition-delay: 0.2s;
}

.timercircSped {
  transition: 0s;
  transition-delay: 0s;
}

.timercirc2 {
  position: absolute;
  width: 275px;
  height: 275px;
  top: 40%;
  left: 50%;
  box-shadow: inset 0px 0px 60px 35px rgba(187, 226, 241, 0.3),
    0px 0px 5px 0px rgb(158, 219, 255);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: 0.2s;
  visibility: hidden;
}

.timercircBOn {
  top: 40%;
  visibility: visible;
  opacity: 1;
  transition: 0.2s;
  transition-delay: 0.2s;
}

.timercircBSped {
  transition: 0s;
  transition-delay: 0s;
}
.timesvg{
  top: 40%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: +100;
  display: none;

}
.svgOn{
  display: block;
  }
.basis {
  position: absolute;
  width: 0px;
  height: 0px;
  left: 50%;
  top: 00%;
  margin: none;
  transform: translate(-50%, -50%);
  font-size: 48px;
  color: black;
  z-index: +20;
  visibility: hidden;
}

/* The SVG path that displays the timer's progress */

.base-timer__circle {
  fill: none;
  stroke: none;
  font-size: 48px;
  visibility: hidden;
  position: absolute;
  top: 00%;
}

.base-timer__path-elapsed {
  stroke-width: 7px;
  stroke: grey;
  opacity: 0;
  font-size: 48px;
  position: absolute;
  top: 00%;
}

.base-timer__path-remaining {
  stroke-width: 2px;
  stroke-linecap: square;
  transform: rotate(90deg);
  transform-origin: center;
  transition: 1s linear all;
  stroke: rgb(135, 102, 252);
  visibility: hidden;
  font-size: 48px;
  position: absolute;
  top: 0%;
}

.base-timer__svg {
  transform: scaleX(-1);
  font-size: 48px;
  visibility: hidden;
  position: absolute;
  top: 0%;
  width: 342px;
  left: 4.9%;
}

.basecircleOn {
  top: 5%;
  transition: 0.4s;
  opacity: 1;
}

.base-timer__label {
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Rubik", sans-serif;
  font-size: 46px;
  color: rgb(77, 77, 77);
  opacity: 1;
  visibility: hidden;
}

.baselabelOn {
  top: 50%;
  transition: 0.4s;
  opacity: 1;
}

.timerNum {
  height: 52px;
  width: 52px;
  position: absolute;
  top: 110%;
  left: 50%;
  margin-left: 60px;
  transform: translate(-50%, -50%);
  font-size: 40px;
  border: none;
  color: rgb(77, 77, 77);
  z-index: +500;
  font-family: "Rubik", sans-serif;
  background: none;
}

.timerNumOn {
  top: 40%;
}

.timerNum4 {
  height: 52px;
  width: 52px;
  position: absolute;
  top: 110%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  border: none;
  color: rgb(77, 77, 77);
  background: none;
  font-family: "Rubik", sans-serif;
  z-index: +500;
}

.timerNumBOn {
  top: 40%;
}

.timerNum3 {
  height: 52px;
  width: 52px;
  position: absolute;
  top: 110%;
  left: 50%;
margin-left: -60px;
  transform: translate(-50%, -50%);
  font-size: 40px;
  /*font-size: 46px*/
  border: none;
  color: rgb(77, 77, 77);
  z-index: +500;
  font-family: "Rubik", sans-serif;
  background: none;
}

.timerNumCOn {
  top: 40%;
}

.startbtn {
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
  visibility: visible;
  opacity: 0;
}

.start {
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

.startbtnOn {
  top: 85%;
  opacity: 1;
  transition: 0.2s;
}

.pausebtn {
  height: 70px;
  width: 70px;
  border-radius: 500px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 110%;
  left: 50%;
  background: rgb(111, 178, 255);
  box-shadow: 0px 0px 10px 1px rgba(58, 150, 255, 0.568);
  visibility: hidden;
  opacity: 0;
}

.pausebtnOn {
  top: 85%;
  transition: 0.2s;
}

.pause {
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

.resumebtn {
  height: 70px;
  width: 70px;
  border-radius: 500px;
  position: absolute;
  transform: translate(-50%, -50%);
  top: 110%;
  left: 28%;
  background: rgb(111, 178, 255);
  box-shadow: 0px 0px 10px 1px rgba(58, 150, 255, 0.589);
  visibility: hidden;
  opacity: 0;
}

.resumebtnOn {
  top: 85%;
  transition: 0.2s;
}

.resume {
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

.cancelbtn {
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

.cancelbtnOn {
  top: 85%;
  transition: 0.2s;
}

.cancel {
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
</style>