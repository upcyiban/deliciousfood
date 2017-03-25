var myApp = angular.module('myApp',[]);
myApp.config(function ($httpProvider) {
	$httpProvider.defaults.withCredentials = true;
});
myApp.controller('menu',function  ($scope, $http) {
	$scope.search = '';
	$scope.order = 'name';
	$scope.desc = 0;
	$scope.foods = [{
		name : '红烧czf',
		region : '黄岛',
		kind : '臭',
		price : 10,
		restaurant : '张氏',
		num : '5.0',
		path : './images/hongshao.jpg',
		introduce :'难吃'
	},{
		name : '红烧czf',
		region : '黄岛',
		kind : '臭',
		price : 11,
		restaurant : '张氏',
		num : '5.0',
		path : './images/hongshao.jpg',
		introduce :'难吃'
	},{
		name : '红烧czf',
		region : '黄岛',
		kind : '臭',
		price : 9,
		restaurant : '张氏',
		num : '5.0',
		path : './images/hongshao.jpg',
		introduce :'难吃'
	}];
	$scope.hello ='helloword';
});

