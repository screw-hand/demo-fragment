<template>
  <view class="content">
    <image class="logo" src="/static/logo.png" />
    <view class="text-area">
      <text class="title">{{ title }}</text>
    </view>

    <uni-data-picker
      v-model="selectedValue1"
      :disabled="true"
      :localdata="[
        { text: '选项1', value: '1' },
        { text: '选项2', value: '2' },
        { text: '选项3', value: '3' },
      ]"
    />

    <!-- 可正常使用disable -->
    <uni-data-select
      v-model="selectedValue1"
      :disabled="true"
      :localdata="[
        { text: '选项1', value: '1' },
        { text: '选项2', value: '2' },
        { text: '选项3', value: '3' },
      ]"
    />

    <uni-combox
      v-model="selectedValue2"
      :disabled="true"
      :candidates="['选项1', '选项2', '选项3']"
    />
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const title = ref('Hello')

const selectedValue1 = ref()
const selectedValue2 = ref()

onMounted(() => {
  selectedValue1.value = '2'
  selectedValue2.value = '选项2'
})
</script>

<style>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  height: 200rpx;
  width: 200rpx;
  margin-top: 200rpx;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 50rpx;
}

.text-area {
  display: flex;
  justify-content: center;
}

.title {
  font-size: 36rpx;
  color: #8f8f94;
}
</style>
