function verification($rootScope, $http) {
	var APPID = "14a69e60117cbef1";
	var CALLBACK = "http://f.yiban.cn/iapp96853";
	var url2 = window.location.href;
	if (url2.indexOf("verify_request") != -1) {
	    var vq = window.location.href.split('=')[1].split('&')[0];
	    console.log("vq:"+vq);
	    if (vq != '') {
	    	$http.get($rootScope.url+'food/auth?vq=' + vq).then(function (response){
            	console.log(response.data);
            	if(response.data == 1){
               		var index = url2.indexOf('?');
                	var redrect = url2.substring(0,index - 1);
                	window.location.href = redrect;
            	}
          	});
	    }
	}
    $http.get($rootScope.url+'food/isauth').then(function (response) {
    	//console.log(response.data);
        if (response.data == 0) {
            window.location.href = "https://openapi.yiban.cn/oauth/authorize?client_id=" + APPID+ "&redirect_uri=" + CALLBACK + "&display=html";
       	}
    });
}
var myApp = angular.module('myApp',[]);
myApp.config(function ($httpProvider) {
	$httpProvider.defaults.withCredentials = true;
});
myApp.run(function ($rootScope, $http){
	$rootScope.url = 'http://yb.upc.edu.cn:8087/';
	$rootScope.foodid = '';
	verification($rootScope, $http);	
});
myApp.controller('menu',function  ($scope, $http, $rootScope) {
	$http.get($rootScope.url +'choose/findall').then(function (response){
		//console.log(response.data);
		$scope.foods = response.data;
		for(let i=0; i < $scope.foods.length;i++){
			$scope.foods[i].price = $scope.foods[i].price*1;
		}
	});

	$scope.search = '';
	$scope.order = 'name';
	$scope.desc = 0;
	$scope.delete = function (attr){
		console.log(attr.food.id);
		$http.get($rootScope.url + 'evaluate/delete?id='+attr.food.id).then(function (response){
			if(response.data.code ==1){
				 alert("删除成功");
			}else{
				if(response.data.code == -1){
					alert("你不是管理员");
				}else{
					alert("未知错误");
				}
				
			}
		})
	}
});

myApp.controller('disscuss', function ($scope, $rootScope, $location, $http){
	$http.get($rootScope.url + 'deliciousfood/review/getuser').then(function (response){
		console.log(response.data.info);
		$scope.yb_username = response.data.info.yb_username;
		$scope.yb_userhead = response.data.info.yb_userhead;
	});
	
	var id = $location.url().split('=')[1];
	console.log(id);
	$http.get($rootScope.url +'choose/findall').then(function (response){
		$scope.food = response.data[id];
	});
	$scope.sayers = [];
	$scope.order = 'time';
	$scope.text = "";
	var date = new Date();
	var timer = date.getMonth()+1+"月"+date.getDate()+"日 "+date.getHours()+"时"+date.getMinutes()+"分";
	$http.get($rootScope.url +'deliciousfood/review/getreview?id='+id).then(function (response){
		$scope.sayers = response.data;
		console.log('sayers:');
		console.log(response.data);
	});
	$scope.push = function(){
		if($scope.text.length==0){
			alert("评论不能为空");
		}else{
			var push = {
				username : $scope.yb_username,
				ybphoto : $scope.yb_userhead,
				detail : this.text,
				time : timer
			}
			var star = $('#star').val();
			$scope.sayers.push(push);
			if(star == 0){
				star = 5;
			}
			$http.get($rootScope.url + 'deliciousfood/review/doreview?dishesid='+id +
				'&&detials='+$scope.text+'&&num='+star+'&&ybhead='+$scope.yb_userhead).then(function (response){
				console.log(response.data.code);
				if(response.data.code ==1){
					alert("提交成功,您的评分为"+star+"星");
				}else{
					alert("未知错误")
				}
			});
		}	
	};
	
});

myApp.controller('admin', function ($scope, $http, $rootScope){});