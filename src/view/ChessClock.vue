<template lang="pug">
  .clock

    button.start-btn(@click="startTimer()"   :disabled="!stop") Start
    button(@click="toggleTimer()"  :disabled="stop || (currentIndex ? player[currentIndex - 1][0] : 0) !== $socket.client.id") Switch
    button(@click="stopTimer()"    :disabled="stop" ) Stop
    button(@click="resetTimer()"    :disabled="!stop" ) Reset
    p Пользователей: {{ player.length }}

    the-timer(
      v-for="(timer, idx) in player"
      :key="timer[0]"
      :run="currentIndex === idx + 1 && !stop"
      :current="$socket.client.id === timer[0]"
      ref="timer"
    )


</template>

<script>
import TheTimer from '../components/TheTimer.vue'

export default {
  name: 'ChessClock',
  components: { TheTimer },
  data() {
    return {
      player: 1,
      currentIndex: null,
      stop: true,
    };
  },
  sockets: {
    login(users) {
      console.log('socket login', users);
      this.player = Object.entries(users);
    },
    start() {
      console.log('socket start');
      this.stop = false;
      this.currentIndex = 1;
    },
    toggle() {
      console.log('socket toggle');
      if (this.player.length === this.currentIndex) {
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
    reset() {
      this.$refs.timer.forEach(item => {
        item.timestamp = 0;
        item.time = '00:00::00';
      });
    },
  },
  created() {
    this.$socket.client.emit('loginUser');
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
    resetTimer() {
      this.$socket.client.emit('resetClock');
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

    &:disabled
      cursor: not-allowed
      color: #666666
      background-color: rgba(#000000, .1)



</style>
