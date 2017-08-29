<template inline-template>
  <div class="col-md-6 validator-wrapper">
    <form action="" @submit.prevent="addRule">
      <div class="form-group">
        <select v-model="ruleType" class="form-control" @change="clearData">
          <option value="">--Select rule--</option>
          <option value="minLength" v-if="!inRulesArray('minLength')">Minimum amount of characters</option>
          <option value="maxLength" v-if="!inRulesArray('maxLength')">Maximum amount of characters</option>
          <option value="nthIsANumber">The n-th character is always a number</option>
          <option value="nthIsALetter">The n-th character is always a letter</option>
          <option value="nthIs">N-th symbol is ...</option>
        </select>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" :disabled="ruleType == ''">Add rule</button>
      </div>

      <!--Rules inputs-->
      <template v-if="ruleType == 'minLength'">
        <div class="form-group">
          <label>Minimum amount of characters</label>
          <input type="number" class="form-control" v-model="data.minLength" required>
        </div>
      </template>
      <template v-if="ruleType == 'maxLength'">
        <div class="form-group">
          <label>Maximum amount of characters</label>
          <input type="number" class="form-control" v-model="data.maxLength" required>
        </div>
      </template>
      <template v-if="ruleType == 'nthIsANumber'">
        <div class="form-group">
          <label>Symbol position</label>
          <input type="number" class="form-control" v-model="data.position" required>
        </div>
      </template>
      <template v-if="ruleType == 'nthIsALetter'">
        <div class="form-group">
          <label>Symbol position</label>
          <input type="number" class="form-control" v-model="data.position" required>
        </div>
      </template>
      <template v-else-if="ruleType == 'nthIs'">
        <div class="form-group">
          <label>Symbol position</label>
          <input type="number" class="form-control" v-model="data.position" required>
        </div>
        <div class="form-group">
          <label>Symbol</label>
          <input type="text" class="form-control" v-model="data.symbol" required>
        </div>
      </template>
    </form>

    <!--Rules list-->
    <div class="col-md-8" v-if="activeRules.length > 0">
      <p>Rules:</p>
      <ul v-for="(ruleItem, index) in activeRules">
        <li>
          <template>
            <span>{{ ruleItem.rule.getRuleText() }}</span>
          </template>
          <button @click="removeRule(index)" class="btn btn-warning" title="Remove rule">X</button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import rules from './rules/index';

  export default {
    props: ['text'],
    mixins: [rules],
    data() {
      return {
        ruleType: '',
        rules: rules,
        activeRules: [],
        data: {}
      }
    },
    watch: {
      text() {
        this.validate();
      }
    },
    methods: {
      clearData() {
        this.data = {};
      },
      addRule() {
        this.activeRules.push({
          type: this.ruleType,
          rule: new this.rules[this.ruleType](this.data)
        });
        this.ruleType = '';
        this.data = {};
        this.validate();
      },
      removeRule(index) {
        this.activeRules.splice(index, 1);
        this.validate();
      },
      validate() {
        this.errors = [];

        for (let i = 0; i < this.activeRules.length; i++) {
          let rule = this.activeRules[i].rule;

          let error = rule.validate(this.text);
          if (error) {
            this.errors.push(error);
          }
        }

        this.$emit('throw-errors', {errors: this.errors});
      },
      inRulesArray(ruleName) {
        return this.activeRules.findIndex(rule => rule.type === ruleName) != -1;
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