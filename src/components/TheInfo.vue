<template lang="pug">
  .info
    .info__icon(@click="show = !show")
      img.animate__flip(:src="require('@/assets/info.svg')")

    .info__content(
      v-show="show"
      @click="show = false"
    )
      p
        b Start
        span - Запустить таймер (доступно только когда остановлен)
      p
        b Switch
        span - переключить таймер на след. участника (доступно только тем, у кого идет время)
      p
        b Stop
        span - Остановить таймер
      p
        b Reset
        span - Сбросить таймер (доступно только когда остановлен)
      p
        span.info__content_self
        span - Ваш таймер
      p
        span.info__content_another
        span - Таймер других пользователей
      p
        span.info__content_current
        span - Пользователь, у которого таймер активен


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
    right: 20px
    top: 20px
    color: #2c3e50
    display: flex
    flex-direction: column
    align-items: flex-end

    &__icon
      cursor: pointer
      width: 50px
      height: 50px

      img
        width: 100%
        height: 100%

    &__content
      background-color: rgba(#ecf0f1, .5)
      border-radius: 2px
      box-shadow: 0 2px 10px 0 rgba(#999, .3)
      max-width: 400px
      width: 100%
      padding: 10px
      margin-top: 20px

      &_self,
      &_another,
      &_current
        display: inline-block
        width: 10px
        height: 10px
        border-radius: 50%
        margin-right: 5px

      &_self
        background-color: #27ae60

      &_another
        background-color: #f39c12

      &_current
        background-color: #3498db


    @keyframes flip
      from
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)
        animation-timing-function: ease-out
      20%
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 50px) rotate3d(0, 1, 0, -190deg)
        animation-timing-function: ease-out
      25%
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 50px) rotate3d(0, 1, 0, -170deg)
        animation-timing-function: ease-in
      40%
        transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)
        animation-timing-function: ease-in
      50%
        transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)
        animation-timing-function: ease-in

  .animate__flip
    backface-visibility: visible
    animation-name: flip
    animation-duration: 6s
    animation-fill-mode: both
    animation-iteration-count: infinite



</style>
