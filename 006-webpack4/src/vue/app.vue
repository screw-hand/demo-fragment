<template>
  <h1 @click="handelClick">{{title}}</h1>
</template>

<script lang="ts">
import Vue from 'vue';
export default Vue.extend({
  name: 'App',
  data () {
    return {
      title: 'Welcome to your Vue.js App'
    }
  },
  methods: {
    async handelClick() {
      const data = await this.sum(1,2)
      console.log(data)
    },
    sum(a: number, b: number) {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve(a + b)
        });
      })
    }
  },
  mounted() {
    console.log('_hot app.vue')
  }
})
</script>

<style lang="less">
h1 {
  color: pink;
}
</style>