function verification($http,$rootScope) {
  var APPID = "14a69e60117cbef1";
  var CALLBACK = "http://f.yiban.cn/iapp96401";
  var url2 = window.location.href;
  window.location.href = "https://openapi.yiban.cn/oauth/authorize?client_id=" + APPID + "&redirect_uri=" + CALLBACK + "&display=html";
  if (url2.indexOf("verify_request") != -1) {
    var vq = window.location.href.split('=')[1].split('&')[0];
    console.log(vq);
    if (vq != '') {
      $http.get($rootScope.url + '/material/auth?vq=' + vq);
    }
  }
}
var myApp = angular.module('myApp',[]);
myApp.config(function ($httpProvider) {
	$httpProvider.defaults.withCredentials = true;
});
myApp.run(function ($rootScope, $http){
	$rootScope.url = 'http://localhost:8086/';
	$rootScope.foodid = '';
	//verification($http,$rootScope);
});
myApp.controller('menu',function  ($scope, $http, $rootScope) {
	$http.get($rootScope.url +'choose/findall').then(function (response){
		$scope.foods = response.data;
	});
	$scope.search = '';
	$scope.order = 'name';
	$scope.desc = 0;
	$scope.delete = function (attr){
		console.log(attr.food.id);
		$http.get($rootScope.url + 'evaluate/delete?id='+attr.food.id).then(function (response){
			if(response.data ==1){
				alert("删除成功");
			}else{
				alert("未知错误")
			}
		})
	}
});

myApp.controller('disscuss', function ($scope, $rootScope, $location, $http){
	var id = $location.url().split('=')[1];
	$http.get($rootScope.url +'choose/findall').then(function (response){
		$scope.food = response.data[id];
	});
	$scope.order = 'time';
	$scope.text = "";
	$scope.push = function(){
		var push = {
			id : '123',
			img : 'images/face.jpg',
			text : this.text,
			time : timer
		}
		$scope.sayers.push(push);
		$http.get($rootScope.url + 'deliciousfood/review/doreview?dishesid='+id +'&&detials=' + $scope.text).then(function (response){
			if(response.data ==1){
				alert("提交成功");
			}else{
				alert("未知错误")
			}
		});
	};
	$http.get($rootScope.url +'deliciousfood/review/getreview?id='+id).then(function (response){
		$scope.sayers = response.data;
		console.log(response.data[id]);
	});
});

myApp.controller('admin', function ($scope, $http, $rootScope){
	$scope.add = function(){
		$http.get($rootScope.url +'evaluate/create?name='+
			$scope.name+'&&region='+$scope.region+'&&kind='+$scope.kind+'&&restaurant='+
			$scope.restaurant+'&&price='+$scope.price+'&&introduce='+$scope.introduce).then(function (response){
				if(response.data ==1){
					alert("提交成功");
				}else{
					alert("未知错误")
				}
			});
	}
	
})