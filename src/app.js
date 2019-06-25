import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      conversionCurrency: "",
      conversionRate: 0.00

    },
    mounted() {
      this.getCurrencies()
    },
    methods: {
      getCurrencies: function() {
        fetch("https://api.exchangeratesapi.io/latest")
          .then(result => result.json())
          .then(currencies => this.currencies = currencies)
      },
      assignConversionRate: function() {
        this.conversionRate = this.currencies.rates[this.conversionCurrency];
      }
    },
    compute: {
      convertFromEuros: function() {

      },
      convertToEuros: function() {

      }
    }
  })
})
