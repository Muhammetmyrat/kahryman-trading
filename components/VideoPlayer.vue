<template>
  <div class="video" :class="{ show: isShow }">
    <div class="video__container">
      <span class="video__close" @click="close"></span>
      <div id="player"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShow: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    close() {
      // this.$refs.plyr.player.pause()
      this.$emit('closeModal')
    },
  },
}
</script>
