Vue.config.debug = true;
Vue.config.silent = false;
Vue.config.devtools = true;

import Validator from './Validator.vue';
import idRules from './rules/id';

export default new Vue({
  el: '#root',
  components: {
    'validator': Validator
  },
  data: {
    message: '',
    errors: [],
    validationRules: idRules
  },
  methods: {
    handleErrors(data) {
      this.errors = data.errors;
    }
  }
});
