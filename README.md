ionic-stripe-starter
=====
This can ONLY be run on device and requires the following plugin and library 
* [Telerik-Verified-Plugins/Stripe: ](https://github.com/Telerik-Verified-Plugins/Stripe)Stripe is a payment infrastructure for the internet. Stripe Cordova SDK is built around the well organized REST API. it exposes a global window.stripe object that defines various operation to initialze and transfer payments
* [angular-credit-cards: ](https://www.npmjs.org/package/creditcards)A set of Angular directives for constructing credit card payment forms

## Installation: Telerik-Verified-Plugins/Stripe
```bash
# using ionic, use your own api key from stripe console
$ ionic plugin add https://github.com/Telerik-Verified-Plugins/Stripe --variable API_KEY=sk_test_xxxxxxxxxxxxxxx
```

## Installation: angular-credit-cards
```bash
# using bower
$ bower install angular-credit-cards
```
When completed, be sure to save the state
```bash
$ ionic save state
```
![Image](https://github.com/aaronksaunders/ionic-stripe-starter/blob/master/screenshots/Screenshot%202015-12-03%2000.01.30.png)
