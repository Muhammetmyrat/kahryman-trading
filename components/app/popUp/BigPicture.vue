<template>
  <div class="picture" :class="{ visible: isShowImage }">
    <div class="picture__container">
      <span class="picture__close" @click="$emit('closeModal')"></span>
      <div class="picture__img">
        <img :src="`${imgURL}/${image}-700.jpg`" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    isShowImage: {
      type: Boolean,
      default: false,
    },
    imgURL: {
      type: String,
      default: '',
    },
    image: {
      type: String,
      default: '',
    },
  },
}
</script>
