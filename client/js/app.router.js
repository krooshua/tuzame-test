(function () {
	'use strict';

	/* @ngInject */
	angular.module('app').config(router);

	function router($stateProvider, $urlRouterProvider) {
        $stateProvider
			.state('/', {
				url: '',
				templateUrl: 'views/news.html',
				controller: 'NewsController'
			});

		$urlRouterProvider.otherwise('/');
	}

})();