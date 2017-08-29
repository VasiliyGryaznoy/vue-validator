<template inline-template>
  <div class="col-md-6 validator-wrapper">
    <form action="" @submit.prevent="addRule">
      <div class="form-group">
        <select v-model="ruleType" class="form-control" @change="clearData">
          <option value="">--Select rule--</option>
          <template v-for="(rule, key, index) in rules">
            <template v-if="rule.select.removeWhenSelect">
              <option :value="key" v-if="!inRulesArray(key)">{{rule.select.label}}</option>
            </template>
            <option :value="key" v-else>{{rule.select.label}}</option>
          </template>
        </select>
      </div>
      <div class="form-group">
        <button class="btn btn-primary" :disabled="ruleType == ''">Add rule</button>
      </div>

      <!--Rules inputs-->
      <template v-for="(rule, key, index) in rules">
        <template v-for="field in rule.fields" v-if="key == ruleType">
          <div class="form-group">
            <label>{{field.label}}</label>
            <input type="text" class="form-control" v-model="data[field.name]" :required="field.required">
          </div>
        </template>
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
  export default {
    props: ['text', 'rules'],
    data() {
      return {
        ruleType: '',
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
          rule: new this.rules[this.ruleType].rule(this.data)
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