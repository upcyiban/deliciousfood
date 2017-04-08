var myApp = angular.module('myApp',[]);
myApp.config(function ($httpProvider) {
	$httpProvider.defaults.withCredentials = true;
});
myApp.run(function ($rootScope){
	$rootScope.url = 'http://localhost:8086/';
	$rootScope.foodid = '';
});
myApp.controller('menu',function  ($scope, $http, $rootScope) {
	$http.get($rootScope.url +'choose/findall').then(function (response){
		console.log(response.data);
		$scope.foods = response.data;
	});
	$scope.search = '';
	$scope.order = 'name';
	$scope.desc = 0;
});

myApp.controller('disscuss', function ($scope, $rootScope, $location){
	console.log($location.url());
	$scope.order = 'time';
	$scope.text = "";
	$scope.push = function(){
		var date = new Date();
		var timer = date.getMonth()+1+"月"+date.getDate()+"日 "+date.getHours()+"时"+date.getMinutes()+"分";
		console.log(timer);
		var push = {
			id : '123',
			img : 'images/face.jpg',
			text : this.text,
			time : timer
		}
		$scope.sayers.push(push);
	};
	// $http.get($rootScope.url + $location.url()).then(function (response){
	// 	$scope.sayers = response.data;
	// });
	$scope.sayers = [{
		id : '123' ,
		img : 'images/face.jpg' ,
		text : "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
		time : "timer"
	},
	{
		id : '123' ,
		img : 'images/face.jpg' ,
		text : "哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈",
		time : "timer"
	}];
});

