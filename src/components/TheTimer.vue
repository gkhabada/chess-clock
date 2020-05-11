<template lang="pug">
  .timer
    .user(:class="current ? 'i' : 'another'")
    span {{ time }}
    .active(v-show="run")
</template>

<script>
import checkLessThan from '../utils/checkLessThan'

export default {
  name: 'TheTimer',
  props: {
    run: {
      type: Boolean,
      default: false,
      required: false,
    },
    current: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      time: '00:00::00',
      timestamp: 0,
      timer: null,
    };
  },
  watch: {
    run(val) {
      val ? this.startTimer() : this.stopTimer();
    },
  },
  methods: {
    startTimer() {
      let hours, minutes, seconds, milliseconds;

      //TODO setInterval при неактивной вкладке

      this.timer = setInterval(() => {

        this.timestamp += 1;
        milliseconds = this.timestamp < 100 ? this.timestamp : this.timestamp % 100;
        seconds = Math.floor((this.timestamp / 100) % 60);
        minutes = Math.floor((this.timestamp / 100 / 60) % 60);
        hours = Math.floor((this.timestamp / 100 / 60 / 60) % 60);

        let time = `${checkLessThan(minutes)}:${checkLessThan(seconds)}::${checkLessThan(milliseconds, 10)}`;

        if (checkLessThan(hours) > 0) {
          time = `${checkLessThan(hours)}:${time}`;
        }

        this.time = time;

      }, 10);
    },
    stopTimer() {
      clearInterval(this.timer);
    },
  },
}
</script>

<style lang="sass" scoped>
  @import url('https://fonts.googleapis.com/css2?family=Orbitron&display=swap')
  @import url('https://fonts.googleapis.com/css2?family=Unica+One&display=swap')

  .timer
    font-family: 'Orbitron', sans-serif
    font-family: 'Unica One', cursive
    font-size: 32px
    display: flex
    align-items: center

    .active
      width: 10px
      height: 10px
      border-radius: 50%
      background-color: blue
      margin-left: 10px

    .user
      width: 10px
      height: 10px
      border-radius: 50%
      margin-right: 10px

    .i
      background-color: orange

    .another
      background-color: rgba(green, 0.3)
</style>
