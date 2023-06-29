// Perform form validation using Vue.js

new Vue({
  el: '#app',
  data: {
    form: {
      name: '',
      email: '',
    },
    errors: {},
  },
  methods: {
    validateForm() {
      this.errors = {};

      if (!this.form.name) {
        this.errors.name = 'Name is required';
      }

      if (!this.form.email) {
        this.errors.email = 'Email is required';
      }
    },
  },
});
