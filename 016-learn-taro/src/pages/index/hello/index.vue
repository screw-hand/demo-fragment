<template>
  <view> {{ msg }} </view>
</template>

<script lang="js">
  export default {
    data() {
      return {
        msg: 'Hello World!',
      }
    },
    onReady() {
      console.log('onReady')
    },
  }
</script>