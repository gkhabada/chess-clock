<template lang="pug">
  .clock
    button(@click="startTimer()") Start
    button(@click="switchTimer()") Switch
    button(@click="stopTimer()") Stop
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
    | {{currentIndex}}
</template>

<script>
import TheTimer from '../components/TheTimer.vue'

export default {
  name: 'ChessClock',
  components: { TheTimer },
  data() {
    return {
      player: 2,
      currentIndex: null,
      stop: true,
    };
  },
  methods: {
    startTimer() {
      this.stop = false;
      this.currentIndex = 1;
    },
    switchTimer() {
      if (Number(this.player) === this.currentIndex) {
        this.currentIndex = 1;
      } else {
        this.currentIndex += 1;
      }
    },
    stopTimer() {
      this.stop = true;
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
