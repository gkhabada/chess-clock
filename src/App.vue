<template lang="pug">
  #app
    // HelloWorld(msg="Welcome to Your Vue.js App")
    chess-clock
    // socket-io
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import SocketIo from './components/SocketIo.vue'
import ChessClock from './view/ChessClock.vue';


export default {
  name: 'App',
  components: {
    HelloWorld,
    ChessClock,
    SocketIo
  },
}
</script>

<style>

</style>
