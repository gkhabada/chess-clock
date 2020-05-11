<template lang="pug">
  #app
    chess-clock
    // socket-io
</template>

<script>
import SocketIo from './components/SocketIo.vue'
import ChessClock from './view/ChessClock.vue';


export default {
  name: 'App',
  components: {
    ChessClock,
    SocketIo
  },
}
</script>

<style>

</style>
