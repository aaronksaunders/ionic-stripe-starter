// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'credit-cards'])
  .controller('MainCtrl', function($scope) {
    $scope.cardType = {};
    $scope.card = {};

    $scope.makeStripePayment = makeStripePayment;


    /**
     */
    function makeStripePayment(_cardInformation) {

      if (!window.stripe) {
        alert("stripe plugin not installed");
        return;
      }

      if (!_cardInformation) {
        alert("Invalid Card Data");
        return;
      }
      stripe.charges.create({
          // amount is in cents so * 100
          amount: _cardInformation.amount * 100,
          currency: 'usd',
          card: {
            "number": _cardInformation.number,
            "exp_month": _cardInformation.exp_month,
            "exp_year": _cardInformation.exp_year,
            "cvc": '123',
            "name": "Aaron Saunders"
          },
          description: "Stripe Test Charge"
        },
        function(response) {
          console.log(JSON.stringify(response, null, 2));
          alert(JSON.stringify(response, null, 2));
        },
        function(response) {
          alert(JSON.stringify(response))
        } // error handler
      );
    }
  })
  .run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      }
      if (window.StatusBar) {
        StatusBar.styleDefault();
      }


      console.log("window.stripe ", window.stripe);
      //alert(window.stripe);

      //createCharge()
    });

    function testStripe() {
      // https://stripe.com/docs/api#list_customers
      stripe.customers.list({
          limit: "2" // both value as string and number are supported
        },
        function(response) {
          console.log(JSON.stringify(response, null, 2));

          createCustomer();
        },
        function(response) {
          alert(JSON.stringify(response))
        } // error handler
      );
    }


    function createCustomer() {
      // creating a customer: https://stripe.com/docs/api#create_customer
      stripe.customers.create({
          description: "Aaron Saunders",
          email: "aaron@clearlyinnovative.com"
        },
        function(response) {
          alert("Customer created:\n\n" + JSON.stringify(response))
          console.log(JSON.stringify(response, null, 2))
        },
        function(response) {
          alert(JSON.stringify(response))
        } // error handler
      );
    }
  });
