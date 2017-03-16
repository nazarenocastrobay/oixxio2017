(function () {
    'use strict';
    angular.module('app.oixxio')
    .config(['$routeProvider',function($routeProvider) {
		$routeProvider
			.when('/404',{ templateUrl: 'app/views/404.html', controller: 'notFoundCtrl'})
			.when('/',{ templateUrl: 'app/views/landing.html', controller: 'landingCtrl as landing'})
			.otherwise({ redirectTo: '/404'});
	}]);
})();