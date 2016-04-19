'use strict';

/**
 * @ngdoc function
 * @name stepsModalApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the stepsModalApp
 */
angular.module('stepsModalApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma',
        'SitePoint'
    ];
    var tipMultipliers = [];
    for (var i = 0; i <= 20; i++) {
        tipMultipliers[i] = function(x, index) { return Math.round(x * (1 + (index/100))); }
    }
    
    for (var j = 0; j < tipMultipliers.length; j++) {
        console.log(tipMultipliers[j]);
    }
    
    var billAmount = 100;
    console.log("Bill amount $" + billAmount);
    console.log("with 10% tip $" + tipMultipliers[10](billAmount, 10));
    console.log("with 15% tip $" + tipMultipliers[15](billAmount, 15));
    console.log("with 20% tip $" + tipMultipliers[20](billAmount, 20));
  });
