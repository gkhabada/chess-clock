<template lang="pug">
  #app
    // HelloWorld(msg="Welcome to Your Vue.js App")
    chess-clock
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import ChessClock from './view/ChessClock.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    ChessClock
  },
}
</script>

<style>

</style>
