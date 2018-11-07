import Vue from 'vue'
import App from './App.vue'

export const eventBus = new Vue({
  methods: { 
    changeAge: function(age) {
      this.$emit("ageChanged", age);
    }
  }
});

new Vue({
  el: '#app',
  render: h => h(App)
});


