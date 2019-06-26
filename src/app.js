import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue({
    el: "#app",
    data: {
      currencies: [],
      conversionCurrency: "",
      conversionRate: 0,
      euroAmt: 0,
      convAmt: 0

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
      // Not yet working
      assignConversionRate: function() {
        console.log(this.currencies.rates[this.conversionCurrency]);
        // return this.conversionRate = this.currencies.rates[this.conversionCurrency];
      }
    },
    compute: {
      // Not yet working
      convertToEuros: function() {
        return this.euroAmt = this.convAmt / this.conversionRate;
      },
      // Not yet working
      convertFromEuros: function() {
        return this.convAmt = this.euroAmt * this.conversionRate;
      }
    }
  })
})
