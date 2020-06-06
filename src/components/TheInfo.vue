<template lang="pug">
  .info
    .info__icon(@click="show = !show")
      img(:src="require(@/assets/info.svg)")

</template>

<script>
export default {
  name: 'TheInfo',
  data() {
    return {
      show: false,
    };
  },
};
</script>

<style scoped lang="sass">

  .info
    position: fixed
    right: 10px
    top: 10px

    &__icon
      cursor: pointer

</style>
