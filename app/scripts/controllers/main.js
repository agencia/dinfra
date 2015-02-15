'use strict';

/**
 * @ngdoc function
 * @name dinfraApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dinfraApp
 */
angular.module('dinfraApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
