<template>
  <div class="video" :class="{ show: isShowVideo }">
    <div class="video__container">
      <span class="video__close" @click="close"></span>
      <div id="player" class="video__plyr">
        <vue-plyr ref="plyr">
          <video :src="`${imgURL}/${video}`" type="video/mp4"></video>
        </vue-plyr>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShowVideo: {
      type: Boolean,
      default: false,
    },
    imgURL: {
      type: String,
      default: '',
    },
    video: {
      type: String,
      default: '',
    },
  },
  methods: {
    close() {
      this.$refs.plyr.player.pause()
      this.$emit('closeModal')
    },
  },
}
</script>

<style scoped>
.video__plyr {
  --plyr-color-main: #252c54;
  height: 600px;
}
.video__plyr .plyr {
  width: 100%;
}
</style>
