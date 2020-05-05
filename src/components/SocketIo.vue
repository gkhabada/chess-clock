<template lang="pug">
  .socket
    p {{ $socket.connected ? 'Connected' : 'Disconnected' }}
    button(@click="connect") Connect
    button(@click="disconnect") Disconnected
</template>

<script>
export default {
  sockets: {
    connect() {
      console.log('socket connected');
    },
    disconnect() {
      console.log('socket disconnect')
    },
  },
  data() {
    return {
      isConnected: false,
      socketMessage: '',
    };
  },
  methods: {
    connect() {
      this.$socket.client.open();
    },
    disconnect() {
      this.$socket.client.disconnect();
    },
  }
}
</script>

<style lang="sass" scoped>
</style>
