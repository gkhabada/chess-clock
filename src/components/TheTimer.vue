<template lang="pug">
  .timer {{ time }}
</template>

<script>
function checkLessThan(val, sym = 10) {
  val = Number(val);
  val = isNaN(val) ? 0 : val;
  sym.toString().split('').forEach((item, index) => {
    if(val.toString().length <= index) {
      val = `0${val}`;
    }
  });
  return val;
}

export default {
  name: 'TheTimer',
  props: {
    run: {
      type: Boolean,
      default: false,
      required: false,
    },
  },
  data() {
    return {
      time: '00:00::000',
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

      //TODO setInterval если выбрана другая влкадка

      this.timer = setInterval(() => {
        this.timestamp += 1;

        milliseconds = this.timestamp < 1000 ? this.timestamp : this.timestamp % 1000;
        seconds = Math.floor((this.timestamp / 1000) % 60);
        minutes = Math.floor((this.timestamp / 1000 / 60) % 60);
        hours = Math.floor((this.timestamp / 1000 / 60 / 60) % 60);

        let time = `${checkLessThan(minutes)}:${checkLessThan(seconds)}::${checkLessThan(milliseconds, 100)}`;

        if (checkLessThan(hours) > 0) {
          time = `${checkLessThan(hours)}:${time}`;
        }

        this.time = time;

      }, 1);
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
</style>
