(function () {
  'use strict';

  angular
    .module('mean.fudgeA')
    .config(fudgeA);

  fudgeA.$inject = ['$viewPathProvider', '$stateProvider'];

  function fudgeA($viewPathProvider, $stateProvider) {

    $viewPathProvider.override('system/views/index.html', 'fudgeA/views/index.html');

    $stateProvider.state('fudgeA example page', {
      url: '/fudgeA/example',
      templateUrl: 'fudgeA/views/index.html'
    });
  }

})();
