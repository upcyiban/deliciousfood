$("#star").rating();
$('button').on('click', function (){
	console.log($('#star').val());
});

var disscussApp = angular.module('disscussApp', []);

disscussApp.controller('disscuss', function($scope){
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