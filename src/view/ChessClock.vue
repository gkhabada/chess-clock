<template lang="pug">
  .clock
    button(@click="startTimer()"   :disabled="!stop") Start
    button(@click="toggleTimer()"  :disabled="stop" ) Switch
    button(@click="stopTimer()"    :disabled="stop" ) Stop
    input(
      type="number"
      v-model="player"
      :disabled="!stop"
      max="10"
    )

    the-timer(
      v-for="timer in Number(player)"
      :key="timer"
      :run="currentIndex === timer && !stop"
    )
</template>

<script>
import TheTimer from '../components/TheTimer.vue'

export default {
  name: 'ChessClock',
  components: { TheTimer },
  sockets: {
    start() {
      console.log('socket start');
      this.stop = false;
      this.currentIndex = 1;
    },
    toggle() {
      console.log('socket toggle');
      if (Number(this.player) === this.currentIndex) {
        this.currentIndex = 1;
      } else {
        this.currentIndex += 1;
      }
    },
    stop() {
      console.log('socket stop');
      this.stop = true;
      this.currentIndex = null;
    },
  },
  data() {
    return {
      player: 2,
      currentIndex: null,
      stop: true,
    };
  },
  methods: {
    startTimer() {
      this.$socket.client.emit('startClock');
    },
    toggleTimer() {
      this.$socket.client.emit('toggleClock');
    },
    stopTimer() {
      this.$socket.client.emit('stopClock');
    },
  },
}
</script>

<style lang="sass" scoped>

  input
    padding: 8px
    font-size: 14px
    border: 1px solid #424242

  button
    padding: 8px 20px
    font-size: 14px
    border: 1px solid #424242
    background-color: transparent
    cursor: pointer

    &:not(:last-of-type)
      border-right: 0

    &:hover
      background-color: rgba(red, .05)


</style>
