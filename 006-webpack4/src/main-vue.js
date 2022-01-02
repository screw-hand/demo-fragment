import Vue from 'vue'
import App from './app.vue'


const container = document.createElement('div');
container.id = 'vue-root';
document.body.prepend(container);


new Vue({
  el: '#vue-root',
  render: h => h(App),
});

