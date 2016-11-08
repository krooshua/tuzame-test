// Copyright IBM Corp. 2015. All Rights Reserved.
// Node module: loopback-example-angular
// This file is licensed under the MIT License.
// License text available at https://opensource.org/licenses/MIT

angular.module('app').controller('NewsController', ['$scope', '$state', 'News', function ($scope, $state, News) {
	$scope.news = [];
	$scope.currentIndex = 0;
	function init() {
		News.find().$promise.then(function (data) {
			$scope.news = data;
		});
	};
	init();

	$scope.prevNews = function () {
		$scope.currentIndex--;
	}

	$scope.nextNews = function () {
		$scope.currentIndex++;
	}

}]);