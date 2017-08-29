<template inline-template>
  <div class="col-md-6 validator-wrapper">
    <div class="form-group">
      <select v-model="ruleType" class="form-control">
        <option value="">--Select rule--</option>
        <option value="minLength" v-if="!inRulesArray('minLength')">Minimum amount of characters</option>
        <option value="maxLength" v-if="!inRulesArray('maxLength')">Maximum amount of characters</option>
        <option value="nthIsANumber">The n-th character is always a number</option>
        <option value="nthIsALetter">The n-th character is always a letter</option>
        <option value="nthIs">N-th symbol is ...</option>
      </select>
    </div>
    <div class="form-group">
      <button class="btn btn-primary" @click="addRule" :disabled="ruleType == ''">Add rule</button>
    </div>

    <!--Rules inputs-->
    <template v-if="ruleType == 'minLength'">
      <div class="form-group">
        <label>Minimum amount of characters</label>
        <input type="number" class="form-control" v-model="data.minLength">
      </div>
    </template>
    <template v-if="ruleType == 'maxLength'">
      <div class="form-group">
        <label>Maximum amount of characters</label>
        <input type="number" class="form-control" v-model="data.maxLength">
      </div>
    </template>
    <template v-if="ruleType == 'nthIsANumber'">
      <div class="form-group">
        <label>Symbol position</label>
        <input type="number" class="form-control" v-model="data.position">
      </div>
    </template>
    <template v-if="ruleType == 'nthIsALetter'">
      <div class="form-group">
        <label>Symbol position</label>
        <input type="number" class="form-control" v-model="data.position">
      </div>
    </template>
    <template v-else-if="ruleType == 'nthIs'">
      <div class="form-group">
        <label>Symbol position</label>
        <input type="number" class="form-control" v-model="data.position">
      </div>
      <div class="form-group">
        <label>Symbol</label>
        <input type="text" class="form-control" v-model="data.symbol">
      </div>
    </template>

    <!--Rules list-->
    <div class="col-md-8" v-if="rules.length > 0">
      <p>Rules:</p>
      <ul v-for="(rule, index) in rules">
        <li>
          <template v-if="rule.type == 'minLength'">
            Minimum amount of characters is {{ rule.data.minLength }}
          </template>
          <template v-else-if="rule.type == 'maxLength'">
            Maximum amount of characters is {{ rule.data.maxLength }}
          </template>
          <template v-else-if="rule.type == 'nthIsANumber'">
            The {{ rule.data.position }} character is always a number
          </template>
          <template v-else-if="rule.type == 'nthIsALetter'">
            The {{ rule.data.position }} character is always a letter
          </template>
          <template v-else-if="rule.type == 'nthIs'">
            The {{ rule.data.position }} character is always the letter '{{ rule.data.symbol }}'
          </template>
          <button @click="removeRule(index)">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import rules from './mixins/rules';

  export default {
    props: ['text'],
    mixins: [rules],
    data() {
      return {
        ruleType: '',
        rules: [],
        data: {}
      }
    },
    watch: {
      text() {
        this.validate();
      }
    },
    methods: {
      addRule() {
        this.rules.push({
          type: this.ruleType,
          data: this.data,
          errors: []
        });

        this.data = {};
        this.ruleType = '';
        this.validate();
      },
      removeRule(index) {
        this.rules.splice(index, 1);
        this.validate();
      },
      validate() {
        this.errors = [];

        for (let i = 0; i < this.rules.length; i++) {
          let rule = this.rules[i];

          let error = this[rule.type](rule.data);
          if (error) {
            this.errors.push(error);
          }
        }

        this.$emit('throw-errors', {errors: this.errors});
      },
      inRulesArray(ruleName) {
        return this.rules.findIndex(rule => rule.type === ruleName) != -1;
      },
    },
  };
</script>

<style>
  .validator-wrapper {
    border: 1px solid #b3b2b2;
    padding: 20px 20px;
  }
</style>