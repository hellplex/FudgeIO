(function () {
  'use strict';

  angular
    .module('mean.fudgeA')
    .factory('FudgeA', FudgeA);

  FudgeA.$inject = [];

  function FudgeA() {
    return {
      name: 'fudgeA'
    };
  }
})();
