'use strict';

/**
 * @ngdoc function
 * @name deliciousfoodApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the deliciousfoodApp
 */
angular.module('deliciousfoodApp')
  .controller('MainCtrl', function ($scope) {
    $scope.col = 'name';
    $scope.desc = 0;
    $scope.foods = [
      {
        name : "肉",
        restaurant:'yulan-6',
        kind:'suan',
        price:'12',
        path:'../images/test.png',
        num:5,    //星级
        region:'lu',
        time:'10'  //评价次数
      },
      {
        name : "肉",
        restaurant:'lulan-6',
        kind:'sun',
        price:'11',
        path:'',
        num:4,
        region:'lu',
        time:'15'  //评价次数
      },
      {
        name : "肉",
        restaurant:'yulan-6',
        kind:'suan',
        price:'112',
        path:'',
        num:9,
        region:'lgu',
        time:'100'  //评价次数
      }
    ];
  });
