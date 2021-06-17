<template>
  <div class="alarm">
    <div class="alarmcircles">
      <div class="timeleftalarm" v-bind:class="{ alarmLeftOn: isAlarmMenuOn }">
        ALARM SOUND
      </div>
      <div
        class="alarmsoundContainer"
        v-bind:class="{ alarmSoundOn: isAlarmMenuOn }"
      >
        <div class="sounds" id="sounds" ref="sounds">
          <div class="soundsnep" id="soundsnep"></div>
          <div class="alarmsound2 morning2">Morning Call</div>
          <div class="alarmsound2 blissful2">Blissful Day</div>
          <div class="alarmsound2 clone">Neptune</div>
          <div class="alarmsound2 timeleftnum">Morning Call</div>
          <div class="alarmsound2">Blissful Day</div>
          <div class="alarmsound2 neptune">Neptune</div>
        </div>
      </div>
      <div class="alarmtime" v-bind:class="{ alarmTimeOn: isAlarmMenuOn }">
        ALARM TIME
      </div>
      <div
        class="alarmcirclecontainer"
        v-bind:class="{ alarmCircOn: isAlarmMenuOn }"
      >
        <div
          class="alarmcircle1"
          v-bind:class="{ alarm1rotate: isAlarmSwitch }"
          ref="alarmc1"
        >
          <div class="okdiv" v-on:click="getTime(), showTime()">
            <div class="ok" v-bind:class="{ okOn: isAlarmSwitch }" ref="ok">
              OK
            </div>
          </div>
          <div class="setdiv" v-on:click="getTimeStop()">
            <div class="set" v-bind:class="{ setOn: isAlarmSwitch }">SET</div>
          </div>
        </div>
        <div
          class="alarmcircle2"
          id="knob3"
          v-bind:class="{ alarm2In: isAlarmSwitch }"
          ref="alarmc2"
        >
          <div class="amspms">
            <div
              class="ampm a"
              data-value="am"
              v-bind:class="{ ampmAon: is2AOn }"
            >
              AM
            </div>
            <div
              class="ampm b"
              data-value="pm"
              v-bind:class="{ ampmAon: is2BOn }"
            >
              PM
            </div>
            <div
              class="ampm c"
              data-value="am"
              v-bind:class="{ ampmAon: is2COn }"
            >
              AM
            </div>
            <div
              class="ampm d"
              data-value="pm"
              v-bind:class="{ ampmAon: is2DOn }"
            >
              PM
            </div>
            <div
              class="ampm e"
              data-value="am"
              v-bind:class="{ ampmAon: is2EOn }"
            >
              AM
            </div>
            <div
              class="ampm f"
              data-value="pm"
              v-bind:class="{ ampmAon: is2FOn }"
            >
              PM
            </div>
            <div
              class="ampm g"
              data-value="am"
              v-bind:class="{ ampmAon: is2GOn }"
            >
              AM
            </div>
            <div
              class="ampm h"
              data-value="pm"
              v-bind:class="{ ampmAon: is2HOn }"
            >
              PM
            </div>
            <div
              class="ampm i"
              data-value="am"
              v-bind:class="{ ampmAon: is2IOn }"
            >
              AM
            </div>
            <div
              class="ampm j"
              data-value="pm"
              v-bind:class="{ ampmAon: is2JOn }"
            >
              PM
            </div>
          </div>
        </div>
        <div
          class="alarmcircle3"
          id="knob2"
          v-bind:class="{ alarm3In: isAlarmSwitch }"
          ref="alarmc3"
        >
          <div class="numin"></div>
          <div
            class="numn a"
            data-value="00"
            v-bind:class="{ numnAon: is3AOn }"
          >
            0
          </div>
          <div
            class="numn b"
            data-value="05"
            v-bind:class="{ numnBon: is3BOn }"
          >
            5
          </div>
          <div class="numn c" v-bind:class="{ numnCon: is3COn }">10</div>
          <div class="numn d" v-bind:class="{ numnDon: is3DOn }">15</div>
          <div class="numn e" v-bind:class="{ numnEon: is3EOn }">20</div>
          <div class="numn f" v-bind:class="{ numnFon: is3FOn }">25</div>
          <div class="numn g" v-bind:class="{ numnGon: is3GOn }">30</div>
          <div class="numn h" v-bind:class="{ numnHon: is3HOn }">35</div>
          <div class="numn i" v-bind:class="{ numnIon: is3IOn }">40</div>
          <div class="numn j" v-bind:class="{ numnJon: is3JOn }">45</div>
          <div class="numn k" v-bind:class="{ numnKon: is3KOn }">50</div>
          <div class="numn l" v-bind:class="{ numnLon: is3LOn }">55</div>
        </div>
        <div
          class="alarmcircle4"
          id="knob"
          v-bind:class="{ alarm4In: isAlarmSwitch }"
          ref="alarmc4"
        >
          <div class="numstwo">
            <div
              class="numb a"
              data-value="01"
              v-bind:class="{ numbAon: is4AOn }"
            >
              1
            </div>
            <div
              class="numb b"
              data-value="02"
              v-bind:class="{ numbBon: is4BOn }"
            >
              2
            </div>
            <div
              class="numb c"
              data-value="03"
              v-bind:class="{ numbCon: is4COn }"
            >
              3
            </div>
            <div
              class="numb d"
              data-value="04"
              v-bind:class="{ numbDon: is4DOn }"
            >
              4
            </div>
            <div
              class="numb e"
              data-value="05"
              v-bind:class="{ numbEon: is4EOn }"
            >
              5
            </div>
            <div
              class="numb f"
              data-value="06"
              v-bind:class="{ numbFon: is4FOn }"
            >
              6
            </div>
            <div
              class="numb g"
              data-value="07"
              v-bind:class="{ numbGon: is4GOn }"
            >
              7
            </div>
            <div
              class="numb h"
              data-value="08"
              v-bind:class="{ numbHon: is4HOn }"
            >
              8
            </div>
            <div
              class="numb i"
              data-value="09"
              v-bind:class="{ numbIon: is4IOn }"
            >
              9
            </div>
            <div
              class="numb j"
              data-value="10"
              v-bind:class="{ numbJon: is4JOn }"
            >
              10
            </div>
            <div
              class="numb k"
              data-value="11"
              v-bind:class="{ numbKon: is4KOn }"
            >
              11
            </div>
            <div
              class="numb l"
              data-value="12"
              v-bind:class="{ numbLon: is4LOn }"
            >
              12
            </div>
            <div
              class="numb m"
              data-value="01"
              v-bind:class="{ numbMon: is4MOn }"
            >
              1
            </div>
            <div
              class="numb n"
              data-value="02"
              v-bind:class="{ numbNon: is4NOn }"
            >
              2
            </div>
            <div
              class="numb o"
              data-value="03"
              v-bind:class="{ numbOon: is4OOn }"
            >
              3
            </div>
            <div
              class="numb p"
              data-value="04"
              v-bind:class="{ numbPon: is4POn }"
            >
              4
            </div>
            <div
              class="numb q"
              data-value="05"
              v-bind:class="{ numbQon: is4QOn }"
            >
              5
            </div>
            <div
              class="numb r"
              data-value="06"
              v-bind:class="{ numbRon: is4ROn }"
            >
              6
            </div>
            <div
              class="numb s"
              data-value="07"
              v-bind:class="{ numbSon: is4SOn }"
            >
              7
            </div>
            <div
              class="numb t"
              data-value="08"
              v-bind:class="{ numbTon: is4TOn }"
            >
              8
            </div>
            <div
              class="numb u"
              data-value="09"
              v-bind:class="{ numbUon: is4UOn }"
            >
              9
            </div>
            <div
              class="numb v"
              data-value="10"
              v-bind:class="{ numbVon: is4VOn }"
            >
              10
            </div>
            <div
              class="numb w"
              data-value="11"
              v-bind:class="{ numbWon: is4WOn }"
            >
              11
            </div>
            <div
              class="numb x"
              data-value="12"
              v-bind:class="{ numbXon: is4XOn }"
            >
              12
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="alarmcircle4ms"></div>
    <div class="hours" ref="hours">
      {{ hour }}
    </div>
    <div class="minutes" ref="minutes">
      {{ minute }}
    </div>
    <div class="ampmone" ref="ampmone">
      {{ amNpm }}
    </div>
    <div class="currentTime" ref="currentTimeDiv"></div>
    <div
      class="currentTime2"
      v-bind:class="{ alarmCurOn: isAlarmMenuOn }"
      ref="currenttime2"
    ></div>
    <div class="alarmOff" ref="alarmOff">
      <div class="backgroundcirc"></div>
      <div class="backgroundcurve"></div>
      <div class="miniclock">
        <div class="miniclockmincirc"></div>
        <div class="hour1">
          <div class="hr1" id="hr1" ref="hr1"></div>
        </div>
        <div class="min1">
          <div class="mn1" id="mn1" ref="mn1"></div>
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

      <div class="displayTime" ref="displayTime">12:10</div>
      <div class="displayDate" ref="displayDate">WED JULY 9</div>
      <div class="dismissbtn" v-on:click="alarmOff">
        <div class="alarmX">
          <ion-icon class="ion" name="close-outline"></ion-icon>
        </div>
      </div>
      <div class="highlightCircle"></div>
      <div class="snoozebtn" v-on:click="snooze()" ref="snoozebtn">
        <div class="snooze">SNOOZE</div>
      </div>
      <div class="snoozebtn2" v-on:click="snooze2()" ref="snoozebtn2">
        <div class="snooze2">SNOOZE</div>
      </div>
    </div>
    <audio class="song" ref="song" src="../assets/samsungalarm.mp3"></audio>
  </div>
</template>

<script>
import { gsap, TweenMax, TweenLite } from "gsap";
import { Draggable } from "gsap/Draggable";
import { PixiPlugin } from "gsap/PixiPlugin.js";

gsap.registerPlugin(Draggable, PixiPlugin);
gsap.registerPlugin(TweenMax);
gsap.registerPlugin(TweenLite);

export default {
  name: "Alarm",
  props: {
    isAlarmMenuOn: {
      type: Boolean,
      required: true,
    },
  },

  data() {
    return {
      alarmStart: false,
      isAlarmSwitch: false,
      is4AOn: false,
      is4BOn: false,
      is4COn: false,
      is4DOn: false,
      is4EOn: false,
      is4FOn: false,
      is4GOn: false,
      is4HOn: false,
      is4IOn: false,
      is4JOn: false,
      is4KOn: false,
      is4LOn: false,
      is4MOn: false,
      is4NOn: false,
      is4OOn: false,
      is4POn: false,
      is4QOn: false,
      is4ROn: false,
      is4SOn: false,
      is4TOn: false,
      is4UOn: false,
      is4VOn: false,
      is4WOn: false,
      is4XOn: false,

      is3AOn: false,
      is3BOn: false,
      is3COn: false,
      is3DOn: false,
      is3EOn: false,
      is3FOn: false,
      is3GOn: false,
      is3HOn: false,
      is3IOn: false,
      is3JOn: false,
      is3KOn: false,
      is3LOn: false,

      is2AOn: false,
      is2BOn: false,
      is2COn: false,
      is2DOn: false,
      is2EOn: false,
      is2FOn: false,
      is2GOn: false,
      is2HOn: false,
      is2IOn: false,
      is2JOn: false,

      hour: "12",
      minute: "00",
      amNpm: "am",
    };
  },

  mounted() {
    let _this = this;
    Draggable.create("#sounds", {
      type: "x",
      bounds: { minX: -320, maxX: 450 },
      onDrag: function () {},
      onRelease: function () {
        if (
          _this.$refs.sounds.getBoundingClientRect().left < 103 &&
          _this.$refs.sounds.getBoundingClientRect().left > -54
        ) {
          TweenMax.to(_this.$refs.sounds, 0.1, { x: 0 });
        } else if (
          _this.$refs.sounds.getBoundingClientRect().left < -54 &&
          _this.$refs.sounds.getBoundingClientRect().left > -200
        ) {
          TweenMax.to(_this.$refs.sounds, 0.1, { x: -159 });
        } else if (
          _this.$refs.sounds.getBoundingClientRect().left < -200 &&
          _this.$refs.sounds.getBoundingClientRect().left > -322
        ) {
          TweenMax.to(_this.$refs.sounds, 0.02, { x: 138 });
        } else if (
          _this.$refs.sounds.getBoundingClientRect().left < 250 &&
          _this.$refs.sounds.getBoundingClientRect().left > 103
        ) {
          TweenMax.to(_this.$refs.sounds, 0.1, { x: 138 });
        } else if (
          _this.$refs.sounds.getBoundingClientRect().left < 364 &&
          _this.$refs.sounds.getBoundingClientRect().left > 250
        ) {
          TweenMax.to(_this.$refs.sounds, 0.1, { x: 283 });
        } else if (
          _this.$refs.sounds.getBoundingClientRect().left < 530 &&
          _this.$refs.sounds.getBoundingClientRect().left > 364
        ) {
          TweenMax.to(_this.$refs.sounds, 0.02, { x: 0 });
        }
      },
    });

    let rotationNum;
    let rotationNum2;
    let rotationNum3;

    Draggable.create("#knob", {
      type: "rotation",
      onDrag: function () {
        let rotation = parseInt(this.rotation % 360, 10);
        rotationNum = rotation < 0 ? rotation + 360 : rotation;
        _this.$refs.alarmc4.style.transition = "0s";
        _this.$refs.alarmc4.style.boxShadow =
          "0px 0px 15px 4px rgb(188, 219, 254)";
        if (rotationNum < 309 && rotationNum > 293) {
          _this.is4AOn = true;
          _this.hour = "01";
        } else {
          _this.is4AOn = false;
        }
        if (rotationNum < 294 && rotationNum > 282) {
          _this.is4BOn = true;
          _this.hour = "02";
        } else {
          _this.is4BOn = false;
        }
        if (rotationNum < 283 && rotationNum > 263) {
          _this.is4COn = true;
          _this.hour = "03";
        } else {
          _this.is4COn = false;
        }
        if (rotationNum < 264 && rotationNum > 249) {
          _this.is4DOn = true;
          _this.hour = "04";
        } else {
          _this.is4DOn = false;
        }
        if (rotationNum < 250 && rotationNum > 234) {
          _this.is4EOn = true;
          _this.hour = "05";
        } else {
          _this.is4EOn = false;
        }
        if (rotationNum < 235 && rotationNum > 218) {
          _this.is4FOn = true;
          _this.hour = "06";
        } else {
          _this.is4FOn = false;
        }
        if (rotationNum < 219 && rotationNum > 203) {
          _this.is4GOn = true;
          _this.hour = "07";
        } else {
          _this.is4GOn = false;
        }
        if (rotationNum < 204 && rotationNum > 189) {
          _this.is4HOn = true;
          _this.hour = "08";
        } else {
          _this.is4HOn = false;
        }
        if (rotationNum < 190 && rotationNum > 174) {
          _this.is4IOn = true;
          _this.hour = "09";
        } else {
          _this.is4IOn = false;
        }
        if (rotationNum < 175 && rotationNum > 157) {
          _this.is4JOn = true;
          _this.hour = "10";
        } else {
          _this.is4JOn = false;
        }
        if (rotationNum < 158 && rotationNum > 143) {
          _this.is4KOn = true;
          _this.hour = "11";
        } else {
          _this.is4KOn = false;
        }
        if (rotationNum < 144 && rotationNum > 125) {
          _this.is4LOn = true;
          _this.hour = "12";
        } else {
          _this.is4LOn = false;
        }
        if (rotationNum < 126 && rotationNum > 111) {
          _this.is4MOn = true;
          _this.hour = "01";
        } else {
          _this.is4MOn = false;
        }
        if (rotationNum < 112 && rotationNum > 97) {
          _this.is4NOn = true;
          _this.hour = "02";
        } else {
          _this.is4NOn = false;
        }
        if (rotationNum < 98 && rotationNum > 82) {
          _this.is4OOn = true;
          _this.hour = "03";
        } else {
          _this.is4OOn = false;
        }
        if (rotationNum < 83 && rotationNum > 69) {
          _this.is4POn = true;
          _this.hour = "04";
        } else {
          _this.is4POn = false;
        }
        if (rotationNum < 70 && rotationNum > 55) {
          _this.is4QOn = true;
          _this.hour = "05";
        } else {
          _this.is4QOn = false;
        }
        if (rotationNum < 56 && rotationNum > 40) {
          _this.is4ROn = true;
          _this.hour = "06";
        } else {
          _this.is4ROn = false;
        }

        if (rotationNum < 41 && rotationNum > 26) {
          _this.is4SOn = true;
          _this.hour = "07";
        } else {
          _this.is4SOn = false;
        }
        if (rotationNum < 27 && rotationNum > 12) {
          _this.is4TOn = true;
          _this.hour = "08";
        } else {
          _this.is4TOn = false;
        }
        if (rotationNum < 13 && rotationNum > 0) {
          _this.is4UOn = true;
          _this.hour = "09";
        } else {
          _this.is4UOn = false;
        }
        if (rotationNum < 360 && rotationNum > 339) {
          _this.is4VOn = true;
          _this.hour = "10";
        } else if (rotationNum == 0) {
          _this.is4VOn = true;
          _this.hour = "10";
        } else {
          _this.is4VOn = false;
        }
        if (rotationNum < 340 && rotationNum > 324) {
          _this.is4WOn = true;
          _this.hour = "11";
        } else {
          _this.is4WOn = false;
        }
        if (rotationNum < 325 && rotationNum > 308) {
          _this.is4XOn = true;
          _this.hour = "12";
        } else {
          _this.is4XOn = false;
        }
      },

      onRelease: function () {
        if (rotationNum < 309 && rotationNum > 293) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -61 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 6px rgb(188, 219, 254)";
        } else if (rotationNum < 294 && rotationNum > 282) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -76.5 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 283 && rotationNum > 263) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -92 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 264 && rotationNum > 249) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -106.5 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 250 && rotationNum > 234) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -121 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 235 && rotationNum > 218) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -137 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 219 && rotationNum > 203) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -151 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 204 && rotationNum > 189) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -167 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 190 && rotationNum > 174) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -182 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 175 && rotationNum > 157) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -198 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 158 && rotationNum > 143) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -213.75 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 144 && rotationNum > 125) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -228.75 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 126 && rotationNum > 111) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -243 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 112 && rotationNum > 97) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -257.5 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 98 && rotationNum > 82) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -272.5 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 83 && rotationNum > 69) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -287.5 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 70 && rotationNum > 55) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -302 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 56 && rotationNum > 40) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -317 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 41 && rotationNum > 26) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -331.5 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 27 && rotationNum > 12) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -346.5 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 13 && rotationNum > 0) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -361.5 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 360 && rotationNum > 339) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -378 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum == 0) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -378 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 340 && rotationNum > 324) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -393 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        } else if (rotationNum < 325 && rotationNum > 308) {
          TweenMax.to(_this.$refs.alarmc4, 0.1, { rotation: -408 });
          _this.$refs.alarmc4.style.boxShadow =
            "0px 0px 16px 5px rgb(188, 219, 254)";
        }
      },
    });

    Draggable.create("#knob2", {
      type: "rotation", //instead of "x,y" or "top,left", we can simply do "rotation" to make the object spinnable!
      throwProps: true, //enables kinetic-based flicking (continuation of movement, decelerating after releasing the mouse/finger)
      onDrag: function () {
        let rotation2 = parseInt(this.rotation % 360, 10);
        rotationNum2 = rotation2 < 0 ? rotation2 + 360 : rotation2;
        _this.$refs.alarmc3.style.transition = "0s";

        if (rotationNum2 < 293 && rotationNum2 > 276) {
          _this.is3AOn = true;
          _this.minute = "00";
        } else {
          _this.is3AOn = false;
        }
        if (rotationNum2 < 277 && rotationNum2 > 250) {
          _this.is3BOn = true;
          _this.minute = "05";
        } else {
          _this.is3BOn = false;
        }
        if (rotationNum2 < 251 && rotationNum2 > 217) {
          _this.is3COn = true;
          _this.minute = "10";
        } else {
          _this.is3COn = false;
        }
        if (rotationNum2 < 218 && rotationNum2 > 187) {
          _this.is3DOn = true;
          _this.minute = "15";
        } else {
          _this.is3DOn = false;
        }
        if (rotationNum2 < 188 && rotationNum2 > 158) {
          _this.is3EOn = true;
          _this.minute = "20";
        } else {
          _this.is3EOn = false;
        }
        if (rotationNum2 < 159 && rotationNum2 > 128) {
          _this.is3FOn = true;
          _this.minute = "25";
          //numba.style.textShadow
        } else {
          _this.is3FOn = false;
        }
        if (rotationNum2 < 129 && rotationNum2 > 97) {
          _this.is3GOn = true;
          _this.minute = "30";
        } else {
          _this.is3GOn = false;
        }
        if (rotationNum2 < 98 && rotationNum2 > 68) {
          _this.is3HOn = true;
          _this.minute = "35";
        } else {
          _this.is3HOn = false;
        }
        if (rotationNum2 < 69 && rotationNum2 > 36) {
          _this.is3IOn = true;
          _this.minute = "40";
        } else {
          _this.is3IOn = false;
        }
        if (rotationNum2 < 37 && rotationNum2 > 6) {
          _this.is3JOn = true;
          _this.minute = "45";
        } else {
          _this.is3JOn = false;
        }
        if (rotationNum2 < 370 && rotationNum2 > 339) {
          _this.is3KOn = true;
          _this.minute = "50";
        } else if (rotationNum2 == 6) {
          _this.is3KOn = true;
          _this.minute = "50";
        } else if (rotationNum2 == 5) {
          _this.is3KOn = true;
          _this.minute = "50";
        } else if (rotationNum2 == 4) {
          _this.is3KOn = true;
          _this.minute = "50";
        } else if (rotationNum2 == 3) {
          _this.is3KOn = true;
          _this.minute = "50";
        } else if (rotationNum2 == 2) {
          _this.is3KOn = true;
          _this.minute = "50";
        } else if (rotationNum2 == 1) {
          _this.is3KOn = true;
          _this.minute = "50";
        } else if (rotationNum2 == 0) {
          _this.is3KOn = true;
          _this.minute = "50";
        } else {
          _this.is3KOn = false;
        }
        if (rotationNum2 < 340 && rotationNum2 > 292) {
          _this.is3LOn = true;
          _this.minute = "55";
        } else {
          _this.is3LOn = false;
        }
      },
      onRelease: function () {
        if (rotationNum2 < 293 && rotationNum2 > 276) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -76.5 });
        } else if (rotationNum2 < 277 && rotationNum2 > 250) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -106.5 });
        } else if (rotationNum2 < 251 && rotationNum2 > 217) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -138 });
        } else if (rotationNum2 < 218 && rotationNum2 > 187) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -167.5 });
        } else if (rotationNum2 < 188 && rotationNum2 > 158) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -197.5 });
        } else if (rotationNum2 < 159 && rotationNum2 > 128) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -227.5 });
        } else if (rotationNum2 < 129 && rotationNum2 > 97) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -257.5 });
        } else if (rotationNum2 < 98 && rotationNum2 > 68) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -287.5 });
        } else if (rotationNum2 < 69 && rotationNum2 > 36) {
          TweenMax.to(_this.$refs.alarmc33, 0.15, { rotation: -317.5 });
        } else if (rotationNum2 < 37 && rotationNum2 > 6) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -349.5 });
        } else if (rotationNum2 < 361 && rotationNum2 > 339) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -18.5 });
        } else if (rotationNum2 == 7) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -18.5 });
        } else if (rotationNum2 == 6) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -18.5 });
        } else if (rotationNum2 == 5) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -18.5 });
        } else if (rotationNum2 == 4) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -18.5 });
        } else if (rotationNum2 == 3) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -18.5 });
        } else if (rotationNum2 == 2) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -18.5 });
        } else if (rotationNum2 == 1) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -18.5 });
        } else if (rotationNum2 == 0) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -18.5 });
        }
        if (rotationNum2 < 340 && rotationNum2 > 292) {
          TweenMax.to(_this.$refs.alarmc3, 0.15, { rotation: -49 });
        }
      },
    });

    Draggable.create("#knob3", {
      type: "rotation", //instead of "x,y" or "top,left", we can simply do "rotation" to make the object spinnable!
      onDrag: function () {
        let rotation3 = parseInt(this.rotation % 360, 10);
        rotationNum3 = rotation3 < 0 ? rotation3 + 360 : rotation3;
        _this.$refs.alarmc2.style.transition = "0s";
        if (rotationNum3 < 307 && rotationNum3 > 268) {
          _this.is2AOn = true;
          _this.amNpm = "am";
        } else {
          _this.is2AOn = false;
        }
        if (rotationNum3 < 269 && rotationNum3 > 231) {
          _this.is2BOn = true;
          _this.amNpm = "pm";
        } else {
          _this.is2BOn = false;
        }
        if (rotationNum3 < 232 && rotationNum3 > 196) {
          _this.is2COn = true;
          _this.amNpm = "am";
        } else {
          _this.is2COn = false;
        }
        if (rotationNum3 < 197 && rotationNum3 > 160) {
          _this.is2DOn = true;
          _this.amNpm = "pm";
        } else {
          _this.is2DOn = false;
        }
        if (rotationNum3 < 161 && rotationNum3 > 125) {
          _this.is2EOn = true;
          _this.amNpm = "am";
        } else {
          _this.is2EOn = false;
        }
        if (rotationNum3 < 126 && rotationNum3 > 88) {
          _this.is2FOn = true;
          _this.amNpm = "pm";
        } else {
          _this.is2FOn = false;
        }
        if (rotationNum3 < 89 && rotationNum3 > 52) {
          _this.is2GOn = true;
          _this.amNpm = "am";
        } else {
          _this.is2GOn = false;
        }
        if (rotationNum3 < 53 && rotationNum3 > 16) {
          _this.is2HOn = true;
          _this.amNpm = "pm";
        } else {
          _this.is2HOn = false;
        }
        if (rotationNum3 < 17 && rotationNum3 > 0) {
          _this.is2IOn = true;
          _this.amNpm = "am";
        } else if (rotationNum3 == 0) {
          _this.is2IOn = true;
          _this.amNpm = "pm";
        } else if (rotationNum3 < 361 && rotationNum3 > 341) {
          _this.is2IOn = true;
          _this.amNpm = "am";
        } else {
          _this.is2IOn = false;
        }
        if (rotationNum3 < 342 && rotationNum3 > 306) {
          _this.is2JOn = true;
          _this.amNpm = "pm";
        } else {
          _this.is2JOn = false;
        }
      },
      onRelease: function () {
        if (rotationNum3 < 307 && rotationNum3 > 268) {
          TweenMax.to(_this.$refs.alarmc2, 0.15, { rotation: -89 });
        } else if (rotationNum3 < 269 && rotationNum3 > 231) {
          TweenMax.to(_this.$refs.alarmc2, 0.15, { rotation: -125 });
        } else if (rotationNum3 < 232 && rotationNum3 > 196) {
          TweenMax.to(_this.$refs.alarmc2, 0.15, { rotation: -163 });
        } else if (rotationNum3 < 197 && rotationNum3 > 160) {
          TweenMax.to(_this.$refs.alarmc2, 0.15, { rotation: -197 });
        } else if (rotationNum3 < 161 && rotationNum3 > 125) {
          TweenMax.to(_this.$refs.alarmc2, 0.15, { rotation: -234 });
        } else if (rotationNum3 < 126 && rotationNum3 > 88) {
          TweenMax.to(_this.$refs.alarmc2, 0.15, { rotation: -269.5 });
        } else if (rotationNum3 < 89 && rotationNum3 > 52) {
          TweenMax.to(_this.$refs.alarmc2, 0.15, { rotation: -306 });
        } else if (rotationNum3 < 53 && rotationNum3 > 16) {
          TweenMax.to(_this.$refs.alarmc2, 0.15, { rotation: -342 });
        } else if (rotationNum3 < 17 && rotationNum3 > 0) {
          TweenMax.to(_this.$refs.alarmc2, 0.15, { rotation: -378 });
        } else if (rotationNum3 == 0) {
          TweenMax.to(_this.$refs.alarmc2, 0.15, { rotation: -378 });
        } else if (rotationNum3 < 361 && rotationNum3 > 341) {
          TweenMax.to(_this.$refs.alarmc2, 0.15, { rotation: -17 });
        } else if (rotationNum3 < 342 && rotationNum3 > 306) {
          TweenMax.to(_this.$refs.alarmc2, 0.15, { rotation: -53 });
        }
      },
    });

    _this.$refs.ok == true;

    window.setInterval(function () {
      _this.$refs.currenttime2.innerText =
        _this.$refs.hours.innerText +
        ":" +
        _this.$refs.minutes.innerText +
        " " +
        _this.$refs.ampmone.innerText;
      const deg = 6;
      const hr = document.querySelector("#hr2");
      const mn = document.querySelector("#mn2");
      let hh = _this.$refs.hours.innerText * 30;
      let mm = _this.$refs.minutes.innerText * deg;
      hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
      mn.style.transform = `rotateZ(${mm}deg)`;
    }, 100);
  },
  methods: {
    getTime() {
      this.isAlarmSwitch = true;
      this.$refs.alarmc2.style.transition = "0.1s";
      this.$refs.alarmc3.style.transition = "0.2s";
      this.$refs.alarmc4.style.transition = "0.3s";
      Draggable.get(".alarmcircle4").disable();
      Draggable.get(".alarmcircle3").disable();
      Draggable.get(".alarmcircle2").disable();
      this.alarmStart = true;
    },
  
    

    getTimeStop() {
      this.isAlarmSwitch = false;
      window.clearTimeout(this.showtime);
      window.clearTimeout(this.snooze);
      window.clearTimeout(this.snoozefunc);
      Draggable.get(".alarmcircle4").enable();
      Draggable.get(".alarmcircle3").enable();
      Draggable.get(".alarmcircle2").enable();
      this.alarmStart = false;
      this.$refs.song.pause();
    },
    alarmOff() {
      this.isAlarmSwitch = false;
      window.clearTimeout(this.showtime);
      window.clearTimeout(this.snooze);
      window.clearTimeout(this.snoozefunc);
      Draggable.get(".alarmcircle4").enable();
      Draggable.get(".alarmcircle3").enable();
      Draggable.get(".alarmcircle2").enable();
      this.$refs.alarmOff.style.top = "350%";
      this.alarmStart = false;
      this.$refs.song.pause();
      this.getTimeStop()
    },
    showTime() {
      let _this = this;
      this.showtime = window.setInterval(function () {
        let currentTime;
        let current = document.querySelector(".currentTime2");
        let currentDate;
        let displayDate = document.querySelector(".displayDate");
        let currentTimeDiv = document.querySelector(".currentTime");
        let alarmOff = document.querySelector(".alarmOff");
        let now = new Date();
        var options = {
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        };
        let nowDate = new Date();
        currentDate = `${nowDate.getFullYear()}/${
          nowDate.getMonth() + 1
        }/${nowDate.getDate()}`;
        displayDate.innerText = currentDate;
        currentTime = now.toLocaleString("en-GB", options);
        currentTimeDiv.textContent = currentTime;
        if (current.innerText === currentTimeDiv.innerText) {
          alarmOff.style.top = "50%";
          _this.$refs.song.play();
        }
        let displayTime = document.querySelector(".displayTime");
        displayTime.innerText = currentTime;
        displayTime.innerText = displayTime.innerText.replace(/m$/, "") + "";
        displayTime.innerText = displayTime.innerText.replace(/p$/, "") + "";
        displayTime.innerText = displayTime.innerText.replace(/a$/, "") + "";
        displayTime.innerText = displayTime.innerText.replace(/ $/, "") + "";
      }, 1000);
    },
  },
};
</script>
<style scoped>
circle {
  fill: none;
  stroke: rgb(198, 225, 255);
  stroke-width: 2;
  stroke-dasharray: 150;
  stroke-dashoffset: 166;
  visibility: hidden;
}
.alarmcirclecontainer {
  position: absolute;
  top: 150%;
  left: 150%;
  transition: 0.2s;
  z-index: +800;
  transform: translate(-50%, -50%);
}
.alarmCircOn {
  top: 100%;
  left: 100%;
}
.svgcontainer {
  left: 40%;
  top: -40px;
  position: absolute;
  transform: rotate(49deg);
}
.alarmcircle1 {
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
.alarm1rotate {
  top: -80px;
  left: -80px;
  transform: rotate(180deg);
}
@keyframes rotatealarm {
  100% {
    transform: rotate(180deg);
  }
  100% {
    top: 90%;
  }
  100% {
    left: 78%;
  }
}
@keyframes rotatealarm2 {
  100% {
    transform: rotate(180deg);
  }
  100% {
    top: 90%;
  }
  100% {
    left: 78%;
  }
}
.alarmcircle2 {
  height: 310px;
  width: 310px;
  background: rgb(102, 172, 252);
  border: 3px solid rgba(94, 169, 255, 0.507);
  border-radius: 50%;
  position: absolute;
  box-shadow: 0px 0px 12px 2px rgb(102, 172, 252);
  transform: translate(-50%, -50%);
  left: 120%;
  top: 120%;
  z-index: 95;
  transition: 0.125s;
}
.alarm2In {
  top: 25px;
  left: 25px;
}
.alarmcircle3 {
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
  transition: 0.25s;
}
.alarm3In {
  top: 40px;
  left: 40px;
}
.alarmcircle4 {
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
  transition: 0.375s;
}
.alarm4In {
  top: 55px;
  left: 55px;
}
.timeleftalarm {
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
.alarmLeftOn {
  left: 21.75%;
  visibility: visible;
  transition: 0.2s;
}
.alarmtime {
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
.alarmTimeOn {
  left: 19.25%;
  visibility: visible;
  transition: 0.25s;
}
.alarmsoundContainer {
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
.alarmSoundOn {
  left: 24%;
  visibility: visible;
  transition: 0.2s;
}
.sounds {
  height: 50px;
  width: 140px;
}
.soundsnep {
  height: 50px;
  width: 140px;
  left: -20;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
}
.currentTime2 {
  position: absolute;
  top: 69%;
  left: 0%;
  font-weight: 300;
  transform: translate(-50%, -50%);
  font-family: "Roboto", sans-serif;
  font-size: 22px;
  color: rgb(55, 153, 252);
  opacity: 1;
  visibility: hidden;
  z-index: +40;
}
.alarmCurOn {
  left: 20.1%;
  visibility: visible;
  transition: 0.3s;
}
.alarmsound2.timeleftnum {
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
.alarmsound2 {
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
.alarmsound2.neptune {
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
.alarmsound2.clone {
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
.alarmsound2.blissful2 {
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
.alarmsound2.morning2 {
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
.numb {
  position: absolute;
  top: 3.5%;
  left: 50%;
  color: rgb(255, 255, 255);
  width: 0px;
  height: 93%;
  font-size: 25px;
  opacity: 0.5;
  font-family: "Open Sans", sans-serif;
  transform: translate(-50%, -50%);
  text-shadow: 0px 0px 0px white;
}
.numb:after {
  content: "";
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translateX(-50%);
  transition: 0.2s ease-in;
  animation-play-state: paused;
}
.numn {
  position: absolute;
  top: 4.5%;
  left: 50%;
  color: rgb(255, 255, 255);
  width: 0px;
  height: 91%;
  font-size: 22px;
  opacity: 0.5;
  font-family: "Open Sans", sans-serif;
  transform: translate(-50%, -50%);
  text-shadow: 0px 0px 0px white;
}
.numn:after {
  content: "";
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translateX(-50%);
  transition: 0.2s ease-in;
  animation-play-state: paused;
}
.ampm {
  position: absolute;
  top: 8%;
  left: 50%;
  color: rgb(255, 255, 255);
  width: 0px;
  height: 84%;
  font-size: 23px;
  opacity: 0.3;
  font-family: "Rubik", sans-serif;
  transform: translate(-50%, -50%);
  visibility: visible;
  text-shadow: 0px 0px 0px white;
  font-weight: 300;
}
.ampm:after {
  content: "";
  position: absolute;
  top: 100%;
  left: 100%;
  transition: 0.2s ease-in;
  animation-play-state: paused;
}
.okdiv {
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
.ok {
  font-family: "Open Sans", sans-serif;
  font-weight: 300;
  color: rgb(255, 255, 255);
  position: absolute;
  top: 66%;
  left: 66%;
  opacity: 1;
  transform: translate(-50%, -50%);
}
.setdiv {
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
.set {
  font-family: "Open Sans", sans-serif;
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
.currentTime {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Rubik", sans-serif;
  font-size: 40px;
  color: rgb(2, 2, 2);
  opacity: 0;
  visibility: visible;
  z-index: +40;
  width: 300px;
  height: 300px;
}
.dismissbtn {
  position: absolute;
  top: 90%;
  left: 50%;
  background: rgb(235, 245, 255);
  box-shadow: 0px 2px 5px 3px rgb(221, 233, 245);
  width: 55px;
  height: 55px;
  border-radius: 50%;
  transform: translate(-50%, -50%);
}
.displayTime {
  position: absolute;
  top: 54%;
  left: 50%;
  font-weight: 400;
  transform: translate(-50%, -50%);
  font-family: "Montserrat", sans-serif;
  font-size: 60px;
  color: rgb(78, 78, 78);
  visibility: visible;
  z-index: +40;
  text-shadow: 0px 0px 5px 10px white;
}
.displayDate {
  position: absolute;
  top: 60.5%;
  left: 50%;
  font-weight: 300;
  transform: translate(-50%, -50%);
  font-family: "Montserrat", sans-serif;
  font-weight: 300;
  font-size: 20px;
  color: rgb(161, 161, 161);
  opacity: 0.8;
  visibility: visible;
  z-index: +40;
  text-shadow: 0px 0px 5px 10px white;
}
.hours {
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
.minutes {
  font-size: 40px;
  color: black;
  position: absolute;
  left: 220%;
  top: 50%;
  opacity: 1;
  background: black;
}
.ampmone {
  position: absolute;
  left: 220%;
  top: 50%;
  font-size: 40px;
  opacity: 1;
  background: black;
}
.alarmOff {
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
.alarmX {
  position: absolute;
  top: 56%;
  left: 50%;
  color: rgba(31, 141, 252, 0.945);
  font-size: 25px;
  font-family: "Montserrat", sans-serif;
  transform: translate(-50%, -50%);
}
.alarmOffbg {
  background: rgb(241, 248, 255);
  position: absolute;
  top: 72%;
  left: 49%;
  z-index: -3;
  height: 68%;
  width: 110%;
  border-top-left-radius: -50%;
  border-top-right-radius: -50%;
  transform: translate(-50%, -50%);
}
.miniclock {
  top: 38.3%;
  position: absolute;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 130px;
  height: 130px;
  background: rgb(237, 245, 253);
  box-shadow: 1px 1px 20px 5px rgb(188, 219, 252),
    0px 0px 30px 5px rgb(253, 253, 253);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

  z-index: +20;
}
.miniclockmincirc {
  content: "";
  width: 8px;
  height: 8px;
  background-color: rgb(205, 223, 242);
  position: absolute;
  left: 50%;
  top: 50%;
  border-radius: 50px;
  z-index: 20;
  transform: translate(-50%, -50%);
}
.miniclockcirc {
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
.min1 {
  position: absolute;
}
.hour1,
.hr1 {
  width: 160px;
  height: 95px;
}
.min1,
.mn1 {
  width: 190px;
  height: 198px;
}
.hr1,
.mn1 {
  display: flex;
  justify-content: center;
  position: absolute;
  border-radius: 50%;
}
.hr1::before {
  content: "";
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
.mn1::before {
  content: "";
  position: absolute;
  width: 2px;
  height: 0px;
  top: 17%;
  z-index: 10;
  border-left: 1px solid transparent;
  border-right: 1px solid transparent;

  border-bottom: 75px solid rgb(205, 223, 242);
}

.alarmbell1 {
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

.alarmbell2 {
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

.alarmOffcirc1 {
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
@keyframes alarmOff1 {
  0% {
    width: 0px;
    height: 0px;
  }
  50% {
    width: 200px;
    height: 200px;
  }
  100% {
    width: 0px;
    height: 0px;
  }
}
.alarmOffcirc2 {
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
@keyframes alarmOff2 {
  0% {
    width: 0px;
    height: 0px;
  }
  50% {
    width: 240px;
    height: 240px;
  }
  100% {
    width: 0px;
    height: 0px;
  }
}
.alarmOffcirc3 {
  background: rgb(137, 190, 252);
  border: 3px solid rgba(134, 188, 250, 0.507);
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
@keyframes alarmOff3 {
  0% {
    width: 0px;
    height: 0px;
  }
  50% {
    width: 330px;
    height: 330px;
  }
  100% {
    width: 0px;
    height: 0px;
  }
}
.alarmOffcirc4 {
  background: rgb(114, 178, 252);
  border: 3px solid rgba(115, 180, 255, 0.507);
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
@keyframes alarmOff4 {
  0% {
    width: 0px;
    height: 0px;
  }
  50% {
    width: 430px;
    height: 430px;
  }
  100% {
    width: 0px;
    height: 0px;
  }
}
.alarmOffcirc5 {
  background: rgb(79, 160, 252);
  border: 3px solid rgba(94, 169, 255, 0.507);
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
@keyframes alarmOff5 {
  0% {
    width: 0px;
    height: 0px;
  }
  50% {
    width: 550px;
    height: 550px;
  }
  100% {
    width: 0px;
    height: 0px;
  }
}
.snoozebtn {
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
.snooze {
  position: absolute;
  top: 51%;
  left: 50%;
  color: rgba(31, 141, 252, 0.945);
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  transform: translate(-50%, -50%);
}
.snoozebtn2 {
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
.snooze2 {
  position: absolute;
  top: 51%;
  left: 50%;
  color: rgba(31, 141, 252, 0.945);
  font-size: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  transform: translate(-50%, -50%);
}
.alarmtimeonn {
  left: 50%;
}
.ampm.a {
  transform: rotate(36deg);
}
.ampm.b {
  transform: rotate(72deg);
}
.ampm.c {
  transform: rotate(108deg);
}
.ampm.d {
  transform: rotate(144deg);
}
.ampm.e {
  transform: rotate(180deg);
}
.ampm.f {
  transform: rotate(216deg);
}
.ampm.g {
  transform: rotate(252deg);
}
.ampm.h {
  transform: rotate(288deg);
}
.ampm.i {
  transform: rotate(324deg);
}
.ampm.j {
  transform: rotate(360deg);
}
.numn.a {
  transform: rotate(30deg);
}
.numn.b {
  transform: rotate(60deg);
}
.numn.c {
  transform: rotate(90deg);
}
.numn.d {
  transform: rotate(120deg);
}
.numn.e {
  transform: rotate(150deg);
}
.numn.f {
  transform: rotate(180deg);
}
.numn.g {
  transform: rotate(210deg);
}
.numn.h {
  transform: rotate(240deg);
}
.numn.i {
  transform: rotate(270deg);
}
.numn.j {
  transform: rotate(300deg);
}
.numn.k {
  transform: rotate(330deg);
}
.numn.l {
  transform: rotate(360deg);
}
.numb.a {
  transform: rotate(15deg);
}
.numb.b {
  transform: rotate(30deg);
}
.numb.c {
  transform: rotate(45deg);
}
.numb.d {
  transform: rotate(60deg);
}
.numb.e {
  transform: rotate(75deg);
}
.numb.f {
  transform: rotate(90deg);
}
.numb.g {
  transform: rotate(105deg);
}
.numb.h {
  transform: rotate(120deg);
}
.numb.i {
  transform: rotate(135deg);
}
.numb.j {
  transform: rotate(150deg);
}
.numb.k {
  transform: rotate(165deg);
}
.numb.l {
  transform: rotate(180deg);
}
.numb.m {
  transform: rotate(195deg);
}
.numb.n {
  transform: rotate(210deg);
}
.numb.o {
  transform: rotate(225deg);
}
.numb.p {
  transform: rotate(240deg);
}
.numb.q {
  transform: rotate(255deg);
}
.numb.r {
  transform: rotate(270deg);
}
.numb.s {
  transform: rotate(285deg);
}
.numb.t {
  transform: rotate(300deg);
}
.numb.u {
  transform: rotate(315deg);
}
.numb.v {
  transform: rotate(330deg);
}
.numb.w {
  transform: rotate(345deg);
}
.numb.x {
  transform: rotate(360deg);
}
.numnAon {
  font-size: 40px;
  top: 1%;
  opacity: 1;
  font-weight: 300;
  left: 50%;
}
.numnBon {
  font-size: 40px;
  top: 1.5%;
  opacity: 1;
  font-weight: 300;
  left: 52%;
}
.numnCon {
  font-size: 40px;
  top: 2%;
  opacity: 1;
  font-weight: 300;
  left: 52%;
}
.numnDon {
  font-size: 40px;
  top: 3%;
  opacity: 1;
  font-weight: 300;
  left: 54%;
}
.numnEon {
  font-size: 40px;
  top: 5%;
  opacity: 1;
  font-weight: 300;
  left: 54%;
}
.numnFon {
  font-size: 40px;
  top: 7%;
  opacity: 1;
  font-weight: 300;
  left: 53%;
}
.numnGon {
  font-size: 40px;
  top: 8%;
  opacity: 1;
  font-weight: 300;
  left: 51%;
}
.numnHon {
  font-size: 40px;
  top: 9%;
  opacity: 1;
  font-weight: 300;
  left: 49%;
}
.numnIon {
  font-size: 40px;
  top: 8%;
  opacity: 1;
  font-weight: 300;
  left: 47.5%;
}
.numnJon {
  font-size: 40px;
  top: 5%;
  opacity: 1;
  font-weight: 300;
  left: 47%;
}
.numnKon {
  font-size: 40px;
  top: 4%;
  opacity: 1;
  font-weight: 300;
  left: 46%;
}
.numnLon {
  font-size: 40px;
  top: 2%;
  opacity: 1;
  font-weight: 300;
  left: 48%;
}

.numbAon {
  font-size: 44px;
  top: 1.2%;
  opacity: 1;
  font-weight: 300;
  left: 49%;
}

.numbBon {
  font-size: 44px;
  top: 1.2%;
  opacity: 1;
  font-weight: 300;
  left: 50%;
}

.numbCon {
  font-size: 44px;
  top: 1.4%;
  opacity: 1;
  font-weight: 300;
  left: 51%;
}

.numbDon {
  font-size: 44px;
  top: 1.5%;
  opacity: 1;
  font-weight: 300;
  left: 51%;
}

.numbEon {
  font-size: 44px;
  top: 1.5%;
  opacity: 1;
  font-weight: 300;
  left: 51.5%;
}

.numbFon {
  font-size: 44px;
  top: 2.4%;
  opacity: 1;
  font-weight: 300;
  left: 52%;
}
.numbGon {
  font-size: 44px;
  top: 3%;
  opacity: 1;
  font-weight: 300;
  left: 52.2%;
}
.numbHon {
  font-size: 44px;
  top: 3.5%;
  opacity: 1;
  font-weight: 300;
  left: 52.5%;
}
.numbIon {
  font-size: 44px;
  top: 4.4%;
  opacity: 1;
  font-weight: 300;
  left: 52.1%;
}
.numbJon {
  font-size: 44px;
  top: 4%;
  opacity: 1;
  font-weight: 300;
  left: 53.5%;
}
.numbKon {
  font-size: 44px;
  top: 5%;
  opacity: 1;
  font-weight: 300;
  left: 52.5%;
}

.numbLon {
  font-size: 44px;
  top: 6%;
  opacity: 1;
  font-weight: 300;
  left: 52.5%;
}

.numbMon {
  font-size: 44px;
  top: 5.7%;
  opacity: 1;
  font-weight: 300;
  left: 50%;
}

.numbNon {
  font-size: 44px;
  top: 6%;
  opacity: 1;
  font-weight: 300;
  left: 50%;
}
.numbOon {
  font-size: 44px;
  top: 5.5%;
  opacity: 1;
  font-weight: 300;
  left: 49%;
}
.numbPon {
  font-size: 44px;
  top: 5.2%;
  opacity: 1;
  font-weight: 300;
  left: 48.5%;
}
.numbQon {
  font-size: 44px;
  top: 5.2%;
  opacity: 1;
  font-weight: 300;
  left: 48.5%;
}
.numbRon {
  font-size: 44px;
  top: 5%;
  opacity: 1;
  font-weight: 300;
  left: 48%;
}
.numbSon {
  font-size: 44px;
  top: 4%;
  opacity: 1;
  font-weight: 300;
  left: 48%;
}
.numbTon {
  font-size: 44px;
  top: 4%;
  opacity: 1;
  font-weight: 300;
  left: 47.5%;
}
.numbUon {
  font-size: 44px;
  top: 3%;
  opacity: 1;
  font-weight: 300;
  left: 47.8%;
}
.numbVon {
  font-size: 44px;
  top: 3%;
  opacity: 1;
  font-weight: 300;
  left: 46%;
}
.numbWon {
  font-size: 44px;
  top: 2%;
  opacity: 1;
  font-weight: 300;
  left: 47%;
}
.numbXon {
  font-size: 44px;
  top: 1%;
  opacity: 1;
  font-weight: 300;
  left: 47%;
}
.ampmAon {
  font-size: 25px;
  top: 8%;
  opacity: 1;
  font-weight: 300;
  left: 50%;
}
.ampmBon {
  font-size: 25px;
  top: 8%;
  opacity: 1;
  font-weight: 300;
  left: 50%;
}
.setOn {
  opacity: 1;
  transition: 0.35s;
}
.okOn {
  transition: 0.35s;
}
</style>