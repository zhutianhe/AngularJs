/**
 * 
 * @authors zhutianhe 
 * @date    2016-06-15
 * @email   zhutianhe136@163.com
 */
var userInfoModule = angular.module('UserInfoModule', []);
userInfoModule.controller('UserInfoCtrl', ['$scope', 
	function($scope){
		$scope.userInfo = {
			email: "zhutianhe136@163.com",
			password: "1234567890",
			autoLogin: true
		};

		$scope.getFormData = function(){
			console.log($scope.userInfo);
		};

		$scope.setFormData = function(){
			$scope.userInfo = {
				email: "247818685@qq.com",
				password: "24781685",
				autoLogin: false
			};
		};

		$scope.resetForm = function(){
			$scope.userInfo = {
				email: "zhutianhe136@163.com",
				password: "1234567890",
				autoLogin: true
			};
		};
	}
]);