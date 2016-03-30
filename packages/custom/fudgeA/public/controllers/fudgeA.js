(function () {
  'use strict';

  /* jshint -W098 */
  angular
    .module('mean.fudgeA')
    .controller('FudgeAController', FudgeAController);

  FudgeAController.$inject = ['$scope', 'Global', 'FudgeA'];

  function FudgeAController($scope, Global, FudgeA) {
    $scope.global = Global;
    $scope.package = {
      name: 'fudgeA'
    };
  }
})();