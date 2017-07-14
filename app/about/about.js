var aboutWebsite = angular.module('aboutWebsite', ['ui.router']);
(function () {
	config.$inject = ['$stateProvider'];
	function config($stateProvider) {
		$stateProvider
			.state('about', { url: "/about", templateUrl: "app/about/about.html" });
	}
	aboutWebsite.config(config);
} ());